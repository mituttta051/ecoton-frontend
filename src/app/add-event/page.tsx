"use client";

import BackButton from "@/components/Back-Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import {
    Button,
    Datepicker,
    FileInput,
    Label,
    Textarea,
    TextInput,
} from "flowbite-react";
import React from "react";

const AddEvent = () => {
    return (
        <Container>
            <Header />
            <BackButton />
            <div className="w-[1000px] p-5 border m-auto rounded-xl">
                <div className="w-[500px] mb-5">
                    <div>
                        <Label
                            htmlFor="multiple-file-upload"
                            value="Добавьте превью предприятия"
                        />
                    </div>
                    <FileInput id="multiple-file-upload" multiple />
                </div>
                <div className="flex max-w-md flex-col gap-4 mb-5">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="small"
                                value="Название мероприятия"
                            />
                        </div>
                        <TextInput
                            id="small"
                            type="text"
                            sizing="sm"
                            placeholder="Leave a comment..."
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="comment" value="Время проведения" />
                        </div>
                        <Datepicker />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="comment"
                                value="Описание мероприятия"
                            />
                        </div>
                        <Textarea
                            id="comment"
                            placeholder="Leave a comment..."
                            required
                            rows={4}
                        />
                    </div>
                </div>
                <Button color="success" size="md">
                    Success
                </Button>
            </div>
        </Container>
    );
};

export default AddEvent;
