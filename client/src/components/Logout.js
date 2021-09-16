import { useHistory } from 'react-router-dom';
import React, { useEffect, useContext } from 'react'
import { UserContext } from "../App";


const Logout = () => {

    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    //Promise
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"

            },
            credentials: "include"
        }).then((res) => {
            dispatch({ type: "USER", payload: false });
            history.push('/login', { replace: true });
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })

    })
    return (
        <>
            <h1>I am just Logout...</h1>
        </>
    )
}

export default Logout
