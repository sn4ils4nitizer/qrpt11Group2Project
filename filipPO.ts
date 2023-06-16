import {By, until} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class filipPage2 extends BasePage {
    //selectors
    //top row buttons
    signUp: By = By.id("signin2");
    logIn: By = By.id("login2")
    shoppingCart: By = By.id("cartur");
    contact: By = By.xpath('//li[@class="nav-item"][1]');
    aboutUs: By = By.xpath('//a[contains(text(), "About us")]');
    home: By = By.xpath("//li[@class='nav-item active']");
    welcomeMsg: By = By.id("nameofuser");

    //log in pop up
    username: By = By.id("loginusername");
    password: By = By.id("loginpassword");
    loginBtn: By = By.xpath('//button[contains(text(), "Log in")]')

    //Product Categories
    monitors: By = By.xpath("//a[contains(text(), 'Monitors')]");
    laptops: By = By.xpath("//a[contains(text(), 'Laptops')]");
    phones: By = By.xpath("//a[contains(text(), 'Phones')]")

    //Products
    sonyXperia: By = By.xpath("//a[contains(text(), 'Sony xperia z5')]");
    appleMonitor: By = By.xpath("//a[contains(text(), 'Apple monitor')]");

    //Add to cart
    addToCart: By = By.xpath('//a[contains(text(), "Add to cart")]');

    //Cart contents
    shoppingCartContents: By = By.xpath('//td[contains(text(), "Sony")]');
    shoppingCartContents2: By = By.xpath('//td[contains(text(), "Apple")]');
    totalPrice: By = By.id("totalp");

    //Delete from cart
    delete: By = By.xpath("//a[contains(text(), 'Delete')]")

    //constructor
    constructor() {
        super({url: "https://www.demoblaze.com/index.html"});
    };

    //methods
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
};