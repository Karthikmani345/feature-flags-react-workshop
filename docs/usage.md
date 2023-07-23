# Documentation for using

This document outlines how to use the custom feature flags hook in a React application. This hook provides an abstraction of the underlying LaunchDarkly library, making it easier to maintain and use in your application.

The example provided demonstrates the usage of `FeatureFlagProvider`, `useFeatureFlagContext` and `useFeatureFlag` hooks in a Create React App (CRA) project.

## FeatureFlagProvider

`FeatureFlagProvider` is a Higher Order Component (HOC) that wraps your application and provides a context for the feature flags. You pass your LaunchDarkly client id and the initial state of flags as arguments. In the provided example, the client id is fetched from an environment variable and the initial state is set to false.

```jsx
export default FeatureFlagProvider(
  process.env.REACT_APP_FEATURE_FLAG_CLIENT_ID,
  false
)(App);
```

## useFeatureFlagContext

`useFeatureFlagContext` is a custom hook that returns two values. The first value indicates whether the LaunchDarkly client has been initialized, while the second is a function that you can use to set the context (user session information) for LaunchDarkly.

```jsx
const [isClientInitialized, setContext] = useFeatureFlagContext();
```

In the example, `setContext` is called within a `useEffect` hook, which is invoked when the component mounts. The context includes user information like ROLE, EMAIL_ID, USER_NAME, USER_ID, and ORGANIZATION_NAME.

```jsx
useEffect(() => {
  setContext({
    kind: "session",
    key: "session-detail",
    ROLE: "Admin",
    EMAIL_ID: "kartik@acme.io",
    USER_NAME: "Kartik Mani",
    USER_ID: "ce1a4f61-8643-495a-8d06-7f835a7f9ab1",
    ORGANIZATION_NAME: "acme-developer-testing",
  }).catch((err) => console.error(err));
}, [isClientInitialized]);
```

## useFeatureFlag

`useFeatureFlag` is another custom hook that takes two arguments: the feature flag key and a default value. It returns a boolean indicating whether the feature flag is enabled.

```jsx
const enable_integration = useFeatureFlag("enable_integration", true);
const enable_rbac = useFeatureFlag("enable_rbac", false);
```

In the example, two feature flags are created: `enable_integration` and `enable_rbac`, with default values of `true` and `false` respectively. The current values of these flags are then used to conditionally render elements in the component's JSX.

```jsx
{
  enable_integration ? <span>Integration</span> : "";
}
{
  enable_rbac ? <span>Role Based Access Control</span> : "";
}
```

## Conclusion

By using these hooks and the `FeatureFlagProvider`, you can easily control the visibility of features in your React application through feature flags. This allows for safer deployments, easier testing, and the ability to quickly roll back problematic features.
