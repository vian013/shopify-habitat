import { render, screen } from "@testing-library/react"
import MenuTab from "../MenuTab"

describe("menuTab tests", () => {
    test("renders menuTab", () => {
        render(<MenuTab link="" title=""/>)
        const menuTab = screen.getByTestId("test-menuTab")
        expect(menuTab).toBeInTheDocument()
    })
})