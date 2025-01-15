import React from "react";

const Header = ({data}) => {
    
    
    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl font-semibold">Hello <br />
            <span className="font-semibold text-3xl">{data.firstName}</span></h1>
            <button className="bg-red-500 text-white px-4 py-2 rounded-sm text-lg font-medium">Logout</button>
        </div>
    );
};

export default Header;
