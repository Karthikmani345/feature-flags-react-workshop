import {
  useFlags,
  withLDProvider,
  useLDClient,
} from "launchdarkly-react-client-sdk";
import { useMemo, useCallback } from "react";

export function useFeatureFlagContext() {
  const ldClient = useLDClient();

  const isClientInitialized = useMemo(() => {
    return typeof ldClient !== "undefined";
  }, [ldClient]);

  const setContext = useCallback(
    async (ctx) => {
      console.info("ldClient : ", ldClient);
      if (ldClient) {
        try {
          console.info("Setting Context :", ctx);
          const LDFlagSet = await ldClient.identify(ctx);
          return LDFlagSet;
        } catch (error) {
          console.error("Exception Encountered : ", error);
        }
      }
    },
    [ldClient]
  );

  return [isClientInitialized, setContext];
}

export function useFeatureFlag(flag, defaultValue = false) {
  const Allflags = useFlags();
  const { [flag]: featureFlag = defaultValue } = Allflags;

  return featureFlag;
}

export const FeatureFlagProvider =
  (clientSideID, isMockServer = false) =>
  (Component) => {
    // If the environment is non-prod we enable IsMockServer, we simply return the Component without withLDProvider
    if (isMockServer) {
      return Component;
    }

    // If it's in a production environment, we initialize with withLDProvider
    const ComponentWithLDProvider = withLDProvider({
      deferInitialization: false,
      clientSideID: clientSideID,
      reactOptions: {
        useCamelCaseFlagKeys: false,
      },
    })(Component);

    return ComponentWithLDProvider;
  };
