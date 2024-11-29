import React, { useState, useContext } from 'react'
import { Nav } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginApi } from '../services/allApi';
import { registerApi } from '../services/allApi';
// import { toast } from 'react-toastify';
// import { registerApi } from '../services/allApis';
// import { loginApi } from '../services/allApis';
// import { useNavigate } from 'react-router-dom';
// import { tokenContext } from '../../Context/TokenContext';



function Auth() {

  const [authStatus, setAuthStatus] = useState(false)


  const [user, setUser] = useState({
    email: "", username: "", password: ""
  })

  const changeStatus = () => {
    setAuthStatus(!authStatus)
    setUser({
      email: "", username: "", password: ""
    })
  }

  const nav =useNavigate()

  // const navigate=()=>{
  //   nav('/admindash')
  // }
  // const studentnavigate=()=>{
  //   nav('/studentdash')
  // }




  const handleRegister = async () => {
    const { email, username, password } = user;
    if (!email || !username || !password) {
        toast.error('Enter valid data!!');
    } else {
        const res = await registerApi(user);
        if (res.status === 200) {
            toast.success('Registration successful!!');
            setAuthStatus();
        } else {
            toast.error('Registration failed!!');
        }
    }
};

const handleLogin = async () => {
    const { email, password } = user;
    if (!email || !password) {
        toast.warning('Enter valid inputs!!');
    } else {
        const res = await loginApi(user);
        if (res.status === 200) {
            toast.success('Login successful!!');
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('username', res.data.username);
            // setTokenStatus(true);
            nav('/studentdash');
        } else {
            toast.error('Something went wrong');
        }
    }
};

  

  return (
    <>
      

      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    
        <div className='w-75 border shadow p-4 row m-5'>
        
          <div className='col'>
            {
              authStatus ?
                <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-shaking-hands-out-of-devices?fmt=png-alpha&wid=1000" alt="" className='img-fluid' />

                :
                <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-login?fmt=png-alpha&wid=1000" alt="" className='img-fluid' />


            }

          </div>


          <div className='col m-5'>
            {
              authStatus ?
                <h2>Register</h2>
                :
                <h2>Login</h2>

            }

            <div className='my-3'>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" onChange={(e)=>setUser({...user,email:e.target.value})} value={user.email} placeholder="name@example.com" />
              </FloatingLabel>
              {
                authStatus &&
                <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                  <Form.Control type="text"  onChange={(e)=>setUser({...user,username:e.target.value})} value={user.username} placeholder="name" />
                </FloatingLabel>

              }

              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password"  onChange={(e)=>setUser({...user,password:e.target.value})} value={user.password} placeholder="Password" />
              </FloatingLabel>
            </div>
            <div className='d-flex justify-content-between'>
              {
                authStatus ?
                  <button className='btn btn-primary' onClick={handleRegister}>Register</button>
                  :
                  <button className='btn btn-info' onClick={handleLogin}  >Login</button>



              }

              <button className='btn btn-link' onClick={changeStatus}>
                {
                  authStatus ? <>exicting user?</>
                    :
                    <>  Not an exicting user?</>
                }
              </button>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Auth