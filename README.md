##AngularJS Boilerplate

A self-documenting seed project for angular 1.5 and typescript, supported by webpack
 and containing examples of writing and testing angular 1.5 with typescript.


####Scripts:

`npm start`

Run the app in development mode with hot reloading.

`npm run build_prod` +
`npm run serve`

Builds the project in production mode, and then creates a server.

`npm test`

Run unit tests using karma.

`npm run protractor`

Run e2e tests using protractor.


## Application Structure

An application is made up a set of modules, which can be recognised as either a "core" or "domain" module:

- A **core** module will be bundled as part of the main application. A core module should contain no
  components that can be routed to, instead existing to support the application's domains.

- A **domain** module represents a business domain of the application, and should be modelled such that
 it could, if required, be loaded on demand. In order to satisfy this requirement, _it must not depend
 on any other domain_. Typically, a domain will map to a top-level route in the application and may,
 itself, contain sub-domains.

In the boilerplate app, the `common` and `config` modules are core modules, depended upon by one or
 more domains.

###Module Structure

Modules should be structured to inherit the same basic structure, where files are grouped by type but
where route components can exist at the top level. The philosophy is that folders retain as flat a
structure as is readable.

A typical core module will contain:

```
  /components
  /constants
  /directives
  /filters
  /services
  index.ts
```

A typical domain module will extend this structure with:

```
  /route-component-1
  /route-component-2
  /route-component-3
  ...
  routes.ts
```
Any components, services, constants, directives and filters defined within a domain are local to that domain,
 and should not be required by another domain (as per the design remit above). The domain's routes, too, are
 defined within the domain itself, and are then imported by the application's main routes configuration.
