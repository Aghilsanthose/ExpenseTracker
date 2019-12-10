import axios from "axios";

const instance = axios.create({
  baseURL: "https://expensetracker-acc96.firebaseio.com/"
});

instance.interceptors.request.use(
  requestConfig => {
    // console.log("RequestConfig", requestConfig);
    return requestConfig;
  },
  error => {
    // console.log("Resquest", error);
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  responseConfig => {
    // console.log("ResponseConfig", responseConfig);
    return responseConfig;
  },

  error => {
    // console.log("Response", error);
    Promise.reject(error);
  }
);

export default instance;
