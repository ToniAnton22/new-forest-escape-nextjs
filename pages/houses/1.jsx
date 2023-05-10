import React,{useState} from 'react'
import {data} from '../../data/data'
import Modal from '../../components/Modal'
import LoginBtn from '../../components/LoginBtn'
import QRCode from 'react-qr-code';

export default function one () {
  const [qrCode, setQrCode] = useState(false)
  const generate = () =>{
    setQrCode(true)
  }

  return (
    <div className='bg-green-50 min-h-screen'>
    <div className='flex justify-between px-4 pt-4'>
        <h2 className='font-semibold'>Houses</h2>
        <Modal/>
        <LoginBtn/>
    </div>
    <div className='flex justify-center flex-col items-center mt-16'>
    <img src={data[0].image} className='rounded-md h-96 w-3/6'></img>
    <div className='mt-8'>{data[0].method}</div>
    <div className='mt-8 w-3/6'>{data[0].info}</div>
    <button onClick={generate}>Generate QR Code</button>
          {qrCode ? <QRCode
          size={168}
          value={"http://localhost:3000/house/readings/1"}
        /> : ""}
    </div>
    </div>
  )
}
