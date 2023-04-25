import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {data} from '../data/data'
import Modal from '../components/Modal'

const orders = () => {
  return (
    <div className='bg-green-50 min-h-screen'>
        <div className='flex justify-between px-4 pt-4'>
            <h2>Houses</h2>
            <Modal/>
        </div>
        <div className='p-4'>
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <span>Order</span>
                    <span className='sm:text-left text-right'>House</span>
                    <span className='hidden md:grid'>Last Orders</span>
                    <span className='hidden sm:grid'>Method</span>
                </div>
                <ul>
                    {data.map((order,id)=>{
                        return (
                            <li key={id}
                        className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                            <div className='flex'>
                               
                                <div className='pl-4 '>
                                    <p className='text-gray-800 font-bold'>{order.total.toLocaleString()}</p>
                                    <p className='text-gray-800 text-sm'>{order.name.first}</p>
                                </div>
                            </div>
                            <p className='text-gray-600 sm:text-left text-right'>
                                <span className={
                                    order.status==='Processing'?
                                     'bg-green-200 p-2 rounded-lg' :
                                    order.status==='Completed' ?
                                     'bg-blue-200 p-2 rounded-lg' :
                                     'bg-yellow-200 p-2 rounded-lg'}>{order.status}</span>
                            </p>
                            <p className='hidden md:flex'>{order.date}</p>
                            <div className='sm:flex hidden justify-between items-center'>
                                <p>{order.method}</p>
                                <BsThreeDotsVertical/>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default orders