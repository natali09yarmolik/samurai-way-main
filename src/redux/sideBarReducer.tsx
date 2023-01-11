import {sideBarType} from "./store";
import {dispatchDialogsActionType} from "./dialogsReducer";
import {dispatchProfileActionType} from "./profileReducer";
import {v1} from "uuid";
import avatar1 from "../Avatars/1.jpg";
import avatar2 from "../Avatars/2.jpg";
import avatar3 from "../Avatars/3.jpg";

const initialState={
    friends:
           [{id: v1(), name: 'Sveta', ava: avatar1},
            {id: v1(), name: 'Maxim', ava: avatar2},
            {id: v1(), name: 'Dima', ava: avatar3}]
}

export const sideBarReducer=(state:sideBarType=initialState, action:dispatchDialogsActionType|dispatchProfileActionType)=>{
    return state
}
