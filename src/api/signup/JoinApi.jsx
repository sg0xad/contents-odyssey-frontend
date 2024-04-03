import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const join 
    = (user) => apiClient.post('/join', user)

