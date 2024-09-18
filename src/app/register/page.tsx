"use client";

import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Участник");
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    const [type, setType] = useState("Юридическое лицо");
    const [organizerId, setOrganizerId] = useState("");

    const [jobPlace, setJobPlace] = useState("");

    const handleSubmit = () => {
        if (role === "Участник") {
            console.log(name, email, role, gender, age, password);
        } else if (role === "Организатор") {
            console.log(name, email, role, type, organizerId, password);
        } else {
            console.log(name, email, role, jobPlace, password);
        }
    };
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="max-w-md">
                    <div className="mb-2 block">
                        <Label htmlFor="role" value="Кто вы?" />
                    </div>
                    <Select
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                        }}
                        id="role"
                        required
                    >
                        <option>Участник</option>
                        <option>Организатор</option>
                        <option>Сотрудник департамента</option>
                    </Select>
                </div>
                {role === "Участник" && (
                    <>
                        <p>Ваш пол</p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <Radio
                                    value={gender}
                                    onChange={(e) => setGender("male")}
                                    checked={gender === "male"}
                                />
                                <Label htmlFor="united-state">Мужчина</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    value={gender}
                                    onChange={(e) => setGender("female")}
                                    checked={gender === "female"}
                                />
                                <Label htmlFor="united-state">Женщина</Label>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="age" value="Возраст" />
                            </div>
                            <TextInput
                                id="age"
                                type="text"
                                placeholder="18"
                                required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                    </>
                )}
                {role === "Организатор" && (
                    <>
                        <p>Тип организации</p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <Radio
                                    value={type}
                                    onChange={(e) =>
                                        setType("Юридическое лицо")
                                    }
                                    checked={type === "Юридическое лицо"}
                                />
                                <Label htmlFor="united-state">
                                    Юридическое лицо
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio
                                    value={type}
                                    onChange={(e) => setType("НКО")}
                                    checked={type === "НКО"}
                                />
                                <Label htmlFor="united-state">НКО</Label>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="oranizerId" value="ID" />
                            </div>
                            <TextInput
                                id="oranizerId"
                                type="text"
                                required
                                value={organizerId}
                                onChange={(e) => setOrganizerId(e.target.value)}
                            />
                        </div>
                    </>
                )}
                {role === "Сотрудник департамента" && (
                    <>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="jobPlace"
                                    value="Место работы"
                                />
                            </div>
                            <TextInput
                                id="jobPlace"
                                type="text"
                                required
                                value={jobPlace}
                                onChange={(e) => setJobPlace(e.target.value)}
                            />
                        </div>
                    </>
                )}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Пароль" />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="button" onClick={handleSubmit}>
                    Зарегестрироваться
                </Button>
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
