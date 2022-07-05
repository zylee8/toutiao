import request from "@/utils/request";

export const userlog = (data) => {
  return request({
    method: "POST",
    url: "/v1_0/authorizations",
    data,
  });
};

export const getyzm = (mobile) => {
  return request({
    url: `/v1_0/sms/codes/${mobile}`,
  });
};
