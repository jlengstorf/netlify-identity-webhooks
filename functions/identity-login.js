exports.handler = async (event) => {
  console.log(event.body);

  /*

    type Customer {
      netlify_id: ID!
      stripe_customer_id: ID!
      plan: String!
    }

   */

  // let roles;
  // if (Response.plan === 'free') {
  //   roles = []
  // }

  // if ('basic') {
  //   roles = ['basic']
  // }

  // if ('premium') {
  //   roles =
  // }

  // TODO load Stripe subs data
  // load current sub for stripe_customer_id

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        stripe_data: {
          sub: true,
        },
        roles: ['test'],
      },
    }),
  };
};
