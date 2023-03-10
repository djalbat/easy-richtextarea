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
    function RichTextarea(selector, focused) {
        _classCallCheck(this, RichTextarea);
        var _this;
        _this = _super.call(this, selector);
        _defineProperty(_assertThisInitialized(_this), "inputHandler", function(event, element) {
            _this.intermediateHandler(event, element);
        });
        _defineProperty(_assertThisInitialized(_this), "blurHandler", function(event, element) {
            _this.focused = false;
            var eventType = BLUR_EVENT_TYPE, selectionChanged = true;
            _this.intermediateHandler(event, element, eventType, selectionChanged);
        });
        _defineProperty(_assertThisInitialized(_this), "focusHandler", function(event, element) {
            _this.focused = true;
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
            if (_this.focused) {
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
        _this.focused = focused;
        return _this;
    }
    _createClass(RichTextarea, [
        {
            key: "isFocused",
            value: function isFocused() {
                return this.focused;
            }
        },
        {
            key: "setFocused",
            value: function setFocused(focused) {
                this.focused = focused;
            }
        },
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
                var focused = false, richTextarea = (_Element = _easy.Element).fromClass.apply(_Element, [
                    Class,
                    properties,
                    focused
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIElOUFVUX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBmb2N1c2VkKSB7XHJcbiAgICBzdXBlcihzZWxlY3Rvcik7XHJcblxyXG4gICAgdGhpcy5mb2N1c2VkID0gZm9jdXNlZDtcclxuICB9XHJcblxyXG4gIGlzRm9jdXNlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvY3VzZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRGb2N1c2VkKGZvY3VzZWQpIHtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZvY3VzZWQ7XHJcbiAgfVxyXG5cclxuICBpbnB1dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuaW50ZXJtZWRpYXRlSGFuZGxlcihldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBibHVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZXZlbnRUeXBlID0gQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBldmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG5cclxuICAgIGRlZmVyKCgpID0+IHtcclxuICAgICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgY29udGV4dG1lbnVIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xyXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgbGV0IHsgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGNvbnN0IHsgaGFuZGxlciB9ID0gZXZlbnRMaXN0ZW5lcixcclxuICAgICAgICAgICAgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cclxuXHJcbiAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICAgIGlmICggKGhhbmRsZXIgIT09IHRoaXMuaW5wdXRIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmJsdXJIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmZvY3VzSGFuZGxlcilcclxuICAgICAgICAmJiAoaGFuZGxlciAhPT0gdGhpcy5zY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmNvbnRleHRtZW51SGFuZGxlcilcclxuICAgICAgICAmJiAoaGFuZGxlciAhPT0gdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKSApIHtcclxuXHJcbiAgICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRDb250ZW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHN0YXJ0ID0gc3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZW5kID0gZW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGVkQ29udGVudCA9IGNvbnRlbnQuc2xpY2Uoc3RhcnQsIGVuZCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGVkQ29udGVudDtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub24oSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub24oQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uKFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmYoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9mZihTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkJsdXIsIG9uRm9jdXMsIG9uU2Nyb2xsLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgYmx1ckhhbmRsZXIgPSBvbkJsdXIsIC8vL1xyXG4gICAgICAgICAgZm9jdXNIYW5kbGVyID0gb25Gb2N1cywgLy8vXHJcbiAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IG9uQ2hhbmdlOyAvLy9cclxuXHJcbiAgICB0aGlzLnVwZGF0ZUluaXRpYWxTdGF0ZSgpO1xyXG5cclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub25CbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vbkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkJsdXIsIG9uRm9jdXMsIG9uU2Nyb2xsLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1ciwgLy8vXHJcbiAgICAgICAgICAgIGZvY3VzSGFuZGxlciA9IG9uRm9jdXMsIC8vL1xyXG4gICAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xyXG5cclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub2ZmQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgZm9jdXNIYW5kbGVyICYmIHRoaXMub2ZmRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xyXG5cclxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXHJcbiAgICBcIm9uQmx1clwiLFxyXG4gICAgXCJvbkZvY3VzXCIsXHJcbiAgICBcIm9uU2Nyb2xsXCIsXHJcbiAgICBcIm9uQ2hhbmdlXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwicmljaFwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCBmb2N1c2VkID0gZmFsc2UsXHJcbiAgICAgICAgICByaWNoVGV4dGFyZWEgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgZm9jdXNlZCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gcmljaFRleHRhcmVhO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihSaWNoVGV4dGFyZWEucHJvdG90eXBlLCBldmVudE1peGlucyk7XHJcblxyXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XHJcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmljaFRleHRhcmVhIiwiQkxVUl9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIklOUFVUX0VWRU5UX1RZUEUiLCJGT0NVU19FVkVOVF9UWVBFIiwiQ0hBTkdFX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwic2VsZWN0b3IiLCJmb2N1c2VkIiwiaW5wdXRIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiaW50ZXJtZWRpYXRlSGFuZGxlciIsImJsdXJIYW5kbGVyIiwiZXZlbnRUeXBlIiwic2VsZWN0aW9uQ2hhbmdlZCIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwic2Nyb2xsSGFuZGxlciIsImNhbGxIYW5kbGVycyIsImNvbnRleHRtZW51SGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0Q2hhbmdlSGFuZGxlciIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJwcmV2aW91c0NvbnRlbnQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNGb2N1c2VkIiwic2V0Rm9jdXNlZCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJoYXNDbGFzcyIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwidmFsdWUiLCJTZWxlY3Rpb24iLCJmcm9tRE9NRWxlbWVudCIsImdldFNlbGVjdGVkQ29udGVudCIsImVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwic2VsZWN0ZWRDb250ZW50Iiwic2xpY2UiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50UHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiIsImlzRXF1YWxUbyIsInNldENvbnRlbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFNlbGVjdGlvblJhbmdlIiwiYWN0aXZhdGUiLCJvbiIsImRvY3VtZW50IiwiYWRkQ2xhc3MiLCJkZWFjdGl2YXRlIiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwib25CbHVyIiwib25Gb2N1cyIsIm9uU2Nyb2xsIiwib25DaGFuZ2UiLCJjaGFuZ2VIYW5kbGVyIiwidXBkYXRlSW5pdGlhbFN0YXRlIiwid2lsbFVubW91bnQiLCJvZmZCbHVyIiwib2ZmRm9jdXMiLCJvZmZTY3JvbGwiLCJvZmZDaGFuZ2UiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsIkVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImV2ZW50TWl4aW5zIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O29CQVp5Qjs4REFFeEI7MERBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRQyxrQkFLK0JDLGdCQUFVLENBTHpDRCxpQkFDQUUsbUJBSStCRCxnQkFBVSxDQUp6Q0Msa0JBQ0FDLG1CQUcrQkYsZ0JBQVUsQ0FIekNFLGtCQUNBQyxvQkFFK0JILGdCQUFVLENBRnpDRyxtQkFDQUMsb0JBQytCSixnQkFBVSxDQUR6Q0ksbUJBQ0FDLDZCQUErQkwsZ0JBQVUsQ0FBekNLO0FBRU8sSUFBQSxBQUFNUCw2QkE2VHBCLEFBN1RjO2NBQU1BOzhCQUFBQTthQUFBQSxhQUNQUSxRQUFRLEVBQUVDLE9BQU87OEJBRFZUOztrQ0FFWFE7UUFhUkUsK0NBQUFBLGdCQUFlLFNBQUNDLE9BQU9DLFNBQVk7WUFDakMsTUFBS0MsbUJBQW1CLENBQUNGLE9BQU9DO1FBQ2xDO1FBRUFFLCtDQUFBQSxlQUFjLFNBQUNILE9BQU9DLFNBQVk7WUFDaEMsTUFBS0gsT0FBTyxHQUFHLEtBQUs7WUFFcEIsSUFBTU0sWUFBWWQsaUJBQ1plLG1CQUFtQixJQUFJO1lBRTdCLE1BQUtILG1CQUFtQixDQUFDRixPQUFPQyxTQUFTRyxXQUFXQztRQUN0RDtRQUVBQywrQ0FBQUEsZ0JBQWUsU0FBQ04sT0FBT0MsU0FBWTtZQUNqQyxNQUFLSCxPQUFPLEdBQUcsSUFBSTtZQUVuQlMsTUFBTSxXQUFNO2dCQUNWLElBQU1ILFlBQVlYLGtCQUNaWSxtQkFBbUIsSUFBSTtnQkFFN0IsTUFBS0gsbUJBQW1CLENBQUNGLE9BQU9DLFNBQVNHLFdBQVdDO1lBQ3REO1FBQ0Y7UUFFQUcsK0NBQUFBLGlCQUFnQixTQUFDUixPQUFPQyxTQUFZO1lBQ2xDLElBQU1HLFlBQVlUO1lBRWxCLE1BQUtjLFlBQVksQ0FBQ0wsV0FBV0osT0FBT0M7UUFDdEM7UUFFQVMsK0NBQUFBLHNCQUFxQixTQUFDVixPQUFPQyxTQUFZO1lBQ3ZDRCxNQUFNVyxjQUFjO1FBQ3RCO1FBRUFDLCtDQUFBQSx1QkFBc0IsU0FBQ1osT0FBT0MsU0FBWTtZQUN4QyxJQUFJLE1BQUtILE9BQU8sRUFBRTtnQkFDaEJHLHlDQUFnQixHQUFHO2dCQUVuQixNQUFLQyxtQkFBbUIsQ0FBQ0YsT0FBT0M7WUFDbEMsQ0FBQztRQUNIO1FBRUFDLCtDQUFBQSx1QkFBc0IsU0FBQ0YsT0FBT0MsU0FBMEY7Z0JBQWpGRyw2RUFBWVYsbUJBQW1CVyxvRkFBbUIsTUFBS1EsbUJBQW1CO1lBQy9HLElBQU1DLFVBQVUsTUFBS0MsVUFBVSxJQUN6QkMsWUFBWSxNQUFLQyxZQUFZLElBQzdCQyxpQkFBaUIsTUFBS0MsaUJBQWlCO1lBRTdDLElBQUlELGtCQUFrQmIsa0JBQWtCO2dCQUN0QyxNQUFLSSxZQUFZLENBQUNMLFdBQVdKLE9BQU9DO1lBQ3RDLENBQUM7WUFFRCxJQUFNbUIsa0JBQWtCTixTQUNsQk8sb0JBQW9CTCxXQUFZLEdBQUc7WUFFekMsTUFBS00sa0JBQWtCLENBQUNGO1lBRXhCLE1BQUtHLG9CQUFvQixDQUFDRjtRQUM1QjtRQXBFRSxNQUFLdkIsT0FBTyxHQUFHQTs7O2lCQUpFVDs7WUFPbkJtQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQzFCLE9BQU87WUFDckI7OztZQUVBMkIsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVczQixPQUFPLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQTtZQUNqQjs7O1lBNkRBVyxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUwsU0FBUyxFQUF5QjtnQkFBdkIsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdzQixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLEtBQXFCLEdBQXJCLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtnQkFBRDs7Z0JBQzFDLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDeEI7Z0JBRS9DdUIsZUFBZUUsT0FBTyxDQUFDLFNBQUNDLGVBQWtCO29CQUN4QyxJQUFJLEFBQUU3QixVQUFZNkIsY0FBWjdCO29CQUVOLElBQU0sQUFBRThCLFVBQVlELGNBQVpDLFNBQ0ZDLGlCQUFpQi9CLFNBQVMsR0FBRztvQkFFbkNBLGlCQUFnQixHQUFHO29CQUVuQixJQUFLLEFBQUM4QixZQUFZLE1BQUtoQyxZQUFZLElBQzdCZ0MsWUFBWSxNQUFLNUIsV0FBVyxJQUM1QjRCLFlBQVksTUFBS3pCLFlBQVksSUFDN0J5QixZQUFZLE1BQUt2QixhQUFhLElBQzlCdUIsWUFBWSxNQUFLckIsa0JBQWtCLElBQ25DcUIsWUFBWSxNQUFLbkIsbUJBQW1CLEVBQUk7NEJBRTVDbUI7d0JBQUFBLENBQUFBLFdBQUFBLFNBQVFFLElBQUksQ0FBWkYsTUFBQUEsVUFBQUE7NEJBQWFDO3lCQUErQyxDQUE1REQsT0FBNkIsbUJBQUdMLHFCQUFoQ0s7NEJBQW9EOUI7eUJBQVE7b0JBQzlELENBQUM7Z0JBQ0g7WUFDRjs7O1lBRUFpQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTLElBQUksQ0FBQ0MsUUFBUSxDQUFDO2dCQUU3QixPQUFPRDtZQUNUOzs7WUFFQXBCLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQU1zQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQixBQUFFQyxRQUFVRixXQUFWRSxPQUNGekIsVUFBVXlCLE9BQVEsR0FBRztnQkFFM0IsT0FBT3pCO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFDYixJQUFNb0IsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0J0QixZQUFZd0Isa0JBQVMsQ0FBQ0MsY0FBYyxDQUFDSjtnQkFFM0MsT0FBT3JCO1lBQ1Q7OztZQUVBMEIsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQjtnQkFDbkIsSUFBTTVCLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QjBCLGNBQWMzQixVQUFVNEIsY0FBYyxJQUN0Q0MsZ0JBQWdCN0IsVUFBVThCLGdCQUFnQixJQUMxQ0MsUUFBUUYsZUFDUkcsTUFBTUwsYUFDTk0sa0JBQWtCbkMsUUFBUW9DLEtBQUssQ0FBQ0gsT0FBT0M7Z0JBRTdDLE9BQU9DO1lBQ1Q7OztZQUVBOUIsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsSUFBTUwsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJLLGtCQUFrQixJQUFJLENBQUMrQixrQkFBa0IsSUFDekNDLHlCQUEwQnRDLFlBQVlNLGlCQUN0Q0YsaUJBQWlCLENBQUNrQztnQkFFeEIsT0FBT2xDO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixJQUFNRyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3Qkksb0JBQW9CLElBQUksQ0FBQ2dDLG9CQUFvQixJQUM3Q0MsNkJBQTZCdEMsVUFBVXVDLFNBQVMsQ0FBQ2xDLG9CQUNqRGhCLG1CQUFtQixDQUFDaUQsNEJBQTRCLEdBQUc7Z0JBRXpELE9BQU9qRDtZQUNUOzs7WUFFQW1ELEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXMUMsT0FBTyxFQUE2QjtvQkFBM0JRLHFCQUFBQSxpRUFBcUIsSUFBSTtnQkFDM0MsSUFBTWlCLFFBQVF6QixTQUNSdUIsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXJDbUIsT0FBT0MsTUFBTSxDQUFDckIsWUFBWTtvQkFDeEJFLE9BQUFBO2dCQUNGO2dCQUVBLElBQUlqQixvQkFBb0I7b0JBQ3RCLElBQU1GLGtCQUFrQk4sU0FBVSxHQUFHO29CQUVyQyxJQUFJLENBQUNRLGtCQUFrQixDQUFDRjtnQkFDMUIsQ0FBQztZQUNIOzs7WUFFQXVDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhM0MsU0FBUyxFQUErQjtvQkFBN0JPLHVCQUFBQSxpRUFBdUIsSUFBSTtnQkFDakQsSUFBTXFDLHlCQUF5QjVDLFVBQVU4QixnQkFBZ0IsSUFDbkRlLHVCQUF1QjdDLFVBQVU0QixjQUFjLElBQy9Da0IsaUJBQWlCRix3QkFDakJHLGVBQWVGLHNCQUNmeEIsYUFBYSxJQUFJLENBQUNDLGFBQWE7Z0JBRXJDRCxXQUFXMkIsaUJBQWlCLENBQUNGLGdCQUFnQkM7Z0JBRTdDLElBQUl4QyxzQkFBc0I7b0JBQ3hCLElBQU1GLG9CQUFvQkwsV0FBWSxHQUFHO29CQUV6QyxJQUFJLENBQUNPLG9CQUFvQixDQUFDRjtnQkFDNUIsQ0FBQztZQUNIOzs7WUFFQTRDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUksQ0FBQ0MsRUFBRSxDQUFDMUUsa0JBQWtCLElBQUksQ0FBQ08sWUFBWTtnQkFFM0MsSUFBSSxDQUFDbUUsRUFBRSxDQUFDNUUsaUJBQWlCLElBQUksQ0FBQ2EsV0FBVztnQkFFekMsSUFBSSxDQUFDK0QsRUFBRSxDQUFDekUsa0JBQWtCLElBQUksQ0FBQ2EsWUFBWTtnQkFFM0MsSUFBSSxDQUFDNEQsRUFBRSxDQUFDdkUsbUJBQW1CLElBQUksQ0FBQ2EsYUFBYTtnQkFFN0MyRCxjQUFRLENBQUNELEVBQUUsQ0FBQ3RFLDRCQUE0QixJQUFJLENBQUNnQixtQkFBbUI7Z0JBRWhFLElBQUksQ0FBQ3dELFFBQVEsQ0FBQztZQUNoQjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLElBQUksQ0FBQ0MsR0FBRyxDQUFDOUUsa0JBQWtCLElBQUksQ0FBQ08sWUFBWTtnQkFFNUMsSUFBSSxDQUFDdUUsR0FBRyxDQUFDaEYsaUJBQWlCLElBQUksQ0FBQ2EsV0FBVztnQkFFMUMsSUFBSSxDQUFDbUUsR0FBRyxDQUFDN0Usa0JBQWtCLElBQUksQ0FBQ2EsWUFBWTtnQkFFNUMsSUFBSSxDQUFDZ0UsR0FBRyxDQUFDM0UsbUJBQW1CLElBQUksQ0FBQ2EsYUFBYTtnQkFFOUMyRCxjQUFRLENBQUNHLEdBQUcsQ0FBQzFFLDRCQUE0QixJQUFJLENBQUNnQixtQkFBbUI7Z0JBRWpFLElBQUksQ0FBQzJELFdBQVcsQ0FBQztZQUNuQjs7O1lBRUFwQixLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCO2dCQUNuQixJQUFNLEFBQUUvQixrQkFBb0IsSUFBSSxDQUFDb0QsUUFBUSxHQUFqQ3BEO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBaUMsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsSUFBTSxBQUFFaEMsb0JBQXNCLElBQUksQ0FBQ21ELFFBQVEsR0FBbkNuRDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkYsZUFBZSxFQUFFO2dCQUNsQyxJQUFJLENBQUNxRCxXQUFXLENBQUM7b0JBQ2ZyRCxpQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLGlCQUFpQixFQUFFO2dCQUN0QyxJQUFJLENBQUNvRCxXQUFXLENBQUM7b0JBQ2ZwRCxtQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFxRCxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFnRCxtQkFBQSxJQUFJLENBQUNDLFVBQVUsRUFBdkRDLFNBQXdDLGlCQUF4Q0EsUUFBUUMsVUFBZ0MsaUJBQWhDQSxTQUFTQyxXQUF1QixpQkFBdkJBLFVBQVVDLFdBQWEsaUJBQWJBLFVBQzdCNUUsY0FBY3lFLFFBQ2R0RSxlQUFldUUsU0FDZnJFLGdCQUFnQnNFLFVBQ2hCRSxnQkFBZ0JELFVBQVUsR0FBRztnQkFFbkMsSUFBSSxDQUFDRSxrQkFBa0I7Z0JBRXZCOUUsZUFBZSxJQUFJLENBQUN5RSxNQUFNLENBQUN6RSxhQUFhLElBQUk7Z0JBRTVDRyxnQkFBZ0IsSUFBSSxDQUFDdUUsT0FBTyxDQUFDdkUsY0FBYyxJQUFJO2dCQUUvQ0UsaUJBQWlCLElBQUksQ0FBQ3NFLFFBQVEsQ0FBQ3RFLGVBQWUsSUFBSTtnQkFFbER3RSxpQkFBaUIsSUFBSSxDQUFDRCxRQUFRLENBQUNDLGVBQWUsSUFBSTtZQUNwRDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLElBQWdELG1CQUFBLElBQUksQ0FBQ1AsVUFBVSxFQUF2REMsU0FBd0MsaUJBQXhDQSxRQUFRQyxVQUFnQyxpQkFBaENBLFNBQVNDLFdBQXVCLGlCQUF2QkEsVUFBVUMsV0FBYSxpQkFBYkEsVUFDM0I1RSxjQUFjeUUsUUFDZHRFLGVBQWV1RSxTQUNmckUsZ0JBQWdCc0UsVUFDaEJFLGdCQUFnQkQsVUFBVSxHQUFHO2dCQUVyQzVFLGVBQWUsSUFBSSxDQUFDZ0YsT0FBTyxDQUFDaEYsYUFBYSxJQUFJO2dCQUU3Q0csZ0JBQWdCLElBQUksQ0FBQzhFLFFBQVEsQ0FBQzlFLGNBQWMsSUFBSTtnQkFFaERFLGlCQUFpQixJQUFJLENBQUM2RSxTQUFTLENBQUM3RSxlQUFlLElBQUk7Z0JBRW5Ed0UsaUJBQWlCLElBQUksQ0FBQ00sU0FBUyxDQUFDTixlQUFlLElBQUk7Z0JBRW5ELElBQU03QyxTQUFTLElBQUksQ0FBQ0QsUUFBUTtnQkFFNUIsSUFBSUMsUUFBUTtvQkFDVixJQUFJLENBQUNrQyxVQUFVO2dCQUNqQixDQUFDO1lBQ0g7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCO2dCQUNuQixJQUFNbkUsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCRyxrQkFBa0JOLFNBQ2xCTyxvQkFBb0JMLFdBQVksR0FBRztnQkFFekMsSUFBSSxDQUFDTSxrQkFBa0IsQ0FBQ0Y7Z0JBRXhCLElBQUksQ0FBQ0csb0JBQW9CLENBQUNGO1lBQzVCOzs7WUFFQWtFLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQU1uRSxrQkFBa0IsSUFBSSxFQUN0QkMsb0JBQW9CLElBQUk7Z0JBRTlCLElBQUksQ0FBQ21FLFFBQVEsQ0FBQztvQkFDWnBFLGlCQUFBQTtvQkFDQUMsbUJBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBb0UsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWE7Z0JBQ1gsSUFBSSxDQUFDRixlQUFlO1lBQ3RCOzs7O1lBZU9HLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUssRUFBRWhCLFVBQVUsRUFBeUI7Z0JBQXZCLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHakQscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxLQUFxQixHQUFyQixPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7Z0JBQUQ7b0JBRWpDa0U7Z0JBRHJCLElBQU05RixVQUFVLEtBQUssRUFDZitGLGVBQWVELENBQUFBLFdBQUFBLGFBQU8sRUFBQ0YsU0FBUyxDQUFqQkUsTUFBQUEsVUFBQUE7b0JBQWtCRDtvQkFBT2hCO29CQUFZN0U7aUJBQStCLENBQXBFOEYsT0FBOEMsbUJBQUdsRTtnQkFFdEUsT0FBT21FO1lBQ1Q7OztXQTFUbUJ4RzttQkFBcUJ1RyxhQUFPO0FBd1MvQyxnQkF4U21CdkcsY0F3U1p5RyxXQUFVO0FBRWpCLGdCQTFTbUJ6RyxjQTBTWjBHLHFCQUFvQjtJQUN6QjtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsZ0JBalRtQjFHLGNBaVRaMkcscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7QUFVRnhDLE9BQU9DLE1BQU0sQ0FBQ3JFLGFBQWE2RyxTQUFTLEVBQUVDLGNBQVc7QUFFakQsU0FBUzVGLE1BQU02RixJQUFJLEVBQUU7SUFDbkJDLFdBQVdELE1BQU07QUFDbkIifQ==