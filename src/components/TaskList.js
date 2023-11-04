import { useState } from "react";

import Task from "./Task";
import AddTask from "./AddTask";

import todos from "../data/todos.json";

import "../styles.css";

const TaskList = () => {

    const [todoList, setTodoList] = useState(todos);

    // Marks a todo as complete by modifying it's status
    const markComplete = (task) => {
        const copyTodoList = [...todoList];

        const index = copyTodoList.findIndex((todo) => {
            return todo.task === task;
        })

        copyTodoList[index].status = "Complete";

        setTodoList(copyTodoList);
    }

    // Adds a new todo into the list
    const addTodoToList = (event, data) => {
        event.preventDefault();
        setTodoList([...todoList, data]);
    }

    return (
        <section>
            <h1>Todo List</h1>

            <AddTask addTodoToList={addTodoToList} />

            <div className="todo-box">
                {/* Incomplete todos */}
                <div>
                    <h2>In progress:</h2>
                    {
                        todoList
                            .filter((todo) => {
                                return todo.status === "Incomplete";
                            })
                            .map((todo) => {
                                return (
                                    <Task
                                        task={todo.task}
                                        description={todo.description}
                                        status={todo.status}
                                        markComplete={markComplete}
                                        key={Math.floor(Math.random() * 14000000000)}
                                    />
                                )
                            })
                    }
                </div>
                {/* Complete todos */}
                <div>
                    <h2>Complete</h2>
                    {
                        todoList
                            .filter((todo) => {
                                return todo.status === "Complete";
                            })
                            .map((todo) => {
                                return (
                                    <Task
                                        task={todo.task}
                                        description={todo.description}
                                        status={todo.status}
                                        key={Math.floor(Math.random() * 14000000000)}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </section>
    )
}

export default TaskList;