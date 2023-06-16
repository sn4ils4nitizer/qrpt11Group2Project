import { camPage } from "./camPOM";

const camTestOne = new camPage();

const fs = require("fs");

test("adding products", async () => {
    await camTestOne.navigate();
    await camTestOne.click(camTestOne.headerText);
    await camTestOne.click(camTestOne.phoneBtn);
    await camTestOne.click(camTestOne.productNokia152);
    await camTestOne.click(camTestOne.addToCartBtn);
    await camTestOne.driver.sleep(1500)
    await camTestOne.driver.switchTo().alert().accept()
    await camTestOne.click(camTestOne.cartIcon);
    await camTestOne.driver.sleep(1500)
    await camTestOne.click(camTestOne.placeOrderBtn);
    //let results = await camTestOne.getText(camTestOne.placeOrderPopUp);
    //expect(results).toContain("Name");
    await camTestOne.driver.sleep(1500);

    fs.writeFile(`${__dirname}/1addingToCart.png`,
        await camTestOne.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.log(e);
            else console.log("picture saved")

        })

    await camTestOne.driver.quit()
})
