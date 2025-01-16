import React, {useContext} from "react";
import {AuthContext} from "./../context/AuthProvider";

const AllTasks = () => {
    const [userData , setUserData] = useContext(AuthContext);
    

    return (
        <div id="alltasks" className="bg-[#1c1c1c] p-5 rounded mt-5  ">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="w-1/5 text-lg font-medium">Employee</h2>
                <h3 className="w-1/5 text-lg font-medium">Task</h3>
                <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
                <h5 className="w-1/5 text-lg font-medium">Completed</h5>
                <h5 className="w-1/5 text-lg font-medium">Failed</h5>
            </div>
            <div className=""> 
            {userData.map((elem, idx) => {
                return (
                    <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
                        <h3 className="w-1/5 text-lg font-medium text-blue-600">{elem.taskNumbers.newTask}</h3>
                        <h5 className="w-1/5 text-lg font-medium text-yellow-400">{elem.taskNumbers.active}</h5>
                        <h5 className="w-1/5 text-lg font-medium text-green-400">{elem.taskNumbers.completed}</h5>
                        <h5 className="w-1/5 text-lg font-medium text-red-600">{elem.taskNumbers.failed}</h5>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default AllTasks;
