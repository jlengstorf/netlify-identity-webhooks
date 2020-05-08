const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log(context);

  await fetch(`${context.identity.url}/admin/users/${context.user.id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${context.identity.token}`,
    },
    body: JSON.stringify({
      app_metadata: {
        roles: ['custom'],
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: 'OK',
  };
};
