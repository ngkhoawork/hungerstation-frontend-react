#! /usr/bin/env bash

cd "$(dirname "$0")/.."

API_TOKEN="0cd2a060d8bc1bdcba17ed761c0811478e085363"
PROJECT_ID="710106455bf14e5be99235.99780927"
FILE_FORMAT=json

name=$(git rev-parse --short HEAD~1)

docker run --name ${name} \
    lokalise/lokalise-cli lokalise \
    --token ${API_TOKEN} \
    export ${PROJECT_ID} \
    --type ${FILE_FORMAT} \
    --indentation tab \
    --export_sort a_z \
    --export_empty base \
    --dest /tmp \
    --unzip_to /src/opt/dest

docker cp ${name}:/src/opt/dest/locale/. ./app/translations/

docker rm ${name}
