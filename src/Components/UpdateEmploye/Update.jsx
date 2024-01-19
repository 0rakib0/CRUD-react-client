const UpdateEmploye = () => {


    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const salary = form.salary.value
        const dob = form.dob.value

        const EmployeInfo = {
            name,
            email,
            phone,
            salary,
            dob
        }

        console.log(EmployeInfo)
    }

    return (
        <div className="md:w-2/4 w-11/12 bg-slate-100 mx-auto mt-12 p-6 rounded-lg">
            <h4 className="text-center text-xl font-semibold py-2">Update Employe</h4>
            <form className="pb-6" onSubmit={handleSubmit}>
                <div className="md:flex gap-4">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Full Name</span>
                        </div>
                        <input type="text" placeholder="Full Name" name="name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Email Address</span>
                        </div>
                        <input type="email" placeholder="email" name="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="md:flex gap-4 my-2">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Phone Number</span>
                        </div>
                        <input type="text" placeholder="Phone Number" name="phone" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text text-lg">Salery</span>
                        </div>
                        <input type="number" placeholder="Salery" name="salary" className="input input-bordered w-full" />
                    </label>
                </div>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg">Date Of Birth/span</span>
                    </div>
                    <input type="date" name="dob" className="input input-bordered w-full" />
                </label>
                <input type="submit" value='Update Employe' className="input input-bordered w-full mt-6 bg-blue-600 text-white hover:bg-blue-500 " />
            </form>
        </div>
    )
}

export default UpdateEmploye