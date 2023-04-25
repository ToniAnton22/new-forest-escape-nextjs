import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data';

const Customers = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Customers</h2>
        <h2 className="text-green-700">Welcome back, Client</h2>
      </div>
      <div className="p-4">
        <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 grid grid-cols-4 sm:grid-cols-3 gap-4 items-center justify-between cursor-pointer text-green-700">
            <span>Name</span>
            <span className="hidden sm:block">Email</span>
            <span className="hidden md:block">Last Order</span>
            <span className="hidden sm:block">Method</span>
          </div>
          <ul>
            {data.map((order, id) => {
              return (
                <li
                  key={id}
                  className="bg-white hover:bg-green-50 rounded-lg my-3 grid grid-cols-4 sm:grid-cols-3 gap-4 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <BsPersonFill className="text-green-700" />
                    </div>
                    <p className="ml-3 text-green-700 font-medium">
                      {order.name.first} {order.name.last}
                    </p>
                  </div>
                  <p className="hidden sm:block text-gray-600">{order.name.first}@gmail.com</p>
                  <p className="hidden md:block">{order.date}</p>
                  <div className="flex sm:hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Customers;
