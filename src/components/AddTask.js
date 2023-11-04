import { useState } from "react";

const AddTask = ({ addTodoToList }) => {

    const [formBody, setFormBody] = useState({})

    // Handles any changes in the form
    // ↪ Uses the name of the event and the value of the event
    const changeHandler = (event) => {
        setFormBody({
            ...formBody,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form
            className="form"
            onSubmit={(event) => {
                addTodoToList(event, formBody);
                setFormBody({});
            }}
            onChange={changeHandler}
        >
            <label>
                Task:
                <input type="text" name="task" value={formBody.task ? formBody.task : ""} />
            </label>
            <label>
                Description:
                <textarea name="description" value={formBody.description ? formBody.description : ""}></textarea>
            </label>
            <label>
                Status:
                <select name="status" value={formBody.status ? formBody.status : ""}>
                    <option value="">---------</option>
                    <option value="Incomplete">Incomplete</option>
                    <option value="Complete">Complete</option>
                </select>
            </label>

            <button type="submit" className="button">Add todo</button>
        </form>
    )
}

export default AddTask;