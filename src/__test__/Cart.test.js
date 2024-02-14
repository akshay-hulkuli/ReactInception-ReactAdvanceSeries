import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import RestaurantMenu from '../components/RestuarantMenu'
import RES_MENU from '../mocks/restaurantMenu.json'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import Header from '../components/Header'
import Cart from '../components/Cart'

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
  const recommendedHeader = screen.getByTestId('accordian-button -Recommended')
  fireEvent.click(recommendedHeader)

  const recipe = screen.getAllByTestId('recipe-header')
  expect(recipe.length).toBe(20)
})

it('should add a recipe to cart', async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  })
  const recommendedHeader = screen.getByTestId('accordian-button -Recommended')
  fireEvent.click(recommendedHeader)

  const recipe = screen.getAllByTestId('recipe-header')
  expect(recipe.length).toBe(20)

  const itemAddButton = screen.getByTestId('item-add-Chicken Chizza')
  fireEvent.click(itemAddButton);

  const cartCountText = screen.getByText('Cart (1)');
  expect(cartCountText).toBeInTheDocument();

  const finalRecipeAfterAddingItToCart =  screen.getAllByTestId('recipe-header');
  expect(finalRecipeAfterAddingItToCart.length).toBe(21);

  const clearCartButton = screen.getByText('Clear Cart');
  fireEvent.click(clearCartButton);

  const cartCountText2 = screen.getByText('Cart (0)');
  expect(cartCountText2).toBeInTheDocument();

  const recipeListAfterClear = screen.getAllByTestId('recipe-header');
  expect(recipeListAfterClear.length).toBe(20)

})
