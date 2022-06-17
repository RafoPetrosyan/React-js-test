import {render, screen, fireEvent, findAllByRole} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import axios from "axios";

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
//////////////////////////////////////////////////////////////////
// describe("App", () => {
//   test("renders App component", async () => {
//     render(<App />);
//     await screen.findByText(/Logged in as/i);
//     expect(screen.queryByText(/Searches for React/)).toBeNull();
//     fireEvent.change(screen.getByRole("textbox"), {
//       target: {value: "React"},
//     });
//     screen.debug();
//   });
// });
//
// describe("events", () => {
//   it("checkbox click", () => {
//     const handleChange = jest.fn();
//     const {container} = render(
//         <input type="checkbox" onChange={handleChange}/>
//     );
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked();
//     // fireEvent.click(checkbox);
//     userEvent.click(checkbox);
//     // expect(handleChange).toHaveBeenCalledTimes(1);
//     expect(checkbox).toBeChecked();
//   });
//
//   it("input focus", () => {
//     const { getByTestId } = render(
//         <input type="text" data-testid="simple-input" />
//     );
//     const input = getByTestId("simple-input");
//     expect(input).not.toHaveFocus();
//     input.focus();
//     expect(input).toHaveFocus();
//   });
//
//   it("double click", () => {
//     const onChange = jest.fn();
//     const { container } = render(<input type="checkbox" onChange={onChange}/>);
//     const checkbox = container.firstChild;
//     expect(checkbox).not.toBeChecked();
//     userEvent.dblClick(checkbox);
//     expect(onChange).toHaveBeenCalledTimes();
//   });
//
//   it("focus", () => {
//     const { getAllByTestId } = render(
//         <div>
//           <input data-testid="element" type="checkbox"/>
//           <input data-testid="element" type="radio"/>
//           <input data-testid="element" type="number"/>
//         </div>
//     );
//     const [checkbox, radio, number] = getAllByTestId('element');
//     userEvent.tab();
//     expect(checkbox).toHaveFocus();
//   });
//
//   it("select option", () => {
//       const { selectOptions, getByRole, getByText } = render(
//           <select>
//             <option value="1">A</option>
//             <option value="2">B</option>
//             <option value="3">C</option>
//           </select>
//       )
//       userEvent.selectOptions(getByRole('combobox'), "1");
//       expect(getByText("A").selected).toBeTruthy();
//
//       userEvent.selectOptions(getByRole('combobox'), "2");
//       expect(getByText("B").selected).toBeTruthy();
//       expect(getByText("A").selected).toBeFalsy();
//   })
// });
//

/////////////////////////////////////////////


jest.mock("axios");
const hits = [
    {
        objectID: "1",
        title: "Angular",
    },
    {
        objectID: "2",
        title: "React",
    },
];
describe("App", () => {
    it("fetches news from an API", async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {hits}}));
        const { getByRole, findAllRole } = render(<App/>);
        userEvent.click(getByRole("button"));
        const items = await findAllByRole("listitem");
        expect(items).toHaveLength(2);

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith("http://hn.algolia.com/api/v1/search?query=React");
    });
});
