const baseUrlMockaroo = Cypress.env("apirUrlMockaroo");
const apiKeyMockaroo = Cypress.env("apiKeyMockaroo");
const apiKeyMockaroo2 = Cypress.env("apiKeyMockaroo2");

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

  static dataInvalidEmailRegisterUser() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/user_register_invalid_email.json?key=${apiKeyMockaroo2}`,
      })
      .then((response) => {
        return response.body;
      });
  }
  
  static dataValidRegisterUser() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/user_register_valid.json?key=${apiKeyMockaroo2}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataValidCreatePage() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/create_page_valid.json?key=${apiKeyMockaroo2}`,
      })
      .then((response) => {
        return response.body;
      });
  }

  static dataCreateTagInvalidColor() {
    return cy
      .request({
        method: "GET",
        url: `${baseUrlMockaroo}/data_create_tag_invalid_color.json?key=${apiKeyMockaroo2}`,
      })
      .then((response) => {
        return response.body;
      });
    }  
}