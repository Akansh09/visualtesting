export default {
    gridUrl: "http://localhost:4444/wd/hub",
    baseUrl: "http://localhost",
    pageLoadTimeout: 0,
    httpTimeout: 60000,
    testTimeout: 90000,
    resetCursor: false,
    sets: {
        desktop: {
            files: [
                "testplane-tests/**/*.testplane.(t|j)s"
            ],
            browsers: [
                "chrome-phone",
                "chrome"
            ]
        }
    },
    browsers: {
        "chrome-phone": {
            automationProtocol: "devtools",
            headless: true,
            desiredCapabilities: {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: ["--hide-scrollbars"],
                    mobileEmulation: {
                        deviceMetrics: {
                            width: 360,
                            height: 640,
                            pixelRatio: 3.0
                        },
                        userAgent: "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
                    }
                }
            },
            sessionEnvFlags: {
                isMobile: true
            }
        },
        "chrome": {
            automationProtocol: "devtools",
            headless: true,
            desiredCapabilities: {
                browserName: "chrome",
                "goog:chromeOptions": {
                    args: ["--hide-scrollbars", "--start-maximized","--window-size=1920,1080"]
                }
            },
            windowSize: {
                width: 1920,
                height: 1080
            },
            sessionEnvFlags: {
                isMobile: false
            }
        }
    },
    plugins: {
        "html-reporter/testplane": {
            // https://github.com/gemini-testing/html-reporter
            enabled: true,
            path: "testplane-report",
            defaultView: "all",
            diffMode: "3-up-scaled"
        }
    }
};
