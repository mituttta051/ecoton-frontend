import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button size="sm" onClick={() => router.back()}>
            Назад
        </Button>
    );
};

export default BackButton;
