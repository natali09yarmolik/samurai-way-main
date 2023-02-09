import {MyselfAPI} from "../API/api";

export type InitialStateType={
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth:boolean
  }
const initialState={
    id: null,
    email: null,
    login: null,
    isAuth: false

}
export const authReducer= (state: InitialStateType=initialState, action: ActionType)=>{

    switch(action.type){
        case "SET-USER-DATA":{
            return {...state, ...action.data, isAuth:true}
        }
        default: return state
    }
}
export type ActionType=setUserDataType
type setUserDataType=ReturnType<typeof setUserData>
export const setUserData=(userId:number, email:string, login:string)=>{
    return{
        type:'SET-USER-DATA',
        data:{userId,
              email,
              login}
    }as const
}

export const getHeaderThunk=()=>{
    return (dispatch:any)=>{
        MyselfAPI.getHeader()
            .then(data=>{
                if(data.resultCode===0){
                    let {id, login,email}=data.data
                    dispatch(setUserData(id, email, login))
                }
            })

    }
}