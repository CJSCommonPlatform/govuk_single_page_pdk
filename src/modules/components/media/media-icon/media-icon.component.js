"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var angularjs_devtools_1 = require('@govuk/angularjs-devtools');
var MediaIconComponent = (function () {
    function MediaIconComponent() {
    }
    MediaIconComponent.prototype.$onChanges = function (changes) {
        if (changes.fileName) {
            var parts = this.fileName.split('.');
            var extname = parts[parts.length - 1];
            switch (extname) {
                case 'doc':
                case 'docx':
                    this.fileTypeClass = 'fa-file-word-o';
                    break;
                case 'jpg':
                case 'jpeg':
                case 'png':
                    this.fileTypeClass = 'fa-file-image-o';
                    break;
                case 'pdf':
                    this.fileTypeClass = 'fa-file-pdf-o';
                    break;
                case 'ppt':
                case 'pptx':
                    this.fileTypeClass = 'fa-file-powerpoint-o';
                    break;
                case 'rtf':
                case 'txt':
                    this.fileTypeClass = 'fa-file-text-o';
                    break;
                case 'xls':
                case 'xlsx':
                    this.fileTypeClass = 'fa-file-excel-o';
                    break;
                default:
                    this.fileTypeClass = 'fa-file-o';
            }
        }
    };
    MediaIconComponent = __decorate([
        angularjs_devtools_1.Component({
            bindings: {
                fileName: '<'
            },
            template: "<i class=\"fa {{$ctrl.fileTypeClass}}\"></i>"
        })
    ], MediaIconComponent);
    return MediaIconComponent;
}());
exports.MediaIconComponent = MediaIconComponent;
//# sourceMappingURL=media-icon.component.js.map