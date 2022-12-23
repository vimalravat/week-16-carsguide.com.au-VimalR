package au.com.carsguide.steps;

import au.com.carsguide.pages.FindDealersPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class FindDealersSteps {
    @And("^I click 'Find a Dealer'$")
    public void iClickFindADealer() {
        new FindDealersPage().clickOnFindDealerLink();
    }

    @Then("^I navigate to 'car-dealers' page$")
    public void iNavigateToCarDealersPage() {
    }

    @And("^I should see the dealer names <dealersName> are display on page$")
    public void iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage() {


    }
}
