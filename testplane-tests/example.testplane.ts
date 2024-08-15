describe("Github Public Repository", () => {
    it("Home Page", async ({ browser }) => {
        await browser.url("https://github.com/gemini-testing/testplane");
        await browser.$("body").assertView("Full View Port",
            {
                ignoreElements: [
                    "div[data-testid='latest-commit-details']",
                    "a[class='Link--primary d-flex no-underline']",
                    "div[class='react-directory-commit-age']"
                ],
                ignoreDiffPixelCount: 10,
                tolerance: 5,
                antialiasingTolerance: 4,
                allowViewportOverflow: true,
                captureElementFromTop: true,
                compositeImage: true,
                screenshotDelay: 1000
            }
        )
    });
});
