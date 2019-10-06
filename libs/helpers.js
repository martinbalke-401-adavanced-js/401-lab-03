module.exports = exports = {};

exports.stringify = (data) => {
  data = JSON.parse(data);
  return JSON.stringify(data);
};

exports.verifyDataChange = (data, modifiedData) => {
  return data !== modifiedData ?
    console.log('The data has succesfully been changed')
    :console.log('The data is still the same');
};