import React,{ useState } from 'react';
import './cadastro.css';
import 'firebase/auth';
import { toast } from "react-toastify";
import firebase from '../../config/firebase';
import 'firebase/auth';

function Cadastro() {

    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();

    function cadastrar(){
    
        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
            toast.success("Usuário cadastrado com sucesso");  
        }).catch(error => {
            console.log(error);
            toast.error(error["message"]);
        });

        setEmail("");
        setSenha("");

    }
    
    return(
        <div className="cadastro-content dflex align-items-center">
        
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold text-white">Cadastro</h1>
                <div class="form-floating mt-2 col-md-12">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mt-2 col-md-12">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" onChange={(e) => {setSenha(e.target.value)}} value={senha}/>
                    <label for="floatingPassword">Senha</label>
                </div>
                <button type="button" className="w-100 btn btn-lg btn-cadastro mt-4" onClick={cadastrar}>Cadastrar</button>
            </form>


                
            
     
        </div>
    );
}

export default Cadastro;