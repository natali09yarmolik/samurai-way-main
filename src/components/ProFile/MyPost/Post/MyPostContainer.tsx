import React from 'react';
import {MyPost} from "../MyPost";
import {
    addPostActionCreator,
    upDateNewPostTextActionCreator
} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {Dispatch} from "redux";

/*type myPostContainerPropsType={
    store:storeType
 }*/

/*export const MyPostContainer=(props:myPostContainerPropsType)=>{
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text: string) => {
        const action = upDateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <div>
            <MyPost upDateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={props.store.getState().profilePage.newPostText}
                    postMessageData={props.store.getState().profilePage.posts}
                    />
        </div>
    )
}*/
const mapStateToProps=(state:AppStateType)=>{
    return{
        newPostText: state.profilePage.newPostText,
        postMessageData: state.profilePage.posts
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=> {
    return {
        upDateNewPostText: (text: string) => {
            const action = upDateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {dispatch(addPostActionCreator())
        }
    }
}

export const MyPostContainer=connect(mapStateToProps,mapDispatchToProps)(MyPost)