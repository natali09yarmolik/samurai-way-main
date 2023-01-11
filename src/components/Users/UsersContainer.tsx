import {Users, UsersPropsType, UsersType} from "./Users";
import React from "react";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReduser";

import {Dispatch} from "redux";
import UsersCopy from "./UsersCopy";

let mapStateToProps =(state:UsersType[])=> {
    return {
        users: state
    }
}
const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        follow: (userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow: (userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UsersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer=connect(mapStateToProps, mapDispatchToProps)(Users)