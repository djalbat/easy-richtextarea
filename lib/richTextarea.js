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
var _selection = /*#__PURE__*/ _interop_require_default(require("./selection"));
var _event = /*#__PURE__*/ _interop_require_default(require("./mixins/event"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE = _easy.eventTypes.FOCUS_EVENT_TYPE, INPUT_EVENT_TYPE = _easy.eventTypes.INPUT_EVENT_TYPE, SCROLL_EVENT_TYPE = _easy.eventTypes.SCROLL_EVENT_TYPE, CHANGE_EVENT_TYPE = _easy.eventTypes.CHANGE_EVENT_TYPE, SELECTIONCHANGE_EVENT_TYPE = _easy.eventTypes.SELECTIONCHANGE_EVENT_TYPE;
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    var _super = _create_super(RichTextarea);
    function RichTextarea() {
        _class_call_check(this, RichTextarea);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "blurHandler", function(event, element) {
            var eventType = BLUR_EVENT_TYPE, selectionChanged = true;
            _this.intermediateHandler(event, element, eventType, selectionChanged);
        });
        _define_property(_assert_this_initialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var eventType = FOCUS_EVENT_TYPE, selectionChanged = true;
                _this.intermediateHandler(event, element, eventType, selectionChanged);
            });
        });
        _define_property(_assert_this_initialized(_this), "inputHandler", function(event, element) {
            _this.intermediateHandler(event, element);
        });
        _define_property(_assert_this_initialized(_this), "scrollHandler", function(event, element) {
            var eventType = SCROLL_EVENT_TYPE;
            _this.callHandlers(eventType, event, element);
        });
        _define_property(_assert_this_initialized(_this), "selectChangeHandler", function(event, element) {
            var currentTarget = event.currentTarget, activeElement = currentTarget.activeElement, domElement = _this.getDOMElement();
            if (activeElement === domElement) {
                element = _assert_this_initialized(_this); ///
                _this.intermediateHandler(event, element);
            }
        });
        _define_property(_assert_this_initialized(_this), "intermediateHandler", function(event, element) {
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
    _create_class(RichTextarea, [
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
                    if (handler !== _this.blurHandler && handler !== _this.focusHandler && handler !== _this.inputHandler && handler !== _this.scrollHandler && handler !== _this.selectChangeHandler) {
                        var _handler;
                        var handlerElement = element; ///
                        element = _this; ///
                        (_handler = handler).call.apply(_handler, [
                            handlerElement
                        ].concat(_to_consumable_array(remainingArguments), [
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
                var content = this.getContent(), selection = this.getSelection(), previousContent = content, previousSelection = selection; ///
                this.setPreviousContent(previousContent);
                this.setPreviousSelection(previousSelection);
                var _this_properties = this.properties, onBlur = _this_properties.onBlur, onFocus = _this_properties.onFocus, onScroll = _this_properties.onScroll, onChange = _this_properties.onChange, blurHandler = onBlur, focusHandler = onFocus, scrollHandler = onScroll, changeHandler = onChange; ///
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
                ].concat(_to_consumable_array(remainingArguments)));
                return richTextarea;
            }
        }
    ]);
    return RichTextarea;
}(_wrap_native_super(_easy.Element));
_define_property(RichTextarea, "tagName", "textarea");
_define_property(RichTextarea, "ignoredProperties", [
    "onBlur",
    "onFocus",
    "onScroll",
    "onChange"
]);
_define_property(RichTextarea, "defaultProperties", {
    className: "rich"
});
Object.assign(RichTextarea.prototype, _event.default);
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBDSEFOR0VfRVZFTlRfVFlQRSxcclxuICAgICAgICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBldmVudFR5cGUgPSBCTFVSX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGRlZmVyKCgpID0+IHtcclxuICAgICAgY29uc3QgZXZlbnRUeXBlID0gRk9DVVNfRVZFTlRfVFlQRSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5pbnRlcm1lZGlhdGVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNDUk9MTF9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcclxuICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldCxcclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9tRWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICB0aGlzLmludGVybWVkaWF0ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW50ZXJtZWRpYXRlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZXZlbnRUeXBlID0gQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xyXG5cclxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcclxuICAgICAgbGV0IHsgZWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGNvbnN0IHsgaGFuZGxlciB9ID0gZXZlbnRMaXN0ZW5lcjtcclxuXHJcbiAgICAgIGlmICggKGhhbmRsZXIgIT09IHRoaXMuYmx1ckhhbmRsZXIpXHJcbiAgICAgICAgJiYgKGhhbmRsZXIgIT09IHRoaXMuZm9jdXNIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLmlucHV0SGFuZGxlcilcclxuICAgICAgICAmJiAoaGFuZGxlciAhPT0gdGhpcy5zY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICYmIChoYW5kbGVyICE9PSB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpICkge1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xyXG5cclxuICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub24oQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uKFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vZmYoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZihGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmYoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmKFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9mZihTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCB7IG9uQmx1ciwgb25Gb2N1cywgb25TY3JvbGwsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BlcnRpZXMsXHJcbiAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1ciwgLy8vXHJcbiAgICAgICAgICBmb2N1c0hhbmRsZXIgPSBvbkZvY3VzLCAvLy9cclxuICAgICAgICAgIHNjcm9sbEhhbmRsZXIgPSBvblNjcm9sbCwgLy8vXHJcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xyXG5cclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub25CbHVyKGJsdXJIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBmb2N1c0hhbmRsZXIgJiYgdGhpcy5vbkZvY3VzKGZvY3VzSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgc2Nyb2xsSGFuZGxlciAmJiB0aGlzLm9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgeyBvbkJsdXIsIG9uRm9jdXMsIG9uU2Nyb2xsLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBibHVySGFuZGxlciA9IG9uQmx1ciwgLy8vXHJcbiAgICAgICAgICAgIGZvY3VzSGFuZGxlciA9IG9uRm9jdXMsIC8vL1xyXG4gICAgICAgICAgICBzY3JvbGxIYW5kbGVyID0gb25TY3JvbGwsIC8vL1xyXG4gICAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xyXG5cclxuICAgIGJsdXJIYW5kbGVyICYmIHRoaXMub2ZmQmx1cihibHVySGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgZm9jdXNIYW5kbGVyICYmIHRoaXMub2ZmRm9jdXMoZm9jdXNIYW5kbGVyLCB0aGlzKTtcclxuXHJcbiAgICBzY3JvbGxIYW5kbGVyICYmIHRoaXMub2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIHRoaXMpO1xyXG5cclxuICAgIGNoYW5nZUhhbmRsZXIgJiYgdGhpcy5vZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnQsXHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcclxuICAgIFwib25CbHVyXCIsXHJcbiAgICBcIm9uRm9jdXNcIixcclxuICAgIFwib25TY3JvbGxcIixcclxuICAgIFwib25DaGFuZ2VcIlxyXG4gIF07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHJldHVybiByaWNoVGV4dGFyZWE7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRk9DVVNfRVZFTlRfVFlQRSIsIklOUFVUX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIkNIQU5HRV9FVkVOVF9UWVBFIiwiU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUiLCJibHVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImV2ZW50VHlwZSIsInNlbGVjdGlvbkNoYW5nZWQiLCJpbnRlcm1lZGlhdGVIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiZGVmZXIiLCJpbnB1dEhhbmRsZXIiLCJzY3JvbGxIYW5kbGVyIiwiY2FsbEhhbmRsZXJzIiwic2VsZWN0Q2hhbmdlSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwicHJldmlvdXNDb250ZW50IiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJoYXNDbGFzcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50UHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiIsImlzRXF1YWxUbyIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJhY3RpdmF0ZSIsIm9uIiwiZG9jdW1lbnQiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmYiLCJyZW1vdmVDbGFzcyIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25TY3JvbGwiLCJvbkNoYW5nZSIsImNoYW5nZUhhbmRsZXIiLCJ3aWxsVW5tb3VudCIsIm9mZkJsdXIiLCJvZmZGb2N1cyIsIm9mZlNjcm9sbCIsIm9mZkNoYW5nZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsImZyb21DbGFzcyIsIkNsYXNzIiwiRWxlbWVudCIsInJpY2hUZXh0YXJlYSIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiZXZlbnRNaXhpbnMiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7b0JBWnlCO2dFQUV4Qjs0REFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFRQyxrQkFLK0JDLGdCQUFVLENBTHpDRCxpQkFDQUUsbUJBSStCRCxnQkFBVSxDQUp6Q0Msa0JBQ0FDLG1CQUcrQkYsZ0JBQVUsQ0FIekNFLGtCQUNBQyxvQkFFK0JILGdCQUFVLENBRnpDRyxtQkFDQUMsb0JBQytCSixnQkFBVSxDQUR6Q0ksbUJBQ0FDLDZCQUErQkwsZ0JBQVUsQ0FBekNLO0FBRU8sSUFBQSxBQUFNUCw2QkF5U3BCLEFBelNjO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNuQlEsa0RBQUFBLGVBQWMsU0FBQ0MsT0FBT0MsU0FBWTtZQUNoQyxJQUFNQyxZQUFZVixpQkFDWlcsbUJBQW1CLElB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