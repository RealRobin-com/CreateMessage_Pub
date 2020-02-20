#!/usr/bin/env bash
npm install
rm -f function.zip
zip -r function.zip . -x .git/\* function.zip
aws lambda update-function-code --function-name CreateMessage_Pub --zip-file fileb://function.zip --profile realrobin
rm -f function.zip
