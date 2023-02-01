import axios from "axios";

const instance=axios.create(
    {
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "API-KEY": "58405d8a-0757-4cae-8a64-01c1b1e3c28e"
        }
    }
)

export const UsersApi={
    getUsers(currentPage:number, pageSize:number){
        instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response=>response.data)
    },
    deleteFollow(id:number){
        instance.delete(`follow/${id}`).then(response=>{return response.data})
},
    postFollow(id:number){
        instance.delete(`follow/${id}`).then(response=>{return response.data})
}
}