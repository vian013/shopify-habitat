import { render, screen } from "@testing-library/react"
import NavIcons from "../NavIcons"

describe("nav icons tests", () => {
    test("renders nav icons", () => {
        render(<NavIcons/>) 
        const navIcons = screen.getByTestId("test-nav-icons")
        expect(navIcons).toBeInTheDocument()
    })
})