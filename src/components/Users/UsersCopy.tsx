import React from "react";

import s from './users.module.css'

import axios from "axios";
import userPhoto from "../../Avatars/ava-vk-animal-91.jpg"
import {UsersPropsType, UsersType} from "./Users";


class UsersCopy extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users/").then(
            response=>{this.props.setUsers(response.data.items)})
    };

    render(){
       return <div>

            <button>get users</button>
            {this.props.users.length !== undefined ? this.props.users.map( el => <div key={el.id}
                                                                           className={s.container}>
                    <div className={s.blockImg}>
                        <div className={s.photo}>
                            <img src={el.photos.small != null ? el.photos.small : userPhoto}
                                 alt={'ava'}/>
                        </div>
                        <div>
                            {el.followed ?
                                <button onClick={() => this.props.unFollow(el.id)}>unFollowed</button>
                                : <button onClick={() => this.props.follow(el.id)}>followed</button>}
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

    }
}
export default UsersCopy;