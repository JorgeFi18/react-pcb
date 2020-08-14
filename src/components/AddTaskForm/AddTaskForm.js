import React, { useState, Fragment } from 'react';
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import './AddTaskForm.css';

function AddTaskForm(props) {
    const { addMoreProcess } = props;

    const [ formValue, setFormValue ] = useState({
        name: "",
    });

    const [ tasks, setTasks ] = useState([
        { name: '', time: 10, parentId: 1 }
    ]);

    const onFormChange = e => {
        setFormValue({
          ...formValue,
          [e.target.name]: e.target.value
        });
    };

    const addProcess = () => {
        const values = [...tasks];
        values.push({ name: '', time: 10, parentId: 1 });

        setTasks(values);
    }

    const handleProcess = (index, event) => {
        const values = [...tasks];
        values[index].name = event.target.value;
        values[index].time = Math.floor(Math.random() * 10) + 1;
        
        setTasks(values);
    }

    const sendTask = (e) => {
        e.preventDefault();

        const values = [...tasks];
        values.forEach(e => {
            e.parentName = formValue.name;
            e.totalItems = values.length;
        });

        addMoreProcess(values);
    }

    return (
        <div className="add-task">
            <h1 className="add-task__title">Agregar tarea</h1>
            <form
                onSubmit={e => sendTask(e)}
                onChange={onFormChange}
                className="add-task__form"
            >
                <FormControl>
                    <FormGroup>
                        <TextField
                            className="add-task__form-name"
                            type="text"
                            name="name"
                            placeholder="Nombre de la tarea"
                            margin="normal"
                            label="Nombre de la tarea"
                        />
                    </FormGroup>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<AddCircleOutlineIcon />}
                        onClick={addProcess}
                    >
                        Agregar Proceso
                    </Button>
                    { tasks.map((task, index) => (
                        <Fragment key={`${task}~${index}`}>
                            <FormGroup>
                                <TextField
                                    className="add-task__process"
                                    type="text"
                                    name="process"
                                    placeholder="Nombre del proceso"
                                    margin="normal"
                                    label="Nombre del proceso"
                                    onChange={e => handleProcess(index, e)}
                                />
                            </FormGroup>
                        </Fragment>
                    ))}
                    <FormGroup>
                        <Button variant="contained" color="primary" type="submit">Crear Tarea</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
}

export default AddTaskForm;