import React from "react";

const AcceptTask = ({data}) => {
    console.log(data);
    
    return (
        <div className="bg-red-400 flex-shrink-0  w-[300px] rounded-xl h-full p-5 ">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
                <h4 className="mr-4">{data.date}</h4>
            </div>
            <h2 className="font-semibold text-2xl mt-5">{data.title}</h2>
            <p className="mt-2 text-sm">
                {data.description}
            </p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm rounded">Mark as completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm rounded">Mark as failed</button>
            </div>
        </div>
    );
};

export default AcceptTask;
