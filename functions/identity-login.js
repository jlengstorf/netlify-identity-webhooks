exports.handler = async (event) => {
  console.log(event.body);

  // TODO load Stripe subs data

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: ['test'],
      },
    }),
  };
};
