import type { KnowledgeParams,DoctorPage,IFollowType } from "@/types/consult";
import request from "@/utils/request";

// 推荐文章列表
export const getKnowledgePageAPI = (params: KnowledgeParams) => {
  return request({ url: "/patient/home/knowledge", params });
};

// 医生列表
export const getDoctorPageAPI = (params: DoctorPage) => {
  return request({ url: "/home/page/doc", params });
};

// 关注医生
export const followDoctorAPI = (id: string, type: IFollowType = "doc") => {
  return request({ url: "/like", method: "POST", params: { id, type } });
};