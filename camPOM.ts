import { By, WebDriver, WebElement, until } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class camPage extends BasePage { //test one and two (able to place order with empty cart)
    headerText: By = By.id("nava");
    phoneBtn: By = By.id("itemc");
    productNokia152: By = By.xpath('(//a[@class="hrefch"])[2]');
    addToCartBtn: By = By.xpath('//a[@class="btn btn-success btn-lg"]');
    cartIcon: By = By.id('cartur');
    placeOrderBtn: By = By.xpath('//button[text() = "Place Order"]');
    placeOrderPopUp: By = By.xpath('(//div[@class ="modal-content"])[2]');

    contactIcon: By = By.xpath('//a[text() = "Contact"]');

    //test three(able to send blank message)
    sendMsg: By = By.xpath('//button[text() = "Send message"]')






    constructor() {
        super({ url: "https://www.demoblaze.com/index.html" })
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }

}

    //selectors
    //constructor
    //methods ?
