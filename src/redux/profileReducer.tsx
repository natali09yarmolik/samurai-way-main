import {v1} from "uuid";
import {profilePageType} from "./store";
import {dispatchDialogsActionType} from "./dialogsReducer";

const ONCLICK_ADD ='ONCLICK-ADD'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type dispatchProfileActionType=onClickAddActionType |
                                      upDateNewPostTextActionType

type onClickAddActionType= {
    type: "ONCLICK-ADD"
}
type upDateNewPostTextActionType= {
    type: "UPDATE-NEW-POST-TEXT"
    newText:string
}
const initialState: profilePageType={
    posts: [{id: v1(), post: 'Hello! How are you!', likes: 23},
        {id: v1(), post: 'Its my first post', likes: 15}],
    newPostText: 'it-camasutra.com'
}
export const profileReducer= (state: profilePageType=initialState, action: dispatchProfileActionType | dispatchDialogsActionType)=>{
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

        default: return state
    }

    }
export const addPostActionCreator=()=>{
    return{
        type:ONCLICK_ADD
    }as const
}
export const upDateNewPostTextActionCreator=(text:string)=>{
    return{
        type:UPDATE_NEW_POST_TEXT,
        newText:text
    }as const
}

