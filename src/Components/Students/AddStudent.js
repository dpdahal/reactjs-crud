import React, {useState} from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddStudent = () => {
    const history = useHistory();
    const [student, setStudent] = useState({
        name: "",
        address: "",
        phone: ""
    });
    const {name, address, phone} = student;

    const onInputChange = e => {
        setStudent({...student, [e.target.name]: e.target.value})
    }
    const addNewRecord = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", student);
        history.push("/show-student");
    }


    return (
        <div>
            <h1>Add New Students</h1>
            <form onSubmit={e => addNewRecord(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"
                           value={name}
                           onChange={e => onInputChange(e)}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address"
                           onChange={e => onInputChange(e)}
                           value={address}

                           className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone"
                           onChange={e => onInputChange(e)}
                           value={phone}
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Add new student</button>
                </div>

            </form>


        </div>
    )

}
export default AddStudent;
