#! /usr/bin/env bash

cd "$(dirname "$0")/.."

API_TOKEN="0cd2a060d8bc1bdcba17ed761c0811478e085363"
PROJECT_ID="710106455bf14e5be99235.99780927"
LOCAL_DIR=$(mktemp -d /tmp/lokalise.XXXXXX)
FILE_FORMAT=json

docker run --rm \
    -v ${LOCAL_DIR}:/opt/dest \
    lokalise/lokalise-cli lokalise \
    --token ${API_TOKEN} \
    export ${PROJECT_ID} \
    --type ${FILE_FORMAT} \
    --indentation tab \
    --export_sort a_z \
    --export_empty base \
    --dest /opt/dest \
    --unzip_to /opt/dest

cp ${LOCAL_DIR}/locale/* ./app/translations/

rm -rf "$LOCAL_DIR"
