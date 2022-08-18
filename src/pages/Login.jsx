import React, { useContext } from "react";
import MyButton from "../Components/UI/Button/MyButton";
import MyInput from "../Components/UI/Input/MyInput";
import { AuthContext } from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для Логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Логин" />
                <MyInput type="password" placeholder="Пароль" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}
export default Login