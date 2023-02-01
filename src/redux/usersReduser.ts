

export type UsersType={
    id: number
    name: string
    status:string
    uniqueUrlName:string
    photos: photosType
    followed: boolean

}
type photosType={
    small: string
    large: string
}

export type InitialStateType={
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
  }
const initialState={
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [0]
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

            return {...state, users: [...action.users, ...state.users]}
        }
        case "CURRENT-PAGE":{
            return {...state, currentPage: action.currentPage}
        }
        case "TOTAL-USER-COUNT":{
            return {...state, totalUsersCount: action.usersCount}
        }
        case "TOGAL-IS-FETCHING":{
            return {...state, isFetching:action.fetching}
        }
        case "TOGAL-IS-FOLLOWING-PROGRESS":{
            return {...state,
                followingInProgress:action.payload.dispatch ?
                    [...state.followingInProgress, action.payload.id]
                    : state.followingInProgress.filter(id=>id!= action.payload.id)}
        }
        default: return state
    }
}
export type ActionType=FollowACType |
                       UnFollowACType |
                       SetUsersACType |
                       setCurrentPageACType |
                       setTotalUsersCountACType |
                       setIsFetchingACType |
                       setFollowingProgressACType
type FollowACType=ReturnType<typeof follow>
export const follow=(userId:number)=>{
    return{
        type:'FOLLOW',
        userId
    }as const
}
type UnFollowACType=ReturnType<typeof unFollow>
export const unFollow=(userId:number)=>{
    return{
        type:'UNFOLLOW',
        userId
    }as const
}
type SetUsersACType=ReturnType<typeof setUsers>
export const setUsers=(users:UsersType[])=>{
    return{
        type:'SET-USERS',
        users
    }as const
}

type setCurrentPageACType=ReturnType<typeof setCurrentPage>
export const setCurrentPage=(currentPage:number)=>{
    return{
        type:'CURRENT-PAGE',
        currentPage
    }as const
}
type setTotalUsersCountACType=ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount=(usersCount:number)=>{
    return{
        type:'TOTAL-USER-COUNT',
        usersCount
    }as const
}
type setIsFetchingACType=ReturnType<typeof setIsFetching>
export const setIsFetching=(fetching:boolean)=>{
    return{
        type:'TOGAL-IS-FETCHING',
        fetching
    }as const
}
type setFollowingProgressACType=ReturnType<typeof setFollowingProgress>
export const setFollowingProgress=(id:number, dispatch:boolean)=>{
    return{
        type:'TOGAL-IS-FOLLOWING-PROGRESS',
        payload:{
            id,
          dispatch
        }
    }as const
}