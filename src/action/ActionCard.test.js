import { render, screen } from "@testing-library/react";
import ActionCard from "./ActionCard";

const action = {
  timestamp: "2019-09-22T15:36:48.099208",
  type: "TurnFreshAirOff",
  temperature: 21.0,
  humidity: 12,
  id: "9717cc3e-115e-4165-ad1f-ad2f6af45239",
};

test("renders action temperature", () => {
  render(<ActionCard action={action} />);

  expect(screen.getByText("Temperature: 21")).toBeInTheDocument();
});

test("renders action type", () => {
  render(<ActionCard action={action} />);

  expect(screen.getByText("Action: TurnFreshAirOff")).toBeInTheDocument();
});

test("renders action humidity", () => {
    render(<ActionCard action={action} />);
  
    expect(screen.getByText("Humidity: 12")).toBeInTheDocument();
  });

  test("renders action date", () => {
    render(<ActionCard action={action} />);
  
    expect(screen.getByText("Date: 2019-09-22")).toBeInTheDocument();
  });

  test("renders action date with day lower than 10", () => {
    render(<ActionCard action={{...action,timestamp: "2019-09-09T15:36:48.099208" }} />);
  
    expect(screen.getByText("Date: 2019-09-09")).toBeInTheDocument();
  });
