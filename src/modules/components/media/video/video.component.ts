import { Component } from '@cppui/angularjs-devtools';

@Component({
    bindings: {
        url: '<'
    },
    template: '<div></div>'
})
export class VideoComponent {

    static $inject = ['$element'];
    private url: string;
    private config: any;

    constructor(private $element: ng.IAugmentedJQuery, private $window: any/*ng.IWindowService*/) {
        this.config = {
            id: 'jw_player',
            media: this.url,
            flashHeight: 300,
            swfCallback : $window.jwPlayerReady
        };
    }

    $onInit() {
        const holder: any = angular.element('<span></span>');
        this.$element.append(holder);
        holder.player(this.config, this.$window.jwconfig);
    }
}
