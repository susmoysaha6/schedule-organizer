import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { AuthContext } from '../../contexts/AuthProvider';

const AddTodo = ({ refetch }) => {
    const { user } = useContext(AuthContext);
    const [selected, setSelected] = useState(new Date())
    console.log(selected);
    const handleSubmut = (e) => {
        e.preventDefault();
        const task = e.target.task.value;

        console.log(task);
        const todo = {
            task,
            date: format(selected, 'PP'),
            email: user?.email,
            status: "pending"
        }
        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                e.target.reset();
            })

    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center'> ADD TASK</h1>
            <form onSubmit={handleSubmut}  >
                <div className='w-10/12 mx-auto'>

                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={(selected) => {
                            if (selected) {
                                setSelected(selected)
                            }
                        }}
                    />
                    <textarea className="textarea textarea-bordered my-5 w-full mx-auto" name='task' required></textarea>
                    <br />
                    <button type="submit" className='btn w-full mx-auto'>Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;