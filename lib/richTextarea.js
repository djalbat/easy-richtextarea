"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RichTextarea;
    }
});
var _easy = require("easy");
var _selection = /*#__PURE__*/ _interopRequireDefault(require("./selection"));
var _event = /*#__PURE__*/ _interopRequireDefault(require("./mixins/event"));
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, INPUT_EVENT_TYPE = _easy.eventTypes.INPUT_EVENT_TYPE, FOCUS_EVENT_TYPE = _easy.eventTypes.FOCUS_EVENT_TYPE, CHANGE_EVENT_TYPE = _easy.eventTypes.CHANGE_EVENT_TYPE, SCROLL_EVENT_TYPE = _easy.eventTypes.SCROLL_EVENT_TYPE, SELECTIONCHANGE_EVENT_TYPE = _easy.eventTypes.SELECTIONCHANGE_EVENT_TYPE;
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    var _super = _createSuper(RichTextarea);
    function RichTextarea() {
        _classCallCheck(this, RichTextarea);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "inputHandler", function(event, element) {
            _this.intermediateHandler(event, element);
        });
        _defineProperty(_assertThisInitialized(_this), "blurHandler", function(event, element) {
            var eventType = BLUR_EVENT_TYPE, selectionChanged = true;
            _this.intermediateHandler(event, element, eventType, selectionChanged);
        });
        _defineProperty(_assertThisInitialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var eventType = FOCUS_EVENT_TYPE, selectionChanged = true;
                _this.intermediateHandler(event, element, eventType, selectionChanged);
            });
        });
        _defineProperty(_assertThisInitialized(_this), "scrollHandler", function(event, element) {
            var eventType = SCROLL_EVENT_TYPE;
            _this.callHandlers(eventType, event, element);
        });
        _defineProperty(_assertThisInitialized(_this), "contextmenuHandler", function(event, element) {
            event.preventDefault();
        });
        _defineProperty(_assertThisInitialized(_this), "selectChangeHandler", function(event, element) {
            var currentTarget = event.currentTarget, activeElement = currentTarget.activeElement, domElement = _this.getDOMElement();
            if (activeElement === domElement) {
                element = _assertThisInitialized(_this); ///
                _this.intermediateHandler(event, element);
            }
        });
        _defineProperty(_assertThisInitialized(_this), "intermediateHandler", function(event, element) {
            var eventType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : CHANGE_EVENT_TYPE, selectionChanged = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _this.hasSelectionChanged();
            var content = _this.getContent(), selection = _this.getSelection(), contentChanged = _this.hasContentChanged();
            if (contentChanged || selectionChanged) {
                _this.callHandlers(eventType, event, element);
            }
            var previousContent = content, previousSelection = selection; ///
            _this.setPreviousContent(previousContent);
            _this.setPreviousSelection(previousSelection);
        });
        return _this;
    }
    _createClass(RichTextarea, [
        {
            key: "callHandlers",
            value: function callHandlers(eventType) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var element = eventListener.element;
                    var handler = eventListener.handler, handlerElement = element; ///
                    element = _this; ///
                    if (handler !== _this.inputHandler && handler !== _this.blurHandler && handler !== _this.focusHandler && handler !== _this.scrollHandler && handler !== _this.contextmenuHandler && handler !== _this.selectChangeHandler) {
                        var _handler;
                        (_handler = handler).call.apply(_handler, [
                            handlerElement
                        ].concat(_toConsumableArray(remainingArguments), [
                            element
                        ]));
                    }
                });
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                var active = this.hasClass("active");
                return active;
            }
        },
        {
            key: "getContent",
            value: function getContent() {
                var domElement = this.getDOMElement(), value = domElement.value, content = value; ///
                return content;
            }
        },
        {
            key: "getSelection",
            value: function getSelection() {
                var domElement = this.getDOMElement(), selection = _selection.default.fromDOMElement(domElement);
                return selection;
            }
        },
        {
            key: "getSelectedContent",
            value: function getSelectedContent() {
                var content = this.getContent(), selection = this.getSelection(), endPosition = selection.getEndPosition(), startPosition = selection.getStartPosition(), start = startPosition, end = endPosition, selectedContent = content.slice(start, end);
                return selectedContent;
            }
        },
        {
            key: "hasContentChanged",
            value: function hasContentChanged() {
                var content = this.getContent(), previousContent = this.getPreviousContent(), contentPreviousContent = content === previousContent, contentChanged = !contentPreviousContent;
                return contentChanged;
            }
        },
        {
            key: "hasSelectionChanged",
            value: function hasSelectionChanged() {
                var selection = this.getSelection(), previousSelection = this.getPreviousSelection(), selectionPreviousSelection = selection.isEqualTo(previousSelection), selectionChanged = !selectionPreviousSelection; ///
                return selectionChanged;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                var setPreviousContent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var value = content, domElement = this.getDOMElement();
                Object.assign(domElement, {
                    value: value
                });
                if (setPreviousContent) {
                    var previousContent = content; ///
                    this.setPreviousContent(previousContent);
                }
            }
        },
        {
            key: "setSelection",
            value: function setSelection(selection) {
                var setPreviousSelection = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), selectionStart = selectionStartPosition, selectionEnd = selectionEndPosition, domElement = this.getDOMElement();
                domElement.setSelectionRange(selectionStart, selectionEnd);
                if (setPreviousSelection) {
                    var previousSelection = selection; ///
                    this.setPreviousSelection(previousSelection);
                }
            }
        },
        {
            key: "activate",
            value: function activate() {
                this.on(INPUT_EVENT_TYPE, this.inputHandler);
                this.on(BLUR_EVENT_TYPE, this.blurHandler);
                this.on(FOCUS_EVENT_TYPE, this.focusHandler);
                this.on(SCROLL_EVENT_TYPE, this.scrollHandler);
                _easy.document.on(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                this.off(INPUT_EVENT_TYPE, this.inputHandler);
                this.off(BLUR_EVENT_TYPE, this.blurHandler);
                this.off(FOCUS_EVENT_TYPE, this.focusHandler);
                this.off(SCROLL_EVENT_TYPE, this.scrollHandler);
                _easy.document.off(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);
                this.removeClass("active");
            }
        },
        {
            key: "getPreviousContent",
            value: function getPreviousContent() {
                var previousContent = this.getState().previousContent;
                return previousContent;
            }
        },
        {
            key: "getPreviousSelection",
            value: function getPreviousSelection() {
                var previousSelection = this.getState().previousSelection;
                return previousSelection;
            }
        },
        {
            key: "setPreviousContent",
            value: function setPreviousContent(previousContent) {
                this.updateState({
                    previousContent: previousContent
                });
            }
        },
        {
            key: "setPreviousSelection",
            value: function setPreviousSelection(previousSelection) {
                this.updateState({
                    previousSelection: previousSelection
                });
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, onBlur = _this_properties.onBlur, onFocus = _this_properties.onFocus, onScroll = _this_properties.onScroll, onChange = _this_properties.onChange, blurHandler = onBlur, focusHandler = onFocus, scrollHandler = onScroll, changeHandler = onChange; ///
                this.updateInitialState();
                blurHandler && this.onBlur(blurHandler, this);
                focusHandler && this.onFocus(focusHandler, this);
                scrollHandler && this.onScroll(scrollHandler, this);
                changeHandler && this.onChange(changeHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _this_properties = this.properties, onBlur = _this_properties.onBlur, onFocus = _this_properties.onFocus, onScroll = _this_properties.onScroll, onChange = _this_properties.onChange, blurHandler = onBlur, focusHandler = onFocus, scrollHandler = onScroll, changeHandler = onChange; ///
                blurHandler && this.offBlur(blurHandler, this);
                focusHandler && this.offFocus(focusHandler, this);
                scrollHandler && this.offScroll(scrollHandler, this);
                changeHandler && this.offChange(changeHandler, this);
                var active = this.isActive();
                if (active) {
                    this.deactivate();
                }
            }
        },
        {
            key: "updateInitialState",
            value: function updateInitialState() {
                var content = this.getContent(), selection = this.getSelection(), previousContent = content, previousSelection = selection; ///
                this.setPreviousContent(previousContent);
                this.setPreviousSelection(previousSelection);
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousContent = null, previousSelection = null;
                this.setState({
                    previousContent: previousContent,
                    previousSelection: previousSelection
                });
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                    remainingArguments[_key - 2] = arguments[_key];
                }
                var _Element;
                var richTextarea = (_Element = _easy.Element).fromClass.apply(_Element, [
                    Class,
                    properties
                ].concat(_toConsumableArray(remainingArguments)));
                return richTextarea;
            }
        }
    ]);
    return RichTextarea;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(RichTextarea, "tagName", "textarea");
