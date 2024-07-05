import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
    const navigate = useNavigate();
    const {
        firstName, setFirstName,
        lastName, setLastName,
        email, setEmail,
        phoneNumber, setPhoneNumber,
        password, setPassword,
        confirmPassword, setConfirmPassword
    } = useContext(GlobalContext);

    const handleBack = () => {
        navigate('/');
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleNext = () => {
        if (!firstName.trim()) {
            alert('First Name is required and must be text.');
            return;
        }
        if (!lastName.trim()) {
            alert('Last Name is required and must be text.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email.');
            return;
        }
        if (!phoneNumber.trim()) {
            alert('Phone Number is required and must be numeric.');
            return;
        }
        if (!password.trim()) {
            alert('Password is required.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        navigate('/BusinessInformation');
    };

    const handleNameChange = (setter) => (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setter(value);
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (/^[0-9]*$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 p-4">
        <div className='w-full flex flex-col items-center mb-4'>
            <div className='flex justify-between w-full max-w-xl'>
                <h2 className="text-2xl font-semibold mb-2 text-center text-white w-full">Create New Account</h2>
                <div className='flex justify-end text-white text-sm min-w-20'>Contact us</div>
            </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-6 py-8 max-w-xl w-full">
            <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className="text-blue-600 bg-sky-500 font-medium text-center md:text-2xl text-white flex border rounded-r-3xl w-full h-16 flex justify-center items-center mb-2 md:mb-0">
                    <span className='border rounded-full w-8 h-8 flex items-center justify-center'>
                        1
                    </span> Your Profile
                </div>
                <div className="text-blue-600 font-medium text-center md:text-2xl flex text-slate-300 w-full ml-2 mr-2 flex justify-center items-center mb-2 md:mb-0">
                    <span className='border rounded-full w-8 h-8 flex items-center justify-center bg-slate-300 text-white'>
                        2
                    </span> Business Information
                </div>
                <div className="text-blue-600 font-medium text-center md:text-2xl flex text-slate-300 w-full flex justify-center items-center">
                    <span className='border rounded-full w-8 h-8 flex items-center justify-center bg-slate-300 text-white'>
                        3
                    </span> Additional Users
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center text-slate-400">Step 1</h3>
            <h4 className="text-lg mb-6 text-center text-4xl text-slate-500">Your Profile</h4>
            <p className="text-gray-600 mb-6 text-center mx-auto text-lg">Enter the login information for your account. You will be able to create additional users after registering.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700">First Name*</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        placeholder="Input Your First Name"
                        value={firstName}
                        onChange={handleNameChange(setFirstName)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Last Name*</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        placeholder="Input Your Last Name"
                        value={lastName}
                        onChange={handleNameChange(setLastName)}
                        required
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
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Phone Number*</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                        placeholder="Input Your Phone Number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
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
                        required
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
                        required
                    />
                </div>
            </form>
        </div>
        <div className="w-full max-w-xl flex justify-between mt-8">
            <a href="#" className="text-blue-500 hover:underline" onClick={handleBack}><i className="fa-solid fa-chevron-left mr-2"></i>Back to Login</a>
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600" onClick={handleNext}>
                Next Step<i className="fa-solid fa-angle-right ml-2"></i>
            </button>
        </div>
    </div>
    
    );
}

export default CreateAccount;
