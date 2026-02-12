import "./i18next";
import { changeLanguage } from "i18next";
import { version } from "../package.json";
import { useEffect, useState } from "react";
import { Float } from "@chakra-ui/react";
// Components
import Router from "./router";
import { Toaster } from "./components/ui/toaster";
import { Provider } from "./components/ui/provider";

const App = () => {
  const [isDebug] = useState<boolean>(() => localStorage.getItem("debug") === "true");

  useEffect(() => {
    const setDefault = (key: string, value: string) => {
      if (localStorage.getItem(key) === null) localStorage.setItem(key, value);
    };

    setDefault("language", "en");
    setDefault("debug", "false");

    const lng = localStorage.getItem("language") || "en";
    changeLanguage(lng);
  }, []);

  return (
    <Provider>
      <Toaster />
      <Router />
      {isDebug && (
        <Float top="20px" right="60px" zIndex={99999}>
          Version {version}
        </Float>
      )}
    </Provider>
  );
};

export default App;
