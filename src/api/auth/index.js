import axiosInstance from "../../utils";

export const login = async (data) => {
    try {
        const res = await axiosInstance.post("/auth/login", data);
        return res.data;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

export const register = async (data) => {
    try {
        const res = await axiosInstance.post("/auth/signup", data);
        return res.data;
    } catch (error) {
        return error;
    }

}