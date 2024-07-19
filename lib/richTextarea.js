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
var _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
var _customEventTypes = require("./customEventTypes");
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
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE = _easy.eventTypes.FOCUS_EVENT_TYPE, INPUT_EVENT_TYPE = _easy.eventTypes.INPUT_EVENT_TYPE, SCROLL_EVENT_TYPE = _easy.eventTypes.SCROLL_EVENT_TYPE;
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    var _super = _create_super(RichTextarea);
    function RichTextarea() {
        _class_call_check(this, RichTextarea);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "selectionChangeHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var currentTarget = event.currentTarget, activeElement = currentTarget.activeElement, domElement = _this.getDOMElement();
            if (activeElement !== domElement) {
                return;
            }
            element = _assert_this_initialized(_this); ///
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
            _this.customHandler(customEventType, event, element);
        });
        _define_property(_assert_this_initialized(_this), "scrollHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE, forced = true;
            _this.customHandler(customEventType, event, element, forced);
        });
        _define_property(_assert_this_initialized(_this), "inputHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
            _this.customHandler(customEventType, event, element);
        });
        _define_property(_assert_this_initialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var active = _this.isActive();
                if (!active) {
                    _this.addClass("active");
                }
                var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, forced = true;
                _this.customHandler(customEventType, event, element, forced);
            });
        });
        _define_property(_assert_this_initialized(_this), "blurHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, forced = true;
            _this.customHandler(customEventType, event, element, forced);
        });
        _define_property(_assert_this_initialized(_this), "customHandler", function(customEventType, event, element) {
            var forced = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
            var content = _this.getContent(), selection = _this.getSelection(), contentChanged = _this.hasContentChanged(), selectionChanged = _this.hasSelectionChanged();
            if (forced || contentChanged || selectionChanged) {
                _this.callCustomHandlers(customEventType, event, element);
            }
            var previousContent = content, previousSelection = selection; ///
            _this.setPreviousContent(previousContent);
            _this.setPreviousSelection(previousSelection);
        });
        return _this;
    }
    _create_class(RichTextarea, [
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
                var active = this.isActive();
                if (active) {
                    return;
                }
                this.focus(); ///
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                var active = this.isActive();
                if (!active) {
                    return;
                }
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
            key: "didMount",
            value: function didMount() {
                var content = this.getContent(), selection = this.getSelection(), previousContent = content, previousSelection = selection; ///
                this.setPreviousContent(previousContent);
                this.setPreviousSelection(previousSelection);
                this.onEvent(BLUR_EVENT_TYPE, this.blurHandler);
                this.onEvent(FOCUS_EVENT_TYPE, this.focusHandler);
                this.onEvent(INPUT_EVENT_TYPE, this.inputHandler);
                this.onEvent(SCROLL_EVENT_TYPE, this.scrollHandler);
                _easy.document.onSelectionChange(this.selectionChangeHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offEvent(BLUR_EVENT_TYPE, this.blurHandler);
                this.offEvent(FOCUS_EVENT_TYPE, this.focusHandler);
                this.offEvent(INPUT_EVENT_TYPE, this.inputHandler);
                this.offEvent(SCROLL_EVENT_TYPE, this.scrollHandler);
                _easy.document.offSelectionChange(this.selectionChangeHandler, this);
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
_define_property(RichTextarea, "defaultProperties", {
    className: "rich"
});
Object.assign(RichTextarea.prototype, _customEvent.default);
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLCBGT0NVU19FVkVOVF9UWVBFLCBJTlBVVF9FVkVOVF9UWVBFLCBTQ1JPTExfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcclxuICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldCxcclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gZG9tRWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudCA9IHRoaXM7IC8vL1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBpbnB1dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGZvY3VzSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgZGVmZXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tSGFuZGxlciA9IChjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChmb3JjZWQgfHwgY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvY3VzKCk7IC8vL1xyXG4gIH1cclxuXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNDb250ZW50IH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzQ29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c1NlbGVjdGlvbiB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1NlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnQsXHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uU2VsZWN0aW9uQ2hhbmdlKHRoaXMuc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMub2ZmRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9mZlNlbGVjdGlvbkNoYW5nZSh0aGlzLnNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInJpY2hcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcblxyXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oUmljaFRleHRhcmVhLnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJpY2hUZXh0YXJlYSIsIkJMVVJfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJGT0NVU19FVkVOVF9UWVBFIiwiSU5QVVRfRVZFTlRfVFlQRSIsIlNDUk9MTF9FVkVOVF9UWVBFIiwic2VsZWN0aW9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImFjdGl2ZSIsImlzQWN0aXZlIiwiY3VycmVudFRhcmdldCIsImFjdGl2ZUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkNIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJzY3JvbGxIYW5kbGVyIiwiU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFIiwiZm9yY2VkIiwiaW5wdXRIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiZGVmZXIiLCJhZGRDbGFzcyIsIkZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFIiwiYmx1ckhhbmRsZXIiLCJCTFVSX0NVU1RPTV9FVkVOVF9UWVBFIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJwcmV2aW91c0NvbnRlbnQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwiaGFzQ2xhc3MiLCJ2YWx1ZSIsIlNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50IiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudFByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24iLCJpc0VxdWFsVG8iLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFNlbGVjdGlvblJhbmdlIiwiYWN0aXZhdGUiLCJmb2N1cyIsImRlYWN0aXZhdGUiLCJyZW1vdmVDbGFzcyIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwib25FdmVudCIsImRvY3VtZW50Iiwib25TZWxlY3Rpb25DaGFuZ2UiLCJ3aWxsVW5tb3VudCIsIm9mZkV2ZW50Iiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwiaW5pdGlhbGlzZSIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJjdXN0b21FdmVudE1peGlucyIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztvQkFaeUI7Z0VBRXhCO2tFQUNRO2dDQUtXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQVFDLGtCQUEyRUMsZ0JBQVUsQ0FBckZELGlCQUFpQkUsbUJBQTBERCxnQkFBVSxDQUFwRUMsa0JBQWtCQyxtQkFBd0NGLGdCQUFVLENBQWxERSxrQkFBa0JDLG9CQUFzQkgsZ0JBQVUsQ0FBaENHO0FBRTlDLElBQUEsQUFBTUwsNkJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDbkJNLGtEQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0M7WUFDL0IsSUFBTUMsU0FBUyxNQUFLQyxRQUFRO1lBRTVCLElBQUksQ0FBQ0QsUUFBUTtnQkFDWDtZQUNGO1lBRUEsSUFBTSxBQUFFRSxnQkFBa0JKLE1BQWxCSSxlQUNGLEFBQUVDLGdCQUFrQkQsY0FBbEJDLGVBQ0ZDLGFBQWEsTUFBS0MsYUFBYTtZQUVyQyxJQUFJRixrQkFBa0JDLFlBQVk7Z0JBQ2hDO1lBQ0Y7WUFFQUwsMkNBQWdCLEdBQUc7WUFFbkIsSUFBTU8sa0JBQWtCQywwQ0FBd0I7WUFFaEQsTUFBS0MsYUFBYSxDQUFDRixpQkFBaUJSLE9BQU9DO1FBQzdDO1FBRUFVLGtEQUFBQSxpQkFBZ0IsU0FBQ1gsT0FBT0M7WUFDdEIsSUFBTUMsU0FBUyxNQUFLQyxRQUFRO1lBRTVCLElBQUksQ0FBQ0QsUUFBUTtnQkFDWDtZQUNGO1lBRUEsSUFBTU0sa0JBQWtCSSwwQ0FBd0IsRUFDMUNDLFNBQVM7WUFFZixNQUFLSCxhQUFhLENBQUNGLGlCQUFpQlIsT0FBT0MsU0FBU1k7UUFDdEQ7UUFFQUMsa0RBQUFBLGdCQUFlLFNBQUNkLE9BQU9DO1lBQ3JCLElBQU1DLFNBQVMsTUFBS0MsUUFBUTtZQUU1QixJQUFJLENBQUNELFFBQVE7Z0JBQ1g7WUFDRjtZQUVBLElBQU1NLGtCQUFrQkMsMENBQXdCO1lBRWhELE1BQUtDLGFBQWEsQ0FBQ0YsaUJBQWlCUixPQUFPQztRQUM3QztRQUVBYyxrREFBQUEsZ0JBQWUsU0FBQ2YsT0FBT0M7WUFDckJlLE1BQU07Z0JBQ0osSUFBTWQsU0FBUyxNQUFLQyxRQUFRO2dCQUU1QixJQUFJLENBQUNELFFBQVE7b0JBQ1gsTUFBS2UsUUFBUSxDQUFDO2dCQUNoQjtnQkFFQSxJQUFNVCxrQkFBa0JVLHlDQUF1QixFQUN6Q0wsU0FBUztnQkFFZixNQUFLSCxhQUFhLENBQUNGLGlCQUFpQlIsT0FBT0MsU0FBU1k7WUFDdEQ7UUFDRjtRQUVBTSxrREFBQUEsZUFBYyxTQUFDbkIsT0FBT0M7WUFDcEIsSUFBTUMsU0FBUyxNQUFLQyxRQUFRO1lBRTVCLElBQUksQ0FBQ0QsUUFBUTtnQkFDWDtZQUNGO1lBRUEsSUFBTU0sa0JBQWtCWSx3Q0FBc0IsRUFDeENQLFNBQVM7WUFFZixNQUFLSCxhQUFhLENBQUNGLGlCQUFpQlIsT0FBT0MsU0FBU1k7UUFDdEQ7UUFFQUgsa0RBQUFBLGlCQUFnQixTQUFDRixpQkFBaUJSLE9BQU9DO2dCQUFTWSwwRUFBUztZQUN6RCxJQUFNUSxVQUFVLE1BQUtDLFVBQVUsSUFDekJDLFlBQVksTUFBS0MsWUFBWSxJQUM3QkMsaUJBQWlCLE1BQUtDLGlCQUFpQixJQUN2Q0MsbUJBQW1CLE1BQUtDLG1CQUFtQjtZQUVqRCxJQUFJZixVQUFVWSxrQkFBa0JFLGtCQUFrQjtnQkFDaEQsTUFBS0Usa0JBQWtCLENBQUNyQixpQkFBaUJSLE9BQU9DO1lBQ2xEO1lBRUEsSUFBTTZCLGtCQUFrQlQsU0FDbEJVLG9CQUFvQlIsV0FBWSxHQUFHO1lBRXpDLE1BQUtTLGtCQUFrQixDQUFDRjtZQUV4QixNQUFLRyxvQkFBb0IsQ0FBQ0Y7UUFDNUI7OztrQkE1Rm1CdEM7O1lBOEZuQnlDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0IsQUFBRTRCLFdBQWE3QixXQUFiNkI7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFoQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsU0FBUyxJQUFJLENBQUNrQyxRQUFRLENBQUM7Z0JBRTdCLE9BQU9sQztZQUNUOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDL0IsQUFBRThCLFFBQVUvQixXQUFWK0IsT0FDRmhCLFVBQVVnQixPQUFRLEdBQUc7Z0JBRTNCLE9BQU9oQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1sQixhQUFhLElBQUksQ0FBQ0MsYUFBYSxJQUMvQmdCLFlBQVllLGtCQUFTLENBQUNDLGNBQWMsQ0FBQ2pDO2dCQUUzQyxPQUFPaUI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QlEsa0JBQWtCLElBQUksQ0FBQ1Usa0JBQWtCLElBQ3pDQyx5QkFBMEJwQixZQUFZUyxpQkFDdENMLGlCQUFpQixDQUFDZ0I7Z0JBRXhCLE9BQU9oQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1MLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCTyxvQkFBb0IsSUFBSSxDQUFDVyxvQkFBb0IsSUFDN0NDLDZCQUE2QnBCLFVBQVVxQixTQUFTLENBQUNiLG9CQUNqREosbUJBQW1CLENBQUNnQiw0QkFBNEIsR0FBRztnQkFFekQsT0FBT2hCO1lBQ1Q7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlWLFFBQVE7Z0JBQ2xCLElBQU03QixhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckN1QyxPQUFPQyxNQUFNLENBQUN6QyxZQUFZO29CQUN4QjZCLFVBQUFBO2dCQUNGO1lBQ0Y7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVzNCLE9BQU87b0JBQUVXLHFCQUFBQSxpRUFBcUI7Z0JBQ3ZDLElBQU1LLFFBQVFoQixTQUNSZixhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckN1QyxPQUFPQyxNQUFNLENBQUN6QyxZQUFZO29CQUN4QitCLE9BQUFBO2dCQUNGO2dCQUVBLElBQUlMLG9CQUFvQjtvQkFDdEIsSUFBTUYsa0JBQWtCVCxTQUFVLEdBQUc7b0JBRXJDLElBQUksQ0FBQ1csa0JBQWtCLENBQUNGO2dCQUMxQjtZQUNGOzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhMUIsU0FBUztvQkFBRVUsdUJBQUFBLGlFQUF1QjtnQkFDN0MsSUFBTWlCLHlCQUF5QjNCLFVBQVU0QixnQkFBZ0IsSUFDbkRDLHVCQUF1QjdCLFVBQVU4QixjQUFjLElBQy9DQyxpQkFBaUJKLHdCQUNqQkssZUFBZUgsc0JBQ2Y5QyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtnQkFFckNELFdBQVdrRCxpQkFBaUIsQ0FBQ0YsZ0JBQWdCQztnQkFFN0MsSUFBSXRCLHNCQUFzQjtvQkFDeEIsSUFBTUYsb0JBQW9CUixXQUFZLEdBQUc7b0JBRXpDLElBQUksQ0FBQ1Usb0JBQW9CLENBQUNGO2dCQUM1QjtZQUNGOzs7WUFFQTBCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdkQsU0FBUyxJQUFJLENBQUNDLFFBQVE7Z0JBRTVCLElBQUlELFFBQVE7b0JBQ1Y7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDd0QsS0FBSyxJQUFJLEdBQUc7WUFDbkI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXpELFNBQVMsSUFBSSxDQUFDQyxRQUFRO2dCQUU1QixJQUFJLENBQUNELFFBQVE7b0JBQ1g7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDMEQsV0FBVyxDQUFDO1lBQ25COzs7WUFFQXBCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVWLGtCQUFvQixJQUFJLENBQUMrQixRQUFRLEdBQWpDL0I7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVYLG9CQUFzQixJQUFJLENBQUM4QixRQUFRLEdBQW5DOUI7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJGLGVBQWU7Z0JBQ2hDLElBQUksQ0FBQ2dDLFdBQVcsQ0FBQztvQkFDZmhDLGlCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkYsaUJBQWlCO2dCQUNwQyxJQUFJLENBQUMrQixXQUFXLENBQUM7b0JBQ2YvQixtQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFnQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpDLGtCQUFrQixNQUNsQkMsb0JBQW9CO2dCQUUxQixJQUFJLENBQUNpQyxRQUFRLENBQUM7b0JBQ1psQyxpQkFBQUE7b0JBQ0FDLG1CQUFBQTtnQkFDRjtZQUNGOzs7WUFFQWtDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCTSxrQkFBa0JULFNBQ2xCVSxvQkFBb0JSLFdBQVksR0FBRztnQkFFekMsSUFBSSxDQUFDUyxrQkFBa0IsQ0FBQ0Y7Z0JBRXhCLElBQUksQ0FBQ0csb0JBQW9CLENBQUNGO2dCQUUxQixJQUFJLENBQUNtQyxPQUFPLENBQUN4RSxpQkFBaUIsSUFBSSxDQUFDeUIsV0FBVztnQkFFOUMsSUFBSSxDQUFDK0MsT0FBTyxDQUFDdEUsa0JBQWtCLElBQUksQ0FBQ21CLFlBQVk7Z0JBRWhELElBQUksQ0FBQ21ELE9BQU8sQ0FBQ3JFLGtCQUFrQixJQUFJLENBQUNpQixZQUFZO2dCQUVoRCxJQUFJLENBQUNvRCxPQUFPLENBQUNwRSxtQkFBbUIsSUFBSSxDQUFDYSxhQUFhO2dCQUVsRHdELGNBQVEsQ0FBQ0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDckUsc0JBQXNCLEVBQUUsSUFBSTtZQUM5RDs7O1lBRUFzRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQyxRQUFRLENBQUM1RSxpQkFBaUIsSUFBSSxDQUFDeUIsV0FBVztnQkFFL0MsSUFBSSxDQUFDbUQsUUFBUSxDQUFDMUUsa0JBQWtCLElBQUksQ0FBQ21CLFlBQVk7Z0JBRWpELElBQUksQ0FBQ3VELFFBQVEsQ0FBQ3pFLGtCQUFrQixJQUFJLENBQUNpQixZQUFZO2dCQUVqRCxJQUFJLENBQUN3RCxRQUFRLENBQUN4RSxtQkFBbUIsSUFBSSxDQUFDYSxhQUFhO2dCQUVuRHdELGNBQVEsQ0FBQ0ksa0JBQWtCLENBQUMsSUFBSSxDQUFDeEUsc0JBQXNCLEVBQUUsSUFBSTtZQUMvRDs7O1lBRUF5RSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDVCxlQUFlO1lBQ3RCOzs7O1lBUU9VLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVDLEtBQUssRUFBRUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUNsQ0M7Z0JBQXJCLElBQU1DLGVBQWVELENBQUFBLFdBQUFBLGFBQU8sRUFBQ0osU0FBUyxDQUFqQkksTUFBQUEsVUFBQUE7b0JBQWtCSDtvQkFBT0M7aUJBQWtDLENBQTNERSxPQUFxQyxxQkFBR0Q7Z0JBRTdELE9BQU9FO1lBQ1Q7OztXQXhSbUJyRjtxQkFBcUJvRixhQUFPO0FBOFEvQyxpQkE5UW1CcEYsY0E4UVpzRixXQUFVO0FBRWpCLGlCQWhSbUJ0RixjQWdSWnVGLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0FBU0ZuQyxPQUFPQyxNQUFNLENBQUN0RCxhQUFheUYsU0FBUyxFQUFFQyxvQkFBaUI7QUFFdkQsU0FBU25FLE1BQU1vRSxJQUFJO0lBQ2pCQyxXQUFXRCxNQUFNO0FBQ25CIn0=