import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./Files.css";
import axios from "axios";

const filetypes = ["JPG", "PNG", "GIF"];

function Files({ setUser }) {
  const [file, setFile] = useState([]);

  const handleFile = (files) => {
    setFile([...file, URL.createObjectURL(files)]);
  };

  const uploadFile = () => {
    axios
      .post("http://localhost:5000/upload")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="welcome">
        <h1>Welcome to my cloud storage</h1>
        <button
          className="signout"
          onClick={() => {
            setUser(false);
          }}
        >
          Sign Out
        </button>
      </div>
      <button onClick={uploadFile}>Upload file</button>
      <FileUploader
        types={filetypes}
        handleChange={handleFile}
        className="dndfile"
      />
      <hr />
      {file.map((item, index) => (
        <img key={index} src={item} height={200} className="imageElement" />
      ))}
    </div>
  );
}

export default Files;
