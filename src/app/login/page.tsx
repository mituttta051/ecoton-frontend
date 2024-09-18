import {Button, Label, TextInput} from "flowbite-react";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 border rounded-xl">
            <form className="flex w-[500px] flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Еmail" />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Пароль" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <Button type="submit">Войти</Button>
                <p>
                    Еще нет аккаунта?{" "}
                    <Link href={"/register"}>
                        <b className="cursor-pointer">Зарегестрируйтесь</b>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
