import React from "react";

import s from './users.module.css'

import axios from "axios";
import userPhoto from "../../Avatars/ava-vk-animal-91.jpg"

export type UsersPropsType={
    users: UsersType[]
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    setUsers:(users:UsersType[])=>void

}
export type UsersType={
    id: number
    name: string
    status:string
    photos: photosType
    followed: boolean

}
type photosType={
    small: string
    large: string
}
export const Users = (props:UsersPropsType)=>{
    const getUsers=()=>{
debugger

        if(props.users.length===undefined)
        { axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(
            response=>{props.setUsers(response.data.items)})}
    }

    console.log(props.users.length)
    return(<div>
            <button onClick={()=>getUsers()}>get users</button>
            {props.users.length !== undefined ? props.users.map(el => <div key={el.id}
                                                                           className={s.container}>
                    <div className={s.blockImg}>
                        <div className={s.photo}>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                 alt={'ava'}/>
                        </div>
                        <div>
                            {el.followed ?
                                <button onClick={() => props.unFollow(el.id)}>unFollowed</button>
                                : <button onClick={() => props.follow(el.id)}>followed</button>}
                        </div>
                    </div>
                    <div className={s.blockData}>
                        <span>
                           <div>{el.name}</div>
                           <div>{el.status}</div>
                       </span>
                        <span>
                           <div>{"el.location.city"}</div>
                           <div>{"el.location.country"}</div>
                        </span>
                    </div>


                </div>)
                : ""}

        </div>
    )
}