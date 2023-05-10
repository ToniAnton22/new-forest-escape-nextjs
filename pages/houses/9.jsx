import React from 'react'
import {data} from '../../data/data'
import Modal from '../../components/Modal'
import LoginBtn from '../../components/LoginBtn'

export default function one () {
  return (
    <div className='bg-green-50 min-h-screen'>
    <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-semibold'>Houses</h2>
        <Modal/>
        <LoginBtn/>
    </div>
    <div className='flex justify-center flex-col items-center mt-16'>
    <img src={data[8].image} className='rounded-md h-96 w-3/6'></img>
    <div className='mt-8'>{data[8].method}</div>
    <div className='mt-8 w-3/6'>{data[8].info}</div>
    </div>
    </div>
  )
}