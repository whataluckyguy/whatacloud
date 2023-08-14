const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost/core/loginguest",
    headers: {
      Cookie:
        "X-XSRF-TOKEN=hcgkfwe0urtsdvymfcxc; X-XSRF-TOKEN-user=z0leivzgxfzbcnorxuip; tonido-login-hash=9d13ff908d7a857b8227d3f70e2f4044834c0a97; tonido-login-seed=e2223bab-3928-406a-b6cd-8b5fc9bb8430; tonido-login-user=test; tonido-share-login-hash=; tonido-share-login-seed=; tonido-share-login-user=",
    },
    params: {
      userid: req.query.userid,
      password: req.query.password,
    },
  };

  axios
    .request(config)
    .then((response) => {
      res.send(response.data);
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
