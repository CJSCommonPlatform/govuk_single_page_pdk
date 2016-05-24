import { Component } from '@govuk/angularjs-devtools';

@Component({
    bindings: {
        url: '<'
    },
    template: '<div></div>'
})
export class VideoComponent {

    private url: string;
    private config: any;

    static $inject = ['$element'];

    constructor(private $element: ng.IAugmentedJQuery, private $window: ng.IWindowService) {
        this.config = {
            id:'jw_player',
            media: this.url,
            flashHeight: 300,
            swfCallback : $wnpindow.jwPlayerReady
        };
    }

    $onInit() {
        const holder = angular.element('<span></span>');
        this.$element.append(holder);
        holder.player(this.config, this.$window.jwconfig);
    }
}