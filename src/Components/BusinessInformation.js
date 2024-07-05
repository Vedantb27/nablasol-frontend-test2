import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

function BusinessInformation() {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    brandName, setBrandName,
    brandType, setBrandType,
    streetAddress, setStreetAddress,
    city, setCity,
    zipCode, setZipCode,
    taxID, setTaxID,
    agreementSigned, setAgreementSigned,
    waiverSigned, setWaiverSigned,
    coiSigned, setCoiSigned
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Update the path as needed
  };

  const handleNext = () => {
    if (!brandName.trim()) {
      alert('Brand Name is required.');
      return;
    }
    if (!brandType.trim()) {
      alert('Brand Type is required.');
      return;
    }
    if (!streetAddress.trim()) {
      alert('Street Address is required.');
      return;
    }
    if (!city.trim()) {
      alert('City is required.');
      return;
    }
    if (!zipCode.trim()) {
      alert('Zip Code is required.');
      return;
    }
    if (!/^[0-9]*$/.test(zipCode)) {
      alert('Zip Code must be numeric.');
      return;
    }
    if (!taxID.trim()) {
      alert('Tax ID Number is required.');
      return;
    }

    // Create an object with the state variables
    const formData = {
      brandName,
      brandType,
      streetAddress,
      city,
      zipCode,
      taxID,
      agreementSigned,
      waiverSigned,
      coiSigned
    };

    // Retrieve existing data from local storage
    let existingData = localStorage.getItem('businessInformation');
    existingData = existingData ? JSON.parse(existingData) : [];

    // Append new form data to existing data array
    const newData = [...existingData, formData];

    // Save the updated data back to local storage
    localStorage.setItem('businessInformation', JSON.stringify(newData));

    // Reset state variables to their initial values
    setBrandName('');
    setBrandType('');
    setStreetAddress('');
    setCity('');
    setZipCode('');
    setTaxID('');
    setAgreementSigned('unsigned');
    setWaiverSigned('unsigned');
    setCoiSigned('unsigned');

    // Reset other form state variables as needed
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');

    // Navigate to the next page
    alert('Form submitted successfully');
    navigate('/'); // Update the path as needed
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setZipCode(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 p-4 pt-2 min-h-screen">
      <div className='w-full flex flex-col items-center mb-4'>

        <div className='flex justify-center w-full lg:w-2/3'>
          <h2 className="text-2xl font-semibold mb-2 text-center text-white w-full">Create New Account</h2>
          <div className='flex justify-end text-white text-sm min-w-20'>Contact us</div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="text-blue-600 bg-sky-500 font-medium text-center md:text-2xl text-white flex border-4 border-sky-500 w-full h-16 justify-center items-center mb-4 md:mb-0">
            <span className='border rounded-full w-8 h-8 flex items-center justify-center'>
              1
            </span> Your Profile
          </div>
          <div className="text-white bg-sky-500 font-medium text-center md:text-2xl flex w-full mr-0 md:mr-2 justify-center items-center border rounded-r-3xl border-sky-500 mb-4 md:mb-0">
            <span className='border rounded-full w-8 h-8 flex items-center justify-center text-white'>
              2
            </span> Business Information
          </div>
          <div className="text-blue-600 font-medium text-center md:text-2xl flex text-slate-300 w-full justify-center items-center">
            <span className='border rounded-full w-8 h-8 flex items-center justify-center bg-slate-300 text-white'>
              3
            </span> Additional Users
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center text-slate-400">Step 1</h3>
        <div className="text-gray-700 text-center text-2xl"> Business Information</div>
        <p className="text-gray-600 mb-2 text-center text-lg">Please, enter information about your company.</p>

        <label className='text-cyan-500 text-lg block text-center md:text-left mb-4'>General Information</label>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Brand Name*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Your Brand Name"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 tooltip">
              Brand Type*
              <i className="fa-solid fa-question ml-2 text-sm"></i>
              <span className="tooltiptext">
                Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less. <br />
                National: Brands with distribution in 4 or more divisions or in more than 150 stores.
              </span>
            </label>
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              value={brandType}
              onChange={(e) => setBrandType(e.target.value)}
            >
              <option>Select Type of Your Brand</option>
              <option value="Local">Local</option>
              <option value="National">National</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Street Address*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Your Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">City*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Zip Code*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Zip Code"
              value={zipCode}
              onChange={handleZipCodeChange}
            />
          </div>
          <div>
            <label className="block text-gray-700">Tax ID Number*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              placeholder="Input Tax ID Number"
              value={taxID}
              onChange={(e) => setTaxID(e.target.value)}
            />
          </div>
        </form>

        <div className="mt-6">
          <label className="block text-cyan-500 text-lg">DOCUMENTS</label>
          <p className="text-gray-600 mb-4">Once the following documents are signed, you'll be ready to get started</p>

          <div className="rounded-lg px-3 flex items-center justify-between mb-4">
            <div className='border border-gray-300 rounded-lg py-2 w-full flex justify-between'>
              <span>Electronically sign the agreement</span>
              <button className={`text-green-500 ${agreementSigned === 'signed' ? 'text-opacity-100' : 'text-opacity-50'}`} onClick={() => setAgreementSigned('signed')}>
                <i className="fa-solid fa-check mr-2"></i>
              </button>
            </div>
            <div className='border ml-2 p-2 text-white bg-indigo-500 rounded px-4'>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>

          <div className="rounded-lg px-3 flex items-center justify-between mb-4">
            <div className='border border-gray-300 rounded-lg py-2 w-full flex justify-between'>
              <span>Non adult beverage Kroger market supplier waiver and release</span>
              <button className={`text-red-500 ${waiverSigned === 'signed' ? 'text-opacity-100' : 'text-opacity-50'}`} onClick={() => setWaiverSigned('signed')}>
                <i className="fa-solid fa-xmark mr-2"></i>
              </button>
            </div>
            <div className='border ml-2 p-2 text-white bg-indigo-500 rounded px-4'>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>

          <div className="rounded-lg px-3 flex items-center justify-between mb-4">
            <div className='border border-gray-300 rounded-lg py-2 w-full flex justify-between'>
              <span>Certificate of insurance that states $2,000,000.00 as additional insured</span>
              <button className={`text-red-500 ${coiSigned === 'signed' ? 'text-opacity-100' : 'text-opacity-50'}`} onClick={() => setCoiSigned('signed')}>
                <i className="fa-solid fa-xmark mr-2"></i>
              </button>
            </div>
            <div className='border ml-2 p-2 text-white bg-indigo-500 rounded px-4'>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg text-lg font-semibold" onClick={handleBack}>Back</button>
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg text-lg font-semibold" onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessInformation;
