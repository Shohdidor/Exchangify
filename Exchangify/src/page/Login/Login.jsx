import React from 'react'
import "./Login.css"
// MUI ICON'S
import ButTon from '../../components/button';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

// IMG 
import Logo from "/src/image/image.png"

function Login() {
  return (
    <>
    <div className='bg-[#D2D2D2] text-center w-[600px] m-auto py-[100px]'>
        <div className='mt-[-140px] bg-[#D2D2D2] inline-block px-[10px] mb-[50px] rounded-[500px]'>
            <img src={Logo} alt="Logo" className='m-auto w-[150px] rounded-[500px] opacity-50' />
        </div><br />

        <div className=' inline-flex p-[5px] mb-[20px] bg-[#0A1128]'>
            <h1 className='pr-2 text-[white]'>
                <PersonIcon fontSize='large'/>
            </h1>
            <input type="text" placeholder='Name' className='border-none py-[5px] text-[17px] px-[40px] placeholder:text-[#34343484] placeholder:px-[5px] pl-[8px] text-black gloock'/>
        </div>
        <br />
        <div className='mb-[50px] inline-flex p-[5px] bg-[#0A1128]'>
            <h1 className='pr-2 text-[white]'>
                <LockIcon fontSize='large'/>
            </h1>
            <input type="password" placeholder='Name' className='border-none py-[5px] text-[17px] px-[40px] placeholder:text-[#34343484] placeholder:px-[5px] pl-[8px] text-black gloock'/>
        </div>
        <br />
        <ButTon />
    </div>
    <br />
    </>
  )
}

export default Login