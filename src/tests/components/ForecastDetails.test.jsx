import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("Forecast Details", () => {
  const validProps = {
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
  };

  it("Renders Forecast Details", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct element", () => {
    const { getByTestId } = render(<ForecastDetails forecast={validProps} />);
    const ancestor = getByTestId("ancestor");
    const descendant = getByTestId("descendant");

    expect(ancestor).toContainElement(descendant);
  });
});
