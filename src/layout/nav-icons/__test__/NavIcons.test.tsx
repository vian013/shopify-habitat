import { render, screen } from "@testing-library/react"
import NavIcons from "../NavIcons"

describe("nav icons tests", () => {
    test("renders nav icons", () => {
        render(<NavIcons toggleSearch={()=>{}}/>) 
        const navIcons = screen.getByTestId("test-nav-icons")
        expect(navIcons).toBeInTheDocument()
    })
})