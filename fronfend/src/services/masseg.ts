import api from '../utils/api';

export const massegService = {
    async createmasseg(body: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
        description: string;
    }) {
        try {
            const response = await api.post('/message', body);
            return response.data;
        } catch (e: any) {
            throw e.response?.data;
        }
    },
};
