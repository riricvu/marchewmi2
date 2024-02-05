import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from './images/loginImg.png';
import HomePage from './components/homePage';

const LoginPage = () => {
  const navigate = useNavigate();
  const correctPassword = 'riri';
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>(''); 

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      navigate('/home');
    } else {
      setErrorMessage('Wrong password baby T^T');
    }
  };

  const LoginButton = () => (
    <button
      type='button'
      onClick={handleLogin}
      className="text-[#FFFF] bg-secondary right-2 py-2 px-4 rounded-full text-md mt-6 border-8 border-primary"
    >
      Log in
    </button>
  );

  return (  
    <div className="flex justify-center h-screen">
    <div className="bg-[#FFFF] p-4 rounded-lg border-8 border-[#eab4c4] w-[500px] ">
      <div className="justify-center items-center ">
        <div className="flex justify-center items-center">
          <img src={loginImg} width={300} className="flex justify-center items-center" />
        </div>
        
        <h1 className="pacifico-font text-secondary text-3xl pt-4">Happy Anniversary and Happy Birthday!</h1>
        <h3 className="text-txt-color font-semibold text-[10px] pt-4">Hint: the password is the first nickname you gave me ^^ </h3>
        
        <div className="mt-10">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-80 mt-1 p-2 pl-4 rounded-full border-8 border-primarybordercolor focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="password here bebe"
          />
          <h3 className="text-txt-color font-semibold text-[10px] pt-4">{errorMessage}</h3>
        </div>
        
        <LoginButton/>
      </div>
    </div>
    </div>
    
  );
}

export default LoginPage;
