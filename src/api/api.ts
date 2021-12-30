import {default as axios} from "axios";

export const getUser = (pageSize:number, pageNumber:number)=> {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,{
       withCredentials: true
   })
}
