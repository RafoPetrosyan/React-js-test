import { render, screen, fireEvent } from '@testing-library/react';
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

// describe("App", () => {
//   it("renders App component", async () => {
//     render(<App />);
//     // expect(screen.queryByText(/Searchs for React/i)).toBeNull();
//     expect(screen.queryByText(/Logged in as /i)).toBeNull();
//     screen.debug();
//     expect(await screen.findByText(/Logged in as/i)).toBeInTheDocument();
//     screen.debug();
//     expect(screen.getByAltText(/search image/i)).toHaveClass('image');
//     expect(screen.getByLabelText(/search/i)).not.toBeRequired();
//     expect(screen.getByLabelText(/search/i)).toHaveAttribute("id");
//
//   });
// });

describe("App", () => {
  test("renders App component", async () => {
    render(<App />);
    await screen.findByText(/Logged in as/i);
    expect(screen.queryByText(/Searches for React/)).toBeNull();
    fireEvent.change(screen.getByRole("textbox"), {
      target: {value: "React"},
    });
    screen.debug();
  });
});

describe("events", () => {
  it("checkbox click", () => {
    const handleChange = jest.fn();
    const {container} = render(
        <input type="checkbox" onChange={handleChange}/>
    );
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  })
})