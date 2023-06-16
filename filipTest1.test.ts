import { filipPage2 } from "./filipPO";
const filipTest1 = new filipPage2();

const fs = require("fs");

describe("Testing Demoblaze", () => {
    beforeEach(async ()=> {
        await filipTest1.navigate();
    });



test("Add Products to Shopping Cart", async () => {
    await filipTest1.driver.manage().window().maximize();
    await filipTest1.click(filipTest1.sonyXperia);
    await filipTest1.click(filipTest1.addToCart);
    await filipTest1.driver.sleep(1000);
    await filipTest1.driver.switchTo().alert().accept();
    await filipTest1.click(filipTest1.shoppingCart);
    let results = await filipTest1.getText(filipTest1.shoppingCartContents);
    expect(results).toContain("Sony xperia");
    await filipTest1.click(filipTest1.delete);

    fs.writeFile(`${__dirname}/demoblazeShoppingCart.png`,
    await filipTest1.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });
    });

test("Remove Products from Shopping Cart", async ()=> {
    //Shopping cart contents are loaded in a random order
    //I decided to convert total from string to integer
    //and check if the total is equal to or less than
    //the most expensive added item in cart, since I had no control
    //over which item would be deleted from the cart
    await filipTest1.click(filipTest1.home);
    await filipTest1.click(filipTest1.phones);
    await filipTest1.click(filipTest1.sonyXperia);
    await filipTest1.click(filipTest1.addToCart);
     //Sleep waits for alert pop up
    await filipTest1.driver.sleep(1000);
    await filipTest1.driver.switchTo().alert().accept();
    //Need driver to switch to alert window and click ok
    await filipTest1.click(filipTest1.home);
    await filipTest1.click(filipTest1.monitors);
    await filipTest1.click(filipTest1.appleMonitor);
    await filipTest1.click(filipTest1.addToCart);
    //Sleep waits for alert pop up
    await filipTest1.driver.sleep(1000);
    //Need driver to switch to alert window and click ok
    await filipTest1.driver.switchTo().alert().accept();
    await filipTest1.click(filipTest1.shoppingCart);
    await filipTest1.click(filipTest1.delete);
    //Need driver to sleep so that shopping cart can update, otherwise the total is for both products
    await filipTest1.driver.sleep(1000);
    let results2 = await filipTest1.getText(filipTest1.totalPrice);
    let results4 = parseInt(results2);
    expect(results4).toBeLessThanOrEqual(400);
    //Without sleep screenshot is taken while two products are still in the cart
    await filipTest1.driver.sleep(1000);
    
    fs.writeFile(`${__dirname}/demoblazeShoppingCart2.png`,
    await filipTest1.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });
    }); 

test("User can log in", async ()=> {
    await filipTest1.navigate();
    await filipTest1.click(filipTest1.logIn);
    await filipTest1.setInput(filipTest1.username, "BruceWayne");
    await filipTest1.setInput(filipTest1.password, "Batman");
    await filipTest1.click(filipTest1.loginBtn);
    //Without sleep I receive stale element error because the page is not done loading the welcome message
    await filipTest1.driver.sleep(1000);
    let results3 = await filipTest1.getText(filipTest1.welcomeMsg);
    expect(results3).toContain("Welcome");

    
    fs.writeFile(`${__dirname}/demoblazeLoggedIn.png`,
    await filipTest1.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.log(e);
        else console.log("Screenshot has been saved.")
        });

    });
    
    afterAll(async ()=> {
        await filipTest1.driver.quit();
    });
});