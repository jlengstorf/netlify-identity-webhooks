exports.handler = async (...args) => {
  console.log(JSON.stringify(args));

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: ['test'],
      },
    }),
  };
};
