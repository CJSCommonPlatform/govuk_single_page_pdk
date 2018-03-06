import { Directive } from '@cppui/angularjs-devtools';

let i = 0;

@Directive({
  restrict: 'A',
  scope: {
    minRows: '<',
    maxRows: '<'
  },
  require: {
    ngModelCtrl: '?ngModel'
  },
  controllerAs: '$ctrl',
  bindToController: true
})
export class ResizeDirective {

  static $inject = ['$element', '$scope'];

  private id: number = i++;
  private minRows: number;
  private maxRows: number;
  private ngModelCtrl: ng.INgModelController;
  private onNextFrameActionId: number;

  constructor(private $element: ng.IAugmentedJQuery, private $scope: ng.IScope) {
    this.resize = this.resize.bind(this);
  }

  $onChanges() {
    this.resize();
  }

  $onDestroy() {
    this.clearNextFrame();
    window.removeEventListener('resize', this.resize);
  }

  $postLink() {
    this.resize();
    window.addEventListener('resize', this.resize);

    const resize = () => {
      this.clearNextFrame();
      this.onNextFrame(this.resize);
    };

    this.$element.on('input', resize);
    this.$element.on('wheel', e => {
      if (this.$element[0].style.overflowY === 'hidden') {
        return;
      }
      const deltaY = e['deltaY'];
      const { offsetHeight, scrollTop, scrollHeight } = this.$element[0];
      const up = deltaY < 0;

      if (!up && scrollHeight < deltaY + offsetHeight + scrollTop) {
        // Scrolling down, but this will take us past the bottom.
        this.$element[0].scrollTop = scrollHeight;
        prevent();
      } else if (up && -deltaY > scrollTop) {
        this.$element[0].scrollTop = 0;
        prevent();
      }

      function prevent() {
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = false;
      }
    });

    if (this.ngModelCtrl) {
      this.$scope.$watch(() => this.ngModelCtrl.$viewValue, resize);
    }
  }

  private resize() {
    const {
      height,
      minHeight,
      maxHeight
    } = calculateNodeHeight(this.$element[0], this.id, this.minRows || 4, this.maxRows || 16);

    this.$element.css({
      'resize':     'none',
      'height':     `${height || 0}px`,
      'min-height': `${minHeight}px`,
      'max-height': `${maxHeight}px`,
      'overflow-y':  height < maxHeight ? 'hidden' : 'auto'
    });
  }

  private onNextFrame(cb) {
    if (window.requestAnimationFrame) {
      this.onNextFrameActionId = window.requestAnimationFrame(cb);
    } else {
      cb();
    }
  }

  private clearNextFrame() {
    if (this.onNextFrameActionId) {
      cancelAnimationFrame(this.onNextFrameActionId);
    }
  }
}

const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

let computedStyleCache = {};
let hiddenTextarea;

function calculateNodeHeight(uiTextNode, id, minRows = null, maxRows = null): {
  height: number;
  minHeight: number;
  maxHeight: number;
} {

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  // evaluate the width of the original node in case it has been changed externally
  // such as through css style rule inheritance
  const HIDDEN_WIDTH_STYLE = `width: ${uiTextNode.clientWidth}px;`;

  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  const {
    borderSize,
    boxSizing,
    paddingSize,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, id);

  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', [sizingStyle, HIDDEN_TEXTAREA_STYLE, HIDDEN_WIDTH_STYLE].join(';'));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';

  let minHeight = -Infinity;
  let maxHeight = Infinity;
  let height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = 'x';
    let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      height = Math.min(maxHeight, height);
    }
  }
  return { height, minHeight, maxHeight };
}

function calculateNodeStyling(node, id): {
  borderSize: number;
  boxSizing: string;
  paddingSize: number;
  sizingStyle: string;
} {
  if (computedStyleCache[id]) {
    return computedStyleCache[id];
  }

  const style = window.getComputedStyle(node);

  const boxSizing = (
    style.getPropertyValue('box-sizing') ||
    style.getPropertyValue('-moz-box-sizing') ||
    style.getPropertyValue('-webkit-box-sizing')
  );

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  const sizingStyle = SIZING_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };

  computedStyleCache[id] = nodeInfo;

  return nodeInfo;
}
