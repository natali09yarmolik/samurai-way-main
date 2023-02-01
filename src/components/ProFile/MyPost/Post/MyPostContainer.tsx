import React from 'react';
import {MyPost} from "../MyPost";
import {addPost,upDateNewPostText} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {Dispatch} from "redux";

const mapStateToProps=(state:AppStateType)=>{
    return{
        newPostText: state.profilePage.newPostText,
        postMessageData: state.profilePage.posts
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=> {
    return {
        upDateNewPostText: (text: string) => {
            const action = upDateNewPostText(text)
            dispatch(action)
        },
        addPost: () => {dispatch(addPost())
        }
    }
}

export const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost)