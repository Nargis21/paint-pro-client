import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import DeleteProductModal from './DeleteProductModal';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)

    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch('https://desolate-garden-31913.herokuapp.com/tool')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-3xl font-serif text-center p-4'>Manage Products</h1>

            <div className='lg:px-3 '>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Minimun Quantity</th>
                                <th>Available Quantity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tools.map((tool, index) => <ProductsRow
                                    key={tool._id}
                                    tool={tool}
                                    index={index}
                                    setDeleteConfirm={setDeleteConfirm}
                                    refetch={refetch}
                                ></ProductsRow>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deleteConfirm && <DeleteProductModal
                        deleteConfirm={deleteConfirm}
                        setDeleteConfirm={setDeleteConfirm}
                        refetch={refetch}
                    ></DeleteProductModal>
                }
            </div>
        </div>
    );
};

export default ManageProducts;