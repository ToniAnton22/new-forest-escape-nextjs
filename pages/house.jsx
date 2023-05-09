import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../components/Modal'
import LoginBtn from '../components/LoginBtn';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {

  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2 className='font-semibold'>House</h2>
        <Modal/>
        <LoginBtn/>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="kWhRate"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Owner Name
              </label>
              <input
                type="number"
                name="kWhRate"
                id="kWhRate"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                placeholder='John Smith'
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="energyUsed"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Address
              </label>
              <input
                type="number"
                name="energyUsed"
                id="energyUsed"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                placeholder='111 Dinosaur Street'
              />
              
            </div>
            <div className="mb-4">
              <label
                htmlFor="homeReference"
                className="block text-green-700 font-medium mb-2 text-center"
              >
                Postcode
              </label>
              <input
                type="text"
                name="homeReference"
                id="homeReference"
                className="border border-gray-300 p-2 rounded-lg w-full text-center"
                placeholder='LN2 5UB'
              />
             
            </div>
            {/* <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 m-auto"
            >
              Submit
            </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
