import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import RestaurantMenu from '../components/RestuarantMenu'
import RES_MENU from '../mocks/restaurantMenu.json'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_MENU)
    }
  })
})

jest.mock('../assets/veg-icon.png', () => '../assets/veg-icon.png')
jest.mock('../assets/non-veg-icon.png', () => '../assets/non-veg-icon.png')

it('should load restaurant menu page', async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    )
  })
  const recommendedHeader = screen.getByText(/Recommended/)
  expect(recommendedHeader).toBeInTheDocument()
})


it('should load restaurant menu page and expand recommened', async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <RestaurantMenu />
          </BrowserRouter>
        </Provider>
      )
    })
    const recommendedHeader = screen.getByText(/Recommended/)
    expect(recommendedHeader).toBeInTheDocument()
  })
