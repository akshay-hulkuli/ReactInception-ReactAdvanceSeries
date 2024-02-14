import { fireEvent, render, screen } from '@testing-library/react'
import Header from '../components/Header'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { BrowserRouter } from 'react-router-dom'
import UserContext from '../utils/UserContext'

test('Should cart load on dom', () => {
  render(
    <BrowserRouter>
      <UserContext.Provider value={{ name: 'akshay' }}>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </UserContext.Provider>
    </BrowserRouter>
  )

  const headerList = screen.getAllByRole('listitem')
  expect(headerList.length).toBe(6)
})

test("should load login button", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{name: "akshay"}}>
                    <Header />
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", {name:"Login"})
    expect(loginButton).toBeInTheDocument();
})


test("should load cart items", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{name: "akshay"}}>
                    <Header />
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument();
})

test("should change login to logout onclick", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{name: "akshay"}}>
                    <Header />
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    )
    const loggingButton = screen.getByRole('button', {name:'Login'})
    fireEvent.click(loggingButton);

    const logoutButton = screen.getByText("LogOut");
    expect(logoutButton).toBeInTheDocument();
})
