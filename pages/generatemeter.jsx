import React, { useState } from 'react';

const Form = () => {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reading, setReading] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Form</h2>
        <h2 className="text-green-700">Welcome back, Client</h2>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="w-full max-w-screen-lg mx-auto p-4 border rounded-lg bg-white">
            <div className="my-3">
              <label htmlFor="image" className="text-green-700 font-medium">
                Image
              </label>
              <input type="file" id="image" onChange={handleImageChange} />
            </div>
            <div className="my-3">
              <label htmlFor="date" className="text-green-700 font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="time" className="text-green-700 font-medium">
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="reading" className="text-green-700 font-medium">
                Reading Numbers
              </label>
              <input
                type="number"
                id="reading"
                value={reading}
                onChange={(e) => setReading(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
