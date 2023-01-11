import React, {ChangeEvent} from 'react';
import s from './MyPost.module.css'
import {Post} from "./Post/Post";
import {postDataType,} from "../../../redux/store";
import {dispatchProfileActionType} from "../../../redux/profileReducer";
import {dispatchDialogsActionType} from "../../../redux/dialogsReducer";

type myPostPropsType={
    postMessageData:Array<postDataType>
    newPostText:string
    upDateNewPostText: (text:string)=>void
    addPost:()=>void
}

export const MyPost=(props:myPostPropsType)=>{

    const upDateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = newPostElement.current.value
        props.upDateNewPostText(newText)
    }

    let newPostElement: any = React.createRef();

    const onClickAdd = () => {
        props.addPost()
    }

    let postElement = props.postMessageData.map(el => <Post key={el.id}
                                                            message={el.post}
                                                            likes={el.likes}/>)
    return (
        <div className={s.myPostBlock}>
            <div className={s.img_cat}><img
                src='https://i.pinimg.com/originals/22/cc/3b/22cc3bfc1fede6e2306cac7265515aa3.jpg'/>+discription
            </div>
            <h3> My posts</h3>
            <div>
                <div><textarea ref={newPostElement}
                               onChange={upDateNewPostText}
                               value={props.newPostText}/></div>
                <button onClick={onClickAdd}>Add post</button>
            </div>

            <div className={s.posts}>{postElement} </div>

        </div>
    )
}