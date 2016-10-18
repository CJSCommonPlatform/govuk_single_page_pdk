import { Component } from '@govuk/angularjs-devtools';

@Component({
    bindings: {
        image: '<',
        onImageLoad: '&'
    },
    template: require('./image.component.html')
})
export class ImageComponent {

  image: any;
  onImageLoad: Function;
  $element: any;

  constructor ($element) {
    this.$element = $element;
  }
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

  $postLink(): void {
    const imageElement = this.$element.find('img');
    if (imageElement.length) {
      imageElement[0].addEventListener('load', this.onImageLoad);
    }
  }
}