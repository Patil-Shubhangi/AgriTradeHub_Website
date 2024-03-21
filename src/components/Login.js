import React, { useState } from 'react';
import 'C:/Users/Shubhangi Patil/Desktop/navigation-app/src/components/menu/Login.css'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return ( <
        div className = "wrapper" >
        <
        nav className = "nav" >
        <
        div className = "nav-button" >
        <
        button className = { `btn ${isLogin ? 'white-btn' : ''}` }
        onClick = { toggleForm } > Sign In < /button> <
        button className = { `btn ${isLogin ? '' : 'white-btn'}` }
        onClick = { toggleForm } > Sign Up < /button> < /
        div > <
        /nav>

        <
        div className = "form-box" >
        <
        div className = "login-container"
        style = {
            { left: isLogin ? '4px' : '-510px', opacity: isLogin ? 1 : 0 }
        } >
        <
        div className = "top" >
        <
        span > Don 't have an account? <button className="link-btn" onClick={toggleForm}>Sign Up</button></span> <
        header > Login < /header> < /
        div > <
        form >
        <
        div className = "input-box" >
        <
        input type = "text"
        className = "input-field"
        id = "name"
        name = "name"
        placeholder = "Username" / >
        <
        i className = "bx bx-user" > < /i> < /
        div > <
        div className = "input-box" >
        <
        input type = "text"
        className = "input-field"
        id = "email"
        name = "email"
        placeholder = "Useremail" / >
        <
        i className = "bx bx-envelope" > < /i> < /
        div > <
        div className = "input-box" >
        <
        input type = "password"
        className = "input-field"
        id = "password"
        name = "password"
        placeholder = "password" / >
        <
        i className = "bx bx-lock-alt" > < /i> < /
        div > <
        div className = "input-box" >
        <
        input type = "submit"
        className = "submit"
        value = "Sign In" / >
        <
        /div> <
        div className = "two-col" >
        <
        div className = "one" >
        <
        input type = "checkbox"
        id = "login-check" / >
        <
        label htmlFor = "login-check" > Remember me < /label> < /
        div > <
        div className = "two" >
        <
        label > < button className = "link-btn" > Forgot password ? < /button></label >
        <
        /div> < /
        div > <
        /form> < /
        div >

        <
        div className = "register-container"
        style = {
            { right: isLogin ? '-520px' : '5px', opacity: isLogin ? 0 : 1 }
        } >
        <
        div className = "top" >
        <
        span > Have an account ? < button className = "link-btn"
        onClick = { toggleForm } > Login < /button></span >
        <
        header > Sign Up < /header> < /
        div > <
        form >
        <
        div className = "input-box" >
        <
        input type = "text"
        className = "input-field"
        id = "phno"
        name = "phno"
        placeholder = "Firstname"
        required / >
        <
        i className = "bx bx-phone-call" > < /i> < /
        div > <
        div className = "input-box" >
        <
        input type = "text"
        className = "input-field"
        placeholder = "Lastname"
        required / >
        <
        i className = "bx bx-envelope" > < /i> < /
        div >
        <
        div className = "input-box" >
        <
        input type = "text"
        className = "input-field"
        id = "phno"
        name = "phno"
        placeholder = "Emial"
        required / >
        <
        i className = "bx bx-phone-call" > < /i> < /
        div > <
        div className = "input-box" >
        <
        input type = "text"
        className = "input-field"
        placeholder = "Password"
        required / >
        <
        i className = "bx bx-envelope" > < /i> < /
        div > <
        div className = "input-box" >
        <
        input type = "submit"
        className = "submit"
        value = "Register" / >
        <
        /div> <
        div className = "two-col" >
        <
        div className = "one" >
        <
        input type = "checkbox"
        id = "register-check" / >
        <
        label htmlFor = "register-check" > Remember Me < /label> < /
        div > <
        div className = "two" >
        <
        label > < button className = "link-btn" > Terms & conditions < /button></label >
        <
        /div> < /
        div > <
        /form> < /
        div > <
        /div> < /
        div >
    );
};

export default Login;