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
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE = _easy.eventTypes.FOCUS_EVENT_TYPE, INPUT_EVENT_TYPE = _easy.eventTypes.INPUT_EVENT_TYPE, SCROLL_EVENT_TYPE = _easy.eventTypes.SCROLL_EVENT_TYPE, CHANGE_EVENT_TYPE = _easy.eventTypes.CHANGE_EVENT_TYPE, CUT_EVENT_TYPE = _easy.eventTypes.CUT_EVENT_TYPE, COPY_EVENT_TYPE = _easy.eventTypes.COPY_EVENT_TYPE, PASTE_EVENT_TYPE = _easy.eventTypes.PASTE_EVENT_TYPE, KEYDOWN_EVENT_TYPE = _easy.eventTypes.KEYDOWN_EVENT_TYPE, MOUSEDOWN_EVENT_TYPE = _easy.eventTypes.MOUSEDOWN_EVENT_TYPE, SELECTIONCHANGE_EVENT_TYPE = _easy.eventTypes.SELECTIONCHANGE_EVENT_TYPE;
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    var _super = _createSuper(RichTextarea);
    function RichTextarea() {
        _classCallCheck(this, RichTextarea);
        var _this;
        _this = _super.apply(this, arguments);
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
        _defineProperty(_assertThisInitialized(_this), "inputHandler", function(event, element) {
            _this.intermediateHandler(event, element);
        });
        _defineProperty(_assertThisInitialized(_this), "scrollHandler", function(event, element) {
            var eventType = SCROLL_EVENT_TYPE;
            _this.callHandlers(eventType, event, element);
        });
        _defineProperty(_assertThisInitialized(_this), "cutHandler", function(event, element) {
        ///
        });
        _defineProperty(_assertThisInitialized(_this), "copyHandler", function(event, element) {
        ///
        });
        _defineProperty(_assertThisInitialized(_this), "pasteHandler", function(event, element) {
        ///
        });
        _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function(event, element) {
        ///
        });
        _defineProperty(_assertThisInitialized(_this), "mouseDownHandler", function(event, element) {
        ///
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
                    var handler = eventListener.handler;
                    if (handler !== _this.blurHandler && handler !== _this.focusHandler && handler !== _this.inputHandler && handler !== _this.scrollHandler && handler !== _this.cutHandler && handler !== _this.copyHandler && handler !== _this.pasteHandler && handler !== _this.keyDownHandler && handler !== _this.mouseDownHandler && handler !== _this.selectChangeHandler) {
                        var _handler;
                        var handlerElement = element; ///
                        element = _this; ///
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
            key: "isReadOnly",
            value: function isReadOnly() {
                var domElement = this.getDOMElement(), readOnly = domElement.readOnly;
                return readOnly;
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
            key: "setReadOnly",
            value: function setReadOnly(readOnly) {
                var domElement = this.getDOMElement();
                Object.assign(domElement, {
                    readOnly: readOnly
                });
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
                this.on(BLUR_EVENT_TYPE, this.blurHandler);
                this.on(FOCUS_EVENT_TYPE, this.focusHandler);
                this.on(INPUT_EVENT_TYPE, this.inputHandler);
                this.on(SCROLL_EVENT_TYPE, this.scrollHandler);
                this.on(CUT_EVENT_TYPE, this.cutHandler);
                this.on(COPY_EVENT_TYPE, this.copyHandler);
                this.on(PASTE_EVENT_TYPE, this.pasteHandler);
                this.on(KEYDOWN_EVENT_TYPE, this.keyDownHandler);
                this.on(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler);
                _easy.document.on(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                this.off(BLUR_EVENT_TYPE, this.blurHandler);
                this.off(FOCUS_EVENT_TYPE, this.focusHandler);
                this.off(INPUT_EVENT_TYPE, this.inputHandler);
                this.off(SCROLL_EVENT_TYPE, this.scrollHandler);
                this.off(CUT_EVENT_TYPE, this.cutHandler);
                this.off(COPY_EVENT_TYPE, this.copyHandler);
                this.off(PASTE_EVENT_TYPE, this.pasteHandler);
                this.off(KEYDOWN_EVENT_TYPE, this.keyDownHandler);
                this.off(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICBDVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICBDT1BZX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgUEFTVEVfRVZFTlRfVFlQRSxcclxuICAgICAgICBLRVlET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBibHVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBTQ1JPTExfRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGN1dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgY29weUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgcGFzdGVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIGtleURvd25IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICAvLy9cclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIC8vL1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcclxuICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldCxcclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9tRWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgbGV0IHsgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGNvbnN0IHsgaGFuZGxlciB9ID0gZXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGlmICggKGhhbmRsZXIgIT09IHRoaXMuYmx1ckhhbmRsZXIpXHJcbiAgICAgICAgJiYgKGhhbmRsZXIgIT09IHRoaXMuZm9jdXNIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmlucHV0SGFuZGxlcilcclxuICAgICAgICAmJiAoaGFuZGxlciAhPT0gdGhpcy5zY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmN1dEhhbmRsZXIpXHJcbiAgICAgICAgJiYgKGhhbmRsZXIgIT09IHRoaXMuY29weUhhbmRsZXIpXHJcbiAgICAgICAgJiYgKGhhbmRsZXIgIT09IHRoaXMucGFzdGVIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmtleURvd25IYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLm1vdXNlRG93bkhhbmRsZXIpXHJcbiAgICAgICAgJiYgKGhhbmRsZXIgIT09IHRoaXMuc2VsZWN0Q2hhbmdlSGFuZGxlcikgKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXHJcblxyXG4gICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHJldHVybiByZWFkT25seTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZW5kID0gZW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGVkQ29udGVudCA9IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGVkQ29udGVudDtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub24oQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub24oQ1VUX0VWRU5UX1RZUEUsIHRoaXMuY3V0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbihDT1BZX0VWRU5UX1RZUEUsIHRoaXMuY29weUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub24oUEFTVEVfRVZFTlRfVFlQRSwgdGhpcy5wYXN0ZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub24oS0VZRE9XTl9FVkVOVF9UWVBFLCB0aGlzLmtleURvd25IYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uKFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vZmYoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKENVVF9FVkVOVF9UWVBFLCB0aGlzLmN1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKENPUFlfRVZFTlRfVFlQRSwgdGhpcy5jb3B5SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmYoUEFTVEVfRVZFTlRfVFlQRSwgdGhpcy5wYXN0ZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKEtFWURPV05fRVZFTlRfVFlQRSwgdGhpcy5rZXlEb3duSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmYoTU9VU0VET1dOX0VWRU5UX1RZUEUsIHRoaXMubW91c2VEb3duSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub2ZmKFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzQ29udGVudCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNTZWxlY3Rpb24gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB7IG9uQmx1ciwgb25Gb2N1cywgb25TY3JvbGwsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1ciwgLy8vXHJcbiAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xyXG5cclxuICAgIHRoaXMudXBkYXRlSW5pdGlhbFN0YXRlKCk7XHJcblxyXG4gICAgYmx1ckhhbmRsZXIgJiYgdGhpcy5vbkJsdXIoYmx1ckhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGZvY3VzSGFuZGxlciAmJiB0aGlzLm9uRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciAmJiB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCB7IG9uQmx1ciwgb25Gb2N1cywgb25TY3JvbGwsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIGJsdXJIYW5kbGVyID0gb25CbHVyLCAvLy9cclxuICAgICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSBvbkNoYW5nZTsgLy8vXHJcblxyXG4gICAgYmx1ckhhbmRsZXIgJiYgdGhpcy5vZmZCbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vZmZGb2N1cyhmb2N1c0hhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIHNjcm9sbEhhbmRsZXIgJiYgdGhpcy5vZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgY2hhbmdlSGFuZGxlciAmJiB0aGlzLm9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnQsXHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwib25CbHVyXCIsXHJcbiAgICBcIm9uRm9jdXNcIixcclxuICAgIFwib25TY3JvbGxcIixcclxuICAgIFwib25DaGFuZ2VcIlxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHJldHVybiByaWNoVGV4dGFyZWE7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRk9DVVNfRVZFTlRfVFlQRSIsIklOUFVUX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIkNIQU5HRV9FVkVOVF9UWVBFIiwiQ1VUX0VWRU5UX1RZUEUiLCJDT1BZX0VWRU5UX1RZUEUiLCJQQVNURV9FVkVOVF9UWVBFIiwiS0VZRE9XTl9FVkVOVF9UWVBFIiwiTU9VU0VET1dOX0VWRU5UX1RZUEUiLCJTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSIsImJsdXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwic2VsZWN0aW9uQ2hhbmdlZCIsImludGVybWVkaWF0ZUhhbmRsZXIiLCJmb2N1c0hhbmRsZXIiLCJkZWZlciIsImlucHV0SGFuZGxlciIsInNjcm9sbEhhbmRsZXIiLCJjYWxsSGFuZGxlcnMiLCJjdXRIYW5kbGVyIiwiY29weUhhbmRsZXIiLCJwYXN0ZUhhbmRsZXIiLCJrZXlEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJzZWxlY3RDaGFuZ2VIYW5kbGVyIiwiY3VycmVudFRhcmdldCIsImFjdGl2ZUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJwcmV2aW91c0NvbnRlbnQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXIiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJpc1JlYWRPbmx5IiwicmVhZE9ubHkiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsImhhc0NsYXNzIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJmcm9tRE9NRWxlbWVudCIsImdldFNlbGVjdGVkQ29udGVudCIsImVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwic2VsZWN0ZWRDb250ZW50Iiwic2xpY2UiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50UHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiIsImlzRXF1YWxUbyIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJhY3RpdmF0ZSIsIm9uIiwiZG9jdW1lbnQiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmYiLCJyZW1vdmVDbGFzcyIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TY3JvbGwiLCJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJ1cGRhdGVJbml0aWFsU3RhdGUiLCJ3aWxsVW5tb3VudCIsIm9mZkJsdXIiLCJvZmZGb2N1cyIsIm9mZlNjcm9sbCIsIm9mZkNoYW5nZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsImZyb21DbGFzcyIsIkNsYXNzIiwiRWxlbWVudCIsInJpY2hUZXh0YXJlYSIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiZXZlbnRNaXhpbnMiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7O29CQWpCeUI7OERBRXhCOzBEQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBUUMsa0JBVStCQyxnQkFB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