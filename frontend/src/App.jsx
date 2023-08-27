import { useEffect, useState } from "react";
import "./App.css";
import Files from "./components/Files";
import Authentication from "./components/Authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      {user ? (
        <Files setUser={setUser} />
      ) : (
        <Authentication setUser={setUser} />
      )}
    </>
  );
}

export default App;
