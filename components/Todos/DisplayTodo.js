import React from 'react';

const DisplayTodo = ({ todos, refetch }) => {
    const handleDone = (id) => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'PUT',
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
            <h1 className='text-3xl text-center font-bold uppercase text-blue-800'>Pending Task</h1>
            {todos?.length ? todos?.map(todo => <div key={todo?._id} className="card my-10 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{todo?.date}</h2>
                    <p>{todo?.task}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDone(todo._id)} className="btn bg-blue-800">Done</button>
                    </div>
                </div>
            </div>) : <p className='text-center text-2xl font-semibold my-10 text-red-600'>No pending task found</p>}
        </div>

    );
};

export default DisplayTodo;