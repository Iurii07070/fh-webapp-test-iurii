export const config: CodeceptJS.MainConfig = {
  tests: "./**/*_test.ts",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://***",
      chrome: {
        args: ["--no-sandbox", "--window-size=1920,1080"],
        defaultViewport: {
          width: 1920,
          height: 1080,
        },
        // args: ["--no-sandbox", "--start-fullscreen"],
        // defaultViewport: null,
        headless: true,
      },
    },
  },
  include: {},
  name: "mp-fh-webapp-test",
};
