// GlobalContext.js
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // New state variables for BusinessInformation
  const [brandName, setBrandName] = useState('');
  const [brandType, setBrandType] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [taxID, setTaxID] = useState('');
  const [agreementSigned, setAgreementSigned] = useState('unsigned');
  const [waiverSigned, setWaiverSigned] = useState('unsigned');
  const [coiSigned, setCoiSigned] = useState('unsigned');

  return (
    <GlobalContext.Provider value={{
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
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
