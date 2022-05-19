import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../src/firebase.init'

const AddTask = ({ refetch }) => {

    const [user, loading, error] = useAuthState(auth);

    const addTask = (event) => {


        event.preventDefault()


        const task = {
            name: event.target.name.value,
            description: event.target.description.value,
            email: user?.email,
            status: 'inprogress'

        }
        console.log(task)

        const url = `http://localhost:5000/addTask`;


        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(task)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })


    }




    return (
        <div>

            <h1 className='text-center text-3xl mt-3 mb-3 font-bold'>Welcome To Do List App</h1>



            <div className='flex justify-center items-center mb-6'>

                <form onSubmit={addTask}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-2xl">Task Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" class="input input-bordered w-full max-w-sm" />

                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-2xl">Description</span>
                        </label>
                        <textarea type="text" name='description' placeholder="Type here" class="input input-bordered w-full max-w-lg" />

                    </div>


                    <input type='submit' value="Add To Task" class="btn btn-outline btn-success mt-4" />




                </form>

            </div>

        </div>
    );
};

export default AddTask;