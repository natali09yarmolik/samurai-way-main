import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Login=()=>{
    const onSubmit = (formData:FormDataType)=>{
        console.log(formData)
    }
    return<div>
        <h1>LOGIN</h1>
       <LoginReduxForm onSubmit={onSubmit}/>

    </div>

}

type FormDataType={
    login:string
    password: string
    checkbox: boolean
}

 const FormLogin:React.FC<InjectedFormProps<FormDataType>> =(props)=>{
    return (

            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'}
                           name={'login'}
                           component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'}
                           name={'password'}
                           component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'}
                           name={'checkbox'}
                           component={'input'}/> remember me!
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>

    )
}

const LoginReduxForm=reduxForm<FormDataType>({
    form: 'login'
})(FormLogin)
