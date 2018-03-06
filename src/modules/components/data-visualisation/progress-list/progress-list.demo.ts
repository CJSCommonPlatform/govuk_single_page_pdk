import { Component } from '@cppui/angularjs-devtools';

@Component({
  template: require('./progress-list.demo.html')
})
export class ProgressListDemo {

  steps = [
    {
      label:   'Step One',
      complete: true,
      active:   false
    },
    {
      label:   'Step Two',
      complete: false,
      active:   true
    },
    {
      label:   'Step Three',
      complete: false,
      active:   false
    }
  ];
}
