const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log(context);
  const { userID, role = 'default' } = JSON.parse(event.body);
  const { identity } = context.clientContext;

  console.log({ userID, role });

  const response = await fetch(`${identity.url}/admin/users/${userID}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${identity.token}`,
    },
    body: JSON.stringify({
      app_metadata: {
        roles: ['custom', role],
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
