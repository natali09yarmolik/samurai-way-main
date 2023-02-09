import React from "react";
import s from "./users.module.css";
import userPhoto from "../../Avatars/ava-vk-animal-91.jpg";
import {setFollowingProgress, unFollowThunk, UsersType} from "../../redux/usersReduser";
import {NavLink} from "react-router-dom";
import {UsersApi} from "../../API/api";


type UsersNType={
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePage: (p:number) => void
    users: UsersType[]
    unFollow: (id:number)=>void
    follow: (id:number)=>void
    setFollowingProgress:(id:number, dispatch:boolean)=>void
    followingInProgress:number[]
    followThunk:(id:number)=>void
    unFollowThunk:(id:number)=>void

}


export const UsersN =(props:UsersNType)=>{
    let pagesCount=Math.ceil(props.totalUsersCount / props.pageSize)

    let pagesArr=[]
    for(let i=1; i<=pagesCount; i++)
    {
        pagesArr.push(i)
    }

    return <div>
        <div> {pagesArr.map(el=> {

            return <span className={props.currentPage===el ? s.num: ''}
                                            onClick={(e)=>{props.onChangePage(el)}}>
                                            {el}</span>})}


        </div>
        {props.users.map( el => <div key={el.id} className={s.container}>
            <div className={s.blockImg}>
                <div className={s.photo}>
                   <NavLink to={'./profile/'+el.id}><img src={el.photos.small != null ? el.photos.small : userPhoto}
                                       alt={'ava'}/></NavLink>
                </div>
                <div>
                    {el.followed ?
                        <button disabled={props.followingInProgress.some((id)=> {return id===el.id})} onClick={() => {
                        props.followThunk(el.id)
                        }}>unFollowed</button>
                        : <button disabled={props.followingInProgress.some(id=>id==el.id)} onClick={() =>{
                            props.unFollowThunk(el.id)
                        }} >followed</button>}
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
        </div>)}
    </div>
}