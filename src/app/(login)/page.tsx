"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FaGear } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { email, password } = data;

    if (email === "rodrigoantunestutz@gmail.com" && password === "123456789") {
      router.push("/painel");
    } else {
      setErrorMessage("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/6 flex flex-col justify-center border border-gray-300 rounded p-5 shadow-lg"
      >
        <h2 className="text-2xl mb-5 font-bold flex items-center gap-1">
          <FaGear />
          Acesse o Sistema
        </h2>

        <div className="mb-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email")}
            placeholder="Insira seu email"
            className="border-2"
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            placeholder="Insira sua senha"
            className="border-2"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
        )}

        <div className="w-full mt-5">
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </div>

        <div className="mt-3 text-xs flex flex-row gap-1 justify-end">
          <span>Esqueceu a senha?</span>
          <a href="#" className="border-b border-black">
            Clique aqui!
          </a>
        </div>
      </form>
    </div>
  );
}
