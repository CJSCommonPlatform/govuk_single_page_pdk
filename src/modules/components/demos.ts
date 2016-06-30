import banners from './banners/banners-demos';
import dataVisualisation from './data-visualisation/data-visualisation-demos';
import headersFooters from './headers-and-footers/headers-footers-demos';
import media from './media/media-demos';
import navigation from './navigation/navigation-demos';
import timeline from './timeline/timeline-demos';

const module = angular.module('govuk-single-page-pdk.component-demos', [
  banners,
  dataVisualisation,
  headersFooters,
  media,
  navigation,
  timeline
]);

export default module.name;