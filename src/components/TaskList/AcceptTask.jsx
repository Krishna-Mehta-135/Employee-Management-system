import React from "react";

const AcceptTask = () => {
    return (
        <div className="bg-red-400 flex-shrink-0  w-[300px] rounded-xl h-full p-5 ">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
                <h4 className="mr-4">14 Jan 2025</h4>
            </div>
            <h2 className="font-semibold text-2xl mt-5">Make a youtube video</h2>
            <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia ut debitis, ex, dicta repellendus
                illo esse dignissimos quae tenetur voluptatibus aliquid eos earum est!
            </p>
            <div className="flex justify-between mt-4">
                <button className="bg-green-500 py-1 px-2 text-sm">Mark as completed</button>
                <button className="bg-red-500 py-1 px-2 text-sm">Mark as failed</button>
            </div>
        </div>
    );
};

export default AcceptTask;
