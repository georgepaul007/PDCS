import react from "react";

const Login = () => {
  return <>	
  <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100 p-t-30 p-b-50">
      <span className="login100-form-title p-b-41">
        Account Login
      </span>
      <form className="login100-form validate-form p-b-33 p-t-5">

        <div className="wrap-input100 validate-input" data-validate = "Enter username">
          <input className="input100" type="text" name="username" placeholder="User name"/>
          <span className="focus-input100" data-placeholder="&#xe82a;"></span>
        </div>

        <div className="wrap-input100 validate-input" data-validate="Enter password">
          <input className="input100" type="password" name="pass" placeholder="Password"/>
          <span className="focus-input100" data-placeholder="&#xe80f;"></span>
        </div>

        <div className="container-login100-form-btn m-t-32">
          <button className="login100-form-btn">
            Login
          </button>
        </div>

      </form>
    </div>
  </div>
</div></>;
};

export default Login;
