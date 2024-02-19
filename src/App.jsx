import { useState } from "react";
import "./App.css";

import ThemeContext from "./context";
import MainPage from "./MainPage";

function App() {
  const [darkMode, setDartMode] = useState(true);

  return (
    <ThemeContext.Provider value={{ darkMode, setDartMode }}>
      <MainPage />
    </ThemeContext.Provider>
  );
}

export default App;
