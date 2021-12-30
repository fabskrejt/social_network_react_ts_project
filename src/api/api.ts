import {default as axios} from "axios";

export const getUser = (pageSize:number)=> {
   return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}`,{
        withCredentials: true
    })
}