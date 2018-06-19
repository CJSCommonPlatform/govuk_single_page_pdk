# Release process

1. Use `npm version <major|minor|patch|x.y.z>` to set the version and create the tag.
   Adjust the message as desired
   e.g. `npm version -m "release(%s): Version v%s" patch`
2. Push the tag, Travis CI will build the package and publish it to NPM registry
