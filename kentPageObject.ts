import {By, Builder, Capabilities, until, WebDriver} from 'selenium-webdriver';
import { BasePage } from './basePage';

export class kentPage extends BasePage {
    driver: WebDriver;
    url: string = "https://www.demoblaze.com/index.html";
    //selectors
    contactLink: By = By.xpath('(//a[@class="nav-link"])[2]');
    recipientEmail: By = By.xpath('(//input[@type="text"])[1]');
    recipientName: By = By.xpath('(//input[@type="text"])[2]');
    messageBox: By = By.xpath('(//textarea[@class="form-control"])');
    closeButton: By = By.xpath('//button[@class="btn btn-secondary"]');
    sendMessagebtn: By = By.xpath('//button[@class="btn btn-primary"]');
    carouselInner: By = By.xpath('//div[@class="carousel-inner"]');
    carouselPrev: By = By.xpath('//a[@class="carousel-control-next"]');
    carouselNext: By = By.xpath('//a[@class="carousel-control-prev"]');
    categoriesLink: By = By.xpath('//a[@id="cat"]');
    phonesLink: By = By.xpath('(//a[@id="itemc"])[1]');
    laptopsLink: By = By.xpath('(//a[@id="itemc"])[2]');
    monitersLink: By = By.xpath('(//a[@id="itemc"])[3]');
    nextLink: By = By.xpath('//button[@id="next2"]');
    previousLink: By = By.xpath('//button[@id="prev2"]');
    homeLink: By = By.xpath('(//a[@class="nav-link"])[1]');
    
    //constructor
    
    //methods
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        await this.driver.findElement(elementBy).clear()
        return this.driver.findElement(elementBy).sendKeys(keys)
    }

};