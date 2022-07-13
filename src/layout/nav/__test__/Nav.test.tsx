import { render, screen } from "@testing-library/react"
import Nav from "../Nav"

describe("nav tests", () => {
    test("renders nav", () => {
        render(<Nav toggleSearch={()=>{}}  openCart={()=>{}}/>)
        const nav = screen.getByTestId("test-nav")
        expect(nav).toBeInTheDocument()
    })
})