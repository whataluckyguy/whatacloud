import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./Files.css";

const filetypes = ["JPG", "PNG", "GIF"];

function Files() {
  const [file, setFile] = useState([]);

  const handleFile = (files) => {
    setFile([...file, URL.createObjectURL(files)]);
  };

  return (
    <div>
      <h1>Welcome to my cloud storage</h1>
      <FileUploader
        types={filetypes}
        handleChange={handleFile}
        className="dndfile"
      />
      <hr />
      {file.map((item) => (
        <img src={item} height={200} className="imageElement" />
      ))}
    </div>
  );
}

export default Files;
