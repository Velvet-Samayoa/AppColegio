import Logo from '../Imagenes/logo.png'
import './login.css'


const Login = ()=>{


    return(

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
                        
                        id="usuario" 
                        placeholder="Ingresa tu usuario" 
                    />
                </div>

                <div className="form-group m-2 bg-white">
                    <label className='bg-white m-1'>Contraseña:</label>
                    <input 
                        type="password" 
                        className="form-control"  
                        
                        id="contrasena" 
                        placeholder="Ingresa tu contraseña" 
                    />
                </div>
                
                                <div className="text-center mt-4">
                                    <button type="submit" id="submit"  className="justify-content-center">
                                        Enviar
                                    </button>
                                </div>
            </form>
        </div>
        </div>
        )}


export default Login;