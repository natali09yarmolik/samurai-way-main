import {v1} from "uuid";
import {ProfileAPI, UsersApi} from "../API/api";


export type profilePageType={
    posts: Array<postDataType>
    newPostText:string
    profile: ProfileType | null
    status: string

}
export type postDataType={
    id:string,
    post:string,
    likes: number
}
export type ProfileType={
    aboutMe: string,
    contacts: contactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId:number,
    photos: photosType,

}
type contactsType={
    facebook:string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram:string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null
}
type photosType={
    small: string | undefined,
    large: string | undefined
}
const ONCLICK_ADD ='ONCLICK-ADD'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE='SET-USER-PROFILE'
const SET_STATUS='SET-STATUS'

export type dispatchProfileActionType=onClickAddActionType |
                                      upDateNewPostTextActionType|
                                      setUserProfileType |
                                      setStatusType

type onClickAddActionType= {
    type: "ONCLICK-ADD"
}
type upDateNewPostTextActionType= {
    type: "UPDATE-NEW-POST-TEXT"
    newText:string
}
type setUserProfileType=ReturnType<typeof setUserProfile>

type setStatusType=ReturnType<typeof setStatus>
const initialState: profilePageType={
    posts: [{id: v1(), post: 'Hello! How are you!', likes: 23},
        {id: v1(), post: 'Its my first post', likes: 15}],
    newPostText: 'it-camasutra.com',
    profile: null,
    status:''
}
export const profileReducer= (state: profilePageType=initialState, action: dispatchProfileActionType )=>{
    switch(action.type){
        case ONCLICK_ADD: {
            let newPost = {
                id: v1(),
                post: state.newPostText,
                likes: 6
            }
            return {...state, posts: [...state.posts, newPost], newPostText:''}
        }
        case UPDATE_NEW_POST_TEXT:{

            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case "SET-STATUS":{
            return{
                ...state, status:action.payload.status
            }
        }
        default: return state
    }
 }
export const addPost=()=>{
    return{
        type:ONCLICK_ADD
    }as const
}
export const upDateNewPostText=(text:string)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    }as const
}
export const setUserProfile=(profile:ProfileType)=>{
    return{
        type:SET_USER_PROFILE,
        profile
    }as const
}
export const getUserProfile=(userID:string)=>{
    return (dispatch:any)=>{
        if(!userID){
            userID='27268'
        }
        UsersApi.getProfile(userID)
            .then(data=>dispatch(setUserProfile(data)))
    }
}
export const setStatus=(status:string)=>{
    return{
        type: 'SET-STATUS',
        payload:{
            status
        }
    }as const
 }
export const getStatus=(userID:string)=>{
    return(dispatch:any)=>{
        ProfileAPI.getStatus(userID).then((response)=>{
            dispatch(setStatus(response.data))})
    }
}
export const upDateStatus=(status:string)=>{
    return(dispatch:any)=>{
        ProfileAPI.upDateStatus(status).then((response)=>{
            if(response.data.resultCode===0)
            {
                dispatch(setStatus(status))
        }
    })
}
}