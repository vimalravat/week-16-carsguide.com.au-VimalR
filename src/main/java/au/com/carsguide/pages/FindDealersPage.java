package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FindDealersPage extends Utility {
    private static final Logger log = LogManager.getLogger(FindDealersPage.class.getName());

    public FindDealersPage() {
        PageFactory.initElements(driver, this);
    }



    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Find a Dealer')]")
    WebElement findDealerTab;

    @CacheLookup
    @FindBy(xpath = "//input[@id='keyword']")
    WebElement findDealerTabOnDealersPage;


    public void clickOnFindDealerLink(){
        clickOnElement(findDealerTab);
    }
    public void clickOnFindDealerTabOnDealersLink(String dealerName){

        sendTextToElement(findDealerTabOnDealersPage, dealerName);
    }



}


