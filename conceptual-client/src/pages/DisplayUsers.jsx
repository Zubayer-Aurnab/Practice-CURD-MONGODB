import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const DisplayUsers = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)



    const handelDelete = id => {
        console.log(id)

        fetch(`https://conceptual-session-01-k701thx7y-aurnabs-projects.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    Swal.fire({
                        title: 'User deleted successfully ',
                        width: 600,
                        padding: '3em',
                        color: '#716add',
                        background: '#fff url(/images/trees.png)',
                        backdrop: `
                      rgba(0,0,123,0.4)
                      url("https://i.kym-cdn.com/photos/images/newsfeed/001/206/382/b7a.gif")
                      left top
                      no-repeat
                    `
                    })
                }
                const remaining = users.filter(use => use._id !== id)
                console.log(remaining)
                setUsers(remaining)
            })
    }


    return (
        <div>
            <h1>display users :  {users.length}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>ID</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, i) => <tr key={i} className="hover:bg-base-300">
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email ? user.email : " XXX"}</td>
                                    <td>{user._id}</td>
                                    <td>
                                        <Link to={`/users/${user._id}`}>
                                            <button

                                                
                                                className="btn btn-outline">
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handelDelete(user._id)}
                                            className="btn btn-outline">
                                            X
                                        </button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DisplayUsers;