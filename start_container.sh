#!/bin/bash
 sudo docker run --rm --init --cap-add=SYS_ADMIN --name puppeteer -it \
 --user pptruser:pptruser \
 -v ~/Projects/puppeteer-worker/src/:/home/pptruser/app/src/ \
 -p 80:8080 leapm/puppeteer:2