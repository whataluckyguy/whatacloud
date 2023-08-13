import { useState } from "react";
import "./App.css";
import Files from "./components/Files";
import Authentication from "./components/Authentication";

function App() {
  const [user, setUser] = useState(false);
  return <>{user ? <Files /> : <Authentication />}</>;
}

export default App;
