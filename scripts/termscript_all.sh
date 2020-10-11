#!/bin/bash
for file in  $(find ./terminal/scripts -name "*.ts" -maxdepth 1 | sort); do
    echo $file;
    termscript < $file
done
