import React from 'react';
import { useForm } from 'react-hook-form';

const InstructionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2 className="text-green-700">Welcome back, Client</h2>
      </div>
      <div className="p-4">
      <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label htmlFor="homeReference" className="block text-green-700 font-medium mb-2">
            Home Reference
          </label>
          <input
            type="text"
            name="homeReference"
            id="homeReference"
            className="border border-gray-300 p-2 rounded-lg w-full"
            {...register('homeReference', {
              required: "Home reference is required"
            })}
          />
          {errors.homeReference && (
            <span className="text-red-500">{errors.homeReference.message}</span>
          )}
        </div>

        <div className="form-control mb-4">
          <label htmlFor="homeAddress" className="block text-green-700 font-medium mb-2">
            Home Address
          </label>
          <input
            type="text"
            name="homeAddress"
            id="homeAddress"
            className="border border-gray-300 p-2 rounded-lg w-full"
            {...register('homeAddress', {
              required: "Home address is required"
            })}
          />
          {errors.homeAddress && (
            <span className="text-red-500">{errors.homeAddress.message}</span>
          )}
        </div>

        <div className="form-control mb-4">
          <label htmlFor="instruction" className="block text-green-700 font-medium mb-2">
            Instruction
          </label>
          <input
            type="text"
            name="instruction"
            id="instruction"
            className="border border-gray-300 p-2 rounded-lg w-full"
            {...register('instruction', {
              required: "Instruction is required"
            })}
          />
          {errors.instruction && (
            <span className="text-red-500">{errors.instruction.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default InstructionForm;
