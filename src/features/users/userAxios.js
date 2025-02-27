import { apiProcesser } from "../../helpers/axiosHelper";

const serverURL = "https://testlibapi.onrender.com";
const userEP = serverURL + "/api/v1/users";

export const loginUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP + "/login",
    data: obj,
  };
  return apiProcesser(axiosObj);
};

export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  return apiProcesser(axiosObj);
};

export const fetchUserInfo = () => {
  const axiosObj = {
    method: "get",
    url: userEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
export const fetchAllUserInfo = () => {
  const axiosObj = {
    method: "get",
    url: userEP + "/students",
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
export const EditUserInfo = async (obj) => {
  const axiosObj = {
    method: "put",
    url: userEP,
    data: obj,
  };
  return apiProcesser(axiosObj);
};
