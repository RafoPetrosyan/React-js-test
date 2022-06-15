import { render, screen } from '@testing-library/react';
import App from './App';

// describe("App", () => {
//   it("renders App component", () => {
//     render(<App />);
//     expect(screen.getByText(/Search:/i)).toBeInTheDocument();
//     expect(screen.getByRole('textbox')).toBeInTheDocument();
//     expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
//     expect(screen.getByAltText("search image")).toBeInTheDocument();
//     expect(screen.getByDisplayValue("")).toBeInTheDocument();
//   });
// });

describe("App", () => {
  it("renders App component", async () => {
    render(<App />);
    // expect(screen.queryByText(/Searchs for React/i)).toBeNull();
    expect(screen.queryByText(/Logged in as /i)).toBeNull();
    screen.debug();
    expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
    screen.debug();
  });
});
