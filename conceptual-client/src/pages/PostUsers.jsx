
import Swal from 'sweetalert2'

const PostUsers = () => {


    const handelSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value


        const myData = { name, email, password }
        console.log(myData)

        fetch(`https://conceptual-session-01-k701thx7y-aurnabs-projects.vercel.app/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'success',
                        text: 'user successfully registered',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })

            
    }
    return (
        <div>
            <form
                onSubmit={handelSubmit}
                className="bg-base-300 p-6">
                <h1 className="mb-4 font-bold text-2xl">Create User</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className=" mb-4 px-2" />
                <br />
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="mb-4 px-2" />
                <br />
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    className="mb-4 px-2" />
                <br />
                <input type="submit" className=" p-2 border-2 rounded-lg cursor-pointer" />

            </form>
        </div>
    );
};

export default PostUsers;