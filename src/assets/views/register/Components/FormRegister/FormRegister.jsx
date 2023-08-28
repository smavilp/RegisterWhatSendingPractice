import React from "react";
import "./FormRegister.style.css";

const FormRegister = ({ register, handleSubmit, errors, getValues }) => {
  return (
    <form className="FormRegister" onSubmit={handleSubmit}>
      <fieldset className="FormRegister__fieldset--company">
        <legend className="FormRegister__legend--company">
          Datos de la empresa
        </legend>
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Nombre de la empresa"
          name="clientName"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Número de identificación"
          name="clientIdNumber"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Correo electrónico de la empresa"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Dirección de la empresa"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="País"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Provincia"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Ciudad"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Seleccione un código de país"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
        <input
          className="FormRegister__input FormRegister__input--phone"
          type="text"
          placeholder="Número de teléfono"
          name="phone"
          {...register("phone", { required: true })}
        />
        {errors.phone && <p className="error__msg">Este campo es requerido.</p>}
      </fieldset>

      <div className="FormRegister__div">
        <img className="FormRegister__img" src="warning.svg" alt="" />
        <p className="FormRegister__p">
          IMPORTANTE: Solo las cuentas válidas podrán probar y utilizar la
          plataforma. Verificaremos los mensajes enviados para evitar intentos
          de fraude o malos usos
        </p>
      </div>
      <fieldset className="FormRegister__fieldset--user">
        <legend>Datos del usuario administrador</legend>
        <input
          className="FormRegister__input FormRegister__input--email"
          type="text"
          placeholder="Nombre"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--email"
          type="text"
          placeholder="Apellidos"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--email"
          type="text"
          placeholder="Número de identificación"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--email"
          type="text"
          placeholder="Correo electrónico"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--email"
          type="text"
          placeholder="Seleccione un código de país"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--email"
          type="text"
          placeholder="Número de teléfono"
          name="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--password"
          type="password"
          placeholder="Contraseña"
          name="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="error__msg">Este campo es requerido.</p>
        )}
        <input
          className="FormRegister__input FormRegister__input--password"
          type="password"
          placeholder="Repite tu contraseña"
          name="passwordRepetition"
          {...register("passwordRepetition", {
            required: true,
            validate: (value) =>
              value === getValues("password") || "Las contraseñas no coinciden"
          })}
        />
        {errors.passwordRepetition && (
          <p className="error__msg">
            Este campo es requerido, asegúrese que las contraseñas coincidan.
          </p>
        )}
        <span>Este usuario se usará para iniciar sesión en la aplicación</span>
      </fieldset>

      <button className="FormRegister__btn">
        <img className="FormRegister__btn--img" src="button-icon.svg" alt="" />
        <span className="FormRegister__btn--span">crear cuenta</span>
      </button>
    </form>
  );
};

export default FormRegister;
