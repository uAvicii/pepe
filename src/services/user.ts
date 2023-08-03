import request from '@/utils/request'

// 登录 API
export const loginAPI = (mobile: string, password: string) => {
    return request({
        url: '/login/password',
        method: 'post',
        data: { mobile, password }
    })
}

// 发送验证码 API
export const sendCodeAPI = (mobile: string, type = "login") => {
    return request({
        url: "/code",
        params: { mobile, type },
    });
};

// 验证码登陆 API
export const loginByCodeAPI = (mobile: string, code: string) => {
    return request({
        url: "/login",
        method: "post",
        data: { mobile, code },
    });
};

// 获取个人信息
export const getUserInfoAPI = () => {
    return request({
        url: "/patient/myUser",
    });
};

// 获取killer列表
export const getPatientListAPI = () => {
    return request({ url: "/patient/mylist" });
};

// 添加killer
export const addPatientAPI = (patient: AddPatient) => {
    return request({ url: "/patient/add", method: "POST", data: patient });
};

// 编辑killer
export const editPatientAPI = (patient: IAddPatient) => {
    return request({ url: "/patient/update", method: "PUT", data: patient });
};

//删除killer
export const delPatientAPI = (id: string) => {
    return request({ url: `/patient/del/${id}`, method: "DELETE" });
};