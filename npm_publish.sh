#!/bin/bash
set -e

# cleanup
rm -rf ./es
rm -rf ./lib
rm -rf ./_site

# build
npm run compile
npm publish
npm run deploy
