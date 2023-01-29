import { render } from "@testing-library/react";
import React from "react";
import App from "../../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const validProps = {
      location: {
        city: "Manchester",
        country: "UK",
      },
      forecasts: {
        date: 2222222,
        humidity: 80,
        wind: {
          speed: 30,
          direction: "s",
        },
        temperature: {
          max: 33,
          min: 22,
        },
      },
    };
  });
  const { asFragment } = render(
    <App />
  );

  expect(asFragment()).toMatchSnapshot();
});
