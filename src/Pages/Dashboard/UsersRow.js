import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {
        fetch(`https://paint-pro.up.railway.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made Admin')
                }
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' ? <button className="btn btn-xs">Already Admin</button> : <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        </tr>

    );
};

export default UsersRow;