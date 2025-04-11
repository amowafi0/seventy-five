import api from '../utils/api';
export const updateService = {
    async updatename(body: { firstname: string; lastname: string }) {
        try {
            const response = await api.post('/users/updateMe', body);
            return response.data;
        } catch (e: any) {
            throw e.response?.data;
        }
    },
    async updatepassword(body: { password: string; passwordConfirm: string }) {
        try {
            const response = await api.post('/users/updateMe', body);
            return response.data;
        } catch (e: any) {
            throw e.response?.data;
        }
    },
    async updatephone(body: { phone: string }) {
        try {
            const response = await api.post('/users/updateMe', body);
            return response.data;
        } catch (e: any) {
            throw e.response?.data;
        }
    },
};
