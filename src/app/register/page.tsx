import {Button, Label, Select, TextInput} from "flowbite-react";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10 border rounded-xl">
            <form className="flex w-[500px] flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Имя" />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="Robert"
                        required
                    />
                </div>
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
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="role" value="Кто вы?" />
                    </div>
                    <Select id="role" required>
                        <option>Участник</option>
                        <option>Администратор</option>
                        <option>Сотрудник департамента</option>
                    </Select>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Пароль" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <Button type="submit">Зарегестрироваться</Button>
                <p>
                    Уже есть аккаунт?{" "}
                    <Link href={"/login"}>
                        <b className="cursor-pointer">Войдите</b>
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
