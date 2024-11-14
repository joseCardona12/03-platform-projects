/*"use client";

import { ILoginRequest, IRegisterRequest } from "@/app/core/application/dto/auth";
import { FormField } from "@/ui/molecules";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, inputAlert } from "@/ui/atoms";
import Link from "next/link";
import "./formLoginStyles.scss";
import { signIn } from "next-auth/react";
import { Util } from "@/app/core/application/utils";
import { useRouter } from "next/navigation";

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email is Incorrect")
    .required("Email is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .max(12, "Password must be less than 12 characters")
    .min(3, "Password must be more than 3 characters")
    .required("The password is required"),
  name: yup
    .string()
    .max(10, "The Password must be less than 12 characters")
    .min(3, "The password mush be more than 3 characters")
    .required("The nam is required"),
  role: yup 
    .string()
    .required("The role is required"),
  photo: yup.mixed()
    .required("The photo is required")
    
});

export default function FormRegister(): React.ReactNode {

  const router = useRouter();
  
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(registerSchema),
  });


  const handleRegister: SubmitHandler<IRegisterRequest> = async(data: IRegisterRequest):Promise<void> =>{
    console.log("data", data);
  }
  return ( 
    <div className="content-form">
      <form className="form" onSubmit={handleSubmit(handleRegister)}>
        <div className="form-title">
            <h2 className="form-login-title">Iniciar sesión</h2>
            <p>Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>
        <FormField<IRegisterRequest>
          control={control}
          label="Email"
          name="email"
          type="email"
          placeholder="tu@gmail.com"
          id="email"
          error={errors.email}
        />
        <FormField<IRegisterRequest>
          control={control}
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          id="password"
          error={errors.password}
        />

        <FormField<IRegisterRequest>
          control={control}
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your nameUser"
          id="name"
          error={errors.name}
        />

        <FormField<IRegisterRequest>
          control={control}
          label="Role"
          name="role"
          type="role"
          placeholder="Enter your role"
          id="role"
          error={errors.role}
        />
        <FormField<IRegisterRequest>
          control={control}
          label="Photo"
          name="photo"
          type="file"
          placeholder="Enter your photo"
          id="photo"
          error={(errors.photo) ? errors.photo}
        />

        <Button className="button-login">Iniciar sesión</Button>
        <div className="form-separator">
            <Link className="separator-password" href="/auth/forgot-password">¿Olvidaste tu contraseña</Link>
            <p>¿No tienes una cuenta? <Link className="separator-register" href="/auth/register">Registrate aquí</Link></p>
        </div>
      </form>
    </div>
  );
}*/
