import { render, screen } from "@testing-library/react"
import Menu from "../Menu"

describe("menu tests", () => {
    test("renders menu", () => {
        render(<Menu tabList={[]}/>)
        const menu = screen.getByTestId("test-menu")
        expect(menu).toBeInTheDocument()
    })
})