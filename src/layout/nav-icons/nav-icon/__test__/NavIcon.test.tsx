import { render, screen } from "@testing-library/react"
import NavIcon from "../NavIcon"

describe("nav icons tests", () => {
    test("renders nav icons", () => {
        render(<NavIcon name="" svgContent="" handleClick={jest.fn}/>)
        const navIcon = screen.getByTestId("test-nav-icon")
        expect(navIcon).toBeInTheDocument()
    })
})