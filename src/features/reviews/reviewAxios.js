import { apiProcesser } from "../../helpers/axiosHelper";

const reviewEP = "https://testlibapi.onrender.com" + "/api/v1/reviews";

export const postNewReview = async (obj) => {
  const axiosObj = {
    method: "post",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const updateReview = async (obj) => {
  const axiosObj = {
    method: "patch",
    url: reviewEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const fetchReviews = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? reviewEP + "/all" : reviewEP,
    isPrivate,
  };
  return apiProcesser(axiosObj);
};
export const deleteReview = async ({ _id }) => {
  const axiosObj = {
    method: "delete",
    url: `${reviewEP}/${_id}`,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
