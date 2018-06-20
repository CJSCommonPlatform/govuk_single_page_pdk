#!/bin/bash

# Travis will expose the NPM token as NPM_TOKEN but this entry causes confusion if its not set when developing locally
# so, create the entry on the fly for deployment only
cat > .npmrc <<"END"
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
END

# Remove the .npmrc file on exit (regardless of exit code)
trap "{ rm -f .npmrc }" EXIT

npm run ci:publish
