// import React from "react";
import { useState } from "react";
import axios from "axios";





function Kyc() {
       const [userData,setUserData] = useState({firstName:'',
                                                lastName:'',
                                                email:'',
                                                idDocument:null});



       const handleInputChange = (e) =>{
                setUserData((prevData)=>({
                 ...prevData,
                 [e.target.name]:e.target.value
                 }
        ));
       };


       const handleFileChange = (e) => {
        const  file = e.target.files[0];
        setUserData((prevData)=>({
          ...prevData,
          idDocument:file,
        }));
       } ;
    

     const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
          
          const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkZmMxOTdlOC1kNjBjLTQxNzItYTg5ZS1kZTUzYmU1YWFhMjAiLCJlbWFpbCI6ImFheWFua2hhbjg4MTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImVmOTdjNmNiMjdjZjgxMTFjYjQ2Iiwic2NvcGVkS2V5U2VjcmV0IjoiYTFjOTdhODk2N2I5YjQ4YzQ2NzgzZDEzYjhjOWE4OWM1ZTY4NjBjMmQ0NTJlMmNhZGY0ZmYxYjI0YTYwYzEwYiIsImlhdCI6MTcxMDgzMzk2OX0.XMhqEQdoBohA9wiEJWalYXLvoGSipbe-nKs1gDiM1gI";



          const formData = new FormData();
          formData.append("firstName",userData.firstName);
          formData.append("lastName",userData.lastName);
          formData.append("email",userData.email);
          formData.append("idDocument",userData.idDocument);



          const responce  = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS',formData,
          {
            headers:{
             
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${jwt}`,
            },
          });
         } catch (error) {
          console.error(error);
          throw error;
        }
       };



    return (
    <>
      <h2>KYC Form</h2>
      <form className="p-4 m-4">
        <label>
          First Name:
          <input  className="p-4 m-4"
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
          <input  className="p-4 m-4"
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
          <input className="p-p-4 m-4"
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
          <input className="p-4 m-4"
            type="file"
            accept="image/png,image/jpeg"
            name="idDocument"
            onChange={handleFileChange}
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