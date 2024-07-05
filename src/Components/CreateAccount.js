import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';

function CreateAccount() {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword
  } = useContext(GlobalContext);
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 p-4">
      <div className='w-full mb-4 flex flex-col items-center'>
        <div className='flex justify-end text-xl  w-2/3 ml-20 text-white'> Contact us</div>
        <div className='flex justify-center '>
          <h2 className="text-2xl font-semibold mb-4 text-center text-2xl text-white">Create New Account</h2>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full">
        <div className="flex justify-between mb-8">
          <div className="text-blue-600 font-medium text-center text-2xl"><span>1</span> Your Profile</div>
          <div className="text-gray-400 text-center text-2xl"><span>2</span> Business Information</div>
          <div className="text-gray-400 text-center text-2xl"><span>3</span> Additional Users</div>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-center text-slate-400">Step 1</h3>
        <h4 className="text-lg  mb-6 text-center text-4xl text-slate-500">Your Profile</h4>
        <p className="text-gray-600 mb-6 text-center  w-1/2 ml-auto mr-auto text-lg">Enter the login information for your account. You will be able to create additional users after registering.</p>
        <form className="grid grid-cols-2 gap-6  ml-20 mr-20">
          <div>
            <label className="block text-gray-700">First Name*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Your First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Your Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Password*</label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password*</label>
            <input
              type="password"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className=" w-2/3 flex justify-between mt-8">
        <a href="#" className="text-blue-500 hover:underline"><i className="fa-solid fa-chevron-left mr-2"></i>Back to Login</a>
        <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Next Step<i className="fa-solid fa-angle-right ml-2"></i>
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
