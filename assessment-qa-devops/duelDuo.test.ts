
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices shows 5 bots to choose', async () => {
    const choices = await driver.findElement(By.id('choices'))
    await choices.click()
    await driver.sleep(3000)
});

test('Add to duo', async () => {
    const addDuo = await driver.findElement(By.id('player-duo'))
    await addDuo.sendKeys()
    await driver.sleep(3000)
});

test('Remove from duo', async () => {
    const removeDuo = await driver.findElement(By.id('choices'))
    await removeDuo.click()
    await driver.sleep(3000)
});