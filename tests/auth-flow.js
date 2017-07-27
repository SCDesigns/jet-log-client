module.exports = {

  'get to signup page': (client) => {

    client
      .url(client.launchUrl)
<<<<<<< HEAD
      .waitForElementVisible('.map', 1000)
      .click('a[href="/signup')

    client.assert.urlContains('signup')
    client.assert.cssClassPresent("form", "signup_form");
  },

  'signup user and redirect to cart': (client) => {

  },

  'close': (client) => client.end()
=======
      .waitForElementVisible('.Map', 1000)
      .click('a[href="/signup')

    client.assert.urlContains('signup')
    client.assert.cssClassPresent("#form", "signup_form");
  },

  'signup user and redirect to home': (client) => {

  },
>>>>>>> bb85cf384282b556e77a72b57fd0055b8a2cb321
}
