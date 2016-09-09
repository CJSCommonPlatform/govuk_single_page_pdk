require('index.scss');

import componentsDemos from '../modules/components/demos';
import contentDemos from '../modules/content/demos';
import config from './config';

import { AppLayout } from './app/app-layout.component';
import { ComponentsPage } from './app/components/index.component';
import { BannersPage } from './app/components/banners/banners.component.ts';
import { DataVisualisationPage } from './app/components/data-visualisation/data-visualisation.component.ts';
import { HeadersPage } from 'app/components/headers-and-footers/headers.component.ts';
import { MediaPage } from './app/components/media/media.component.ts';
import { NavigationPage } from './app/components/navigation/navigation.component.ts';
import { TimelinePage } from './app/components/timeline/timeline.component.ts';
import { ContentPage } from './app/content/content.component';
import { ExamplesPage } from './app/examples/examples.component';
import { ColoursPage } from './app/content/colours/colours.component';
import { ButtonsPage } from './app/content/buttons/buttons.component';
import { TypographyPage } from './app/content/typography/typography.component';
import { HomePage } from './app/home/home.component';
import { LayoutPage } from './app/layout/layout.component';
import { CitizenLayoutPage } from './app/layout/citizen/citizen-layout.component.ts';
import { BusinessLayoutPage } from './app/layout/business/business-layout.component.ts';
import { FormElementsPage } from './app/content/form-elements/form-elements.component';
import { IconsMediaPage } from './app/content/icons-media/icons-media.component';
import { ErrorsPage } from './app/content/errors/errors.component';
import { UtilsPage } from './app/content/utils/utils.component';
import { FormsAndErrorsPage } from './app/components/forms-and-errors/forms-and-errors.component';

angular.module('govuk-single-page-pdk.docs', [
  config,
  componentsDemos,
  contentDemos,
  'ncy-angular-breadcrumb',
  'ui.router',
  'ui.bootstrap',
  'smoothScroll',
  'ngSanitize',
  'ng-clamp',
  'slugifier'
])
  .component('govDocs', AppLayout)
  .component('govDocsHomePage', HomePage)
  .component('govDocsComponentsPage', ComponentsPage)
  .component('govDocsComponentsBannersPage', BannersPage)
  .component('govDocsComponentsDataVisualisationPage', DataVisualisationPage)
  .component('govDocsComponentsHeaderPage', HeadersPage)
  .component('govDocsComponentsMediaPage', MediaPage)
  .component('govDocsComponentsNavigationPage', NavigationPage)
  .component('govDocsComponentsTimelinePage', TimelinePage)
  .component('govDocsContentPage', ContentPage)
  .component('govDocsExamplesPage', ExamplesPage)
  .component('govDocsLayoutPage', LayoutPage)
  .component('govDocsCitizenLayoutPage', CitizenLayoutPage)
  .component('govDocsBusinessLayoutPage', BusinessLayoutPage)
  .component('govDocsContentColoursPage', ColoursPage)
  .component('govDocsContentButtonsPage', ButtonsPage)
  .component('govDocsFormElementsPage', FormElementsPage)
  .component('govDocsContentIconsMediaPage', IconsMediaPage)
  .component('govDocsContentErrorsPage', ErrorsPage)
  .component('govDocsContentTypographyPage', TypographyPage)
  .component('govDocsContentUtilsPage', UtilsPage)
  .component('govDocsComponentsFormsAndErrorsPage', FormsAndErrorsPage);
