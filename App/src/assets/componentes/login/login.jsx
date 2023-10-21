import Logo from '../Imagenes/logo.png'
import './login.css'
import { useState } from 'react';
import Home from '../Home/home.jsx';



const Login = ()=>{

    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
        };
        {/*Poner login al final de localhost*/}
        fetch('http://localhost:5173/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result.token);

                if (result.token) {
                    localStorage.setItem('token', result.token);
                    setLoginSuccessful(true);
                } else {
                    setLoginSuccessful(false);
                    setErrorMessage('Usuario o contraseña incorrectas');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return(
        <>
        {loginSuccessful ? (
            <Home />
        ) : (

        <div className="container d-flex justify-content-center align-items-center">

        <div className="text-center login-container w-50 p-2 bg-white">

            <img src={Logo} className="img-fluid w-50 bg-white" alt="Imagen Mediana" />

            <h2 className='bg-white'>Inicio de Sesión</h2>

            <form className='m-2 bg-white'>
                <div className="form-group m-2 bg-white">
                    <label className='bg-white m-1'>Usuario:</label>
                    <input 
                        type="text" 
                        className="form-control "
                        onChange={(event) => setUserName(event.target.value)} 
                        id="usuario" 
                        placeholder="Ingresa tu usuario" 
                    />
                </div>
                <div className="form-group m-2 bg-white">
                    <label className='bg-white m-1'>Contraseña:</label>
                    <input 
                        type="password" 
                        className="form-control"  
                        onChange={(event) => setPassword(event.target.value)} 
                        id="contrasena" 
                        placeholder="Ingresa tu contraseña" 
                    />
                </div>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                                <div className="text-center mt-4">
                                    <button type="submit" id="submit" onClick={handleLogin} className="justify-content-center">
                                        Enviar
                                    </button>
                                </div>
            </form>
        </div>
        </div>
        )}
        </>
    );
};

export default Login;