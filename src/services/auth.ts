import api from '../utils/api';

export const authService = {
    async signup(body: { firstname: string, lastname: string, email: string, password: string, passwordConfirm: string, phone: string }) {
        try {
            const response = await api.post('/users/signup', body)
            return response.data
        } catch (e: any) {
            throw e.response?.data
        }
    },

    async login(body: { email: string, password: string }) {
        try {
            const response = await api.post('/users/login', body)
            return response.data
        } catch (e: any) {
            throw e.response?.data
        }
    },

    async forgetPassword(email: string) {
        try {
            const response = await api.post('/users/forgotPassword', { email })
            return response.data
        } catch (e: any) {
            throw e.response?.data
        }
    },

    async verifyResetToken(token: string) {
        try {
            const response = await api.get(`users/verifyResetToken/${token}`)
            return response.data
        } catch (e: any) {
            throw e.response?.data
        }
    },

    async resetPassword(token: string, body: { password: string, passwordConfirm: string }) {
        try {
            const response = await api.patch(`users/reset-Password/${token}`, body)
            return response.data
        } catch (e: any) {
            throw e.response?.data
        }
    }
}