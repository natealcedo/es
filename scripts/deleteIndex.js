const es = require("elasticsearch");

client = new es.Client({
  host: "localhost:9200",
});

client.indices.delete({
  index: "test",
});
