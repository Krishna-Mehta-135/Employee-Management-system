import React from "react";

const CompleteTask = () => {
    return (
        <div className="bg-purple-400 flex-shrink-0 h-full w-[300px] rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm m-4 px-3 py-1 rounded">High</h3>
                <h4 className="mr-4">14 Jan 2025</h4>
            </div>
            <h2 className="font-semibold text-2xl ml-5 mt-5">Make a youtube video</h2>
            <p className="mt-2 ml-5 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia ut debitis, ex, dicta repellendus
                illo esse dignissimos quae tenetur voluptatibus aliquid eos earum est!
            </p>
            <div className="mt-2">
                <button className="w-full">Complete</button>
            </div>
        </div>
    );
};

export default CompleteTask;
