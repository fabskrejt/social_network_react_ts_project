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
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: number) {
        return  instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put(`/profile/status/`,{status})
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}
/*export const getUser = (pageSize:number, pageNumber:number)=> {
   return instance.get(`users?page=${pageNumber}&count=${pageSize}`, )
}*/
