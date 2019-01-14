var indico = require('indico.io');
indico.apiKey = '9f687d4584698091617a30d5f071cda8';


module.exports = async function(text){
						return await indico.sentiment(text);
  					}