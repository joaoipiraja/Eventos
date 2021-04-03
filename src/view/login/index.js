import React, { useState } from 'react';
import './login.css';
import mainLogo from '../../assets/logo.svg';
import firebase from '../../config/firebase';
import 'firebase/auth';


function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo,setMsgTipo] = useState();

    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo("sucesso");
            setEmail("");
            setSenha("");
        }).catch(error => {
            alert(error);
        });



    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setSenha(e.target.value);
    }


    return (

        <div className="login-content dflex align-items-center">
            <form className="form-signin mx-auto">
                <img class="mb-4" src={mainLogo} alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal text-white font-weight-bold">Login</h1>

                <div class="form-floating mt-2 col-md-12">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange} value={email}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mt-2 col-md-12">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" onChange={handlePasswordChange} value={senha}/>
                    <label for="floatingPassword">Senha</label>
                </div>

                <button class="w-100 btn btn-lg btn-login mt-4" type="button" onClick={logar}> Sign in</button>


            </form >

            <div className="msg-login text-white text-center my-2">
                { msgTipo === "sucesso" ? <span><strong>Wow!</strong> você está conectado! &#128526;</span> : <span><strong>Ops!</strong> Verifique se usuário ou senha estão corretos!  &#128549;</span>}
                
            </div>

            <div className="opcoes-login text-center  my-2">
                <a href="#" className="mx-2"> Recuperar senha </a>
                <span className="text-white"> &#9733;</span>
                <a href="#" className="mx-2"> Quero senha </a>
            </div>

        </div >
    );
}

export default Login;