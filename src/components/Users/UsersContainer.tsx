import React from "react";
import {connect} from "react-redux";
import {
    follow,
    InitialStateType, setFollowingProgress, setCurrentPage,
    setIsFetching, setTotalUsersCount,
    setUsers,
    unFollow,

} from "../../redux/usersReduser";

import {AppStateType} from "../../redux/reduxStore";
import {UsersPropsType} from "./UsersComponent";

import {UsersN} from "./UsersN";
import {Loader} from "../common/Loader";
import {UsersApi} from "../../API/api";

class UsersAPIComponents extends React.Component<UsersPropsType & InitialStateType>{

    componentDidMount() {
        this.props.setIsFetching(true)
        UsersApi.getUsers(this.props.currentPage, this.props.pageSize)
          .then(data=>{
            this.props.setIsFetching(false)
             this.props.setUsers(data.items)
              this.props.setTotalUsersCount(data.totalCount)
             })

    };
    onChangePage=(p:number)=>{
        this.props.setIsFetching(true)
        this.props.setCurrentPage(p)
        UsersApi.getUsers(p, this.props.pageSize)
            .then((data)=>{
                console.log(data)
                console.log(data.items)
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)})
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
/*const mapDispatchToProps=(dispatch:Dispatch)=>{
    return{
        follow: (userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow: (userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UsersType[])=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(numberPage:number)=>{
            dispatch(setCurrentPageAC(numberPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching:(fetching:boolean)=>{
            dispatch(setIsFetchingAC(fetching))
        }
    }*/

export const UsersContainer=connect(mapStateToProps, {follow,
                                                                      unFollow,
                                                                      setUsers,
                                                                      setCurrentPage,
                                                                      setTotalUsersCount,
                                                                      setIsFetching,
                                                                      setFollowingProgress})(UsersAPIComponents)