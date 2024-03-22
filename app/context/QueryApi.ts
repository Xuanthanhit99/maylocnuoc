import axios, { AxiosResponse } from "axios";

export const getProvince = async () => {
    const response = await axios.get("https://vapi.vnappmob.com/api/province");
    return response?.data;
};

export const getProvinceDistrict = async (provinceId: string) => {
    const response = await axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`);
    return response?.data;
};

export const getProvinceDistrictWard = async (provinceWardId: string) => {
    const response = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${provinceWardId}`);
    return response?.data;
};

export const postApiCartByProduct = async (data: any) => {
    const response = await axios.post(`/api/cart`,{data});
    return response?.data;
};

export const getApiProduct = async () => {
    const response:AxiosResponse = await axios.get("/api/product");
    return response?.data;
};