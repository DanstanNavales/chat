import React from "react";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import Redirectinfo from "../../shared/component/Redirectinfo";
import { useNavigate } from "react-router-dom";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  return (
    <>
      <div>
        <CustomPrimaryButton
          label="Register"
          additionalStyles={{ marginTop: "30px" }}
          disable={!isFormValid}
          onClick={handleRegister}
        />
      </div>
      <Redirectinfo
        text="Need an account? "
        redirectText="Already have an account? "
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
