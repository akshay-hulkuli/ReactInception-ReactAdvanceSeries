import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import Body from '../components/Body'
import MOCK_API_DATA from '../mocks/bodyMock.json'
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_API_DATA)
    }
  })
})

it('Should search res cards', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  })

  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", {name: "Search"});
  expect(searchBtn).toBeInTheDocument();



  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {target: {value:"South"}})
  fireEvent.click(searchBtn);
 

  const cardsAfterSearch = screen.getAllByTestId('resCard');
  expect(cardsAfterSearch.length).toBe(2);
})
