import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

function BusinessInformation() {
  const {
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
    alert('Form submitted succesfully');
    navigate('/'); // Update the path as needed
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 p-4 pt-2">
      <div className='w-full flex flex-col items-center'>
        <div className='flex justify-end text-xl w-2/3 ml-20 text-white'>Contact us</div>
        <div className='flex justify-center'>
          <h2 className="text-2xl font-semibold mb-1 text-center text-2xl text-white">Create New Account</h2>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <div className="flex justify-between mb-4">
          <div className="text-blue-600 font-medium text-center text-2xl"><span>1</span> Your Profile</div>
          <div className="text-gray-400 text-center text-2xl"><span>2</span> Business Information</div>
          <div className="text-gray-400 text-center text-2xl"><span>3</span> Additional Users</div>
        </div>
        <h3 className="text-xl font-semibold text-center text-slate-400">Step 1</h3>
        <div className="text-gray-700 text-center text-2xl"><span>2</span> Business Information</div>
        <p className="text-gray-600 mb-2 text-center ml-auto mr-auto text-lg">Please, enter information about your company.</p>

        <label className='ml-10 mr-10 text-cyan-500 text-lg'>General Information</label>
        <form className="grid grid-cols-2 gap-6 ml-10 mr-10">
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
              onChange={(e) => setZipCode(e.target.value)}
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

        <div className="mt-6 ml-10 mr-10">
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
              <span>Proof of insurance</span>
              <button className={`text-blue-500 ${coiSigned === 'signed' ? 'text-opacity-100' : 'text-opacity-50'}`} onClick={() => setCoiSigned('signed')}>
                <i className="fa-solid fa-xmark mr-2"></i>
              </button>
            </div>
            <div className='border ml-2 p-2 text-white bg-indigo-500 rounded px-4'>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-2/3 flex justify-around mt-4 ">
        <a href="#" className="text-blue-500 hover:underline "><i className="fa-solid fa-chevron-left mr-2" onClick={handleBack}></i>Back to Login</a>
        <div className=''>
          <button className="text-indigo-500 border-2 bg-white border-sky-700 text-indigo md:px-6 py-2 rounded-lg mr-2" onClick={handleBack}>
            <i className="fa-solid fa-angle-left mr-2"></i>
            Previous Step
          </button>
          <button className="bg-indigo-500 text-white md:px-6 py-2 rounded-lg hover:bg-blue-600" onClick={handleNext}>
            Next Step<i className="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessInformation;
