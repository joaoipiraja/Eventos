import React from 'react';
import './login.css';

function Login() {
    return (

        <div className="login-content dflex align-items-center">
            <form className="form-signin mx-auto">
                <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating mt-2 col-md-12">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mt-2 col-md-12">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3 mt-2 col-md-12">
                    <label>
                        <input type="checkbox" value="remember-me" />
            Remember me
          </label>
                </div>
                <button class="w-100 btn btn-lg btn-login" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </div>
    );
}

export default Login;