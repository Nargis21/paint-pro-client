import React, { useState } from 'react';

const ManageOrdersRow = ({ order, index, setDeleteConfirm, refetch }) => {
    const { _id, name, tool, price, quantity } = order
    const [reload, setReload] = useState(false)
    const handleUpdateStatus = () => {
        fetch(`https://paint-pro-server.vercel.app/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setReload(true)
                console.log(data)
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <th>{tool}</th>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                {
                    !order.paid && <>
                        <button className='btn btn-error mr-5 btn-sm'>Unpaid</button>
                        <label onClick={() => setDeleteConfirm(order)} for="cancel-order-modal" class="btn btn-sm modal-button">Cancel</label>
                    </>
                }
                {
                    order.paid && <>
                        <button className='btn btn-success mr-3 btn-sm'>{order.status}</button>
                        <button onClick={handleUpdateStatus} class="btn btn-sm">Update</button>
                    </>
                }

            </td>
        </tr>
    );
};

export default ManageOrdersRow;