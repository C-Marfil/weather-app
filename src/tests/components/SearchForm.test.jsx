import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("Search Form feature", () => {
  const validProps = {
    searchText: "Liverpool",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("Snapshot test", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Renders the button correctly", () => {
    const { getByText } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );

    expect(getByText("Set Location")).toHaveAttribute("class", "search-button");
  });
});
