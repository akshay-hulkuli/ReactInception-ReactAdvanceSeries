import { render, screen } from "@testing-library/react"
import ContactUs from "../components/ContactUs"
import "@testing-library/jest-dom"


describe('Contact us', () => {
    test("Should load contact us component", ()=> {
        render(<ContactUs />)
    
        const heading  = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact component", ()=> {
        render(<ContactUs />)
    
        const button  = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
    
    
    test("Should load input inside contact component", ()=> {
        render(<ContactUs />)
    
        const nameIput  = screen.getByPlaceholderText("name");
        expect(nameIput).toBeInTheDocument();
    })
    
    it("should load two input boxes", ()=> {
        render(<ContactUs/>)
    
        const inputBoxes = screen.getAllByRole("textbox")
        // expect(inputBoxes.length).not.toBe(3);
        expect(inputBoxes.length).toBe(2);
    }) 
});