#!/bin/bash
set -e

# cleanup
rm -rf ./es
rm -rf ./lib
rm -rf ./_site

# build
npm run compile
npm publish --access public --tag 3.x
npm run deploy
