const es = require("elasticsearch");

client = new es.Client({
  host: "localhost:9200",
});

client.indices.putMapping({
  index: "test",
  type: "talent",
  body: {
    talent: {
      properties: {
        name: {
          type: "string",
          analyzer: "autocomplete",
        },
      },
    },
  },
});
