import { Component } from '@govuk/angularjs-devtools';

@Component({
    bindings: {
        image: '<'
    },
    template: require('./image.component.html')
})
export class ImageComponent {

  image: any;

  /**
   * If there is a download link add it as the first
   * item in the metadata array.
   */
  $onInit(): void {

    if (this.image.downloadLink) {
      this.image.metadata = this.image.metadata || [];
      this.image.metadata.unshift({
        isDownloadLink: true,
        text: this.image.downloadLink.text,
        onClick: this.image.downloadLink.onClick
      });
    }
  }
}