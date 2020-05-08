const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log(context);
  const { userID } = JSON.parse(event.body);
  const { identity, user } = context.clientContext;

  console.log({ userID });

  const response = await fetch(`${identity.url}/admin/users/${userID}`, {
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
