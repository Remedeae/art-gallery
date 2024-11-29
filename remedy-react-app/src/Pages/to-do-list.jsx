import { useState } from "react";

function List() {

    const [tasks, setTasks] = useState(["Clean litter-box", "Cook food"]);

    function handleAddTask() {
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";

        setTasks ((t) => [...t, newTask]);
    }
    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    function handleTaskPrioUp() {

    }
    function handleTaskPrioDown() {

    }

    return (
        <div>
            <h3>To-Do List</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                        <i className="fa-solid fa-sort-up" onClick={() => handleTaskPrioUp}></i>
                        <i className="fa-solid fa-sort-down" onClick={() => handleTaskPrioDown}></i>
                        </div>
                        <p>{task}</p>
                        <i className="fa-solid fa-trash" onClick={() => handleRemoveTask(index)}></i>
                    </li>
                ))}
            </ul>
            <input id="taskInput" type="text" placeholder="Enter Task" />
            <button onClick={handleAddTask} >Add task</button>
        </div>
    );
}

export default List;