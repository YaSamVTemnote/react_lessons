import api from '../../../api'
export const getUserList = () => api.get('users').then(resp => resp.data)

export const  getUserDetails = (id) => api.get(`users/${id}`).then(resp => resp.data)
