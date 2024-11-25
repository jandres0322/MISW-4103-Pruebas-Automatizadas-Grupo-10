module.exports = {
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      apiUrl: "http://localhost:2368/ghost",
      ghostVersionReleaseCandidate: "5.98.1",
      ghostVersionBase: "4.5.0",
      apirUrlMockaroo: "https://my.api.mockaroo.com",
      apiKeyMockaroo: "95aaf2c0",
      apiKeyMockaroo2: "ccc23f70",
    },
  },
};
