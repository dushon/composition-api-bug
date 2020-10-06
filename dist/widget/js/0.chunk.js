(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[0],{

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/babel-loader/lib??ref--0-1!../node_modules/cache-loader/dist/cjs.js??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/common */ "./app/utils/common.js");
/* harmony import */ var _components_EnvelopeDetail_recipientResendDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/EnvelopeDetail/recipientResendDropdown */ "./app/components/EnvelopeDetail/recipientResendDropdown.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    errorMessage: {
      type: String,
      default: 'Vyskytla se chyba, zkuste akci opakovat později.'
    },
    getUrlDocumentFile: Function,
    recipientResend: Function,
    sessionId: String
  },
  components: {
    RecipientResendDropdown: _components_EnvelopeDetail_recipientResendDropdown__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {
      hasError: false,
      recipientsModal: [],
      envelope: {
        "status": "draft",
        "metadata": "",
        "documents": [{
          "name": "Vue-3-Cheat-Sheet.pdf",
          "metadata": "",
          "file": {
            "id": "d504ab50-f851-4411-9e37-f5aab3950c09",
            "createdAt": "2020-10-02T13:49:27+02:00",
            "updatedAt": "2020-10-02T13:49:27+02:00",
            "name": "file-5f7713c7d3dc4461160545.",
            "originalName": "file",
            "mimeType": "application\/pdf",
            "size": 225607,
            "sha1Checksum": "6e33cfd8a85e68397741523ab137fa8a7edf669a",
            "_actions": [],
            "_links": {
              "content": "\/api\/files\/d504ab50-f851-4411-9e37-f5aab3950c09\/content"
            }
          },
          "position": 0,
          "id": "6074f60f-6eb5-4b08-9002-dea84df4a864",
          "createdAt": "2020-10-02T13:49:28+02:00",
          "updatedAt": "2020-10-02T13:49:28+02:00",
          "_actions": {
            "update": {
              "method": "PUT",
              "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents\/6074f60f-6eb5-4b08-9002-dea84df4a864"
            },
            "delete": {
              "method": "DELETE",
              "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents\/6074f60f-6eb5-4b08-9002-dea84df4a864"
            }
          },
          "_links": {
            "download": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents\/6074f60f-6eb5-4b08-9002-dea84df4a864\/download",
            "tags": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents\/6074f60f-6eb5-4b08-9002-dea84df4a864\/tags",
            "self": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents\/6074f60f-6eb5-4b08-9002-dea84df4a864"
          }
        }],
        "recipients": [{
          "status": "draft",
          "metadata": "",
          "role": "signer",
          "name": "Du\u0161ek",
          "email": "etetete@tetest.com",
          "mobile": "+420731123456",
          "emailBody": null,
          "sentAt": null,
          "deliveredAt": null,
          "nonDeliveredAt": null,
          "signedAt": null,
          "declinedAt": null,
          "cancelledAt": null,
          "id": "172157ae-9fe8-4cb6-ad17-23de6e37068b",
          "createdAt": "2020-10-02T13:49:22+02:00",
          "updatedAt": "2020-10-02T13:49:22+02:00",
          "_actions": {
            "update": {
              "method": "PUT",
              "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/recipients\/172157ae-9fe8-4cb6-ad17-23de6e37068b"
            },
            "delete": {
              "method": "DELETE",
              "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/recipients\/172157ae-9fe8-4cb6-ad17-23de6e37068b"
            },
            "resend": {
              "violations": [{
                "title": "EnvelopeRecipient status must be one of \"sent\", \"delivered\", \"nonDelivered\", \"signed\"",
                "parameters": {
                  "{{ statuses }}": "\"sent\", \"delivered\", \"nonDelivered\", \"signed\""
                },
                "type": "urn:uuid:ee099d8f-77de-428c-986c-2b6cb025f4ad"
              }, {
                "title": "Envelope status must be one of \"sent\", \"completed\"",
                "parameters": {
                  "{{ statuses }}": "\"sent\", \"completed\""
                },
                "type": "urn:uuid:d6bcd7cf-b8f0-4b5c-9422-1a108ba23635"
              }],
              "method": "POST",
              "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/recipients\/172157ae-9fe8-4cb6-ad17-23de6e37068b\/resend"
            }
          },
          "_links": {
            "self": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/recipients\/172157ae-9fe8-4cb6-ad17-23de6e37068b"
          }
        }],
        "emailSubject": "Teeesst dal\u0161\u00ed",
        "emailBody": "Teeesst dal\u0161\u00ed",
        "senderName": "John Smith",
        "senderEmail": "john.smith@example.com",
        "validTo": null,
        "sentAt": null,
        "completedAt": null,
        "cancelledAt": null,
        "expiredAt": null,
        "declinedAt": null,
        "id": "b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5",
        "createdAt": "2020-10-02T13:49:05+02:00",
        "updatedAt": "2020-10-02T13:49:39+02:00",
        "_actions": {
          "update": {
            "method": "PUT",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5"
          },
          "extend": {
            "method": "PUT",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/extend"
          },
          "send": {
            "method": "POST",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/send"
          },
          "cancel": {
            "method": "POST",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/cancel"
          },
          "delete": {
            "method": "DELETE",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5"
          },
          "add_recipient": {
            "method": "POST",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/recipients"
          },
          "add_document": {
            "method": "POST",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents"
          },
          "add_tag": {
            "method": "POST",
            "uri": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/tags"
          }
        },
        "_links": {
          "download": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/download",
          "recipients": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/recipients",
          "documents": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/documents",
          "tags": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5\/tags",
          "self": "\/api\/envelopes\/b7eb3ef9-36d7-4890-9d3f-77cc37ff9ba5"
        }
      }
    };
  },

  methods: {
    getEnvelopeStatusClasses: _utils_common__WEBPACK_IMPORTED_MODULE_0__["getEnvelopeStatusClasses"],

    isLast(array, index) {
      return array.length - 1 === index;
    },

    showRecipientModal(index) {
      this.recipientsModal.splice(index, 1, true);
    },

    hasRecipientResend(recipient) {
      return !recipient._actions.resend.violations;
    },

    closeRecipientModal(index) {
      this.recipientsModal.splice(index, 1, false);
    }

  }
});

/***/ }),

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/babel-loader/lib??ref--0-1!../node_modules/cache-loader/dist/cjs.js??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    recipient: Object,
    envelopeId: String,
    visible: Boolean,
    id: String,
    sessionId: String,
    recipientResend: Function
  },
  methods: {
    resendEnvelope() {
      var _this = this;

      return _asyncToGenerator(function* () {
        try {
          const response = yield _this.recipientResend(_this.recipient.id, _this.envelopeId, _this.sessionId);

          if (response.status === 200) {
            _this.$emit('close');

            _this.$store.dispatch('notifications/addNotification', {
              type: 'success',
              message: 'Email úspěšně odeslán.'
            });
          }
        } catch (error) {
          if (error.response.status === 400) {
            console.log(error.response.data);
          }

          console.log(error);
        }
      })();
    }

  }
});

/***/ }),

