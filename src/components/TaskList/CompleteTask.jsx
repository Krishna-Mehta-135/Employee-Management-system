import React from "react";

const CompleteTask = ({data}) => {
    return (
        <div className="bg-purple-400 flex-shrink-0 h-full w-[300px] rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm m-4 px-3 py-1 rounded">{data.category}</h3>
                <h4 className="mr-4">{data.date}</h4>
            </div>
            <h2 className="font-semibold text-2xl ml-5 mt-5">{data.title}</h2>
            <p className="mt-2 ml-5 text-sm">{data.description}</p>
            <div className="mt-2 p-4 ">
                <button className="w-full bg-green-500 py-1 px-2 text-sm rounded">Complete</button>
            </div>
        </div>
    );
};

export default CompleteTask;
