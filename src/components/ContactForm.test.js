import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "mutationobserver-shim";

test("Automatically capitalizes first letter in firstname input", ()=>
{
    const { getByLabelText } = render(<ContactForm />);

    const username = getByLabelText("firstName-input");

    fireEvent.change(username, { target: { value: "rodgers" } });
    expect(username.value).toBe("Rodgers");
});