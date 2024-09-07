// schemas/bookSchemaNew.js
const bookSchemaNew = {
    "type": "object",
    "properties": {
      "isbn": { "type": "string" },
      "amazon_url": { "type": "string" },
      "author": { "type": "string" },
      "language": { "type": "string" },
      "pages": { "type": "integer" },
      "publisher": { "type": "string" },
      "title": { "type": "string" },
      "year": { "type": "integer" }
    },
    "required": ["isbn", "title", "author", "year"]
  };
  
  module.exports = bookSchemaNew;
  