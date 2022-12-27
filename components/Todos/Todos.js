import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import AddTodo from './AddTodo';
import DisplayDoneList from './DisplayDoneList';
import DisplayTodo from './DisplayTodo';

const Todos = () => {
    const { user } = useContext(AuthContext)
    const { data: todos = [], isLoading, refetch } = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/todo?email=${user?.email}`);
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <div className='w-10 h-10 mx-auto'></div>
    }
    console.log(todos);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-10 gap-36'>
            <AddTodo refetch={refetch} />
            <DisplayTodo todos={todos} refetch={refetch} />
            <DisplayDoneList todos={todos} />
        </div>
    );
};

export default Todos;