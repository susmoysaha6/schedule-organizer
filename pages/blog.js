import React from 'react';
import { withProtected } from '../hooks/routes';
// import { withPublic } from '../hooks/routes';

const Blog = ({ user }) => {
    return (
        <div className='text-center'>
            hi
        </div>
    );
};

export default withProtected(Blog);