import axios from "axios";


const sid = sessionStorage.getItem("sid");
// Creates a base instance for all axios based request
// So no need the call the full url when using this
// Just call axios.get("/jobs")
// We could set other properties here like headers, etc

const instance = axios.create({
  baseURL: "https://smart-cbt-backend.herokuapp.com/",
  headers: {
    Sid: sid
  }
});

export default instance;