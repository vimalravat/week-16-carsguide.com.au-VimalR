package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuyPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuyPage.class.getName());

    public BuyPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyAndSellTab;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchCarsLink;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeOfCarsLink;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelOfCarsLink;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationOfCarsLink;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceOfCarsLink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarLink;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement usedCarsLink;



    public void mouseHoverOnBuyAndSellTab(){
        Actions actions= new Actions(driver);
        actions.moveToElement(buyAndSellTab).build().perform();

    }
    public void clickOnSearchCarsLink(){
        clickOnElement(searchCarsLink);
    }
    public void selectMakeOfCar(String make) {
        selectByVisibleTextFromDropDown(makeOfCarsLink, make);
    }
    public void selectModelOfCarsLink(String model) {
        selectByVisibleTextFromDropDown(modelOfCarsLink, model);
    }
    public void pickTheLocationOfCarsLink(String location) {
        selectByVisibleTextFromDropDown(locationOfCarsLink, location);
    }
    public void pickThePriceOfCarsLink(String price) {
        selectByVisibleTextFromDropDown(priceOfCarsLink, price);
    }
    public void clickOnFindMyNextCarLink(){
        clickOnElement(findMyNextCarLink);
    }
    public void clickOnUsedCarsLink(){
        clickOnElement(usedCarsLink);
    }

}


