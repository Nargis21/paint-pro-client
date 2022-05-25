import React from 'react';

const OrdersRow = ({ order, index, setDeleteConfirm, refetch }) => {
    const { tool, price, quantity } = order

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{tool}</th>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeleteConfirm(order)} for="cancel-order-modal" class="btn btn-sm modal-button">Cancel</label>
            </td>
        </tr>
    );
};

export default OrdersRow;