import React from 'react';

import ToDo from './ToDo';

const AllToDo = ({ tasks, isLoading, refetch }) => {


    if (isLoading) {
        return <loading></loading>
    }



    console.log(tasks)



    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 px-12 gap-3'>




            {
                tasks.map(task => <ToDo

                    key={task?._id}
                    task={task}
                    refetch={refetch}

                ></ToDo>)
            }



        </div>
    );
};

export default AllToDo;