const randomName = require("random-name");
const es = require("elasticsearch");

let numberOfDocuments = process.argv[2];
if (numberOfDocuments === undefined) {
  numberOfDocuments = 10000;
}
numberOfDocuments = parseInt(numberOfDocuments);
if (isNaN(numberOfDocuments)) {
  throw TypeError("Invalid argument");
  process.exit(1);
}

client = new es.Client({
  host: "localhost:9200",
});

const operation = {
  body: [],
};

for (let i = 0; i <= numberOfDocuments; i++) {
  const randomFullName = `${randomName.first()} ${randomName.last()}`;
  operation.body = [
    ...operation.body,
    { index: { _index: "test", _type: "talent" } },
    { name: randomFullName },
  ];
}

client.bulk({
  body: operation.body,
});
