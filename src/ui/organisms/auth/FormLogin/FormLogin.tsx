"use client";

import { ILoginRequest } from "@/app/core/application/dto/auth";
import { FormField } from "@/ui/molecules";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/ui/atoms";
import Link from "next/link";
import "./formLoginStyles.scss";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email is Incorrect").required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .max(8, "Password must be less than 8 characters")
    .min(6, "Password must be more than 6 characters"),
});

export default function FormLogin(): React.ReactNode {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: ILoginRequest): void => {
    console.log(data);
  };
  return (
    <div className="content-form">
      <form className="form" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-title">
            <h2 className="form-login-title">Iniciar sesión</h2>
            <p>Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>
        <FormField<ILoginRequest>
          control={control}
          label="Email"
          name="email"
          type="email"
          placeholder="tu@gmail.com"
          id="email"
          error={errors.email}
        />
        <FormField<ILoginRequest>
          control={control}
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          id="password"
          error={errors.password}
        />
        <Button className="button-login">Iniciar sesión</Button>
        <div className="form-separator">
            <Link className="separator-password" href="/auth/forgot-password">¿Olvidaste tu contraseña</Link>
            <p>¿No tienes una cuenta? <Link className="separator-register" href="/auth/register">Registrate aquí</Link></p>
        </div>
      </form>
    </div>
  );
}
