import React, { useEffect, useState } from 'react'

const Home = () => {

    const [userName, setUserName] = useState('');

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"

                },

            });
            const data = await res.json();
            console.log(data);
            setUserName(data.name);


            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);


        }
    }
    useEffect(() => {
        userHomePage();

    }, []);
    return (
        <div>
            <p className="pt-5">Welcome</p>
            <h1>{userName}</h1>
            <h1>I am Mern Developer...</h1>
        </div>
    )
}
export default Home;