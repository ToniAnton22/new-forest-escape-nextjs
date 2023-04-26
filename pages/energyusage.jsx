import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { alertService } from '../lib/alertService';

const DelegateAbilityOptions = [
  'Cleaner',
  'Gardener',
  'Property Manager',
  'Electrician'
];

const EnergyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [delegateAbility, setDelegateAbility] = useState('');

  const onSubmit = async (data) => {
    console.log(data);
    total_Cost = (data?.currentKwhRate*data?.energyUsed) + data?.bufferAmount

    const tarif = {
      energyTarif: data?.currentKwhRate,
      bufferAmount: data?.bufferAmount,
      total_Cost: total_Cost,
      energyUsed: data?.energyUsed,
    }

    const sent = await fetch("/api/crud/readingMeter/setEnergy",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({address,tarif})
    })

    if(sent.status == 200){
      alertService.success("Success!")
    }
    else{
      const messages = await sent.json()
      alertService.error(messages.message)
    }
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Energy Form</h2>
        <h2 className="text-green-700">Welcome back, Client</h2>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2 md:grid-cols-2">
              <label htmlFor="current-kwh-rate">Current kWh Rate</label>
              <input
                type="number"
                id="current-kwh-rate"
                {...register('currentKwhRate', { 
                  required: true,
                  min: { value: 0, message: 'Kwh rate must be a positive number' },
                  max: { value: 9999, message: 'Kwh rate must be less than 9999' }
                })}
                placeholder="Enter your current kWh rate"
              />
              {errors.currentKwhRate && <span className="text-red-500">{errors.currentKwhRate.message}</span>}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <label htmlFor="energy-used">Energy Used</label>
              <input
                type="number"
                id="energy-used"
                {...register('energyUsed', { 
                  required: true,
                  min: { value: 0, message: 'Energy used must be a positive number' },
                  max: { value: 99999, message: 'Energy used must be less than 99999' }
                })}
                placeholder="Enter your energy used"
              />
              {errors.energyUsed && <span className="text-red-500">{errors.energyUsed.message}</span>}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <label htmlFor="home-reference">Home Reference</label>
              <input
                type="text"
                id="home-reference"
                {...register('homeReference', { required: true })}
                placeholder="Enter your home reference"
              />
              {errors.homeReference && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <label htmlFor="home-address">Home Address</label>
              <textarea
                id="home-address"
                {...register('homeAddress', { required: true })}
                placeholder="Enter your home address"
              ></textarea>
              {errors.homeAddress && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="grid gap-2 md:grid-cols-2">
              <label htmlFor="buffer-amount">Buffer Amount</label>
              <input 
                type="number" 
                id="buffer-amount" 
                {...register('bufferAmount',
                { 
                    required: true,
                    min: { value: 0, message: 'Buffer amount must be a positive number' },
                    max: { value: 9999, message: 'Buffer amount must be less than 9999' }
                  })}
                  placeholder="Enter your buffer amount"
                />
                {errors.bufferAmount && <span className="text-red-500">{errors.bufferAmount.message}</span>}
              </div>
              <div className="grid gap-2 md:grid-cols-2">
                <label htmlFor="delegate-ability">Delegate Ability</label>
                <select 
                  id="delegate-ability" 
                  {...register('delegateAbility', { required: true })}
                  value={delegateAbility}
                  onChange={(e) => setDelegateAbility(e.target.value)}
                >
                  <option value="">Select an ability</option>
                  {DelegateAbilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {errors.delegateAbility && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-green-700 text-white rounded px-4 py-2 hover:bg-green-600">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      );
    };
    
    export default EnergyForm;