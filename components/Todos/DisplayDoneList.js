import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayDoneList = ({ todos }) => {
    const { user } = useContext(AuthContext);

    const { data: doneTodos = [], refetch } = useQuery({
        queryKey: ['doneTodos', todos],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/done?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-blue-800'>DONE TASK</h1>

            {doneTodos?.length ? doneTodos?.map(todo => <div key={todo?._id} className="card my-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{todo?.date}</h2>
                    <p>{todo?.task}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(todo._id)} className="btn bg-red-700">Delete</button>
                    </div>
                </div>
            </div>) : <p className='text-center text-2xl font-semibold my-10 text-red-600'>No done task found</p>}
        </div>
    );
};

export default DisplayDoneList;