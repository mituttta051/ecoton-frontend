import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 mb-4">
            <Link href="/">Экопросвет</Link>
            <Button color="failure">Выйти</Button>
        </header>
    );
};

export default Header;
