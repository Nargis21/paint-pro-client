import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
    const { _id } = deleteConfirm
    const handleOrderDelete = () => {
        fetch(`https://paint-pro-server.vercel.app/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Order Cancel Successfully!`)
                    setDeleteConfirm(null)
                    refetch()
                }
                else {
                    toast.error(`Failed to cancel order!`)
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="cancel-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to cancel this order?</h3>
                    <div class="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleOrderDelete}>Yes</button>
                        <label for="cancel-order-modal" class="btn px-6 btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;