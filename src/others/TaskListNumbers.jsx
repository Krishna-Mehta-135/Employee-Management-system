import React from "react";

const TaskListNumbers = ({data}) => {
    return (
        <div className="flex justify-between gap-5 screen mt-10">
            <div className="rounded-xl w-[45%] bg-blue-400 p-10">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>

            <div className="rounded-xl w-[45%] bg-green-400 p-10">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
                <h3 className="text-xl font-medium">Completed</h3>
            </div>

            <div className="rounded-xl w-[45%] bg-yellow-400 p-10">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
                <h3 className="text-xl font-medium">Accepted</h3>
            </div>

            <div className="rounded-xl w-[45%] bg-red-400 p-10">
                <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
                <h3 className="text-xl font-medium">Failed</h3>
            </div>
        </div>
    );
};

export default TaskListNumbers;
