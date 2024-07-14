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
                    var customEventType = _customEventTypes.ACTIVATE_CUSTOM_EVENT_TYPE, _$event = null, _$element = _assert_this_initialized(_this), forced = true;
                    _this.customHandler(customEventType, _$event, _$element, forced);
                }
                var customEventType1 = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, forced1 = true;
                _this.customHandler(customEventType1, event, element, forced1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIERFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9jdXN0b21FdmVudFR5cGVzXCI7XHJcblxyXG5jb25zdCB7IEJMVVJfRVZFTlRfVFlQRSwgRk9DVVNfRVZFTlRfVFlQRSwgSU5QVVRfRVZFTlRfVFlQRSwgU0NST0xMX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXHJcbiAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IGRvbUVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGRlZmVyKCgpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBBQ1RJVkFURV9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgICAgICBldmVudCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgZm9yY2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmx1ckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQkxVUl9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBjdXN0b21IYW5kbGVyID0gKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGZvcmNlZCB8fCBjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHJldHVybiByZWFkT25seTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgaGFzQ29udGVudENoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSB0aGlzLmdldFByZXZpb3VzQ29udGVudCgpLFxyXG4gICAgICAgICAgY29udGVudFByZXZpb3VzQ29udGVudCA9IChjb250ZW50ID09PSBwcmV2aW91c0NvbnRlbnQpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSAhY29udGVudFByZXZpb3VzQ29udGVudDtcclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNFcXVhbFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSAhc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb247IC8vL1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb25DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50LCBzZXRQcmV2aW91c0NvbnRlbnQgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c0NvbnRlbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gY29udGVudDsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGlvbihzZWxlY3Rpb24sIHNldFByZXZpb3VzU2VsZWN0aW9uID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIGRvbUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcblxyXG4gICAgaWYgKHNldFByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGRlYWN0aXZhdGUoKSB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gREVBQ1RJVkFURV9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGV2ZW50ID0gbnVsbCxcclxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLFxyXG4gICAgICAgICAgZm9yY2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzQ29udGVudCgpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNDb250ZW50IH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzQ29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFByZXZpb3VzU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c1NlbGVjdGlvbiB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c1NlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBudWxsLFxyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBwcmV2aW91c0NvbnRlbnQsXHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpZE1vdW50KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgdGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9uU2VsZWN0aW9uQ2hhbmdlKHRoaXMuc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICB3aWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMub2ZmRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCB0aGlzLmJsdXJIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9mZkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xyXG5cclxuICAgIGRvY3VtZW50Lm9mZlNlbGVjdGlvbkNoYW5nZSh0aGlzLnNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGlzZSgpIHtcclxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xyXG4gICAgY2xhc3NOYW1lOiBcInJpY2hcIlxyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xyXG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XHJcblxyXG4gICAgcmV0dXJuIHJpY2hUZXh0YXJlYTtcclxuICB9XHJcbn1cclxuXHJcbk9iamVjdC5hc3NpZ24oUmljaFRleHRhcmVhLnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xyXG5cclxuZnVuY3Rpb24gZGVmZXIoZnVuYykge1xyXG4gIHNldFRpbWVvdXQoZnVuYywgMCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJpY2hUZXh0YXJlYSIsIkJMVVJfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJGT0NVU19FVkVOVF9UWVBFIiwiSU5QVVRfRVZFTlRfVFlQRSIsIlNDUk9MTF9FVkVOVF9UWVBFIiwic2VsZWN0aW9uQ2hhbmdlSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImFjdGl2ZSIsImlzQWN0aXZlIiwiY3VycmVudFRhcmdldCIsImFjdGl2ZUVsZW1lbnQiLCJkb21FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkNIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsImN1c3RvbUhhbmRsZXIiLCJzY3JvbGxIYW5kbGVyIiwiU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFIiwiZm9yY2VkIiwiaW5wdXRIYW5kbGVyIiwiZm9jdXNIYW5kbGVyIiwiZGVmZXIiLCJhZGRDbGFzcyIsIkFDVElWQVRFX0NVU1RPTV9FVkVOVF9UWVBFIiwiRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUiLCJibHVySGFuZGxlciIsIkJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaGFzU2VsZWN0aW9uQ2hhbmdlZCIsImNhbGxDdXN0b21IYW5kbGVycyIsInByZXZpb3VzQ29udGVudCIsInByZXZpb3VzU2VsZWN0aW9uIiwic2V0UHJldmlvdXNDb250ZW50Iiwic2V0UHJldmlvdXNTZWxlY3Rpb24iLCJpc1JlYWRPbmx5IiwicmVhZE9ubHkiLCJoYXNDbGFzcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50UHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiIsImlzRXF1YWxUbyIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJhY3RpdmF0ZSIsImZvY3VzIiwiZGVhY3RpdmF0ZSIsInJlbW92ZUNsYXNzIiwiREVBQ1RJVkFURV9DVVNUT01fRVZFTlRfVFlQRSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRpZE1vdW50Iiwib25FdmVudCIsImRvY3VtZW50Iiwib25TZWxlY3Rpb25DaGFuZ2UiLCJ3aWxsVW5tb3VudCIsIm9mZkV2ZW50Iiwib2ZmU2VsZWN0aW9uQ2hhbmdlIiwiaW5pdGlhbGlzZSIsImZyb21DbGFzcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJyaWNoVGV4dGFyZWEiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJwcm90b3R5cGUiLCJjdXN0b21FdmVudE1peGlucyIsImZ1bmMiLCJzZXRU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