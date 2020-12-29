import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const UpdateStudents = () => {
    const history = useHistory();
    const [student, setStudent] = useState({
        name: "",
        address: "",
        phone: ""
    });

    const {name, address, phone} = student;
    const {id} = useParams();
    useEffect(() => {
        loadStudents();
    },[]);


    const onInputChange = e => {
        setStudent({...student, [e.target.name]: e.target.value})
    }

    const addNewRecord = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, student);
        history.push("/show-student");
    }
    const loadStudents = async () => {
        const student = await axios.get(`http://localhost:3003/users/${id}`);
        setStudent(student.data);
    }


    return (
        <div>
            <h1>UpdateStudents</h1>
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
                    <button className="btn btn-success">Update new student</button>
                </div>

            </form>


        </div>
    )

}
export default UpdateStudents;
