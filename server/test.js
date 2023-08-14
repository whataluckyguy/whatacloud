const axios = require("axios");

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost/core/loginguest",
  headers: {
    Cookie:
      "X-XSRF-TOKEN=hcgkfwe0urtsdvymfcxc; X-XSRF-TOKEN-user=z0leivzgxfzbcnorxuip; tonido-login-hash=9d13ff908d7a857b8227d3f70e2f4044834c0a97; tonido-login-seed=e2223bab-3928-406a-b6cd-8b5fc9bb8430; tonido-login-user=test; tonido-share-login-hash=; tonido-share-login-seed=; tonido-share-login-user=",
  },
  params: {
    userid: "lalit",
    password: "Lalitkumar@0010",
  },
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
