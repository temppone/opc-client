import { screen } from "@testing-library/react";
import React from "react";
import Button from ".";
import { renderWithTheme } from "../../routes/renderWithTheme";
import { mainTheme } from "../../styles/theme";

describe("<Button />", () => {
  it("should render the small button", () => {
    renderWithTheme(
      <Button size="small" name="Hello" onClick={() => console.log("click")}>
        Hello
      </Button>
    );

    expect(screen.getByRole("button", { name: "Hello" })).toHaveStyle({
      "font-size": mainTheme.font.sizes.xxsmall,
    });
  });

  it("should render the medium button", () => {
    renderWithTheme(
      <Button size="medium" name="Hello" onClick={() => console.log("click")}>
        Hello
      </Button>
    );

    expect(screen.getByRole("button", { name: "Hello" })).toHaveStyle({
      "font-size": mainTheme.font.sizes.xsmall,
    });
  });

  it("should render the large button", () => {
    renderWithTheme(
      <Button size="large" name="Hello" onClick={() => console.log("click")}>
        Hello
      </Button>
    );

    expect(screen.getByRole("button", { name: "Hello" })).toHaveStyle({
      "font-size": mainTheme.font.sizes.xxlarge,
    });
  });
});
