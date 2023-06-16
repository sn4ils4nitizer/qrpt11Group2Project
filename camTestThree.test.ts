import { camPage } from "./camPOM"

const camTestThree = new camPage();

const fs = require("fs");

test("Able to send blank message", async () => {
    await camTestThree.navigate();
    await camTestThree.click(camTestThree.headerText);
    await camTestThree.click(camTestThree.contactIcon);
    //await camTestThree.driver.sleep(1500)
    //await camTestThree.click(camTestThree.sendMsg);
    await camTestThree.driver.sleep(1500);


    fs.writeFile(`${__dirname}/3emptyMsgBug.png`,
        await camTestThree.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.log(e);
            else console.log("screenshot3.");
        });

    await camTestThree.driver.quit()
});