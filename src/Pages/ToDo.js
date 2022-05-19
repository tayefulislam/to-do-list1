import React from 'react';

const ToDo = ({ task, refetch }) => {




    const handleStatus = (id) => {


    }



    const handelDelete = (id) => {

        console.log(id)



        const proccedd = window.confirm('Are You sure to delete this Task ?')

        if (proccedd) {
            const url = `http://localhost:5000/delete/${id}`;


            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    refetch()
                })
        }
    }


    return (
        <div>
            <div class="card w-full bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{task?.name}</h2>
                    <p>{task?.description}</p>
                    <div class="card-actions justify-end">

                        <button onClick={() => handleStatus()} on class="btn btn-primary">Complete</button>

                        <button onClick={() => handelDelete(task._id)} class="btn btn-ghost">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ToDo;