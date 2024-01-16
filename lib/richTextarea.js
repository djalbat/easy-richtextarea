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
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE = _easy.eventTypes.FOCUS_EVENT_TYPE, INPUT_EVENT_TYPE = _easy.eventTypes.INPUT_EVENT_TYPE, SCROLL_EVENT_TYPE = _easy.eventTypes.SCROLL_EVENT_TYPE, SELECTIONCHANGE_EVENT_TYPE = _easy.eventTypes.SELECTIONCHANGE_EVENT_TYPE;
var RichTextarea = /*#__PURE__*/ function(Element) {
    _inherits(RichTextarea, Element);
    var _super = _create_super(RichTextarea);
    function RichTextarea() {
        _class_call_check(this, RichTextarea);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "blurHandler", function(event, element) {
            var customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, selectionChanged = true;
            _this.customHandler(event, element, customEventType, selectionChanged);
        });
        _define_property(_assert_this_initialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, selectionChanged = true;
                _this.customHandler(event, element, customEventType, selectionChanged);
            });
        });
        _define_property(_assert_this_initialized(_this), "inputHandler", function(event, element) {
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, selectionChanged = _this.hasSelectionChanged();
            _this.customHandler(event, element, customEventType, selectionChanged);
        });
        _define_property(_assert_this_initialized(_this), "scrollHandler", function(event, element) {
            var customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element); ///
        });
        _define_property(_assert_this_initialized(_this), "selectChangeHandler", function(event, element) {
            var currentTarget = event.currentTarget, activeElement = currentTarget.activeElement, domElement = _this.getDOMElement();
            if (activeElement === domElement) {
                element = _assert_this_initialized(_this); ///
                var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, selectionChanged = _this.hasSelectionChanged();
                _this.customHandler(event, element, customEventType, selectionChanged);
            }
        });
        _define_property(_assert_this_initialized(_this), "customHandler", function(event, element, customEventType, selectionChanged) {
            var content = _this.getContent(), selection = _this.getSelection(), contentChanged = _this.hasContentChanged();
            if (contentChanged || selectionChanged) {
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
                this.onEvent(BLUR_EVENT_TYPE, this.blurHandler);
                this.onEvent(FOCUS_EVENT_TYPE, this.focusHandler);
                this.onEvent(INPUT_EVENT_TYPE, this.inputHandler);
                this.onEvent(SCROLL_EVENT_TYPE, this.scrollHandler);
                _easy.document.onEvent(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);
                this.addClass("active");
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                this.offEvent(BLUR_EVENT_TYPE, this.blurHandler);
                this.offEvent(FOCUS_EVENT_TYPE, this.focusHandler);
                this.offEvent(INPUT_EVENT_TYPE, this.inputHandler);
                this.offEvent(SCROLL_EVENT_TYPE, this.scrollHandler);
                _easy.document.offEvent(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);
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
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
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
_define_property(RichTextarea, "defaultProperties", {
    className: "rich"
});
Object.assign(RichTextarea.prototype, _customEvent.default);
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLCBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBjdXN0b21FdmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuY3VzdG9tSGFuZGxlcihldmVudCwgZWxlbWVudCwgY3VzdG9tRXZlbnRUeXBlLCBzZWxlY3Rpb25DaGFuZ2VkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBjdXN0b21FdmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpOyAvLy9cclxuICB9XHJcblxyXG4gIHNlbGVjdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXHJcbiAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvbUVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xyXG5cclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGN1c3RvbUV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50LCBjdXN0b21FdmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHRoaXMuaGFzQ29udGVudENoYW5nZWQoKTtcclxuXHJcbiAgICBpZiAoY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub25FdmVudChCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub25FdmVudChTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZGVhY3RpdmF0ZSgpIHtcclxuICAgIHRoaXMub2ZmRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9mZkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzQ29udGVudCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNTZWxlY3Rpb24gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IG51bGwsXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudCxcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInJpY2hcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcblxyXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oUmljaFRleHRhcmVhLnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJpY2hUZXh0YXJlYSIsIkJMVVJfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJGT0NVU19FVkVOVF9UWVBFIiwiSU5QVVRfRVZFTlRfVFlQRSIsIlNDUk9MTF9FVkVOVF9UWVBFIiwiU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUiLCJibHVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiY3VzdG9tSGFuZGxlciIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwiRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUiLCJpbnB1dEhhbmRsZXIiLCJDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwic2Nyb2xsSGFuZGxlciIsIlNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNlbGVjdENoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwicHJldmlvdXNDb250ZW50IiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsImlzUmVhZE9ubHkiLCJyZWFkT25seSIsImlzQWN0aXZlIiwiYWN0aXZlIiwiaGFzQ2xhc3MiLCJ2YWx1ZSIsIlNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50IiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudFByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24iLCJpc0VxdWFsVG8iLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFNlbGVjdGlvblJhbmdlIiwiYWN0aXZhdGUiLCJvbkV2ZW50IiwiZG9jdW1lbnQiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmZFdmVudCIsInJlbW92ZUNsYXNzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwicmljaFRleHRhcmVhIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7b0JBYnlCO2dFQUV4QjtrRUFDUTtnQ0FFc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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