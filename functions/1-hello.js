exports.handler = async (event, context, cb) => {
  //   cb(null, {
  //     statusCode: 200,
  //     body: 'My first serverless function',
  //   });
  return {
    statusCode: 200,
    body: 'Our first Netlify Function Example',
  };
};
