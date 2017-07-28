module.exports = {

  'get to signup page': (client) => {

    client
      .url(client.launchUrl)
      .waitForElementVisible('.nav', 1000)
      .click('a[href="/signup')

    client.assert.urlContains('signup')
    client.assert.cssClassPresent("form", "signup_form");
  },

  'signup user and redirect to cart': (client) => {

  },

  'close': (client) => client.end()
}
