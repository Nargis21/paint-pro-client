import React from 'react';

const ProductsRow = ({ tool, index, setDeleteConfirm, refetch }) => {
    const { name, img, price, minimumOrderQuantity, availableQuantity } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <th>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </th>
            <th>{name}</th>
            <td>{price}</td>
            <td>{minimumOrderQuantity}</td>
            <td>{availableQuantity}</td>
            <td>
                <label onClick={() => setDeleteConfirm(tool)} for="delete-product-modal" class="btn btn-sm modal-button">Delete</label>
            </td>
        </tr>
    );
};

export default ProductsRow;