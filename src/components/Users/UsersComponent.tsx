import React from "react";

import s from './users.module.css'

import axios from "axios";
import userPhoto from "../../Avatars/ava-vk-animal-91.jpg"
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {followThunk, UsersType} from "../../redux/usersReduser";

export type UsersPropsType={
    users: UsersType[]
    follow:(id:number)=>void
    unFollow:(id:number)=>void
    //setUsers:(users:UsersType[])=>void
    setCurrentPage:(id:number)=>void
    //setTotalUsersCount:(id:number)=>void
   // setIsFetching:(fetching:boolean)=>void
    setFollowingProgress:(id:number, dispatch:boolean)=>void
    getUsersThunkCreator:(currentPage:number, pageSize:number)=>void
    followThunk:(id:number)=>void
    unFollowThunk:(id:number)=>void

}

export const Users = (props:UsersPropsType)=>{

    const users=useSelector<AppStateType, UsersType[]>(state => state.usersPage.users)

    const getUsers=()=>{
      /*  if(users.length===0)
        {
            axios.get("https://social-network.samuraijs.com/api/1.0/users",
                {withCredentials: true})
                .then(
            response=>{props.setUsers(response.data.items)})

        }*/

    }


    return(<div>
            <button onClick={()=>getUsers()}>get users</button>
            {users.map(el => <div key={el.id} className={s.container}>
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
                }

        </div>
    )
}