import React from "react";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import Redirectinfo from "../../shared/component/Redirectinfo";
import { useNavigate } from "react-router-dom";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Log in"
          additionalStyles={{ marginTop: "30px" }}
          disable={!isFormValid}
          onClick={handleLogin}
        />
      </div>
      <Redirectinfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
