import React from 'react';
import AddTodo from './AddTodo';
import DisplayDoneList from './DisplayDoneList';
import DisplayTodo from './DisplayTodo';

const Todos = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto'>
            <AddTodo />
            <DisplayTodo />
            <DisplayDoneList />
        </div>
    );
};

export default Todos;