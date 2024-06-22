import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { Login } from "../pages"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<Login />)
    expect(true).toBeTruthy()
})
