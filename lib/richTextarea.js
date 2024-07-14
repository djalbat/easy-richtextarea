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
        _define_property(_assert_this_initialized(_this), "blurHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, forced = true;
            _this.customHandler(customEventType, event, element, forced);
        });
        _define_property(_assert_this_initialized(_this), "focusHandler", function(event, element) {
            defer(function() {
                var active = _this.isActive();
                if (!active) {
                    _this.addClass("active");
                    var customEventType = _customEventTypes.ACTIVATE_CUSTOM_EVENT_TYPE, _$event = null, _$element = _assert_this_initialized(_this), forced = true;
                    _this.customHandler(customEventType, _$event, _$element, forced);
                }
                var customEventType1 = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, forced1 = true;
                _this.customHandler(customEventType1, event, element, forced1);
            });
        });
        _define_property(_assert_this_initialized(_this), "inputHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
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
                this.focus();
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
                var customEventType = _customEventTypes.DEACTIVATE_CUSTOM_EVENT_TYPE, event = null, element = this, forced = true;
                this.customHandler(customEventType, event, element, forced);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIERFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9jdXN0b21FdmVudFR5cGVzXCI7XHJcblxyXG5jb25zdCB7IEJMVVJfRVZFTlRfVFlQRSwgRk9DVVNfRVZFTlRfVFlQRSwgSU5QVVRfRVZFTlRfVFlQRSwgU0NST0xMX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBibHVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgZm9yY2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGZvY3VzSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgZGVmZXIoKCkgPT4ge1xyXG4gICAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEFDVElWQVRFX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICAgIGV2ZW50ID0gbnVsbCxcclxuICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcyxcclxuICAgICAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzY3JvbGxIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IFNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXHJcbiAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IGRvbUVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tSGFuZGxlciA9IChjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChmb3JjZWQgfHwgY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBldmVudCA9IG51bGwsXHJcbiAgICAgICAgICBlbGVtZW50ID0gdGhpcyxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzQ29udGVudCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNTZWxlY3Rpb24gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5vblNlbGVjdGlvbkNoYW5nZSh0aGlzLnNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm9mZkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5vZmZTZWxlY3Rpb25DaGFuZ2UodGhpcy5zZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHJldHVybiByaWNoVGV4dGFyZWE7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRk9DVVNfRVZFTlRfVFlQRSIsIklOUFVUX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsImJsdXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJjdXN0b21FdmVudFR5cGUiLCJCTFVSX0NVU1RPTV9FVkVOVF9UWVBFIiwiZm9yY2VkIiwiY3VzdG9tSGFuZGxlciIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwiYWRkQ2xhc3MiLCJBQ1RJVkFURV9DVVNUT01fRVZFTlRfVFlQRSIsIkZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFIiwiaW5wdXRIYW5kbGVyIiwiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwic2Nyb2xsSGFuZGxlciIsIlNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJwcmV2aW91c0NvbnRlbnQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwiaGFzQ2xhc3MiLCJ2YWx1ZSIsIlNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50IiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudFByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24iLCJpc0VxdWFsVG8iLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFNlbGVjdGlvblJhbmdlIiwiYWN0aXZhdGUiLCJmb2N1cyIsImRlYWN0aXZhdGUiLCJyZW1vdmVDbGFzcyIsIkRFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uRXZlbnQiLCJkb2N1bWVudCIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwid2lsbFVubW91bnQiLCJvZmZFdmVudCIsIm9mZlNlbGVjdGlvbkNoYW5nZSIsImluaXRpYWxpc2UiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwicmljaFRleHRhcmVhIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJmdW5jIiwi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