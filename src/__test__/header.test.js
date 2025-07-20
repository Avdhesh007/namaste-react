import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

it("should render header component with login button", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = await screen.getAllByRole("button", { name: "Login" });
  expect(loginButton.length).toBe(1);
});

it("should render header with cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart-0");
  expect(cartItems).toBeInTheDocument();
});

it("should render heaader with click on login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const logInButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(logInButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});
