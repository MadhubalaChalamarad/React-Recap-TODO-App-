import { React, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
      console.log(tasks);
    }
  };

  const deleteTask = (index) => {
    const updatedList = [...tasks];

    // delete updatedList[index];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  };
  return (
    <div className="flex flex-col items-center text-center  mt-10 ">
      <h1 className="font-bold text-4xl ">Simple Todo App</h1>
      <div className="flex flex-col text-center items-center">
        <div className="mt-10 w-96 mb-10">
          <input
            type="text"
            placeholder="Enter Task here"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            className="bg-gray-200 p-3 m-3 rounded-md outline-none w-60"
          />
          <button
            onClick={addTask}
            className="border-gray-900 bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600 
        "
          >
            Add Task
          </button>
        </div>
        <div className="flex justify-center items-center text-center">
          {tasks?.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex justify-between gap-20 bg-gray-200 mb-2 p-3 items-center text-center  w-96  rounded-md text-16 font-semibold"
                >
                  <li className="pl-8">{task}</li>
                  <button
                    className="bg-red-500 p-1 text-white rounded-md"
                    onClick={() => {
                      deleteTask(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <div>
              <p className="font-xl font-semibold text-center">No Task Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
