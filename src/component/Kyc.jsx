// import React from "react";
import { useState } from "react";
import axios from "axios";





function Kyc() {
       const [userData,setUserData] = useState({firstName:'',
                                                lastName:'',
                                                email:'',
                                                streetAddress: '',
                                                postalCode:'',
                                                city:'',
                                                country:'',
                                                });



       const handleInputChange = (e) =>{
                setUserData((prevData)=>({
                 ...prevData,
                 [e.target.name]:e.target.value
                 }
        ));
       };


       
    

     const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log("after event ");
        const formData = new FormData();
          formData.append("firstName",userData.firstName);
          formData.append("lastName",userData.lastName);
          formData.append("email",userData.email);
          formData.append("streetAddress",userData.streetAddress);
          formData.append("postalCode",userData.postalCode);
          formData.append("city",userData.city);
          formData.append("country",userData.country);
          


        try {
             console.log("after try  ");
           const response  = await axios({method:"post",url:import.meta.env.VITE_PINATA_URL, data: formData ,
              headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
                   'Content-Type': 'application/json',
                   
            },
          });
          console.log("responce ");
          return response
         } catch (error) {
          console.error(error);
          throw error;
        }
       };



    return (
    <>
      <h2>KYC Form</h2>
      <form className="p-4 m-4" 
            action="/submit-form" 
            method="POST" 
            encType="multipart/form-data">
        
         <label for="firstName">
          First Name:
          <input  className="p-1 m-1"
            type="text"
            name="firstName"
            placeholder="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        
        <br />

        <label for="lastName">
          Last Name:
          <input  className="p-1 m-1"
            type="text"
            name="lastName"
            placeholder="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />

        <label for="email">
          Email:
          <input className="p-1 m-1"
            type="email"
            name="email"
            placeholder="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label for="streetAddress">
          Street address 
          <input className="p-1 m-1"
            type="text"
            name="streetAddress"
            placeholder="Enter your Street Address"
            value={userData.streetAddress}
            onChange={handleInputChange}
            required
          />
        </label>

        <br />

        <label for="postalCode">
          ZIP or Postal code (optional):
          <input className="p-1 m-1"
            type="text"
            name="postalCode"
            placeholder="Enter your ZIP or postal code "
            value={userData.postalCode}
            onChange={handleInputChange}
          />
        </label>

         <br />

        <label for="city">
          City:
          <input className="p-1 m-1"
            type="text"
            name="city"
            placeholder="Enter your city "
            value={userData.city}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label for="Country">
          Country:
          <input className="p-1 m-1"
            type="text"
            name="country"
            placeholder="Enter your country name "
            value={userData.country}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <button className="bg-sky-500/100 text-white rounded border-black" 
                 type="submit"
                 onClick={handleSubmit}>Submit</button>
          
      </form>
    </>
 );
    
}


export default Kyc;