_defineProperty(RichTextarea, "ignoredProperties", [
    "onBlur",
    "onFocus",
    "onScroll",
    "onChange"
]);
_defineProperty(RichTextarea, "defaultProperties", {
    className: "rich"
});
Object.assign(RichTextarea.prototype, _event.default);
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIElOUFVUX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGlucHV0SGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGRlZmVyKCgpID0+IHtcclxuICAgICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgY29udGV4dG1lbnVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcclxuICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldCxcclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9tRWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgbGV0IHsgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGNvbnN0IHsgaGFuZGxlciB9ID0gZXZlbnRMaXN0ZW5lcixcclxuICAgICAgICAgICAgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cclxuXHJcbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICAgIGlmICggKGhhbmRsZXIgIT09IHRoaXMuaW5wdXRIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmJsdXJIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmZvY3VzSGFuZGxlcilcclxuICAgICAgICAmJiAoaGFuZGxlciAhPT0gdGhpcy5zY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmNvbnRleHRtZW51SGFuZGxlcilcclxuICAgICAgICAmJiAoaGFuZGxlciAhPT0gdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKSApIHtcclxuXHJcbiAgICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZW5kID0gZW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGVkQ29udGVudCA9IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGVkQ29udGVudDtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub24oSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub24oQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uKFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmYoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9mZihTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkJsdXIsIG9uRm9jdXMsIG9uU2Nyb2xsLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgYmx1ckhhbmRsZXIgPSBvbkJsdXIsIC8vL1xyXG4gICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cclxuXHJcbiAgICB0aGlzLnVwZGF0ZUluaXRpYWxTdGF0ZSgpO1xyXG5cclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub25CbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vbkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkJsdXIsIG9uRm9jdXMsIG9uU2Nyb2xsLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1ciwgLy8vXHJcbiAgICAgICAgICAgIGZvY3VzSGFuZGxlciA9IG9uRm9jdXMsIC8vL1xyXG4gICAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xyXG5cclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub2ZmQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgZm9jdXNIYW5kbGVyICYmIHRoaXMub2ZmRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcIm9uQmx1clwiLFxyXG4gICAgXCJvbkZvY3VzXCIsXHJcbiAgICBcIm9uU2Nyb2xsXCIsXHJcbiAgICBcIm9uQ2hhbmdlXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwicmljaFwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gcmljaFRleHRhcmVhO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihSaWNoVGV4dGFyZWEucHJvdG90eXBlLCBldmVudE1peGlucyk7XHJcblxyXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XHJcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmljaFRleHRhcmVhIiwiQkxVUl9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIklOUFVUX0VWRU5UX1RZUEUiLCJGT0NVU19FVkVOVF9UWVBFIiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwiaW5wdXRIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImJsdXJIYW5kbGVyIiwiZXZlbnRUeXBlIiwic2VsZWN0aW9uQ2hhbmdlZCIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwic2Nyb2xsSGFuZGxlciIsImNhbGxIYW5kbGVycyIsImNvbnRleHRtZW51SGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0Q2hhbmdlSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwicHJldmlvdXNDb250ZW50IiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJoYXNDbGFzcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJnZXRTZWxlY3RlZENvbnRlbnQiLCJlbmRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic3RhcnRQb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iLCJzdGFydCIsImVuZCIsInNlbGVjdGVkQ29udGVudCIsInNsaWNlIiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudFByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24iLCJpc0VxdWFsVG8iLCJzZXRDb250ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImFjdGl2YXRlIiwib24iLCJkb2N1bWVudCIsImFkZENsYXNzIiwiZGVhY3RpdmF0ZSIsIm9mZiIsInJlbW92ZUNsYXNzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvblNjcm9sbCIsIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsInVwZGF0ZUluaXRpYWxTdGF0ZSIsIndpbGxVbm1vdW50Iiwib2ZmQmx1ciIsIm9mZkZvY3VzIiwib2ZmU2Nyb2xsIiwib2ZmQ2hhbmdlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJpbml0aWFsaXNlIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJFbGVtZW50IiwicmljaFRleHRhcmVhIiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJldmVudE1peGlucyIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztvQkFaeUI7OERBRXhCOzBEQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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