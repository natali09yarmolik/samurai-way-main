import {v1} from "uuid";
import {dialogPageType} from "./store";
import {dispatchProfileActionType} from "./profileReducer";

const CHANGE_MESSAGE='CHANGE-MESSAGE'
const ONCLICK_ADD_MESSAGE='ONCLICK-ADD-MESSAGE'

export  type dispatchDialogsActionType=changeMessageACType |
                                       onClickAddMessageActionType

type changeMessageACType= {
    type: 'CHANGE-MESSAGE'
    newMessage:string
}
type onClickAddMessageActionType= {
    type: "ONCLICK-ADD-MESSAGE"
}

const initialState:dialogPageType={
    messages: [{id: v1(), text: 'Hello'},
        {id: v1(), text: 'How are you?'},
        {id: v1(), text: 'Good'}],
    newMessage: '',
    dialogs: [{id: v1(), name: 'Natasha'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Vasij'}]
}
export const dialogsReducer= (state: dialogPageType=initialState, action: dispatchProfileActionType | dispatchDialogsActionType):dialogPageType=>{

    switch(action.type){
        case CHANGE_MESSAGE:{
         return  {...state, newMessage: action.newMessage}
        }
        case ONCLICK_ADD_MESSAGE: {
            let newMessage = {
                id: v1(), text: state.newMessage
            }
            return {...state,
                newMessage: '',
                messages: [...state.messages, newMessage]}
        }
        default: return state
    }


}
export const changeMessageAC=(text:string)=>{
    return{
        type:CHANGE_MESSAGE,
        newMessage:text
    }as const
}

export const onClickAddMessageAC=()=>{
    return{
        type:ONCLICK_ADD_MESSAGE
    }as const
}
