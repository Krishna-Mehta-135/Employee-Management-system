import React, { useState } from "react";

const Header = () => {
    // const [username, setUsername] = useState('')

    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.firstName)
    // }

    const logoutUser = () => {
        localStorage.setItem('loggedInUser' , '')
        window.location.reload()
    }
    
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-semibold">Hello <br />
            <span className="font-semibold text-3xl">username</span></h1>
            <button onClick={logoutUser} className="bg-red-500 text-white px-4 py-2 rounded-sm text-lg font-medium">Logout</button>
        </div>
    );
};

export default Header;
