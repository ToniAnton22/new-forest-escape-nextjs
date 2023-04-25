import { stringify } from 'querystring';
import React from 'react';
import { useForm } from 'react-hook-form';
import { alertService } from '../lib/alertService';

const InstructionForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission
    console.log(data)
    alertService.success("Success")
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2 className="text-green-700">Welcome back, Client</h2>
      </div>
      <form className="mx-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-4">
          <label htmlFor="homeReference" className="label">
            Home Reference
          </label>
          <input
            type="text"
            name="homeReference"
            id="homeReference"
            className="input w-full"
            {...register('homeReference', {
              required: "Home reference is required"
            })}
          />
          {errors.homeReference && (
            <span className="text-red-500">{errors.homeReference.message}</span>
          )}
        </div>

        <div className="form-control mb-4">
          <label htmlFor="homeAddress" className="label">
            Home Address
          </label>
          <input
            type="text"
            name="homeAddress"
            id="homeAddress"
            className="input w-full"
            {...register('homeAddress', {
              required: "Home address is required"
            })}
          />
          {errors.homeAddress && (
            <span className="text-red-500">{errors.homeAddress.message}</span>
          )}
        </div>

        <div className="form-control mb-4">
          <label htmlFor="instruction" className="label">
            Instruction
          </label>
          <input
            type="text"
            name="instruction"
            id="instruction"
            className="input w-full"
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
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InstructionForm;
