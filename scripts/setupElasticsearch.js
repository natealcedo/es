const es = require("elasticsearch");

client = new es.Client({
  host: "localhost:9200",
});

client.indices.create({
  index: "test",
  body: {
    settings: {
      number_of_shards: 5,
      analysis: {
        filter: {
          autocomplete_filter: {
            type: "edge_ngram",
            min_gram: 1,
            max_gram: 20,
          },
        },
        analyzer: {
          autocomplete: {
            type: "custom",
            tokenizer: "standard",
            filter: ["lowercase", "autocomplete_filter"],
          },
        },
      },
    },
  },
});
