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
            _this.customHandler(customEventType, event, element, selectionChanged);
        });
        _define_property(_assert_this_initialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, selectionChanged = true;
                _this.customHandler(customEventType, event, element, selectionChanged);
            });
        });
        _define_property(_assert_this_initialized(_this), "inputHandler", function(event, element) {
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, selectionChanged = _this.hasSelectionChanged();
            _this.customHandler(customEventType, event, element, selectionChanged);
        });
        _define_property(_assert_this_initialized(_this), "scrollHandler", function(event, element) {
            var customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE;
            _this.callCustomHandlers(customEventType, event, element);
        });
        _define_property(_assert_this_initialized(_this), "selectChangeHandler", function(event, element) {
            var currentTarget = event.currentTarget, activeElement = currentTarget.activeElement, domElement = _this.getDOMElement();
            if (activeElement === domElement) {
                element = _assert_this_initialized(_this); ///
                var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, selectionChanged = _this.hasSelectionChanged();
                _this.customHandler(customEventType, event, element, selectionChanged);
            }
        });
        _define_property(_assert_this_initialized(_this), "customHandler", function(customEventType, event, element, selectionChanged) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLCBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBzZWxlY3Rpb25DaGFuZ2VkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcclxuICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldCxcclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9tRWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmhhc1NlbGVjdGlvbkNoYW5nZWQoKTtcclxuXHJcbiAgICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBzZWxlY3Rpb25DaGFuZ2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUhhbmRsZXIgPSAoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgc2VsZWN0aW9uQ2hhbmdlZCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHJldHVybiByZWFkT25seTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgaGFzQ29udGVudENoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSB0aGlzLmdldFByZXZpb3VzQ29udGVudCgpLFxyXG4gICAgICAgICAgY29udGVudFByZXZpb3VzQ29udGVudCA9IChjb250ZW50ID09PSBwcmV2aW91c0NvbnRlbnQpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSAhY29udGVudFByZXZpb3VzQ29udGVudDtcclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNFcXVhbFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSAhc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb247IC8vL1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb25DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50LCBzZXRQcmV2aW91c0NvbnRlbnQgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c0NvbnRlbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gY29udGVudDsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGlvbihzZWxlY3Rpb24sIHNldFByZXZpb3VzU2VsZWN0aW9uID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIGRvbUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcblxyXG4gICAgaWYgKHNldFByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vbkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5vbkV2ZW50KFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCB0aGlzLnNlbGVjdENoYW5nZUhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5vZmZFdmVudChCTFVSX0VWRU5UX1RZUEUsIHRoaXMuYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub2ZmRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHRoaXMuc2VsZWN0Q2hhbmdlSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNDb250ZW50IH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzQ29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c1NlbGVjdGlvbiB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1NlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XHJcbiAgICBjbGFzc05hbWU6IFwicmljaFwiXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCByaWNoVGV4dGFyZWEgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcclxuXHJcbiAgICByZXR1cm4gcmljaFRleHRhcmVhO1xyXG4gIH1cclxufVxyXG5cclxuT2JqZWN0LmFzc2lnbihSaWNoVGV4dGFyZWEucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XHJcblxyXG5mdW5jdGlvbiBkZWZlcihmdW5jKSB7XHJcbiAgc2V0VGltZW91dChmdW5jLCAwKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmljaFRleHRhcmVhIiwiQkxVUl9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIkZPQ1VTX0VWRU5UX1RZUEUiLCJJTlBVVF9FVkVOVF9UWVBFIiwiU0NST0xMX0VWRU5UX1RZUEUiLCJTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSIsImJsdXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiQkxVUl9DVVNUT01fRVZFTlRfVFlQRSIsInNlbGVjdGlvbkNoYW5nZWQiLCJjdXN0b21IYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiZGVmZXIiLCJGT0NVU19DVVNUT01fRVZFTlRfVFlQRSIsImlucHV0SGFuZGxlciIsIkNIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJzY3JvbGxIYW5kbGVyIiwiU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwic2VsZWN0Q2hhbmdlSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJwcmV2aW91c0NvbnRlbnQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJoYXNDbGFzcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50UHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiIsImlzRXF1YWxUbyIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJhY3RpdmF0ZSIsIm9uRXZlbnQiLCJkb2N1bWVudCIsImFkZENsYXNzIiwiZGVhY3RpdmF0ZSIsIm9mZkV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwiZGlkTW91bnQiLCJ3aWxsVW5tb3VudCIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiaW5pdGlhbGlzZSIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJjdXN0b21FdmVudE1peGlucyIsImZ1bmMiLCJzZXRUaW1lb3V0Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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