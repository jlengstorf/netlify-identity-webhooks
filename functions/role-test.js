const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log(context);
  const { identity, user } = context.clientContext;

  const response = await fetch(`${identity.url}/admin/users/${user.sub}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${identity.token}`,
    },
    body: JSON.stringify({
      app_metadata: {
        roles: ['custom'],
      },
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  console.log(response);

  return {
    statusCode: 200,
    body: 'OK',
  };
};
