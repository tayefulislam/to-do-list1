import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import auth from '../firebase.init';
import ToDo from './ToDo';

const AllToDo = ({ tasks, isLoading, refetch }) => {

    const [user, loading, error] = useAuthState(auth);

    // const url = `http://localhost:5000/tasks/${user?.email}`

    // const { data: tasks, isLoading, refetch } = useQuery('allTasks', () => fetch(url, {

    // }).then(res => res.json()))


    if (isLoading || loading) {
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