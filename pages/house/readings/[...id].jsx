import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/Modal'
import LoginBtn from '../../components/LoginBtn';
import QRCode from 'react-qr-code';

const Form = () => {

    const readings = [
        {
          picture: "/readings/reading1.jpeg",
          date: "12.02.2023 12:00pm",
          number: 1243325
        },
        {
          picture: "/readings/reading2.jpeg",
          date: "12.03.2023 12:00pm",
          number: 234325
        },
        {
          picture: "/readings/reading3.jpeg",
          date: "12.04.2023 12:00pm",
          number: 3243325
        },{
          picture: "/readings/reading4.jpeg",
          date: "12.05.2023 12:00pm",
          number: 1163325
        }
    ]

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>House</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          {readings.map((value,key) =>{
            return (<div>
                <p>{value.date}</p>
                <img src={value.picture}/>
                <div>{value.number}</div>    
            </div>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
