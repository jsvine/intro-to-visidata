#!/bin/bash
for file in  $(find ./terminal/output -name "*.output"); do
    echo $file;
    ./scripts/output2html.sh $file
done
