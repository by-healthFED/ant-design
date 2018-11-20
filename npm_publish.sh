#!/bin/bash
set -e

# cleanup
rm -rf ./es
rm -rf ./lib
rm -rf ./_site

# build
npm run compile
npm publish --access public --tag 2.x
npm run deploy