/***/ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/widget/widgets/envelopeDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/babel-loader/lib??ref--0-1!../node_modules/cache-loader/dist/cjs.js??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./app/widget/widgets/envelopeDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/api.js */ "./app/utils/api.js");
/* harmony import */ var _components_EnvelopeDetail_EnvelopeDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/EnvelopeDetail/EnvelopeDetail */ "./app/components/EnvelopeDetail/EnvelopeDetail.vue");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    token: {
      type: String
    },
    errorMessage: {
      type: String,
      default: 'Vyskytla se chyba, zkuste akci opakovat později.'
    }
  },
  components: {
    EnvelopeDetail: _components_EnvelopeDetail_EnvelopeDetail__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      envelope: {},
      hasError: false,
      apiBaseUrl: _utils_api_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      sessionId: null,
      loading: false
    };
  },

  methods: {
    getEnvelope() {
      var _this = this;

      return _asyncToGenerator(function* () {
        try {
          const envelopeResponse = yield axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this.$route('embedded.envelope.get', null, true), {
            headers: {
              Authorization: `Bearer ${_this.sessionId}`
            }
          });

          if (envelopeResponse.status === 200) {
            return envelopeResponse.data;
          }
        } catch (e) {
          console.log(e);
        }

        return null;
      })();
    },

    getAuthToken(token) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        const response = yield axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_this2.$route('ui_embedded_loginaction__invoke', null, true), {
          token: token
        });

        if (response.status === 200) {
          return response.data.sess;
        }

        return 0;
      })();
    },

    getUrlDocumentFile(documentId, envelopeId, sessionId) {
      return `${this.$route('embedded.envelope.documents.download', {
        document: documentId
      }, true)}?sess=${sessionId}`;
    },

    recipientResend(recipientId, envelopeId, sessionId) {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(this.$route('embedded.envelope.recipients.resend', {
        recipient: recipientId
      }, true), null, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionId}`
        }
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"var/webpack/vue-loader\",\"cacheIdentifier\":\"5db4e214-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=template&id=1798cb52&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"var/webpack/vue-loader","cacheIdentifier":"5db4e214-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=template&id=1798cb52& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ds-provide-icon-setting", { attrs: { package: "digisignapp" } }, [
    _c(
      "section",
      { staticClass: "w-full px-4 py-4 bg-white md:px-8 md:py-6" },
      [
        _c(
          "div",
          { staticClass: "mb-4 text-xl font-medium md:mb-8 text-gray-1000" },
          [_vm._v(_vm._s(_vm.envelope.emailSubject))]
        ),
        _c(
          "table",
          { staticClass: "w-full mb-4 border-collapse table-fixed md:mb-8" },
          [
            _c("thead", [
              _c("tr", [
                _c(
                  "th",
                  {
                    staticClass:
                      "w-32 pr-2 text-xs font-normal text-left text-gray-700"
                  },
                  [_vm._v("Vytvořeno")]
                ),
                _c(
                  "th",
                  {
                    staticClass:
                      "px-4 text-xs font-normal text-left text-gray-700"
                  },
                  [_vm._v("Stav")]
                )
              ])
            ]),
            _c("tbody", [
              _c("tr", [
                _c(
                  "td",
                  {
                    staticClass:
                      "pt-1 pb-2 pr-2 text-sm border-b border-gray-200 text-gray-1000"
                  },
                  [
                    _c(
                      "span",
                      {
                        attrs: {
                          title:
                            _vm.$formatDateString(_vm.envelope.createdAt, "L") +
                            " " +
                            _vm.$formatDateString(_vm.envelope.createdAt, "LT")
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.$formatDateString(_vm.envelope.createdAt, "L")
                            ) +
                            "\n                    "
                        )
                      ]
                    )
                  ]
                ),
                _c(
                  "td",
                  {
                    staticClass:
                      "px-4 pt-1 pb-2 text-sm border-b border-gray-200 text-gray-1000"
                  },
                  [
                    _c("div", { staticClass: "flex items-center" }, [
                      _c("div", {
                        staticClass: "flex-none w-2 h-2 mr-2 rounded-full",
                        class: _vm.getEnvelopeStatusClasses(_vm.envelope.status)
                      }),
                      _c("span", [
                        _vm._v(
                          _vm._s(_vm.$t("envelope." + _vm.envelope.status))
                        )
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]
        ),
        _c(
          "div",
          {
            staticClass: "mb-2 text-base font-semibold md:mb-4 text-gray-1000"
          },
          [_vm._v("Dokumenty k podpisu")]
        ),
        _c("div", { staticClass: "-mx-4 md:mx-0" }, [
          _c(
            "table",
            { staticClass: "w-full mb-4 bg-gray-100 border-collapse md:mb-8" },
            [
              _c(
                "tbody",
                _vm._l(_vm.envelope.documents, function(document, index) {
                  return _c("tr", { key: document.id }, [
                    _c(
                      "td",
                      {
                        staticClass:
                          "px-4 py-2 border-b border-gray-200 text-gray-1000",
                        class: {
                          "border-b": _vm.isLast(_vm.envelope.documents, index)
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "flex" },
                          [
                            _c("ds-icon", {
                              staticClass:
                                "flex-none w-5 h-5 mt-1 mr-3 bg-blue-600",
                              attrs: { name: "i_mimetype_pdf_32" }
                            }),
                            _c("span", { staticClass: "self-center text-sm" }, [
                              _vm._v(_vm._s(document.name))
                            ])
                          ],
                          1
                        )
                      ]
                    ),
                    _c(
                      "td",
                      {
                        staticClass:
                          "px-2 py-2 text-right border-b border-gray-200",
                        class: {
                          "border-b": _vm.isLast(_vm.envelope.documents, index)
                        }
                      },
                      [
                        _c(
                          "ds-dropdown",
                          {
                            staticClass:
                              "inline-flex items-center justify-center w-8 h-8",
                            attrs: {
                              "tag-name": "button",
                              type: "button",
                              "prevent-overflow": "",
                              position: "bottom-start",
                              "popper-modifiers": [
                                { name: "offset", options: { offset: [0, 8] } }
                              ],
                              "class-content":
                                "shadow-dmd max-w-lg bg-gray-100 cursor-auto",
                              "is-opened-class-trigger": "bg-gray-100"
                            }
                          },
                          [
                            _c("ds-icon", {
                              staticClass: "w-4 h-4 bg-gray-1000",
                              attrs: { name: "i_more_vertical_20" }
                            }),
                            _c(
                              "div",
                              { attrs: { slot: "content" }, slot: "content" },
                              [
                                _c("ul", { staticClass: "w-auto" }, [
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "w-auto text-base text-gray-800 cursor-pointer"
                                    },
                                    [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "block px-4 py-3",
                                          attrs: {
                                            href: _vm.getUrlDocumentFile(
                                              document.id,
                                              _vm.envelope.id,
                                              _vm.sessionId
                                            ),
                                            download: ""
                                          }
                                        },
                                        [_vm._v("Stáhnout")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ]
          )
        ]),
        _c(
          "div",
          {
            staticClass: "mb-2 text-base font-semibold md:mb-4 text-gray-1000"
          },
          [_vm._v("Příjemci")]
        ),
        _c("div", { staticClass: "-mx-4 md:mx-0" }, [
          _c(
            "table",
            {
              staticClass:
                "block w-full mb-4 bg-gray-100 border-collapse md:mb-8 md:table"
            },
            [
              _c("thead", { staticClass: "hidden md:table-header-group" }, [
                _c("tr", { staticClass: "bg-gray-200" }, [
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-2 text-sm font-medium text-left text-gray-1000"
                    },
                    [_vm._v("Jméno")]
                  ),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-2 text-sm font-medium text-left text-gray-1000"
                    },
                    [_vm._v("E-mail")]
                  ),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-2 text-sm font-medium text-left text-gray-1000"
                    },
                    [_vm._v("Telefon")]
                  ),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-2 text-sm font-medium text-left text-gray-1000"
                    },
                    [_vm._v("Úloha")]
                  ),
                  _c(
                    "th",
                    {
                      staticClass:
                        "px-4 py-2 text-sm font-medium text-left text-gray-1000"
                    },
                    [_vm._v("Stav")]
                  ),
                  _c("th", {
                    staticClass:
                      "px-4 py-2 text-sm font-medium text-left text-gray-1000"
                  })
                ])
              ]),
              _c(
                "tbody",
                { staticClass: "block text-sm md:table-row-group" },
                _vm._l(_vm.envelope.recipients, function(recipient, index) {
                  return _c(
                    "tr",
                    {
                      key: recipient.id,
                      staticClass:
                        "relative flex flex-col pt-4 pb-2 border-b border-gray-200 md:pb-0 md:pt-0 md:border-b md:table-row text-gray-1000"
                    },
                    [
                      _c(
                        "td",
                        {
                          staticClass:
                            "order-1 px-4 pb-3 mr-10 text-base font-bold border-gray-200 md:text-sm md:py-2 md:font-normal md:border-t md:border-b"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(recipient.name) +
                              "\n                    "
                          )
                        ]
                      ),
                      _c(
                        "td",
                        {
                          staticClass:
                            "order-3 px-4 pb-2 mr-10 border-gray-200 md:py-2 md:border-t md:border-b"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(recipient.email) +
                              "\n                    "
                          )
                        ]
                      ),
                      _c(
                        "td",
                        {
                          staticClass:
                            "order-4 px-4 pb-2 mr-10 border-gray-200 md:py-2 md:border-t md:border-b"
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(recipient.mobile) +
                              "\n                    "
                          )
                        ]
                      ),
                      _c(
                        "td",
                        {
                          staticClass:
                            "order-2 px-4 pb-2 mr-10 border-gray-200 md:py-2 md:border-t md:border-b",
                          attrs: {
                            title:
                              recipient.role === "signer"
                                ? "Podepisující"
                                : "Obdrží kopii"
                          }
                        },
                        [
                          _c("ds-icon", {
                            staticClass: "w-4 h-4 bg-gray-1000",
                            attrs: {
                              name:
                                recipient.role === "signer"
                                  ? "i_signature"
                                  : "i_preview"
                            }
                          }),
                          _c("span", { staticClass: "ml-2 md:hidden" }, [
                            _vm._v(
                              _vm._s(
                                recipient.role === "signer"
                                  ? "Podepisující"
                                  : "Obdrží kopii"
                              )
                            )
                          ])
                        ],
                        1
                      ),
                      _c(
                        "td",
                        {
                          staticClass:
                            "order-5 px-4 pb-2 mr-10 border-gray-200 md:py-2 md:border-t md:border-b"
                        },
                        [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("div", {
                              staticClass: "w-2 h-2 mr-2 rounded-full",
                              class: _vm.getEnvelopeStatusClasses(
                                recipient.status
                              )
                            }),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.$t("recipient." + recipient.status))
                              )
                            ])
                          ])
                        ]
                      ),
                      _c(
                        "td",
                        {
                          staticClass:
                            "absolute top-0 right-0 px-2 pb-2 mt-2 text-right border-gray-200 md:py-2 md:mt-0 md:mr-0 md:border-t md:border-b md:static"
                        },
                        [
                          _vm.hasRecipientResend(recipient)
                            ? [
                                _c(
                                  "ds-dropdown",
                                  {
                                    staticClass:
                                      "inline-flex items-center justify-center w-8 h-8",
                                    attrs: {
                                      "tag-name": "button",
                                      type: "button",
                                      "prevent-overflow": "",
                                      position: "bottom-start",
                                      "popper-modifiers": [
                                        {
                                          name: "offset",
                                          options: { offset: [0, 8] }
                                        }
                                      ],
                                      "class-content":
                                        "shadow-dmd max-w-lg bg-gray-100 cursor-auto",
                                      "is-opened-class-trigger": "bg-gray-100"
                                    }
                                  },
                                  [
                                    _c("ds-icon", {
                                      staticClass: "w-4 h-4 bg-gray-1000",
                                      attrs: { name: "i_more_vertical_20" }
                                    }),
                                    _c(
                                      "div",
                                      {
                                        attrs: { slot: "content" },
                                        slot: "content"
                                      },
                                      [
                                        _c("ul", { staticClass: "w-auto" }, [
                                          _c(
                                            "li",
                                            {
                                              staticClass:
                                                "w-auto px-4 py-3 text-base text-gray-800 cursor-pointer",
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.showRecipientModal(
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Odeslat znovu\n                                        "
                                              )
                                            ]
                                          )
                                        ])
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _c("recipient-resend-dropdown", {
                                  attrs: {
                                    id: "dialogHeader" + index,
                                    recipient: recipient,
                                    "session-id": _vm.sessionId,
                                    "envelope-id": _vm.envelope.id,
                                    "recipient-resend": _vm.recipientResend,
                                    visible: _vm.recipientsModal[index] || false
                                  },
                                  on: {
                                    close: function($event) {
                                      return _vm.closeRecipientModal(index)
                                    }
                                  }
                                })
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ]),
        _c(
          "div",
          {
            staticClass: "mb-2 text-base font-semibold md:mb-4 text-gray-1000"
          },
          [_vm._v("Obálka")]
        ),
        _c("div", { staticClass: "mb-2 text-sm md:mb-4 text-gray-1000" }, [
          _vm._v("Název")
        ]),
        _c(
          "div",
          {
            staticClass:
              "px-4 py-2 mb-4 text-sm bg-gray-100 md:mb-8 text-gray-1000"
          },
          [_vm._v(_vm._s(_vm.envelope.emailSubject))]
        ),
        _c("div", { staticClass: "mb-2 text-sm md:mb-4 text-gray-1000" }, [
          _vm._v("Připojená zpráva")
        ]),
        _c("div", {
          staticClass: "px-4 py-2 text-sm bg-gray-100 text-gray-1000",
          domProps: { innerHTML: _vm._s(_vm.envelope.emailBody) }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"var/webpack/vue-loader\",\"cacheIdentifier\":\"5db4e214-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=template&id=743b1744&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"var/webpack/vue-loader","cacheIdentifier":"5db4e214-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=template&id=743b1744& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ds-modal", {
    staticClass: "dsw",
    attrs: {
      visible: _vm.visible,
      "aria-labelledby": _vm.id,
      "wrapper-tag": "div"
    },
    on: {
      close: function($event) {
        return _vm.$emit("close")
      }
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var close = ref.close
          return [
            _c(
              "div",
              { staticClass: "bg-gray-100 shadow-lg max-w-xl mx-auto" },
              [
                _c("div", { staticClass: "mx-4" }, [
                  _c("div", { staticClass: "flex mb-6" }, [
                    _c(
                      "div",
                      {
                        staticClass: "flex-grow mt-6 text-xl text-gray-1000",
                        attrs: { tabindex: "0", id: _vm.id }
                      },
                      [_vm._v("Znovu odelat příjemci?")]
                    ),
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-3 -mr-3 text-xl leading-none text-gray-800",
                        attrs: { "aria-label": "Zavřít" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return close($event)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        ×\n                    "
                        )
                      ]
                    )
                  ]),
                  _c("div", { staticClass: "mb-10 text-sm" }, [
                    _vm._v(
                      "\n                    Opravdu si přejete znovu odeslat na email "
                    ),
                    _c(
                      "a",
                      { attrs: { href: "mailto:" + _vm.recipient.email } },
                      [_vm._v(_vm._s(_vm.recipient.email))]
                    ),
                    _vm._v(" ?\n                ")
                  ])
                ]),
                _c("div", { staticClass: "flex px-px mb-px" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "flex-grow p-4 mx-px mb-px text-sm text-left text-white bg-gray-800",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return close($event)
                        }
                      }
                    },
                    [_vm._v("\n                    Zavřít\n                ")]
                  ),
                  _c(
                    "button",
                    {
                      staticClass:
                        "flex-grow p-4 mx-px mb-px text-sm text-left text-white bg-blue-600",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resendEnvelope($event)
                        }
                      }
                    },
                    [_vm._v("\n                    Odeslat\n                ")]
                  )
                ])
              ]
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"var/webpack/vue-loader\",\"cacheIdentifier\":\"5db4e214-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/widget/widgets/envelopeDetail.vue?vue&type=template&id=0bb92c80&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"var/webpack/vue-loader","cacheIdentifier":"5db4e214-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--2-0!../node_modules/vue-loader/lib??vue-loader-options!./app/widget/widgets/envelopeDetail.vue?vue&type=template&id=0bb92c80& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dsw" },
    [
      _c("envelope-detail", {
        attrs: {
          envelope: _vm.envelope,
          "get-url-document-file": _vm.getUrlDocumentFile,
          "recipient-resend": _vm.recipientResend,
          "session-id": _vm.sessionId
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./app/components/EnvelopeDetail/EnvelopeDetail.vue":
/*!**********************************************************!*\
  !*** ./app/components/EnvelopeDetail/EnvelopeDetail.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnvelopeDetail_vue_vue_type_template_id_1798cb52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnvelopeDetail.vue?vue&type=template&id=1798cb52& */ "./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=template&id=1798cb52&");
/* harmony import */ var _EnvelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnvelopeDetail.vue?vue&type=script&lang=js& */ "./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EnvelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnvelopeDetail_vue_vue_type_template_id_1798cb52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnvelopeDetail_vue_vue_type_template_id_1798cb52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/EnvelopeDetail/EnvelopeDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_babel_loader_lib_index_js_ref_0_1_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/babel-loader/lib??ref--0-1!../../../../node_modules/cache-loader/dist/cjs.js??ref--2-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvelopeDetail.vue?vue&type=script&lang=js& */ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_babel_loader_lib_index_js_ref_0_1_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=template&id=1798cb52&":
/*!*****************************************************************************************!*\
  !*** ./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=template&id=1798cb52& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvelopeDetail_vue_vue_type_template_id_1798cb52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"var/webpack/vue-loader","cacheIdentifier":"5db4e214-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--2-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvelopeDetail.vue?vue&type=template&id=1798cb52& */ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"var/webpack/vue-loader\",\"cacheIdentifier\":\"5db4e214-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/EnvelopeDetail.vue?vue&type=template&id=1798cb52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvelopeDetail_vue_vue_type_template_id_1798cb52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvelopeDetail_vue_vue_type_template_id_1798cb52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/components/EnvelopeDetail/recipientResendDropdown.vue":
/*!*******************************************************************!*\
  !*** ./app/components/EnvelopeDetail/recipientResendDropdown.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipientResendDropdown_vue_vue_type_template_id_743b1744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipientResendDropdown.vue?vue&type=template&id=743b1744& */ "./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=template&id=743b1744&");
/* harmony import */ var _recipientResendDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipientResendDropdown.vue?vue&type=script&lang=js& */ "./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _recipientResendDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _recipientResendDropdown_vue_vue_type_template_id_743b1744___WEBPACK_IMPORTED_MODULE_0__["render"],
  _recipientResendDropdown_vue_vue_type_template_id_743b1744___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/components/EnvelopeDetail/recipientResendDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_babel_loader_lib_index_js_ref_0_1_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipientResendDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/babel-loader/lib??ref--0-1!../../../../node_modules/cache-loader/dist/cjs.js??ref--2-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./recipientResendDropdown.vue?vue&type=script&lang=js& */ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_babel_loader_lib_index_js_ref_0_1_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipientResendDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=template&id=743b1744&":
/*!**************************************************************************************************!*\
  !*** ./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=template&id=743b1744& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipientResendDropdown_vue_vue_type_template_id_743b1744___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"var/webpack/vue-loader","cacheIdentifier":"5db4e214-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--2-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./recipientResendDropdown.vue?vue&type=template&id=743b1744& */ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"var/webpack/vue-loader\",\"cacheIdentifier\":\"5db4e214-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/components/EnvelopeDetail/recipientResendDropdown.vue?vue&type=template&id=743b1744&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipientResendDropdown_vue_vue_type_template_id_743b1744___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_recipientResendDropdown_vue_vue_type_template_id_743b1744___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/utils/api.js":
/*!**************************!*\
  !*** ./app/utils/api.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_URL = 'https://app.digisign.digital.cz/embedded';
/* harmony default export */ __webpack_exports__["default"] = (API_URL);

/***/ }),

/***/ "./app/utils/common.js":
/*!*****************************!*\
  !*** ./app/utils/common.js ***!
  \*****************************/
/*! exports provided: ENVELOPE_STATUSES, RECIPIENT_STATUSES, getEnvelopeStatusClasses, getRecipientStatusClasses, invokeBrowserDownloadFile, generateUid, deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVELOPE_STATUSES", function() { return ENVELOPE_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIPIENT_STATUSES", function() { return RECIPIENT_STATUSES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeStatusClasses", function() { return getEnvelopeStatusClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipientStatusClasses", function() { return getRecipientStatusClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invokeBrowserDownloadFile", function() { return invokeBrowserDownloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUid", function() { return generateUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
const ENVELOPE_STATUSES = {
  CANCELLED: 'cancelled',
  DECLINED: 'declined',
  DRAFT: 'draft',
  SENT: 'sent',
  COMPLETED: 'completed'
};
const RECIPIENT_STATUSES = {
  DRAFT: 'draft',
  SENT: 'sent',
  DELIVERED: 'delivered',
  NON_DELIVERED: 'nonDelivered',
  SIGNED: 'signed',
  DECLINED: 'declined',
  CANCELLED: 'cancelled'
};
function getEnvelopeStatusClasses(status) {
  const variants = {
    [ENVELOPE_STATUSES.CANCELLED]: 'bg-gray-300',
    [ENVELOPE_STATUSES.DECLINED]: 'bg-gray-300',
    [ENVELOPE_STATUSES.DRAFT]: 'bg-purple-400',
    [ENVELOPE_STATUSES.SENT]: 'bg-cyan-400',
    [ENVELOPE_STATUSES.COMPLETED]: 'bg-green-500'
  };
  return variants[status] || '';
}
function getRecipientStatusClasses(status) {
  const variants = {
    [RECIPIENT_STATUSES.DRAFT]: 'bg-purple-400',
    [RECIPIENT_STATUSES.SENT]: 'bg-cyan-400',
    [RECIPIENT_STATUSES.DELIVERED]: 'bg-cyan-400',
    [RECIPIENT_STATUSES.NON_DELIVERED]: 'bg-red-600',
    [RECIPIENT_STATUSES.SIGNED]: 'bg-green-500',
    [RECIPIENT_STATUSES.DECLINED]: 'bg-gray-300',
    [RECIPIENT_STATUSES.CANCELLED]: 'bg-gray-300'
  };
  return variants[status] || '';
}
function invokeBrowserDownloadFile(fileData, fileName, mimetype) {
  const link = document.createElement('a');
  const blob = new Blob([fileData], {
    type: mimetype
  });
  const downloadUrl = window.URL.createObjectURL(blob); // browser doesn't support download yet

  if (typeof link.download === 'undefined') {
    window.location = downloadUrl;
  } else {
    link.href = downloadUrl;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
function generateUid() {
  // https://gist.github.com/jed/982883
  const b = a => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);

  return `uid-${b()}`;
}
function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  if (obj && typeof obj === 'object') {
    const cloned = {};
    const keys = Object.keys(obj);

    for (let i = 0, l = keys.length; i < l; i += 1) {
      const key = keys[i];
      cloned[key] = deepClone(obj[key]);
    }

    return cloned;
  }

  return obj;
}

/***/ }),

/***/ "./app/widget/widgets/envelopeDetail.vue":
/*!***********************************************!*\
  !*** ./app/widget/widgets/envelopeDetail.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _envelopeDetail_vue_vue_type_template_id_0bb92c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envelopeDetail.vue?vue&type=template&id=0bb92c80& */ "./app/widget/widgets/envelopeDetail.vue?vue&type=template&id=0bb92c80&");
/* harmony import */ var _envelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./envelopeDetail.vue?vue&type=script&lang=js& */ "./app/widget/widgets/envelopeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _envelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _envelopeDetail_vue_vue_type_template_id_0bb92c80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _envelopeDetail_vue_vue_type_template_id_0bb92c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "app/widget/widgets/envelopeDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/widget/widgets/envelopeDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./app/widget/widgets/envelopeDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_babel_loader_lib_index_js_ref_0_1_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_envelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/babel-loader/lib??ref--0-1!../../../../node_modules/cache-loader/dist/cjs.js??ref--2-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./envelopeDetail.vue?vue&type=script&lang=js& */ "../node_modules/cache-loader/dist/cjs.js?!../node_modules/babel-loader/lib/index.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/widget/widgets/envelopeDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_babel_loader_lib_index_js_ref_0_1_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_envelopeDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/widget/widgets/envelopeDetail.vue?vue&type=template&id=0bb92c80&":
/*!******************************************************************************!*\
  !*** ./app/widget/widgets/envelopeDetail.vue?vue&type=template&id=0bb92c80& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_envelopeDetail_vue_vue_type_template_id_0bb92c80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"var/webpack/vue-loader","cacheIdentifier":"5db4e214-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--2-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./envelopeDetail.vue?vue&type=template&id=0bb92c80& */ "../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"var/webpack/vue-loader\",\"cacheIdentifier\":\"5db4e214-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/cache-loader/dist/cjs.js?!../node_modules/vue-loader/lib/index.js?!./app/widget/widgets/envelopeDetail.vue?vue&type=template&id=0bb92c80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_envelopeDetail_vue_vue_type_template_id_0bb92c80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_var_webpack_vue_loader_cacheIdentifier_5db4e214_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_envelopeDetail_vue_vue_type_template_id_0bb92c80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvRW52ZWxvcGVEZXRhaWwvRW52ZWxvcGVEZXRhaWwudnVlIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9FbnZlbG9wZURldGFpbC9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vL2FwcC93aWRnZXQvd2lkZ2V0cy9lbnZlbG9wZURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRW52ZWxvcGVEZXRhaWwvRW52ZWxvcGVEZXRhaWwudnVlP2E0MGQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRW52ZWxvcGVEZXRhaWwvcmVjaXBpZW50UmVzZW5kRHJvcGRvd24udnVlPzFjZTMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dpZGdldC93aWRnZXRzL2VudmVsb3BlRGV0YWlsLnZ1ZT9mNzJjIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0VudmVsb3BlRGV0YWlsL0VudmVsb3BlRGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FbnZlbG9wZURldGFpbC9FbnZlbG9wZURldGFpbC52dWU/MzUxZCIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FbnZlbG9wZURldGFpbC9FbnZlbG9wZURldGFpbC52dWU/YzJkMSIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9FbnZlbG9wZURldGFpbC9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRW52ZWxvcGVEZXRhaWwvcmVjaXBpZW50UmVzZW5kRHJvcGRvd24udnVlPzI3ODMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRW52ZWxvcGVEZXRhaWwvcmVjaXBpZW50UmVzZW5kRHJvcGRvd24udnVlPzg5YzgiLCJ3ZWJwYWNrOi8vLy4vYXBwL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC93aWRnZXQvd2lkZ2V0cy9lbnZlbG9wZURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3dpZGdldC93aWRnZXRzL2VudmVsb3BlRGV0YWlsLnZ1ZT9hYjU5Iiwid2VicGFjazovLy8uL2FwcC93aWRnZXQvd2lkZ2V0cy9lbnZlbG9wZURldGFpbC52dWU/MTlmYSJdLCJuYW1lcyI6WyJBUElfVVJMIiwiRU5WRUxPUEVfU1RBVFVTRVMiLCJDQU5DRUxMRUQiLCJERUNMSU5FRCIsIkRSQUZUIiwiU0VOVCIsIkNPTVBMRVRFRCIsIlJFQ0lQSUVOVF9TVEFUVVNFUyIsIkRFTElWRVJFRCIsIk5PTl9ERUxJVkVSRUQiLCJTSUdORUQiLCJnZXRFbnZlbG9wZVN0YXR1c0NsYXNzZXMiLCJzdGF0dXMiLCJ2YXJpYW50cyIsImdldFJlY2lwaWVudFN0YXR1c0NsYXNzZXMiLCJpbnZva2VCcm93c2VyRG93bmxvYWRGaWxlIiwiZmlsZURhdGEiLCJmaWxlTmFtZSIsIm1pbWV0eXBlIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJsb2IiLCJCbG9iIiwidHlwZSIsImRvd25sb2FkVXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJsb2NhdGlvbiIsImhyZWYiLCJjbGljayIsInJldm9rZU9iamVjdFVSTCIsImdlbmVyYXRlVWlkIiwiYiIsImEiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZGVlcENsb25lIiwib2JqIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2xvbmVkIiwia2V5cyIsIk9iamVjdCIsImkiLCJsIiwibGVuZ3RoIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0lBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBLGdDQUxBO0FBTUEsNkJBTkE7QUFPQTtBQVBBLEdBREE7QUFVQTtBQUNBO0FBREEsR0FWQTs7QUFhQTtBQUNBO0FBQ0EscUJBREE7QUFFQSx5QkFGQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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UixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNFQsQ0FBZ0Isc1ZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzAuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRzLXByb3ZpZGUtaWNvbi1zZXR0aW5nIHBhY2thZ2U9XCJkaWdpc2lnbmFwcFwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInctZnVsbCBweC00IHB5LTQgYmctd2hpdGUgbWQ6cHgtOCBtZDpweS02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCB0ZXh0LXhsIGZvbnQtbWVkaXVtIG1kOm1iLTggdGV4dC1ncmF5LTEwMDBcIj57eyBlbnZlbG9wZS5lbWFpbFN1YmplY3QgfX08L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInctZnVsbCBtYi00IGJvcmRlci1jb2xsYXBzZSB0YWJsZS1maXhlZCBtZDptYi04XCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidy0zMiBwci0yIHRleHQteHMgZm9udC1ub3JtYWwgdGV4dC1sZWZ0IHRleHQtZ3JheS03MDBcIj5WeXR2b8WZZW5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCB0ZXh0LXhzIGZvbnQtbm9ybWFsIHRleHQtbGVmdCB0ZXh0LWdyYXktNzAwXCI+U3RhdjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB0LTEgcGItMiBwci0yIHRleHQtc20gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS0xMDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6dGl0bGU9XCIkZm9ybWF0RGF0ZVN0cmluZyhlbnZlbG9wZS5jcmVhdGVkQXQsICdMJykgKyAnICcgKyAkZm9ybWF0RGF0ZVN0cmluZyhlbnZlbG9wZS5jcmVhdGVkQXQsICdMVCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgJGZvcm1hdERhdGVTdHJpbmcoZW52ZWxvcGUuY3JlYXRlZEF0LCAnTCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTQgcHQtMSBwYi0yIHRleHQtc20gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS0xMDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ub25lIHctMiBoLTIgbXItMiByb3VuZGVkLWZ1bGxcIiA6Y2xhc3M9XCJnZXRFbnZlbG9wZVN0YXR1c0NsYXNzZXMoZW52ZWxvcGUuc3RhdHVzKVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ICR0KGBlbnZlbG9wZS4ke2VudmVsb3BlLnN0YXR1c31gKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBtZDptYi00IHRleHQtZ3JheS0xMDAwXCI+RG9rdW1lbnR5IGsgcG9kcGlzdTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIi1teC00IG1kOm14LTBcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ3LWZ1bGwgbWItNCBiZy1ncmF5LTEwMCBib3JkZXItY29sbGFwc2UgbWQ6bWItOFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihkb2N1bWVudCwgaW5kZXgpIGluIGVudmVsb3BlLmRvY3VtZW50c1wiIDprZXk9XCJkb2N1bWVudC5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHgtNCBweS0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydib3JkZXItYic6IGlzTGFzdChlbnZlbG9wZS5kb2N1bWVudHMsIGluZGV4KSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRzLWljb24gbmFtZT1cImlfbWltZXR5cGVfcGRmXzMyXCIgY2xhc3M9XCJmbGV4LW5vbmUgdy01IGgtNSBtdC0xIG1yLTMgYmctYmx1ZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGYtY2VudGVyIHRleHQtc21cIj57eyBkb2N1bWVudC5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB4LTIgcHktMiB0ZXh0LXJpZ2h0IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydib3JkZXItYic6IGlzTGFzdChlbnZlbG9wZS5kb2N1bWVudHMsIGluZGV4KSB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRzLWRyb3Bkb3duIHRhZy1uYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnQtb3ZlcmZsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJib3R0b20tc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cG9wcGVyLW1vZGlmaWVycz1cIlsge25hbWU6ICdvZmZzZXQnLCBvcHRpb25zOiB7IG9mZnNldDogWzAsIDhdIH19IF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcy1jb250ZW50PVwic2hhZG93LWRtZCBtYXgtdy1sZyBiZy1ncmF5LTEwMCBjdXJzb3ItYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzLW9wZW5lZC1jbGFzcy10cmlnZ2VyPVwiYmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTggaC04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkcy1pY29uIG5hbWU9XCJpX21vcmVfdmVydGljYWxfMjBcIiBjbGFzcz1cInctNCBoLTQgYmctZ3JheS0xMDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidy1hdXRvIHRleHQtYmFzZSB0ZXh0LWdyYXktODAwIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZ2V0VXJsRG9jdW1lbnRGaWxlKGRvY3VtZW50LmlkLCBlbnZlbG9wZS5pZCwgc2Vzc2lvbklkKVwiIGRvd25sb2FkIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0zXCI+U3TDoWhub3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RzLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJweC00IHB5LTIgbWItOCB0ZXh0LXNtIHRleHQtY2VudGVyIHRleHQtYmx1ZS02MDBcIj5QxZlpZGF0PC9idXR0b24+LS0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYi0yIHRleHQtYmFzZSBmb250LXNlbWlib2xkIG1kOm1iLTQgdGV4dC1ncmF5LTEwMDBcIj5QxZnDrWplbWNpPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiLW14LTQgbWQ6bXgtMFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImJsb2NrIHctZnVsbCBtYi00IGJnLWdyYXktMTAwIGJvcmRlci1jb2xsYXBzZSBtZDptYi04IG1kOnRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImhpZGRlbiBtZDp0YWJsZS1oZWFkZXItZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0IHRleHQtZ3JheS0xMDAwXCI+Sm3DqW5vPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTEwMDBcIj5FLW1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGVmdCB0ZXh0LWdyYXktMTAwMFwiPlRlbGVmb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGVmdCB0ZXh0LWdyYXktMTAwMFwiPsOabG9oYTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0IHRleHQtZ3JheS0xMDAwXCI+U3RhdjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0IHRleHQtZ3JheS0xMDAwXCI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cImJsb2NrIHRleHQtc20gbWQ6dGFibGUtcm93LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgcHQtNCBwYi0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBtZDpwYi0wIG1kOnB0LTAgbWQ6Ym9yZGVyLWIgbWQ6dGFibGUtcm93IHRleHQtZ3JheS0xMDAwXCIgdi1mb3I9XCIocmVjaXBpZW50LCBpbmRleCkgaW4gZW52ZWxvcGUucmVjaXBpZW50c1wiIDprZXk9XCJyZWNpcGllbnQuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm9yZGVyLTEgcHgtNCBwYi0zIG1yLTEwIHRleHQtYmFzZSBmb250LWJvbGQgYm9yZGVyLWdyYXktMjAwIG1kOnRleHQtc20gbWQ6cHktMiBtZDpmb250LW5vcm1hbCBtZDpib3JkZXItdCBtZDpib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlY2lwaWVudC5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwib3JkZXItMyBweC00IHBiLTIgbXItMTAgYm9yZGVyLWdyYXktMjAwIG1kOnB5LTIgbWQ6Ym9yZGVyLXQgbWQ6Ym9yZGVyLWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyByZWNpcGllbnQuZW1haWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJvcmRlci00IHB4LTQgcGItMiBtci0xMCBib3JkZXItZ3JheS0yMDAgbWQ6cHktMiBtZDpib3JkZXItdCBtZDpib3JkZXItYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHJlY2lwaWVudC5tb2JpbGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJvcmRlci0yIHB4LTQgcGItMiBtci0xMCBib3JkZXItZ3JheS0yMDAgbWQ6cHktMiBtZDpib3JkZXItdCBtZDpib3JkZXItYlwiIDp0aXRsZT1cInJlY2lwaWVudC5yb2xlID09PSAnc2lnbmVyJyA/ICdQb2RlcGlzdWrDrWPDrScgOiAnT2JkcsW+w60ga29waWknXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRzLWljb24gOm5hbWU9XCJyZWNpcGllbnQucm9sZSA9PT0gJ3NpZ25lcicgPyAnaV9zaWduYXR1cmUnIDogJ2lfcHJldmlldycgXCIgY2xhc3M9XCJ3LTQgaC00IGJnLWdyYXktMTAwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtbC0yIG1kOmhpZGRlblwiPnt7IHJlY2lwaWVudC5yb2xlID09PSAnc2lnbmVyJyA/ICdQb2RlcGlzdWrDrWPDrScgOiAnT2JkcsW+w60ga29waWknIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cIm9yZGVyLTUgcHgtNCBwYi0yIG1yLTEwIGJvcmRlci1ncmF5LTIwMCBtZDpweS0yIG1kOmJvcmRlci10IG1kOmJvcmRlci1iXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTIgaC0yIG1yLTIgcm91bmRlZC1mdWxsXCIgOmNsYXNzPVwiZ2V0RW52ZWxvcGVTdGF0dXNDbGFzc2VzKHJlY2lwaWVudC5zdGF0dXMpXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7ICR0KGByZWNpcGllbnQuJHtyZWNpcGllbnQuc3RhdHVzfWApIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcHgtMiBwYi0yIG10LTIgdGV4dC1yaWdodCBib3JkZXItZ3JheS0yMDAgbWQ6cHktMiBtZDptdC0wIG1kOm1yLTAgbWQ6Ym9yZGVyLXQgbWQ6Ym9yZGVyLWIgbWQ6c3RhdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJoYXNSZWNpcGllbnRSZXNlbmQocmVjaXBpZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZHMtZHJvcGRvd24gdGFnLW5hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50LW92ZXJmbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImJvdHRvbS1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cG9wcGVyLW1vZGlmaWVycz1cIlsge25hbWU6ICdvZmZzZXQnLCBvcHRpb25zOiB7IG9mZnNldDogWzAsIDhdIH19IF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MtY29udGVudD1cInNoYWRvdy1kbWQgbWF4LXctbGcgYmctZ3JheS0xMDAgY3Vyc29yLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtb3BlbmVkLWNsYXNzLXRyaWdnZXI9XCJiZy1ncmF5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTggaC04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRzLWljb24gbmFtZT1cImlfbW9yZV92ZXJ0aWNhbF8yMFwiIGNsYXNzPVwidy00IGgtNCBiZy1ncmF5LTEwMDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ3LWF1dG8gcHgtNCBweS0zIHRleHQtYmFzZSB0ZXh0LWdyYXktODAwIGN1cnNvci1wb2ludGVyXCIgQGNsaWNrLnByZXZlbnQ9XCJzaG93UmVjaXBpZW50TW9kYWwoaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPZGVzbGF0IHpub3Z1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RzLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjaXBpZW50LXJlc2VuZC1kcm9wZG93biA6aWQ9XCInZGlhbG9nSGVhZGVyJyArIGluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsb3NlPVwiY2xvc2VSZWNpcGllbnRNb2RhbChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVjaXBpZW50PVwicmVjaXBpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNlc3Npb24taWQ9XCJzZXNzaW9uSWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZW52ZWxvcGUtaWQ9XCJlbnZlbG9wZS5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWNpcGllbnQtcmVzZW5kPVwicmVjaXBpZW50UmVzZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZpc2libGU9XCJyZWNpcGllbnRzTW9kYWxbaW5kZXhdIHx8IGZhbHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBtZDptYi00IHRleHQtZ3JheS0xMDAwXCI+T2LDoWxrYTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTIgdGV4dC1zbSBtZDptYi00IHRleHQtZ3JheS0xMDAwXCI+TsOhemV2PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNCBweS0yIG1iLTQgdGV4dC1zbSBiZy1ncmF5LTEwMCBtZDptYi04IHRleHQtZ3JheS0xMDAwXCI+e3sgZW52ZWxvcGUuZW1haWxTdWJqZWN0IH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMiB0ZXh0LXNtIG1kOm1iLTQgdGV4dC1ncmF5LTEwMDBcIj5QxZlpcG9qZW7DoSB6cHLDoXZhPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNCBweS0yIHRleHQtc20gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTEwMDBcIiB2LWh0bWw9XCJlbnZlbG9wZS5lbWFpbEJvZHlcIj48L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZHMtcHJvdmlkZS1pY29uLXNldHRpbmc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgZ2V0RW52ZWxvcGVTdGF0dXNDbGFzc2VzLCBpbnZva2VCcm93c2VyRG93bmxvYWRGaWxlIH0gZnJvbSAnQHV0aWxzL2NvbW1vbic7XG5pbXBvcnQgUmVjaXBpZW50UmVzZW5kRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL0VudmVsb3BlRGV0YWlsL3JlY2lwaWVudFJlc2VuZERyb3Bkb3duJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ1Z5c2t5dGxhIHNlIGNoeWJhLCB6a3VzdGUgYWtjaSBvcGFrb3ZhdCBwb3pkxJtqaS4nXG4gICAgICAgIH0sXG4gICAgICAgIGdldFVybERvY3VtZW50RmlsZTogRnVuY3Rpb24sXG4gICAgICAgIHJlY2lwaWVudFJlc2VuZDogRnVuY3Rpb24sXG4gICAgICAgIHNlc3Npb25JZDogU3RyaW5nLFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBSZWNpcGllbnRSZXNlbmREcm9wZG93blxuICAgIH0sXG4gICAgZGF0YSAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICByZWNpcGllbnRzTW9kYWw6IFtdLFxuICAgICAgICAgICAgZW52ZWxvcGU6ICB7XCJzdGF0dXNcIjpcImRyYWZ0XCIsXCJtZXRhZGF0YVwiOlwiXCIsXCJkb2N1bWVudHNcIjpbe1wibmFtZVwiOlwiVnVlLTMtQ2hlYXQtU2hlZXQucGRmXCIsXCJtZXRhZGF0YVwiOlwiXCIsXCJmaWxlXCI6e1wiaWRcIjpcImQ1MDRhYjUwLWY4NTEtNDQxMS05ZTM3LWY1YWFiMzk1MGMwOVwiLFwiY3JlYXRlZEF0XCI6XCIyMDIwLTEwLTAyVDEzOjQ5OjI3KzAyOjAwXCIsXCJ1cGRhdGVkQXRcIjpcIjIwMjAtMTAtMDJUMTM6NDk6MjcrMDI6MDBcIixcIm5hbWVcIjpcImZpbGUtNWY3NzEzYzdkM2RjNDQ2MTE2MDU0NS5cIixcIm9yaWdpbmFsTmFtZVwiOlwiZmlsZVwiLFwibWltZVR5cGVcIjpcImFwcGxpY2F0aW9uXFwvcGRmXCIsXCJzaXplXCI6MjI1NjA3LFwic2hhMUNoZWNrc3VtXCI6XCI2ZTMzY2ZkOGE4NWU2ODM5Nzc0MTUyM2FiMTM3ZmE4YTdlZGY2NjlhXCIsXCJfYWN0aW9uc1wiOltdLFwiX2xpbmtzXCI6e1wiY29udGVudFwiOlwiXFwvYXBpXFwvZmlsZXNcXC9kNTA0YWI1MC1mODUxLTQ0MTEtOWUzNy1mNWFhYjM5NTBjMDlcXC9jb250ZW50XCJ9fSxcInBvc2l0aW9uXCI6MCxcImlkXCI6XCI2MDc0ZjYwZi02ZWI1LTRiMDgtOTAwMi1kZWE4NGRmNGE4NjRcIixcImNyZWF0ZWRBdFwiOlwiMjAyMC0xMC0wMlQxMzo0OToyOCswMjowMFwiLFwidXBkYXRlZEF0XCI6XCIyMDIwLTEwLTAyVDEzOjQ5OjI4KzAyOjAwXCIsXCJfYWN0aW9uc1wiOntcInVwZGF0ZVwiOntcIm1ldGhvZFwiOlwiUFVUXCIsXCJ1cmlcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2RvY3VtZW50c1xcLzYwNzRmNjBmLTZlYjUtNGIwOC05MDAyLWRlYTg0ZGY0YTg2NFwifSxcImRlbGV0ZVwiOntcIm1ldGhvZFwiOlwiREVMRVRFXCIsXCJ1cmlcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2RvY3VtZW50c1xcLzYwNzRmNjBmLTZlYjUtNGIwOC05MDAyLWRlYTg0ZGY0YTg2NFwifX0sXCJfbGlua3NcIjp7XCJkb3dubG9hZFwiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XFwvZG9jdW1lbnRzXFwvNjA3NGY2MGYtNmViNS00YjA4LTkwMDItZGVhODRkZjRhODY0XFwvZG93bmxvYWRcIixcInRhZ3NcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2RvY3VtZW50c1xcLzYwNzRmNjBmLTZlYjUtNGIwOC05MDAyLWRlYTg0ZGY0YTg2NFxcL3RhZ3NcIixcInNlbGZcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2RvY3VtZW50c1xcLzYwNzRmNjBmLTZlYjUtNGIwOC05MDAyLWRlYTg0ZGY0YTg2NFwifX1dLFwicmVjaXBpZW50c1wiOlt7XCJzdGF0dXNcIjpcImRyYWZ0XCIsXCJtZXRhZGF0YVwiOlwiXCIsXCJyb2xlXCI6XCJzaWduZXJcIixcIm5hbWVcIjpcIkR1XFx1MDE2MWVrXCIsXCJlbWFpbFwiOlwiZXRldGV0ZUB0ZXRlc3QuY29tXCIsXCJtb2JpbGVcIjpcIis0MjA3MzExMjM0NTZcIixcImVtYWlsQm9keVwiOm51bGwsXCJzZW50QXRcIjpudWxsLFwiZGVsaXZlcmVkQXRcIjpudWxsLFwibm9uRGVsaXZlcmVkQXRcIjpudWxsLFwic2lnbmVkQXRcIjpudWxsLFwiZGVjbGluZWRBdFwiOm51bGwsXCJjYW5jZWxsZWRBdFwiOm51bGwsXCJpZFwiOlwiMTcyMTU3YWUtOWZlOC00Y2I2LWFkMTctMjNkZTZlMzcwNjhiXCIsXCJjcmVhdGVkQXRcIjpcIjIwMjAtMTAtMDJUMTM6NDk6MjIrMDI6MDBcIixcInVwZGF0ZWRBdFwiOlwiMjAyMC0xMC0wMlQxMzo0OToyMiswMjowMFwiLFwiX2FjdGlvbnNcIjp7XCJ1cGRhdGVcIjp7XCJtZXRob2RcIjpcIlBVVFwiLFwidXJpXCI6XCJcXC9hcGlcXC9lbnZlbG9wZXNcXC9iN2ViM2VmOS0zNmQ3LTQ4OTAtOWQzZi03N2NjMzdmZjliYTVcXC9yZWNpcGllbnRzXFwvMTcyMTU3YWUtOWZlOC00Y2I2LWFkMTctMjNkZTZlMzcwNjhiXCJ9LFwiZGVsZXRlXCI6e1wibWV0aG9kXCI6XCJERUxFVEVcIixcInVyaVwiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XFwvcmVjaXBpZW50c1xcLzE3MjE1N2FlLTlmZTgtNGNiNi1hZDE3LTIzZGU2ZTM3MDY4YlwifSxcInJlc2VuZFwiOntcInZpb2xhdGlvbnNcIjpbe1widGl0bGVcIjpcIkVudmVsb3BlUmVjaXBpZW50IHN0YXR1cyBtdXN0IGJlIG9uZSBvZiBcXFwic2VudFxcXCIsIFxcXCJkZWxpdmVyZWRcXFwiLCBcXFwibm9uRGVsaXZlcmVkXFxcIiwgXFxcInNpZ25lZFxcXCJcIixcInBhcmFtZXRlcnNcIjp7XCJ7eyBzdGF0dXNlcyB9fVwiOlwiXFxcInNlbnRcXFwiLCBcXFwiZGVsaXZlcmVkXFxcIiwgXFxcIm5vbkRlbGl2ZXJlZFxcXCIsIFxcXCJzaWduZWRcXFwiXCJ9LFwidHlwZVwiOlwidXJuOnV1aWQ6ZWUwOTlkOGYtNzdkZS00MjhjLTk4NmMtMmI2Y2IwMjVmNGFkXCJ9LHtcInRpdGxlXCI6XCJFbnZlbG9wZSBzdGF0dXMgbXVzdCBiZSBvbmUgb2YgXFxcInNlbnRcXFwiLCBcXFwiY29tcGxldGVkXFxcIlwiLFwicGFyYW1ldGVyc1wiOntcInt7IHN0YXR1c2VzIH19XCI6XCJcXFwic2VudFxcXCIsIFxcXCJjb21wbGV0ZWRcXFwiXCJ9LFwidHlwZVwiOlwidXJuOnV1aWQ6ZDZiY2Q3Y2YtYjhmMC00YjVjLTk0MjItMWExMDhiYTIzNjM1XCJ9XSxcIm1ldGhvZFwiOlwiUE9TVFwiLFwidXJpXCI6XCJcXC9hcGlcXC9lbnZlbG9wZXNcXC9iN2ViM2VmOS0zNmQ3LTQ4OTAtOWQzZi03N2NjMzdmZjliYTVcXC9yZWNpcGllbnRzXFwvMTcyMTU3YWUtOWZlOC00Y2I2LWFkMTctMjNkZTZlMzcwNjhiXFwvcmVzZW5kXCJ9fSxcIl9saW5rc1wiOntcInNlbGZcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL3JlY2lwaWVudHNcXC8xNzIxNTdhZS05ZmU4LTRjYjYtYWQxNy0yM2RlNmUzNzA2OGJcIn19XSxcImVtYWlsU3ViamVjdFwiOlwiVGVlZXNzdCBkYWxcXHUwMTYxXFx1MDBlZFwiLFwiZW1haWxCb2R5XCI6XCJUZWVlc3N0IGRhbFxcdTAxNjFcXHUwMGVkXCIsXCJzZW5kZXJOYW1lXCI6XCJKb2huIFNtaXRoXCIsXCJzZW5kZXJFbWFpbFwiOlwiam9obi5zbWl0aEBleGFtcGxlLmNvbVwiLFwidmFsaWRUb1wiOm51bGwsXCJzZW50QXRcIjpudWxsLFwiY29tcGxldGVkQXRcIjpudWxsLFwiY2FuY2VsbGVkQXRcIjpudWxsLFwiZXhwaXJlZEF0XCI6bnVsbCxcImRlY2xpbmVkQXRcIjpudWxsLFwiaWRcIjpcImI3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVwiLFwiY3JlYXRlZEF0XCI6XCIyMDIwLTEwLTAyVDEzOjQ5OjA1KzAyOjAwXCIsXCJ1cGRhdGVkQXRcIjpcIjIwMjAtMTAtMDJUMTM6NDk6MzkrMDI6MDBcIixcIl9hY3Rpb25zXCI6e1widXBkYXRlXCI6e1wibWV0aG9kXCI6XCJQVVRcIixcInVyaVwiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XCJ9LFwiZXh0ZW5kXCI6e1wibWV0aG9kXCI6XCJQVVRcIixcInVyaVwiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XFwvZXh0ZW5kXCJ9LFwic2VuZFwiOntcIm1ldGhvZFwiOlwiUE9TVFwiLFwidXJpXCI6XCJcXC9hcGlcXC9lbnZlbG9wZXNcXC9iN2ViM2VmOS0zNmQ3LTQ4OTAtOWQzZi03N2NjMzdmZjliYTVcXC9zZW5kXCJ9LFwiY2FuY2VsXCI6e1wibWV0aG9kXCI6XCJQT1NUXCIsXCJ1cmlcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2NhbmNlbFwifSxcImRlbGV0ZVwiOntcIm1ldGhvZFwiOlwiREVMRVRFXCIsXCJ1cmlcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVwifSxcImFkZF9yZWNpcGllbnRcIjp7XCJtZXRob2RcIjpcIlBPU1RcIixcInVyaVwiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XFwvcmVjaXBpZW50c1wifSxcImFkZF9kb2N1bWVudFwiOntcIm1ldGhvZFwiOlwiUE9TVFwiLFwidXJpXCI6XCJcXC9hcGlcXC9lbnZlbG9wZXNcXC9iN2ViM2VmOS0zNmQ3LTQ4OTAtOWQzZi03N2NjMzdmZjliYTVcXC9kb2N1bWVudHNcIn0sXCJhZGRfdGFnXCI6e1wibWV0aG9kXCI6XCJQT1NUXCIsXCJ1cmlcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL3RhZ3NcIn19LFwiX2xpbmtzXCI6e1wiZG93bmxvYWRcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2Rvd25sb2FkXCIsXCJyZWNpcGllbnRzXCI6XCJcXC9hcGlcXC9lbnZlbG9wZXNcXC9iN2ViM2VmOS0zNmQ3LTQ4OTAtOWQzZi03N2NjMzdmZjliYTVcXC9yZWNpcGllbnRzXCIsXCJkb2N1bWVudHNcIjpcIlxcL2FwaVxcL2VudmVsb3Blc1xcL2I3ZWIzZWY5LTM2ZDctNDg5MC05ZDNmLTc3Y2MzN2ZmOWJhNVxcL2RvY3VtZW50c1wiLFwidGFnc1wiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XFwvdGFnc1wiLFwic2VsZlwiOlwiXFwvYXBpXFwvZW52ZWxvcGVzXFwvYjdlYjNlZjktMzZkNy00ODkwLTlkM2YtNzdjYzM3ZmY5YmE1XCJ9fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldEVudmVsb3BlU3RhdHVzQ2xhc3NlcyxcbiAgICAgICAgaXNMYXN0KGFycmF5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5Lmxlbmd0aCAtIDEgPT09IGluZGV4O1xuICAgICAgICB9LFxuICAgICAgICBzaG93UmVjaXBpZW50TW9kYWwoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMucmVjaXBpZW50c01vZGFsLnNwbGljZShpbmRleCwgMSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc1JlY2lwaWVudFJlc2VuZChyZWNpcGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAhcmVjaXBpZW50Ll9hY3Rpb25zLnJlc2VuZC52aW9sYXRpb25zO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZVJlY2lwaWVudE1vZGFsKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnJlY2lwaWVudHNNb2RhbC5zcGxpY2UoaW5kZXgsIDEsIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZHMtbW9kYWwgY2xhc3M9XCJkc3dcIlxuICAgICAgICAgICAgICA6dmlzaWJsZT1cInZpc2libGVcIlxuICAgICAgICAgICAgICBAY2xvc2U9XCIkZW1pdCgnY2xvc2UnKVwiXG4gICAgICAgICAgICAgIDphcmlhLWxhYmVsbGVkYnk9XCJpZFwiXG4gICAgICAgICAgICAgIHdyYXBwZXItdGFnPVwiZGl2XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwieyBjbG9zZSB9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgc2hhZG93LWxnIG1heC13LXhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93IG10LTYgdGV4dC14bCB0ZXh0LWdyYXktMTAwMFwiIHRhYmluZGV4PVwiMFwiIDppZD1cImlkXCI+Wm5vdnUgb2RlbGF0IHDFmcOtamVtY2k/PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJaYXbFmcOtdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHgtMyAtbXItMyB0ZXh0LXhsIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTEwIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9wcmF2ZHUgc2kgcMWZZWpldGUgem5vdnUgb2Rlc2xhdCBuYSBlbWFpbCA8YSA6aHJlZj1cIidtYWlsdG86JyArIHJlY2lwaWVudC5lbWFpbFwiPnt7IHJlY2lwaWVudC5lbWFpbCB9fTwvYT4gP1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBweC1weCBtYi1weFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZmxleC1ncm93IHAtNCBteC1weCBtYi1weCB0ZXh0LXNtIHRleHQtbGVmdCB0ZXh0LXdoaXRlIGJnLWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cImNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBaYXbFmcOtdFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImZsZXgtZ3JvdyBwLTQgbXgtcHggbWItcHggdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBiZy1ibHVlLTYwMFwiIHR5cGU9XCJidXR0b25cIiBAY2xpY2sucHJldmVudD1cInJlc2VuZEVudmVsb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBPZGVzbGF0XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kcy1tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICByZWNpcGllbnQ6IE9iamVjdCxcbiAgICAgICAgZW52ZWxvcGVJZDogU3RyaW5nLFxuICAgICAgICB2aXNpYmxlOiBCb29sZWFuLFxuICAgICAgICBpZDogU3RyaW5nLFxuICAgICAgICBzZXNzaW9uSWQ6IFN0cmluZyxcbiAgICAgICAgcmVjaXBpZW50UmVzZW5kOiBGdW5jdGlvblxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhc3luYyByZXNlbmRFbnZlbG9wZSgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlY2lwaWVudFJlc2VuZCh0aGlzLnJlY2lwaWVudC5pZCwgdGhpcy5lbnZlbG9wZUlkLCB0aGlzLnNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdub3RpZmljYXRpb25zL2FkZE5vdGlmaWNhdGlvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCDDunNwxJvFoW7EmyBvZGVzbMOhbi4nLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHN3XCI+XG4gICAgICAgIDxlbnZlbG9wZS1kZXRhaWwgOmVudmVsb3BlPVwiZW52ZWxvcGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpnZXQtdXJsLWRvY3VtZW50LWZpbGU9XCJnZXRVcmxEb2N1bWVudEZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpyZWNpcGllbnQtcmVzZW5kPVwicmVjaXBpZW50UmVzZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6c2Vzc2lvbi1pZD1cInNlc3Npb25JZFwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBBUElfVVJMIGZyb20gJ0B1dGlscy9hcGkuanMnO1xuaW1wb3J0IEVudmVsb3BlRGV0YWlsIGZyb20gJ0AvY29tcG9uZW50cy9FbnZlbG9wZURldGFpbC9FbnZlbG9wZURldGFpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdWeXNreXRsYSBzZSBjaHliYSwgemt1c3RlIGFrY2kgb3Bha292YXQgcG96ZMSbamkuJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEVudmVsb3BlRGV0YWlsXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVudmVsb3BlOiB7fSxcbiAgICAgICAgICAgIGhhc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGFwaUJhc2VVcmw6IEFQSV9VUkwsXG4gICAgICAgICAgICBzZXNzaW9uSWQ6IG51bGwsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFzeW5jIGdldEVudmVsb3BlKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnZlbG9wZVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHRoaXMuJHJvdXRlKCdlbWJlZGRlZC5lbnZlbG9wZS5nZXQnLCBudWxsLCB0cnVlKSwge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5zZXNzaW9uSWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGVudmVsb3BlUmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudmVsb3BlUmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBnZXRBdXRoVG9rZW4odG9rZW4pIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHRoaXMuJHJvdXRlKCd1aV9lbWJlZGRlZF9sb2dpbmFjdGlvbl9faW52b2tlJywgbnVsbCwgdHJ1ZSksIHtcbiAgICAgICAgICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5zZXNzO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0sXG4gICAgICAgIGdldFVybERvY3VtZW50RmlsZShkb2N1bWVudElkLCBlbnZlbG9wZUlkLCBzZXNzaW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLiRyb3V0ZSgnZW1iZWRkZWQuZW52ZWxvcGUuZG9jdW1lbnRzLmRvd25sb2FkJywge2RvY3VtZW50OiBkb2N1bWVudElkfSwgdHJ1ZSl9P3Nlc3M9JHtzZXNzaW9uSWR9YFxuICAgICAgICB9LFxuICAgICAgICByZWNpcGllbnRSZXNlbmQocmVjaXBpZW50SWQsIGVudmVsb3BlSWQsIHNlc3Npb25JZCkge1xuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QodGhpcy4kcm91dGUoJ2VtYmVkZGVkLmVudmVsb3BlLnJlY2lwaWVudHMucmVzZW5kJywge3JlY2lwaWVudDogcmVjaXBpZW50SWR9LCB0cnVlKSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7c2Vzc2lvbklkfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRzLXByb3ZpZGUtaWNvbi1zZXR0aW5nXCIsIHsgYXR0cnM6IHsgcGFja2FnZTogXCJkaWdpc2lnbmFwcFwiIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBweC00IHB5LTQgYmctd2hpdGUgbWQ6cHgtOCBtZDpweS02XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTQgdGV4dC14bCBmb250LW1lZGl1bSBtZDptYi04IHRleHQtZ3JheS0xMDAwXCIgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZW52ZWxvcGUuZW1haWxTdWJqZWN0KSldXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi00IGJvcmRlci1jb2xsYXBzZSB0YWJsZS1maXhlZCBtZDptYi04XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwidy0zMiBwci0yIHRleHQteHMgZm9udC1ub3JtYWwgdGV4dC1sZWZ0IHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWeXR2b8WZZW5vXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwicHgtNCB0ZXh0LXhzIGZvbnQtbm9ybWFsIHRleHQtbGVmdCB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RhdlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJwdC0xIHBiLTIgcHItMiB0ZXh0LXNtIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGZvcm1hdERhdGVTdHJpbmcoX3ZtLmVudmVsb3BlLmNyZWF0ZWRBdCwgXCJMXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRmb3JtYXREYXRlU3RyaW5nKF92bS5lbnZlbG9wZS5jcmVhdGVkQXQsIFwiTFRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRmb3JtYXREYXRlU3RyaW5nKF92bS5lbnZlbG9wZS5jcmVhdGVkQXQsIFwiTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwicHgtNCBwdC0xIHBiLTIgdGV4dC1zbSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTEwMDBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4LW5vbmUgdy0yIGgtMiBtci0yIHJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRFbnZlbG9wZVN0YXR1c0NsYXNzZXMoX3ZtLmVudmVsb3BlLnN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwiZW52ZWxvcGUuXCIgKyBfdm0uZW52ZWxvcGUuc3RhdHVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgbWQ6bWItNCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiRG9rdW1lbnR5IGsgcG9kcGlzdVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCItbXgtNCBtZDpteC0wXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWItNCBiZy1ncmF5LTEwMCBib3JkZXItY29sbGFwc2UgbWQ6bWItOFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVudmVsb3BlLmRvY3VtZW50cywgZnVuY3Rpb24oZG9jdW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogZG9jdW1lbnQuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtNCBweS0yIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktMTAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItYlwiOiBfdm0uaXNMYXN0KF92bS5lbnZlbG9wZS5kb2N1bWVudHMsIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRzLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleC1ub25lIHctNSBoLTUgbXQtMSBtci0zIGJnLWJsdWUtNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImlfbWltZXR5cGVfcGRmXzMyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNlbGYtY2VudGVyIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGRvY3VtZW50Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweC0yIHB5LTIgdGV4dC1yaWdodCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWJcIjogX3ZtLmlzTGFzdChfdm0uZW52ZWxvcGUuZG9jdW1lbnRzLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRzLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOCBoLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWctbmFtZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldmVudC1vdmVyZmxvd1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvcHBlci1tb2RpZmllcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwib2Zmc2V0XCIsIG9wdGlvbnM6IHsgb2Zmc2V0OiBbMCwgOF0gfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzcy1jb250ZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hhZG93LWRtZCBtYXgtdy1sZyBiZy1ncmF5LTEwMCBjdXJzb3ItYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1vcGVuZWQtY2xhc3MtdHJpZ2dlclwiOiBcImJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRzLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy00IGgtNCBiZy1ncmF5LTEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiaV9tb3JlX3ZlcnRpY2FsXzIwXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJjb250ZW50XCIgfSwgc2xvdDogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInctYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3LWF1dG8gdGV4dC1iYXNlIHRleHQtZ3JheS04MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgcHgtNCBweS0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0uZ2V0VXJsRG9jdW1lbnRGaWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbnZlbG9wZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2Vzc2lvbklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3TDoWhub3V0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBtZDptYi00IHRleHQtZ3JheS0xMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJQxZnDrWplbWNpXCIpXVxuICAgICAgICApLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIi1teC00IG1kOm14LTBcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYmxvY2sgdy1mdWxsIG1iLTQgYmctZ3JheS0xMDAgYm9yZGVyLWNvbGxhcHNlIG1kOm1iLTggbWQ6dGFibGVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCB7IHN0YXRpY0NsYXNzOiBcImhpZGRlbiBtZDp0YWJsZS1oZWFkZXItZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcImJnLWdyYXktMjAwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWxlZnQgdGV4dC1ncmF5LTEwMDBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSm3DqW5vXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0IHRleHQtZ3JheS0xMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkUtbWFpbFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGVmdCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUZWxlZm9uXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0IHRleHQtZ3JheS0xMDAwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIsOabG9oYVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGVmdCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdGF2XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGVmdCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LXNtIG1kOnRhYmxlLXJvdy1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbnZlbG9wZS5yZWNpcGllbnRzLCBmdW5jdGlvbihyZWNpcGllbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogcmVjaXBpZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHB0LTQgcGItMiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgbWQ6cGItMCBtZDpwdC0wIG1kOmJvcmRlci1iIG1kOnRhYmxlLXJvdyB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlci0xIHB4LTQgcGItMyBtci0xMCB0ZXh0LWJhc2UgZm9udC1ib2xkIGJvcmRlci1ncmF5LTIwMCBtZDp0ZXh0LXNtIG1kOnB5LTIgbWQ6Zm9udC1ub3JtYWwgbWQ6Ym9yZGVyLXQgbWQ6Ym9yZGVyLWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJlY2lwaWVudC5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JkZXItMyBweC00IHBiLTIgbXItMTAgYm9yZGVyLWdyYXktMjAwIG1kOnB5LTIgbWQ6Ym9yZGVyLXQgbWQ6Ym9yZGVyLWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHJlY2lwaWVudC5lbWFpbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyLTQgcHgtNCBwYi0yIG1yLTEwIGJvcmRlci1ncmF5LTIwMCBtZDpweS0yIG1kOmJvcmRlci10IG1kOmJvcmRlci1iXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyZWNpcGllbnQubW9iaWxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JkZXItMiBweC00IHBiLTIgbXItMTAgYm9yZGVyLWdyYXktMjAwIG1kOnB5LTIgbWQ6Ym9yZGVyLXQgbWQ6Ym9yZGVyLWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudC5yb2xlID09PSBcInNpZ25lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJQb2RlcGlzdWrDrWPDrVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJPYmRyxb7DrSBrb3BpaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZHMtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy00IGgtNCBiZy1ncmF5LTEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50LnJvbGUgPT09IFwic2lnbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiaV9zaWduYXR1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpX3ByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTIgbWQ6aGlkZGVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50LnJvbGUgPT09IFwic2lnbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiUG9kZXBpc3Vqw61jw61cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJPYmRyxb7DrSBrb3BpaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyLTUgcHgtNCBwYi0yIG1yLTEwIGJvcmRlci1ncmF5LTIwMCBtZDpweS0yIG1kOmJvcmRlci10IG1kOmJvcmRlci1iXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0yIGgtMiBtci0yIHJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRFbnZlbG9wZVN0YXR1c0NsYXNzZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudC5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiR0KFwicmVjaXBpZW50LlwiICsgcmVjaXBpZW50LnN0YXR1cykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgcHgtMiBwYi0yIG10LTIgdGV4dC1yaWdodCBib3JkZXItZ3JheS0yMDAgbWQ6cHktMiBtZDptdC0wIG1kOm1yLTAgbWQ6Ym9yZGVyLXQgbWQ6Ym9yZGVyLWIgbWQ6c3RhdGljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNSZWNpcGllbnRSZXNlbmQocmVjaXBpZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRzLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOCBoLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnLW5hbWVcIjogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2ZW50LW92ZXJmbG93XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvcHBlci1tb2RpZmllcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwib2Zmc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IG9mZnNldDogWzAsIDhdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3MtY29udGVudFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hhZG93LWRtZCBtYXgtdy1sZyBiZy1ncmF5LTEwMCBjdXJzb3ItYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLW9wZW5lZC1jbGFzcy10cmlnZ2VyXCI6IFwiYmctZ3JheS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkcy1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy00IGgtNCBiZy1ncmF5LTEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJpX21vcmVfdmVydGljYWxfMjBcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInctYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidy1hdXRvIHB4LTQgcHktMyB0ZXh0LWJhc2UgdGV4dC1ncmF5LTgwMCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd1JlY2lwaWVudE1vZGFsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2Rlc2xhdCB6bm92dVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWNpcGllbnQtcmVzZW5kLWRyb3Bkb3duXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGlhbG9nSGVhZGVyXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXNzaW9uLWlkXCI6IF92bS5zZXNzaW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudmVsb3BlLWlkXCI6IF92bS5lbnZlbG9wZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjaXBpZW50LXJlc2VuZFwiOiBfdm0ucmVjaXBpZW50UmVzZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogX3ZtLnJlY2lwaWVudHNNb2RhbFtpbmRleF0gfHwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2VSZWNpcGllbnRNb2RhbChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgbWQ6bWItNCB0ZXh0LWdyYXktMTAwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiT2LDoWxrYVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yIHRleHQtc20gbWQ6bWItNCB0ZXh0LWdyYXktMTAwMFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJOw6F6ZXZcIilcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwicHgtNCBweS0yIG1iLTQgdGV4dC1zbSBiZy1ncmF5LTEwMCBtZDptYi04IHRleHQtZ3JheS0xMDAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5lbnZlbG9wZS5lbWFpbFN1YmplY3QpKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yIHRleHQtc20gbWQ6bWItNCB0ZXh0LWdyYXktMTAwMFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJQxZlpcG9qZW7DoSB6cHLDoXZhXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHgtNCBweS0yIHRleHQtc20gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTEwMDBcIixcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZW52ZWxvcGUuZW1haWxCb2R5KSB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkcy1tb2RhbFwiLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZHN3XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIHZpc2libGU6IF92bS52aXNpYmxlLFxuICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogX3ZtLmlkLFxuICAgICAgXCJ3cmFwcGVyLXRhZ1wiOiBcImRpdlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgY2xvc2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgdmFyIGNsb3NlID0gcmVmLmNsb3NlXG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJnLWdyYXktMTAwIHNoYWRvdy1sZyBtYXgtdy14bCBteC1hdXRvXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXgtNFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBtYi02XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtZ3JvdyBtdC02IHRleHQteGwgdGV4dC1ncmF5LTEwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRhYmluZGV4OiBcIjBcIiwgaWQ6IF92bS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiWm5vdnUgb2RlbGF0IHDFmcOtamVtY2k/XCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInB4LTMgLW1yLTMgdGV4dC14bCBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWxhYmVsXCI6IFwiWmF2xZnDrXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3NlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIMOXXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTEwIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgT3ByYXZkdSBzaSBwxZllamV0ZSB6bm92dSBvZGVzbGF0IG5hIGVtYWlsIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCJtYWlsdG86XCIgKyBfdm0ucmVjaXBpZW50LmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucmVjaXBpZW50LmVtYWlsKSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiA/XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggcHgtcHggbWItcHhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4LWdyb3cgcC00IG14LXB4IG1iLXB4IHRleHQtc20gdGV4dC1sZWZ0IHRleHQtd2hpdGUgYmctZ3JheS04MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2UoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgWmF2xZnDrXRcXG4gICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXgtZ3JvdyBwLTQgbXgtcHggbWItcHggdGV4dC1zbSB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBiZy1ibHVlLTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2VuZEVudmVsb3BlKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICAgIE9kZXNsYXRcXG4gICAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdKVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImRzd1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJlbnZlbG9wZS1kZXRhaWxcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGVudmVsb3BlOiBfdm0uZW52ZWxvcGUsXG4gICAgICAgICAgXCJnZXQtdXJsLWRvY3VtZW50LWZpbGVcIjogX3ZtLmdldFVybERvY3VtZW50RmlsZSxcbiAgICAgICAgICBcInJlY2lwaWVudC1yZXNlbmRcIjogX3ZtLnJlY2lwaWVudFJlc2VuZCxcbiAgICAgICAgICBcInNlc3Npb24taWRcIjogX3ZtLnNlc3Npb25JZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW52ZWxvcGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3OThjYjUyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VudmVsb3BlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW52ZWxvcGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9ob256YS1kcy9EU19wcm9qZWt0eS9kaWdpc2lnbi1hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTc5OGNiNTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTc5OGNiNTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTc5OGNiNTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VudmVsb3BlRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzk4Y2I1MiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzk4Y2I1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXBwL2NvbXBvbmVudHMvRW52ZWxvcGVEZXRhaWwvRW52ZWxvcGVEZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbnZlbG9wZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW52ZWxvcGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwidmFyL3dlYnBhY2svdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjVkYjRlMjE0LXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW52ZWxvcGVEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3OThjYjUyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQzYjE3NDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVjaXBpZW50UmVzZW5kRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL2hvbnphLWRzL0RTX3Byb2pla3R5L2RpZ2lzaWduLWFwcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NDNiMTc0NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NDNiMTc0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NDNiMTc0NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVjaXBpZW50UmVzZW5kRHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0M2IxNzQ0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc0M2IxNzQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhcHAvY29tcG9uZW50cy9FbnZlbG9wZURldGFpbC9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlY2lwaWVudFJlc2VuZERyb3Bkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJ2YXIvd2VicGFjay92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNWRiNGUyMTQtdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWNpcGllbnRSZXNlbmREcm9wZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQzYjE3NDQmXCIiLCJjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vYXBwLmRpZ2lzaWduLmRpZ2l0YWwuY3ovZW1iZWRkZWQnXG5cbmV4cG9ydCBkZWZhdWx0IEFQSV9VUkxcbiIsImV4cG9ydCBjb25zdCBFTlZFTE9QRV9TVEFUVVNFUyA9IHtcbiAgICBDQU5DRUxMRUQ6ICdjYW5jZWxsZWQnLFxuICAgIERFQ0xJTkVEOiAnZGVjbGluZWQnLFxuICAgIERSQUZUOiAnZHJhZnQnLFxuICAgIFNFTlQ6ICdzZW50JyxcbiAgICBDT01QTEVURUQ6ICdjb21wbGV0ZWQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFJFQ0lQSUVOVF9TVEFUVVNFUyA9IHtcbiAgICBEUkFGVDogJ2RyYWZ0JyxcbiAgICBTRU5UOiAnc2VudCcsXG4gICAgREVMSVZFUkVEOiAnZGVsaXZlcmVkJyxcbiAgICBOT05fREVMSVZFUkVEOiAnbm9uRGVsaXZlcmVkJyxcbiAgICBTSUdORUQ6ICdzaWduZWQnLFxuICAgIERFQ0xJTkVEOiAnZGVjbGluZWQnLFxuICAgIENBTkNFTExFRDogJ2NhbmNlbGxlZCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW52ZWxvcGVTdGF0dXNDbGFzc2VzIChzdGF0dXMpIHtcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICAgICAgW0VOVkVMT1BFX1NUQVRVU0VTLkNBTkNFTExFRF06ICdiZy1ncmF5LTMwMCcsXG4gICAgICAgIFtFTlZFTE9QRV9TVEFUVVNFUy5ERUNMSU5FRF06ICdiZy1ncmF5LTMwMCcsXG4gICAgICAgIFtFTlZFTE9QRV9TVEFUVVNFUy5EUkFGVF06ICdiZy1wdXJwbGUtNDAwJyxcbiAgICAgICAgW0VOVkVMT1BFX1NUQVRVU0VTLlNFTlRdOiAnYmctY3lhbi00MDAnLFxuICAgICAgICBbRU5WRUxPUEVfU1RBVFVTRVMuQ09NUExFVEVEXTogJ2JnLWdyZWVuLTUwMCcsXG4gICAgfTtcbiAgICByZXR1cm4gdmFyaWFudHNbc3RhdHVzXSB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlY2lwaWVudFN0YXR1c0NsYXNzZXMgKHN0YXR1cykge1xuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgICAgICBbUkVDSVBJRU5UX1NUQVRVU0VTLkRSQUZUXTogJ2JnLXB1cnBsZS00MDAnLFxuICAgICAgICBbUkVDSVBJRU5UX1NUQVRVU0VTLlNFTlRdOiAnYmctY3lhbi00MDAnLFxuICAgICAgICBbUkVDSVBJRU5UX1NUQVRVU0VTLkRFTElWRVJFRF06ICdiZy1jeWFuLTQwMCcsXG4gICAgICAgIFtSRUNJUElFTlRfU1RBVFVTRVMuTk9OX0RFTElWRVJFRF06ICdiZy1yZWQtNjAwJyxcbiAgICAgICAgW1JFQ0lQSUVOVF9TVEFUVVNFUy5TSUdORURdOiAnYmctZ3JlZW4tNTAwJyxcbiAgICAgICAgW1JFQ0lQSUVOVF9TVEFUVVNFUy5ERUNMSU5FRF06ICdiZy1ncmF5LTMwMCcsXG4gICAgICAgIFtSRUNJUElFTlRfU1RBVFVTRVMuQ0FOQ0VMTEVEXTogJ2JnLWdyYXktMzAwJyxcbiAgICB9O1xuICAgIHJldHVybiB2YXJpYW50c1tzdGF0dXNdIHx8ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlQnJvd3NlckRvd25sb2FkRmlsZSAoZmlsZURhdGEsIGZpbGVOYW1lLCBtaW1ldHlwZSkge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtmaWxlRGF0YV0sIHsgdHlwZTogbWltZXR5cGUgfSk7XG4gICAgY29uc3QgZG93bmxvYWRVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAvLyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBkb3dubG9hZCB5ZXRcbiAgICBpZiAodHlwZW9mIGxpbmsuZG93bmxvYWQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IGRvd25sb2FkVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxpbmsuaHJlZiA9IGRvd25sb2FkVXJsO1xuICAgICAgICBsaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XG4gICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChsaW5rLmhyZWYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVWlkICgpIHtcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qZWQvOTgyODgzXG4gICAgY29uc3QgYiA9IGEgPT5cbiAgICAgICAgYVxuICAgICAgICAgICAgPyAoYSBeICgoTWF0aC5yYW5kb20oKSAqIDE2KSA+PiAoYSAvIDQpKSkudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICA6IChbMWU3XSArIC0xZTMgKyAtNGUzICsgLThlMyArIC0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBiKTtcbiAgICByZXR1cm4gYHVpZC0ke2IoKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5tYXAoZGVlcENsb25lKTtcbiAgICB9IGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0ge307XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgY2xvbmVkW2tleV0gPSBkZWVwQ2xvbmUob2JqW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2VudmVsb3BlRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmI5MmM4MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9lbnZlbG9wZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2VudmVsb3BlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvaG9uemEtZHMvRFNfcHJvamVrdHkvZGlnaXNpZ24tYXBwL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBiYjkyYzgwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBiYjkyYzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBiYjkyYzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9lbnZlbG9wZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJiOTJjODAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGJiOTJjODAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFwcC93aWRnZXQvd2lkZ2V0cy9lbnZlbG9wZURldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2VudmVsb3BlRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbnZlbG9wZURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJ2YXIvd2VicGFjay92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNWRiNGUyMTQtdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9lbnZlbG9wZURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGJiOTJjODAmXCIiXSwic291cmNlUm9vdCI6IiJ9