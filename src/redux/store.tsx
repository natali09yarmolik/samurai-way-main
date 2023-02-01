import {v1} from "uuid";
import avatar1 from '../Avatars/1.jpg'
import avatar2 from '../Avatars/2.jpg'
import avatar3 from '../Avatars/3.jpg'
import {dispatchProfileActionType, profileReducer} from "./profileReducer";
import {dialogsReducer, dispatchDialogsActionType} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

export type messageDataType={
    id:string,
    text:string
}
export type dialogsDataType={
    id:string,
    name:string
}
export type postDataType={
    id:string,
    post:string,
    likes: number
}
export type dialogPageType={
    messages: Array<messageDataType>
    dialogs: Array<dialogsDataType>
    newMessage:string
}
export type profilePageType={
    posts: Array<postDataType>
    newPostText:string

}
export type stateType={
    dialogPage:dialogPageType
    profilePage:profilePageType
    sideBar: sideBarType
}
export type friendType={
    id:string
    name: string
    ava: string
}
export type sideBarType={
    friends: Array<friendType>
}


export type storeType={
    _state: stateType
    getState: ()=>stateType
    _callSubscriber: (state:stateType)=>void
    subscribe: (callback:(state:stateType)=>void)=>void
    dispatch:(action:dispatchProfileActionType | dispatchDialogsActionType)=>void
}

export let store:storeType= {
    _state: {
        dialogPage: {
            messages: [{id: v1(), text: 'Hello'},
                {id: v1(), text: 'How are you?'},
                {id: v1(), text: 'Good'}],
            newMessage: '',
            dialogs: [{id: v1(), name: 'Natasha'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Vasij'}]
        },
        profilePage: {
            posts: [{id: v1(), post: 'Hello! How are you!', likes: 23},
                {id: v1(), post: 'Its my first post', likes: 15}],
            newPostText: 'it-camasutra.com'
        },
        sideBar: {
            friends:
                [{id: v1(), name: 'Sveta', ava: avatar1},
                {id: v1(), name: 'Maxim', ava: avatar2},
                {id: v1(), name: 'Dima', ava: avatar3}]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(_state) {
        console.log('hello')
    },
    subscribe(callback: (state: stateType) => void) {
        this._callSubscriber = callback
    },
    dispatch(action: dispatchProfileActionType | dispatchDialogsActionType) {
      /*  this._state.profilePage = profileReducer(this._state.profilePage, action)*/
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state)
    },
}
