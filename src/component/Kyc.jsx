// import React from "react";
import { useState } from "react";
import axios from "axios";


function Kyc() {
       const [userData,setUserData] = useState({firstName:'',
                                                lastName:'',
                                                email:'',
                                                govtid:''});

       const handleInputChange = (e) =>{
       const {name,value} = e.target;
            setUserData((prevData)=>({
            ...prevData,
            [name]:value,
            }));
       };
    

     const handleSubmit = (e)=>{
        e.preventDefault();
        

        try {
          const apiKey = `${process.env.API_KEY}`;
          const secretKey = `${process.env.API_SECRET}`;

          const responce  = axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS',userData,
          {
            headers:{
              'content-type': 'application/json',
              'pinata_api_key': apiKey,
              'pinata_secret_api_key':secretKey,
            },
          }
          );
        } catch (error) {
          console.log(error);
          throw error;
        }
       };



    return (
    <>
      <h2>KYC Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          ID Document:
          <input
            type="text"
            name="idDocument"
            value={userData.idDocument}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
 );
    
}



export default Kyc;