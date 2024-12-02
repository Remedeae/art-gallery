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
    //I do not understand how to execute things in react, there are so many different things. So this works if you
    //update by using the button, but that's not how it should work.
    function handleTaskPrioUp(index) {
        let prevIndex = index - 1;
        let nextIndex = index + 1;
        tasks.splice(prevIndex, 0, tasks[index]);
        tasks.splice(nextIndex, 1);
    }
    function handleTaskPrioDown(index) {
        let nextIndex = index + 1;
        let secoundNextIndex = index + 2;
        tasks.splice(index, 0, tasks[nextIndex]);
        tasks.splice(secoundNextIndex, 1);
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