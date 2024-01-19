import { useEffect, useState } from "react"
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Employes = () => {

    const [employes, setEmploye] = useState([])
    const [singleEmploye, setSingleEmploye] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/employe-list/')
            .then(res => res.json())
            .then(data => setEmploye(data))
    }, [])

    const handleView = (my_modal_1, id) => {
        document.getElementById(my_modal_1).showModal()
        fetch(`http://localhost:8000/employe/${id}/`)
            .then(res => res.json())
            .then(data => setSingleEmploye(data))
    }

    const handleDelete = (id) =>{
        fetch(`http://localhost:8000/delete-employe/${id}/`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            if(data.msg){
                toast("Employe sccessfully remove!")
                const preData = employes.filter(employe => employe.id != id)
                setEmploye(preData)
            }
        })
    }

    return (
        <div className="bg-slate-100 mx-auto w-3/4 mt-12 px-4 py-8 rounded-md ">
            <ToastContainer />
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-xl font-semibold">All Employe List</h4>
                </div>
                <div>
                    <button className="bg-blue-600 p-3 text-white rounded-lg"><Link to='/add-employe/'>Add New Employe</Link></button>
                </div>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#080808] text-white text-xl">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Salery</th>
                            <th>Date Of Birth</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employes.map((employe, index) => <> <tr key={employe.id}>
                                <th className="border border-[#080808] text-center">{employe.id}</th>
                                {/* <th className="border border-[#080808] text-center">{index + 1}</th> */}
                                <td className="border border-[#080808]">{employe.name}</td>
                                <td className="border border-[#080808]">{employe.email}</td>
                                <td className="border border-[#080808]">{employe.phone}</td>
                                <td className="border border-[#080808]">{employe.salary}</td>
                                <td className="border border-[#080808] text-center">{employe.dob}</td>
                                <th className="border border-[#080808] flex gap-1">
                                    <div className="bg-green-600 text-white p-2 rounded-md">
                                        <button onClick={() => handleView('my_modal_1', employe.id)} className=""><FaEye></FaEye></button>
                                    </div>
                                    <div className="bg-blue-600 text-white p-2 rounded-md">
                                        <Link to={`/update-employe/${employe.id}`}><button className=""><FaPen></FaPen></button></Link>
                                    </div>
                                    <div className="bg-red-600 text-white p-2 rounded-md">
                                        <button onClick={() => handleDelete(employe.id)} className=""><FaTrashAlt></FaTrashAlt></button>
                                    </div>
                                </th>
                            </tr>

                                <div>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg mb-4">{singleEmploye.name}'s Profile</h3>
                                            <h4>Name: {singleEmploye.name}</h4>
                                            <p>Email: {singleEmploye.email}</p>
                                            <p>Phone: {singleEmploye.phone}</p>
                                            <p>Salery: {singleEmploye.salary}</p>
                                            <p>Date Of Birth: {singleEmploye.dob}</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                            </>
                            )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Employes