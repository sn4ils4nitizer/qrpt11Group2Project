import { kentPage } from "./kentPageObject";

const kent = new kentPage();

const fs = require("fs");


test('Sending a message via contact link', async () => {
    await kent.navigate();
    await kent.click(kent.contactLink);
    await kent.driver.sleep (1500);
    await kent.click(kent.recipientEmail);
    await kent.sendKeys(kent.recipientEmail, "karen.harrison@email.com\n");
    await kent.click(kent.recipientName);
    await kent.sendKeys(kent.recipientName, "Karen Harrison\n");
    await kent.click(kent.messageBox);
    await kent.sendKeys(kent.messageBox, "I want to speak with your manager!\n");
    await fs.writeFile(`${__dirname}/thanks.png`,
    await kent.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e);
        else console.log('Save Succesful');
    });
    await kent.click(kent.sendMessagebtn);
    await kent.driver.sleep (1500);
     let receiveMessage = await kent.driver.switchTo().alert().getText();
    expect(receiveMessage).toEqual("Thanks for the message!!");
    kent.driver.switchTo().alert().accept();
 

});

test('Clicking Carousel', async () => {
    await kent.navigate();
    await kent.click(kent.carouselInner);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/carousel_1.png`,
    await kent.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e);
        else console.log('Save Succesful');
    });
    await kent.click(kent.carouselNext);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/carousel_2.png`,
    await kent.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e);
        else console.log('Save Succesful');
    });
    await kent.click(kent.carouselNext);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/carousel_3.png`,
    await kent.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e);
        else console.log('Save Succesful');
    });
    await kent.driver.sleep (1500);
    await kent.click(kent.carouselPrev);
    await kent.driver.sleep (1500);
    await kent.click(kent.carouselPrev);
    await kent.driver.sleep (1500);
    await kent.click(kent.carouselPrev);
    await kent.driver.sleep (1500);
    await kent.click(kent.carouselPrev);

});

test('Filters', async () => {
    await kent.navigate();
    await kent.click(kent.homeLink);
    await kent.click(kent.categoriesLink);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/categories.png`,
     await kent.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
    await kent.click(kent.phonesLink);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/phones.png`,
     await kent.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
    await kent.click(kent.laptopsLink);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/laptops.png`,
     await kent.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
    await kent.click(kent.monitersLink);
    await kent.driver.sleep (1500);
    await fs.writeFile(`${__dirname}/moniters.png`,
     await kent.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
    await kent.click(kent.nextLink);
    await kent.driver.sleep (1500)
    await fs.writeFile(`${__dirname}/next.png`,
     await kent.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
    await kent.click(kent.previousLink);
    await kent.driver.sleep (1500)
    await fs.writeFile(`${__dirname}/previous.png`,
     await kent.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     })
     await kent.driver.quit()

});
