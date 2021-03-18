(self["webpackChunkmarketplace_template_poc"] = self["webpackChunkmarketplace_template_poc"] || []).push([[18],{

/***/ 788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var easymde__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(995);
/* harmony import */ var easymde__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easymde__WEBPACK_IMPORTED_MODULE_0__);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (result) => {
      return result.done ? resolve(result.value) : Promise.resolve(result.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const _form = document.querySelector('[data-s3-photo="form"]');
const createPhoto = (imageUrl) => {
  const objectUuid = _form.dataset.s3UppyObjectUuid;
  const photoType = _form.dataset.s3UppyPhotoType;
  return apiFetch("/api/photos", {
    body: JSON.stringify({photo: {direct_url: imageUrl, photo_type: photoType, object_uuid: objectUuid}})
  });
};
const getXmlValue = (source, tagName) => {
  const start = source.indexOf(`<${tagName}>`);
  const end = source.indexOf(`</${tagName}>`, start);
  return start !== -1 && end !== -1 ? source.slice(start + tagName.length + 2, end) : "";
};
const markdownEditor = document.querySelector("[data-markdown-editor]");
const easyMDE = new (easymde__WEBPACK_IMPORTED_MODULE_0___default())({
  element: markdownEditor,
  showIcons: ["code", "upload-image"],
  hideIcons: ["image", "side-by-side", "fullscreen", "preview"],
  uploadImage: true,
  status: ["upload-image", "autosave"],
  imageUploadFunction: function(file, success, error) {
    return __async(this, null, function* () {
      const data = new FormData(_form);
      data.set("file", file, file.name);
      const response = yield fetch(_form.action, {method: _form.method, body: data});
      if (response.ok) {
        const xmlResponse = yield response.text();
        const url = getXmlValue(xmlResponse, "Location");
        const photo = yield createPhoto(url);
        const photoUrl = photo.photo.versions.uncropped.replace(/\s/g, "%20");
        success(photoUrl);
      } else {
        error("Can't upload an image");
      }
    });
  }
});
const elementId = markdownEditor.attributes.id.value;
document.querySelector(`label[for="${elementId}"]`).onclick = function() {
  easyMDE.codemirror.focus();
};


/***/ }),

/***/ 562:
/***/ (function() {

/* (ignored) */

/***/ })

}]);