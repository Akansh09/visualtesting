
describe("test", () => {
    it("example", async ({ browser }) => {
        await browser.url("https://github.com/gemini-testing/testplane");
        await browser.$("body").assertView("description",
            {
                ignoreDiffPixelCount: 10,
                tolerance: 5,
                antialiasingTolerance: 4,
                allowViewportOverflow: true,
                captureElementFromTop: true,
                compositeImage: true,
                screenshotDelay: 1000,
                ignoreElements: ["div[data-testid='latest-commit-details']", "a[class='Link--primary d-flex no-underline']"]
            }
        )
    });
});
