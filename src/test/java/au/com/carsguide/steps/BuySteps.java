package au.com.carsguide.steps;

import au.com.carsguide.pages.BuyPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuySteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on buy\\+sell tab$")
    public void iMouseHoverOnBuySellTab() {
        new BuyPage().mouseHoverOnBuyAndSellTab();
    }

    @And("^I click 'Search Cars' link$")
    public void iClickSearchCarsLink() {
        new BuyPage().clickOnSearchCarsLink();
    }

    @Then("^I navigate to 'new and used car search' page$")
    public void iNavigateToNewAndUsedCarSearchPage() {

    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
       new BuyPage().selectMakeOfCar(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new BuyPage().selectModelOfCarsLink(model);

    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)     {

        new BuyPage().pickTheLocationOfCarsLink(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new BuyPage().pickThePriceOfCarsLink(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new BuyPage().clickOnFindMyNextCarLink();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String arg0)  {

    }


    @And("^I click Used link$")
    public void iClickUsedLink() {
new BuyPage().clickOnUsedCarsLink();
    }

    @Then("^I navigate to Used Cars For Sale page$")
    public void iNavigateToUsedCarsForSalePage() {

    }

    @Then("^I should see the make \"([^\"]*)\"$")
    public void iShouldSeeTheMake() {

    }
}
