import { useState } from "react";
import './to-do-list.css';

function List() {
    const initialTask = ["Clean litter-box", "Cook food", "Pet the cat", "Buy a new rug", "Cause trouble"];
    const [tasks, setTasks] = useState(initialTask);
    const [newTask, setNewTask] = useState("");

    function handleAddTask() {
        setTasks((t) => [...t, newTask]);
        setNewTask("");
    }
    function handleRemoveTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    //Is there a more efficient way to do this? I bet there is.
    function handleTaskPrioUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }
    function handleTaskPrioDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
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
            <label htmlFor="newTask">Enter task here</label>
            <div>
                <input
                    id="newTask"
                    type="text"
                    placeholder="Enter Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} />
                <button onClick={handleAddTask} >Add task</button>
            </div>
        </div>
    );
}

export default List;