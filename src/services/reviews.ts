import api from '../utils/api';

export const massegService = {
    async getmasseg() {
        try {
            const response = await api.get('/reviews');
            return response.data;
        } catch (e: any) {
            throw e.response?.data;
        }
    },
};
