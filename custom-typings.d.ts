// Custom Typings are used to extend of implement type definitions
// for third party libraries used within the application

// fix some weirdness with angular directive type
declare namespace angular {
  interface IModule {
    directive(name: string, factory: any): ng.IModule
  }
}

// append `state` requirement for internal declarations
declare namespace angular.ui {
  interface IState {
    state: string
  }
}

interface NodeRequire {
  ensure: any
}