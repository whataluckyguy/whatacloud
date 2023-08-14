import { useEffect, useState } from "react";
import "./App.css";
import Files from "./components/Files";
import Authentication from "./components/Authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    // toastify
    if (user) {
      toast.success("Authentication successful");
    }
    // persisting user
    const loggedinUser = localStorage.getItem("user");
    if (loggedinUser) {
      setUser(true);
    }
  }, [user]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {user ? (
        <Files setUser={setUser} />
      ) : (
        <Authentication setUser={setUser} />
      )}
    </>
  );
}

export default App;
