import { useState } from "react";
import './to-do-list.css';

function List() {

    const [tasks, setTasks] = useState(["Clean litter-box", "Cook food", "Pet the cat", "Buy a new rug", "Cause trouble"]);

    function handleAddTask() {
        const newTask = document.getElementById("taskInput").value;
        document.getElementById("taskInput").value = "";

        setTasks((t) => [...t, newTask]);

    }
    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    //Is there a more efficient way to do this? I bet there is.
    function handleTaskPrioUp(index) {
        if (index > 0) {
            let insertAt = index - 1;
            let insertEnd = index + 1;
            const prioUp = [
                ...tasks.slice(0, insertAt),
                tasks[index],
                tasks[insertAt],
                ...tasks.slice(insertEnd)
            ];
            setTasks(prioUp);
        }
    }
    function handleTaskPrioDown(index) {
        let overflowStop = tasks.length - 1;
        if (index < overflowStop) {
            const insertAt = index + 1;
            const insertEnd = index + 2;
            const prioDown = [
                ...tasks.slice(0, index),
                tasks[insertAt],
                tasks[index],
                ...tasks.slice(insertEnd)
            ];
            setTasks(prioDown);
        }
    }

    return (
        <div>
            <h3>To-Do List</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div>
                            <div className="arrow-icons">
                                <i className="fa-solid fa-sort-up" onClick={() => handleTaskPrioUp(index)}></i>
                                <i className="fa-solid fa-sort-down" onClick={() => handleTaskPrioDown(index)}></i>
                            </div>
                            <p style={{ margin: "10px 0" }}>{task}</p>
                            {/* very ugly solution, but I can't find the user style sheet  */}
                        </div>
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