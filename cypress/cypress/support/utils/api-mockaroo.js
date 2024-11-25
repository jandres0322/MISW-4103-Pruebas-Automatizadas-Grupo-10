const baseUrlMockaroo = Cypress.env("apirUrlMockaroo");
const apiKeyMockaroo = Cypress.env("apiKeyMockaroo");

export class ApiMockaroo {
  static dataWrongRegisterUser() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/user_register.json?key=${apiKeyMockaroo}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataWrongPasswordRegisterUser() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/user_register_wrong_password.json?key=${apiKeyMockaroo}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataEmptyCreatePage() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/post_empty_title.json?key=${apiKeyMockaroo}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataCreateTag() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/create_tag.json?key=${apiKeyMockaroo}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataCreateTagSuccess() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/create_tag_success.json?key=${apiKeyMockaroo}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataCreatePostScheduled() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/create_post.json?key=${apiKeyMockaroo}`,
      })
      .then((response) => {
        return response.body;
      });
  }
}