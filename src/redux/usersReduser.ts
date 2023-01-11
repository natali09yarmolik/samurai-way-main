import {UsersType} from "../components/Users/Users";


type LocationType={
    city:string
    country:string
}
/*export type UserType={
    id: string
    photo: string
    followed: boolean
    fullName:string
    status: string
    location: LocationType
}*/
export type InitialStateType={
    users: UsersType[]
}
const initialState={
    users: []
}
export const usersReducer= (state: InitialStateType=initialState, action: ActionType):InitialStateType=>{

    switch(action.type){
        case "FOLLOW":
        {
            return {...state, users: state.users.map(el=>
                    el.id===action.userId ?{...el, followed:true} : el)}
        }
        case "UNFOLLOW":{
            return {...state, users: state.users.map(el=>
                    el.id===action.userId?{...el, followed:false} : el)}
        }
        case "SET-USERS":{
            debugger
            console.log(state, action.users)
            return {...state, users: [...state.users, ...action.users]}
        }
        default: return state
    }
}
export type ActionType=FollowACType |
                       UnFollowACType |
                       SetUsersACType
type FollowACType=ReturnType<typeof followAC>
export const followAC=(userId:number)=>{
    return{
        type:'FOLLOW',
        userId
    }as const
}
type UnFollowACType=ReturnType<typeof unFollowAC>
export const unFollowAC=(userId:number)=>{
    return{
        type:'UNFOLLOW',
        userId
    }as const
}
type SetUsersACType=ReturnType<typeof setUsersAC>
export const setUsersAC=(users:UsersType[])=>{
    return{
        type:'SET-USERS',
        users
    }as const
}