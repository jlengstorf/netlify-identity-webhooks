exports.handler = async ({ user }) => {
  console.log(user);

  return {
    statusCode: 200,
    body: JSON.stringify({
      app_metadata: {
        roles: ['test'],
      },
    }),
  };
};
