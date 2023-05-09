import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data.preventDefault()

    const period = [data.target.periodFrom.value,data.target.periodTo.value]
    const serialN = data.target.meterSerial.value
    const reading = data.target.meterReading.value
    const mpan = data?.target?.mpan?.value
    const send= {
      period,
      serialN,
      reading,
      mpan
    }
    fetch("/api/crud/get-tarif",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(send)
    })
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>Calculate Cost</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4 flex">
        <div className="w-1/2 max-w-screen-lg mx-auto mr-2 p-4 border rounded-lg bg-white">
          <form onSubmit={onSubmit} className='flex flex-col'>
            <div className="mb-4">
                <h1 className='text-center font-medium mb-2 text-lg'>Gas Consumption</h1>
                <hr className='mb-4'></hr>
              <label
                htmlFor="meterReading"
                className="block text-green-700 text-center font-medium mb-2"
              >
                Meter Reading
              </label>
              <input
                type="number"
                name="meterReading"
                id="meterReading"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="meterSerial"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Meter Serial Number
              </label>
              <input
                type="text"
                name="meterSerial"
                id="meterSerial"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="periodFrom"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Period from
              </label>
              <input
                type="date"
                name="periodFrom"
                id="periodFrom"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
               
              />
             
            </div>
            <div className="mb-4">
              <label
                htmlFor="periodTo"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Period To
              </label>
              <input
                type="date"
                name="periodTo"
                id="periodTo"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
              
              />
           
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 text-center width-50%"
            >
              Calculate
            </button>
          </form>
        </div>
        <div className="w-1/2 max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          <form onSubmit={onSubmit} className='flex flex-col'>
            <div className="mb-4">
                <h1 className='text-center font-medium mb-2 text-lg' name="mpan" value="mpan">Electricity Consumption</h1>
                <hr className='mb-4'></hr>
              <label
                htmlFor="meterReading"
                className="block text-green-700 text-center font-medium mb-2"
              >
                Meter Reading
              </label>
              <input
                type="number"
                name="meterReading"
                id="meterReading"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="meterSerial"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Meter Serial Number
              </label>
              <input
                type="text"
                name="meterSerial"
                id="meterSerial"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="periodFrom"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Period from
              </label>
              <input
                type="date"
                name="periodFrom"
                id="periodFrom"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
               
              />
             
            </div>
            <div className="mb-4">
              <label
                htmlFor="periodTo"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Period To
              </label>
              <input
                type="date"
                name="periodTo"
                id="periodTo"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
              
              />
           
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 text-center width-50%"
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
      <div className='flex justify-around mt-8'>
      <div className='mr-8 hidden'>£100</div>
      <div className='mr-8 hidden'>£100</div>
      </div>
    </div>
  );
};

export default Form;
