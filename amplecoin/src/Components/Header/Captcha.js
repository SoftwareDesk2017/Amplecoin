import React from 'react';
import { useState } from 'react';
import './Captcha.css'




function Captcha() {
    const [user, setUser] = useState({
        username:""
    });
    const characters ='abc123';
    function generateString(length) 
    {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       return result;
     }
     const captcha = generateString(6) // Function called here and save in captcha variable
     let handleChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       user[name] = value;
       setUser(user);
    }
    const onSubmit = e => {
      var element =  document.getElementById("succesBTN");
      var inputData = document.getElementById("inputType");
       element.style.cursor = "wait";
       element.innerHTML  = "Checking...";
       inputData.disabled = true;
       element.disabled = true;
        var myFunctions = function(){
            if(captcha == user.username)
            {
              element.style.backgroundColor   = "green";
              element.innerHTML  = "Captcha Verified";
              element.disabled = true;
              element.style.cursor = "not-allowed";
              inputData.style.display = "none";
              
            }
            else
            {
              element.style.backgroundColor   = "red";
              element.style.cursor = "not-allowed";
              element.innerHTML  = "Not Matched";
              element.disabled = true;
              //  element.disabled = true;
              var myFunction = function(){
                element.style.backgroundColor   = "#007bff";
                element.style.cursor = "pointer";
                element.innerHTML  = "Verify Captcha";
                element.disabled = false;
                inputData.disabled = false;
              };
              setTimeout(myFunction,5000);
            }
          }   
          setTimeout(myFunctions,5000); 
    };

    
     return (
      <div class="container">
            <div class="col-md-8">
              <div class='cap-container'>
              <div id="captcha">{captcha}</div>
              <a href="./">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>

              </a>
              </div>
    
              <div class="form-group row">
                <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
                  name="username"  onChange={handleChange} 
                  />
                  <br/>
                <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1" margin-top='20px' >Verify Captcha</button>
              
              </div>
          
            </div>

    </div>
      );
  }
  export default Captcha;