import { render, screen } from "@testing-library/react"
import Logo from "../Logo"

describe("logo tests", () => {
    test("renders logo", () => {
        render(<Logo link="" alt="" url=""/>)
        const logo = screen.getByTestId("test-logo")
        expect(logo).toBeInTheDocument()
    })
})