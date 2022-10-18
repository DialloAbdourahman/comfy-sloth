// domain/.netlify/functions/nameOfTheFile

const items = [
  { id: 1, name: 'diallo' },
  { id: 2, name: 'abdourahman' },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
