import React, {ChangeEvent, useEffect, useState} from 'react';
type ProfileStatusType={
    status:string
    upDateStatus:(status:string)=>void
}

export const ProfileStatus=(props:ProfileStatusType)=>{
    const [editMode, setEditMode] = useState(false)
   const [status, setStatus]=useState<string>(props.status)
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])
    const onClickHandler=()=>{
        setEditMode(true)
    }
    const onClickInputHandler=()=>{
        setEditMode(false)
        props.upDateStatus(status)
        }
    const onStatusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }

    return (<div>
        {!editMode?
        <div>
            {props.status===''?<span onClick={onClickHandler}>{'I have not status'} </span>:
            <span onClick={onClickHandler}>{props.status} </span>}
        </div>:
            <div>
                <input type={'text'}
                       onChange={onStatusChange}
                       value={status}
                       onBlur={onClickInputHandler}
                       autoFocus={true}
                       />
            </div>
        }
    </div>)
}