import React from "react";
import {connect} from "react-redux";
import {
    follow,
    InitialStateType, setFollowingProgress,

    unFollow, getUsersThunkCreator, setCurrentPage, followThunk, unFollowThunk

} from "../../redux/usersReduser";

import {AppStateType} from "../../redux/reduxStore";
import {UsersPropsType} from "./UsersComponent";

import {UsersN} from "./UsersN";
import {Loader} from "../common/Loader";

class UsersAPIComponents extends React.Component<UsersPropsType & InitialStateType>{

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)


    };
    onChangePage=(p:number)=>{
        this.props.getUsersThunkCreator(p, this.props.pageSize)
        /*this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        UsersApi.getUsers(p, this.props.pageSize)
            .then((data)=>{
                console.log(data)
                console.log(data.items)
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)})*/
    }

    render(){
        return <>

            {this.props.isFetching ?<Loader /> :null}
            <UsersN totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onChangePage={this.onChangePage}
                       users={this.props.users}
                       unFollow={this.props.unFollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}
                       setFollowingProgress={this.props.setFollowingProgress}
                       followThunk={this.props.followThunk}
                       unFollowThunk={this.props.unFollowThunk}
            />
            </>


    }
}
let mapStateToProps =(state:AppStateType)=> {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer=connect(mapStateToProps, {follow,
                                                                      unFollow,
                                                                      setCurrentPage,
                                                                      setFollowingProgress,
                                                                       getUsersThunkCreator,
    followThunk,
    unFollowThunk
    })(UsersAPIComponents)