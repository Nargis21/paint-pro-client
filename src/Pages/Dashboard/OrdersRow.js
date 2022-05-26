import React from 'react';
import { Link } from 'react-router-dom';

const OrdersRow = ({ order, index, setDeleteConfirm, refetch }) => {
    const { _id, tool, price, quantity } = order

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{tool}</th>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                {(!order.paid) &&
                    <>
                        <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm mr-3 px-6 btn-success'>Pay</button></Link>
                        <label onClick={() => setDeleteConfirm(order)} for="cancel-order-modal" class="btn btn-sm modal-button">Cancel</label>
                    </>

                }
                {(order.paid) &&
                    <div>
                        <p className='text-accent text-xl font-bold '><span>Paid</span></p>
                        <p>Transaction Id: <span className='text-success' >{order.transactionId}</span> </p>
                    </div>
                }
            </td>
        </tr>
    );
};

export default OrdersRow;