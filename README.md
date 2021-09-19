# car-mgnt-api

## Overview

An api that can be used as a starting point for a vehicle managament application.

## Requirements

node: https://nodejs.org/en/download/

docker: https://docs.docker.com/get-docker/
## Test
```
npm install
npm run test
```

## Start in Docker
```
docker-compose build
docker-compose up
```

### Mongo Express (docker)
Available on http://localhost:8081

_Mongo Express is a lightweight web-based administrative interface deployed to manage MongoDB databases interactively. It is authored using Node. js, Express and Bootstrap packages._

### Example Requests
```
curl --location --request GET 'localhost:3000/search/model/441'

curl --location --request GET 'localhost:3000/search/make/es'

curl --location --request GET 'localhost:3000/search/model/441/X'

curl --location --request POST 'localhost:3000/company-car' \
--header 'Content-Type: application/json' \
--data-raw '{
    "makeId": 42,
    "modelId": 42,
    "assignee": "Arthur Dent",
    "color": "Black"
}'
```

