import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateEmploye = () => {

    const { id } = useParams()
    const [employe, setEmploye] = useState([])


    useEffect(() => {
        fetch(`http://localhost:8000/employe/${id}/`)
            .then(res => res.json())
            .then(data => setEmploye(data))
    }, [])

    const naviget = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const salary = form.salary.value
        const dob = form.dob.value

        const EmployeInfo = {
            id,
            name,
            email,
            phone,
            salary,
            dob
        }

        console.log(EmployeInfo)
        fetch('http://localhost:8000/update-employe/', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(EmployeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.msg) {
                    toast("Employe sccessfully Updated!")
                    setTimeout(() => {
                        naviget('/')
                    }, 3000);
                }
            })
    }

    return (
        <div className="md:w-2/4 w-11/12 bg-slate-100 mx-auto mt-12 p-6 rounded-lg">
            <ToastContainer />
            <div>
                <button><Link className="flex items-center gap-2 bg-blue-500 text-white p-2 rounded-lg" to='/'><FaArrowLeft></FaArrowLeft> Back To Home</Link></button>
            </div>
            <h4 className="text-center text-xl font-semibold py-2">Update Employe</h4>
            <form className="pb-6" onSubmit={handleSubmit}>
                <div className="md:flex gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Full Name</span>
                        </div>
                        <input type="text" defaultValue={employe.name} name="name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Email Address</span>
                        </div>
                        <input type="email" defaultValue={employe.email} name="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="md:flex gap-4 my-2">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Phone Number</span>
                        </div>
                        <input type="text" defaultValue={employe.phone} name="phone" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Salery</span>
                        </div>
                        <input type="number" defaultValue={employe.salary} name="salary" className="input input-bordered w-full" />
                    </label>
                </div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg">Date Of Birth/span</span>
                    </div>
                    <input type="date" defaultValue={employe.dob} name="dob" className="input input-bordered w-full" />
                </label>
                <input type="submit" value='Update Employe' className="input input-bordered w-full mt-6 bg-blue-600 text-white hover:bg-blue-500 " />
            </form>
        </div>
    )
}

export default UpdateEmploye