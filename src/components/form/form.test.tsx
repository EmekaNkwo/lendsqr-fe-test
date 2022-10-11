import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";
import { BrowserRouter } from "react-router-dom";

test("email input should be rendered", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("email input should be empty", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toHaveValue("");
});

test("password input should be empty", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const passwordInputEl = screen.getByPlaceholderText(/email/i);
  expect(passwordInputEl).toHaveValue("");
});

test("error message should not be visible", () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  );
  const errorEl = screen.getByTestId("error");
  expect(errorEl).toHaveClass("offscreen");
});
