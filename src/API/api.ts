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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    deleteFollow(id:number){
       return instance.delete(`follow/${id}`)

},
    postFollow(id:number){
        return  instance.post(`follow/${id}`)
},
    getProfile(userID:string){
        console.warn('Old method')
        return ProfileAPI.getProfile(userID)
    },

    }
export const ProfileAPI={
    getProfile(userID:string){
        return instance.get(`profile/`+ +userID)
            .then(response=>{ return response.data})
    },
    getStatus(userID:string){
        console.log(userID)
        return instance.get(`profile/status/`+ +userID)
    },
    upDateStatus(status:string){
        return instance.put(`profile/status/`, {status:status})
    }
}

    export const MyselfAPI={
        getHeader(){
            return instance.get(`auth/me`).then(response=>{return response.data})
        }
    }