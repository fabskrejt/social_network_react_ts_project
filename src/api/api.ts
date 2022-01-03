import {default as axios} from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            'API-KEY': '3938ec03-652e-45e2-8e89-4b9560fc50c6',
        }
    }
)

export const usersAPI = {
    getUser(pageSize: number, pageNumber: number) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`,)
            .then(response => response.data)
    },
    unfollowUser(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => response.data)
    }
}

/*export const getUser = (pageSize:number, pageNumber:number)=> {
   return instance.get(`users?page=${pageNumber}&count=${pageSize}`, )
}*/
