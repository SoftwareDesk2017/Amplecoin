import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform newsletter subscription logic, e.g. sending data to an API endpoint
    try {
      // ... Perform form submission logic, e.g. sending data to an API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        // Handle successful subscription
        alert('Successfully subscribed to newsletter! ');
        setEmail('');
      } else {
        // Handle failed subscription
        alert('Successfully subscribed to newsletter! ');
      }
    } catch (error) {
      console.error('Error occurred while subscribing to newsletter:', error);
    }
  };

  return (
    <div className="bg-transparent mt-96" >
      <div className="container  mx-auto  px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl  text-white font-semibold mb-6">Subscribe to Our Newsletter</h3>
        <form className="flex  items-center justify-center" onSubmit={handleSubmit}>
        <input
  className=" min-w-[50%] sm:w-auto bg-white border  border-gray-300 rounded-full py-3 px-6 mr-4 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-900"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

          <button
            className="bg-blue-700 hover:bg-blue-600 text-white rounded-full font-semibold py-3 px-6  focus:outline-none"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;