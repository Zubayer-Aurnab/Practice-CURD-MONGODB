import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUsers = () => {
    const loadedUsers = useLoaderData()

    const handelSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const UpdatedInfo = { name, email }


        Swal.fire({
            title: 'Are you sure want to Update?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log(UpdatedInfo)
                fetch(`https://conceptual-session-01-k701thx7y-aurnabs-projects.vercel.app/users/${loadedUsers._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(UpdatedInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your file has been Updated.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div>
            <form
                onSubmit={handelSubmit}
                className="bg-base-300 p-6">
                <h1 className="mb-4 font-bold text-2xl">Update User</h1>
                <input
                    defaultValue={loadedUsers.name}
                    type="text"
                    name="name"
                    placeholder="name"
                    className=" mb-4 px-2" />
                <br />
                <input
                    type="email"
                    defaultValue={loadedUsers.email}
                    placeholder="email"
                    name="email"
                    className="mb-4 px-2" />
                <br />

                <br />
                <button
                    type="submit"
                    className="btn btn-outline">
                    Update
                </button>

            </form>
        </div>
    );
};

export default UpdateUsers;