import { useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

import {
  useFeatureFlag,
  FeatureFlagProvider,
  useFeatureFlagContext,
} from "./hooks/useFeatureFlags";

function App() {
  const enable_integration = useFeatureFlag("enable_integration", true);
  const enable_rbac = useFeatureFlag("enable_rbac", false);

  // Set the active user session i.e context on the app mount.
  const [isClientInitialized, setContext] = useFeatureFlagContext();

  useEffect(() => {
    setContext({
      kind: "session",
      key: "session-detail",
      ROLE: "Admin",
      EMAIL_ID: "kartik@acme.io",
      USER_NAME: "Kartik Mani",
      USER_ID: "ce1a4f61-8643-495a-8d06-7f835a7f9ab1",
      ORGANIZATION_NAME: "acme-developer-testing",
    }).catch(err => console.error(err));
  }, [isClientInitialized]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {enable_integration ? <span>Integration</span> : ""}
        {enable_rbac ? <span>Role Based Access Control</span> : ""}
      </header>
    </div>
  );
}

export default FeatureFlagProvider(process.env.REACT_APP_FEATURE_FLAG_CLIENT_ID, false)(App);
