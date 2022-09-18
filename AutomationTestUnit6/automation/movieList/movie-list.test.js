const {builider, Capabilities, By, Builder} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get("http://127.0.0.1:8080/")
});

afterAll(async () => {
    await driver.quit();
});

test("add a movie to the list", async () => {
    const inputField = await driver.findElement(By.xpath("//input"));
    await inputField.sendKeys("Tenet\n")
    await driver.sleep(2000); //sleeps driver for 2 seconds
});

test("csn strikethrough a listed movie", async () => {
    const movieTitle = await driver.findElement(By.xpath("//span"))
    await movieTitle.click()
    await driver.sleep(2000)
    
});

test("delete movie from list", async () => {
    const deleteButton = await driver.findElement(By.xpath("/html/body/main/ul/li/button")
    );
    await deleteButton.click()
    await driver.sleep(2000)
});