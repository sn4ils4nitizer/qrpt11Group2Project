import { camPage } from "./camPOM";

const camTestTwo = new camPage();

const fs = require("fs");

test("can't place order if cart is empty", async () => {
    await camTestTwo.navigate();
    await camTestTwo.click(camTestTwo.cartIcon);
    await camTestTwo.click(camTestTwo.placeOrderBtn)
    await camTestTwo.driver.sleep(1500)

    //let results = await camTestTwo.getText(camTestTwo.placeOrderBtn);
    //expect(results).toContain("place Order");


    fs.writeFile(`${__dirname}/2placeEmptyOrderBug.png`,
        await camTestTwo.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.log(e);
            else console.log("screenshot.");
        })
    await camTestTwo.driver.quit()
});

