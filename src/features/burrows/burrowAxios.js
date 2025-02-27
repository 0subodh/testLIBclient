import { apiProcesser } from "../../helpers/axiosHelper";

const burrowEP = "https://testlibapi.onrender.com" + "/api/v1/burrows";

export const postNewBurrow = async (obj) => {
  const axiosObj = {
    method: "post",
    url: burrowEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const fetchBurrows = async () => {
  const axiosObj = {
    method: "get",
    url: burrowEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
export const fetchSingleBurrow = async (_id) => {
  const axiosObj = {
    method: "get",
    url: burrowEP + "/" + _id,
  };
  return apiProcesser(axiosObj);
};
export const fetchUserBurrows = async (userId) => {
  const axiosObj = {
    method: "get",
    url: burrowEP + "/" + userId,
  };
  return apiProcesser(axiosObj);
};

export const returnBook = async (obj) => {
  const axiosObj = {
    method: "put",
    url: burrowEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
