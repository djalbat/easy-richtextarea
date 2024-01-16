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
            _this.customEventHandler(event, element, customEventType, selectionChanged);
        });
        _define_property(_assert_this_initialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, selectionChanged = true;
                _this.customEventHandler(event, element, customEventType, selectionChanged);
            });
        });
        _define_property(_assert_this_initialized(_this), "inputHandler", function(event, element) {
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, selectionChanged = _this.hasSelectionChanged();
            _this.customEventHandler(event, element, customEventType, selectionChanged);
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
                _this.customEventHandler(event, element, customEventType, selectionChanged);
            }
        });
        _define_property(_assert_this_initialized(_this), "customEventHandler", function(event, element, customEventType, selectionChanged) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLCBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuL2N1c3RvbUV2ZW50VHlwZXNcIjtcclxuXHJcbmNvbnN0IHsgQkxVUl9FVkVOVF9UWVBFLFxyXG4gICAgICAgIEZPQ1VTX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgSU5QVVRfRVZFTlRfVFlQRSxcclxuICAgICAgICBTQ1JPTExfRVZFTlRfVFlQRSxcclxuICAgICAgICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJpY2hUZXh0YXJlYSBleHRlbmRzIEVsZW1lbnQge1xyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21FdmVudEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGN1c3RvbUV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGRlZmVyKCgpID0+IHtcclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jdXN0b21FdmVudEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQsIGN1c3RvbUV2ZW50VHlwZSwgc2VsZWN0aW9uQ2hhbmdlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tRXZlbnRIYW5kbGVyKGV2ZW50LCBlbGVtZW50LCBjdXN0b21FdmVudFR5cGUsIHNlbGVjdGlvbkNoYW5nZWQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpOyAvLy9cclxuICB9XHJcblxyXG4gIHNlbGVjdENoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXHJcbiAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvbUVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xyXG5cclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbUV2ZW50SGFuZGxlcihldmVudCwgZWxlbWVudCwgY3VzdG9tRXZlbnRUeXBlLCBzZWxlY3Rpb25DaGFuZ2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbUV2ZW50SGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgY3VzdG9tRXZlbnRUeXBlLCBzZWxlY3Rpb25DaGFuZ2VkKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGNvbnRlbnRDaGFuZ2VkIHx8IHNlbGVjdGlvbkNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5jYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgaXNSZWFkT25seSgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgcmVhZE9ubHkgfSA9IGRvbUVsZW1lbnQ7XHJcblxyXG4gICAgcmV0dXJuIHJlYWRPbmx5O1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmhhc0NsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHJldHVybiBhY3RpdmU7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyB2YWx1ZSB9ID0gZG9tRWxlbWVudCxcclxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgIC8vL1xyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gU2VsZWN0aW9uLmZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBoYXNDb250ZW50Q2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IHRoaXMuZ2V0UHJldmlvdXNDb250ZW50KCksXHJcbiAgICAgICAgICBjb250ZW50UHJldmlvdXNDb250ZW50ID0gKGNvbnRlbnQgPT09IHByZXZpb3VzQ29udGVudCksXHJcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9ICFjb250ZW50UHJldmlvdXNDb250ZW50O1xyXG5cclxuICAgIHJldHVybiBjb250ZW50Q2hhbmdlZDtcclxuICB9XHJcblxyXG4gIGhhc1NlbGVjdGlvbkNoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSB0aGlzLmdldFByZXZpb3VzU2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbi5pc0VxdWFsVG8ocHJldmlvdXNTZWxlY3Rpb24pLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9ICFzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbjsgLy8vXHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbkNoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRSZWFkT25seShyZWFkT25seSkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICByZWFkT25seVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRDb250ZW50KGNvbnRlbnQsIHNldFByZXZpb3VzQ29udGVudCA9IHRydWUpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oZG9tRWxlbWVudCwge1xyXG4gICAgICB2YWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHNldFByZXZpb3VzQ29udGVudCkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50OyAgLy8vXHJcblxyXG4gICAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0aW9uKHNlbGVjdGlvbiwgc2V0UHJldmlvdXNTZWxlY3Rpb24gPSB0cnVlKSB7XHJcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldFN0YXJ0UG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkVuZFBvc2l0aW9uID0gc2VsZWN0aW9uLmdldEVuZFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIHNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgZG9tRWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kKTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLm9uRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHRoaXMuc2VsZWN0Q2hhbmdlSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLm9mZkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5vZmZFdmVudChTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgdGhpcy5zZWxlY3RDaGFuZ2VIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnQsXHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHJldHVybiByaWNoVGV4dGFyZWE7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRk9DVVNfRVZFTlRfVFlQRSIsIklOUFVUX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsIlNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIiwiYmx1ckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJCTFVSX0NVU1RPTV9FVkVOVF9UWVBFIiwic2VsZWN0aW9uQ2hhbmdlZCIsImN1c3RvbUV2ZW50SGFuZGxlciIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwiRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUiLCJpbnB1dEhhbmRsZXIiLCJDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwic2Nyb2xsSGFuZGxlciIsIlNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSIsImNhbGxDdXN0b21IYW5kbGVycyIsInNlbGVjdENoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwicHJldmlvdXNDb250ZW50IiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsImlzUmVhZE9ubHkiLCJyZWFkT25seSIsImlzQWN0aXZlIiwiYWN0aXZlIiwiaGFzQ2xhc3MiLCJ2YWx1ZSIsIlNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50IiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudFByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24iLCJpc0VxdWFsVG8iLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFNlbGVjdGlvblJhbmdlIiwiYWN0aXZhdGUiLCJvbkV2ZW50IiwiZG9jdW1lbnQiLCJhZGRDbGFzcyIsImRlYWN0aXZhdGUiLCJvZmZFdmVudCIsInJlbW92ZUNsYXNzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImluaXRpYWxpc2UiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwicmljaFRleHRhcmVhIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJmdW5jIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7b0JBYnlCO2dFQUV4QjtrRUFDUTtnQ0FFc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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