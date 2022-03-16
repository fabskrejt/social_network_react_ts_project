import {default as axios} from "axios";

const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            'API-KEY': 'e6289745-5df0-44ae-80cf-d041ac1eae5c',
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
        return instance.get<GetUserProfileType>(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put(`/profile/status/`, {status})
    },
    sendPhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('/auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout() {
        return instance.delete('/auth/login')
            .then(response => response.data)
    },
    getCaptcha() {
        return instance.get<{url:string}>(`/security/get-captcha-url`)
            .then(response => response.data)
    },
}


//types for request
export type GetUserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        large: string
        small: string
    }
    userId: number | null
}