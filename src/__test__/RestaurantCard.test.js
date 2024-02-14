import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromtedLable } from "../components/RestaurantCard"
import RES_MOCK from "../mocks/restaurantCardMock.json"
import "@testing-library/jest-dom"

test("Should render component with props data", ()=> {
    render(
        <RestaurantCard restuarantData={RES_MOCK}/>
    )

    const title = screen.getByText("The Rameshwaram Cafe");
    expect(title).toBeInTheDocument();
})

test("Should render restaurantCard with promoted label", () => {
    const RestaurantCardWithPromotedLable = withPromtedLable(RestaurantCard);
    render(<RestaurantCardWithPromotedLable restuarantData = {RES_MOCK} />)
    const promotedLabel = screen.getByText("The Rameshwaram Cafe");
    expect(promotedLabel).toBeInTheDocument();
})