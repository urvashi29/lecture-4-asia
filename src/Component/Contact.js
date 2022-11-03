import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    console.log(navigate);

    setTimeout(() => {
        navigate('/employee');
    }, 2000);

    const redirectToEmployee = () => {
        setTimeout(() => {
            navigate('/employee');
        }, 2000);
    }

    return (
        <>
            <p>Tel: +99999999</p>
            <p>admin@gmail.com</p>
            <p>Adress: Street USA </p>
            <button onClick={redirectToEmployee}></button>
        </>

    )
}

export default Contact;

// 1000ms = 1s