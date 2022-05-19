import React from 'react';
import AddTask from './AddTask';
import AllToDo from './AllToDo';
import { useAuthState } from 'react-firebase-hooks/auth';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import auth from '../firebase.init';

const Home = () => {

    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/tasks/${user?.email}`

    const { data: tasks, isLoading, refetch } = useQuery('allTasks', () => fetch(url, {

    }).then(res => res.json()))



    return (
        <>
            <AddTask

                refetch={refetch}
            ></AddTask>


            <AllToDo
                tasks={tasks}
                isLoading={isLoading}
                refetch={refetch}

            ></AllToDo>

        </>
    );
};

export default Home;