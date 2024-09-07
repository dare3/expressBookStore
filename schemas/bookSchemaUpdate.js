// schemas/bookSchemaUpdate.js
const bookSchemaUpdate = {
    "type": "object",
    "properties": {
      "amazon_url": { "type": "string" },
      "author": { "type": "string" },
      "language": { "type": "string" },
      "pages": { "type": "integer" },
      "publisher": { "type": "string" },
      "title": { "type": "string" },
      "year": { "type": "integer" }
    },
    "additionalProperties": false
  };
  
  module.exports = bookSchemaUpdate;

  