import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import axios from "axios"
function Authentication() {

  const [justifyActive, setJustifyActive] = useState('tab1');;
  const [signup,setSignup] = useState({})
  const [login,setLogin] = useState({})
  const handleLogin = (e)=>{
    setLogin({...login,[e.target.type]:e.target.value})
  }
  console.log(login)
  console.log(signup)
  const handleloginRequest = async()=>{
    try {
      let res = await axios.post(`https://rich-pink-crown.cyclic.app/auth/login`,login)
      const {token} = res.data
      localStorage.setItem("userToken",token)
    } catch (error) {
      console.log(error)
    }
  }

//   for registering the data
const handleSignup = (e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
}
const handlesignupRequest = async()=>{
  try {
    let res = await axios.post(`https://rich-pink-crown.cyclic.app/auth/register`,signup)
    const {token} = res.data
    localStorage.setItem("userToken",token)
  } catch (error) {
    console.log(error)
  }
  }
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e)=>handleLogin(e)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e)=>handleLogin(e)}/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick = {handleloginRequest}>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' name="name" id='form1' type='text' onChange = {(e)=>handleSignup(e)}/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form3' name="email" type='email'onChange = {(e)=>handleSignup(e)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form4' name="password" type='password' onChange = {(e)=>handleSignup(e)}/>
          <MDBInput wrapperClass='mb-4' label='PhoneNo' id='form4' type='number'name="phoneNo" onChange = {(e)=>handleSignup(e)}/>
          <MDBInput wrapperClass='mb-4' label='Location' id='form4' type='text' name="location" onChange = {(e)=>handleSignup(e)}/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handlesignupRequest}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Authentication;