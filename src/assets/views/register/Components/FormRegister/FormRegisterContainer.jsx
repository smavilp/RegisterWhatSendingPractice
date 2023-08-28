import React from "react";
import { useForm } from "react-hook-form";
import FormRegister from "./FormRegister";
import axios from "axios";

const FormRegisterContainer = () => {
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    const { password, passwordRepetition } = data;
    if (password !== passwordRepetition) {
      return;
    }
    axios
      .post("/createUser", data)
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  };

  return (
    <FormRegister
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      errors={errors}
      getValues={getValues}
    />
  );
};

export default FormRegisterContainer;
