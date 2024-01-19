import { useEffect, useState } from "react"
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Employes = () => {

    const [employes, setEmploye] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/employe-list/')
            .then(res => res.json())
            .then(data => setEmploye(data))
    }, [])

    return (
        <div className="bg-slate-100 mx-auto w-3/4 mt-12 px-4 py-8 rounded-md ">
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
                            employes.map((employe, index) => <tr key={employe.id}>
                                <th className="border border-[#080808] text-center">{index + 1}</th>
                                <td className="border border-[#080808]">{employe.name}</td>
                                <td className="border border-[#080808]">{employe.email}</td>
                                <td className="border border-[#080808]">{employe.phone}</td>
                                <td className="border border-[#080808]">{employe.salary}</td>
                                <td className="border border-[#080808] text-center">{employe.dob}</td>
                                <th className="border border-[#080808] flex gap-1">
                                    <div className="bg-green-600 text-white p-2 rounded-md">
                                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className=""><FaEye></FaEye></button>
                                    </div>
                                    <div className="bg-blue-600 text-white p-2 rounded-md">
                                        <button className=""><FaPen></FaPen></button>
                                    </div>
                                    <div className="bg-red-600 text-white p-2 rounded-md">
                                        <button className=""><FaTrashAlt></FaTrashAlt></button>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Employes