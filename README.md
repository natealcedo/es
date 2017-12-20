# Scripts available

Create the index : `npm run create-index`

Delete the index : `npm run delete-index`

Setup mapping : `npm run setup-mapping`

Seed documents: `npm run seed ${number}`
This script takes an argument of number of documents to seed. Defaults to 10000

# Instructions

Once you have indexed some data, I recommend you start querying elasticsearch using postman with the following query.

```
endpoint: localhost:9200/test/talent/_search
json body:

{
  "query": {
    "match": {
      "name": {
        "query": "`${name}`",
          "analyzer": "standard"
      }
    }
  }
}
```
