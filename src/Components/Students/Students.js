import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const Students = () => {
    const [students, setStudent] = useState([]);
    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const student = await axios.get("http://localhost:3003/users");
        setStudent(student.data.reverse());
    }
    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadStudents();
    }


    return (
        <div>
            <h1>Students List</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>S.n</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.length > 0 ?
                        students.map((student, index) => (
                            <tr key={index + 1}>
                                <td scope="row">{index + 1}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                                <td>{student.phone}</td>
                                <td>
                                    <Link to={`update-students/${student.id}`}
                                          className="btn btn-success">Edit</Link>
                                    <button className="btn-sm btn-danger"
                                            onClick={() => deleteStudent(student.id)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>

                        ))
                        : <h1>Data not found</h1>
                }
                </tbody>

            </table>

        </div>
    )

}
export default Students;
