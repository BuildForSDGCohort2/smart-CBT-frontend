import axios from "axios";

// Creates a base instance for all axios based request
// So no need the call the full url when using this
// Just call axios.get("/jobs")
// We could set other properties here like headers, etc

const instance = axios.create({
  baseURL: "https://smart-cbt-backend.herokuapp.com/",
  headers:{
    Sid:"c0062cb39dadb330f5a5cabdf4491dd6174f4e327fd"
  }
});

export default instance;