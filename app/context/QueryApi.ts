import axios from "axios";

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