import { LaunchOptions, chromium, firefox, webkit } from "playwright-core";

const options: LaunchOptions = {
    headless: !true,
    
}
export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            return chromium.launch();
        case "firefox":
            return firefox.launch();
        case "webkit":
            return webkit.launch();
        default:
            throw new Error("Please set the proper browser!")
    }

}