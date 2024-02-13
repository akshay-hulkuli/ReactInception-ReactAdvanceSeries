import { render, screen } from "@testing-library/react"
import ContactUs from "../components/ContactUs"
import "@testing-library/jest-dom"

test("Should load contact us component", ()=> {
    render(<ContactUs />)

    const heading  = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load button inside contact component", ()=> {
    render(<ContactUs />)

    const button  = screen.getByText("button");
    expect(button).toBeInTheDocument();
})


test("Should load input inside contact component", ()=> {
    render(<ContactUs />)

    const button  = screen.getByPlaceholderText("name");
    expect(button).toBeInTheDocument();
})