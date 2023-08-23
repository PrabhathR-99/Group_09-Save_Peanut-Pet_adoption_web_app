import axiosInstance from "../../utils";

export const getAllPets = async () => {
    try {
        const res = await axiosInstance.get("/pet");
        return res.data;
    } catch (error) {
        return error;
    }
}

export const getPetById = async (id) => {
    try {
        const res = await axiosInstance.get(`/pet/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export const createPet = async (data) => {
    try {
        const res = await axiosInstance.post("/pet", data);
        return res.data;
    } catch (error) {
        return error;
    }
}