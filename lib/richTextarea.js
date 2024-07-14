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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBFbGVtZW50LCBkb2N1bWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XHJcblxyXG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL3NlbGVjdGlvblwiXHJcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcclxuXHJcbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgIERFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9jdXN0b21FdmVudFR5cGVzXCI7XHJcblxyXG5jb25zdCB7IEJMVVJfRVZFTlRfVFlQRSwgRk9DVVNfRVZFTlRfVFlQRSwgSU5QVVRfRVZFTlRfVFlQRSwgU0NST0xMX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcclxuICBzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXHJcbiAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQsXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IGRvbUVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGRlZmVyKCgpID0+IHtcclxuICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBBQ1RJVkFURV9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgICAgICBldmVudCA9IG51bGwsXHJcbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgZm9yY2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJsdXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmlzQWN0aXZlKCk7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBmb3JjZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQpO1xyXG4gIH1cclxuXHJcbiAgY3VzdG9tSGFuZGxlciA9IChjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50LCBmb3JjZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gdGhpcy5oYXNDb250ZW50Q2hhbmdlZCgpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xyXG5cclxuICAgIGlmIChmb3JjZWQgfHwgY29udGVudENoYW5nZWQgfHwgc2VsZWN0aW9uQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBpc1JlYWRPbmx5KCkge1xyXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxyXG4gICAgICAgICAgeyByZWFkT25seSB9ID0gZG9tRWxlbWVudDtcclxuXHJcbiAgICByZXR1cm4gcmVhZE9ubHk7XHJcbiAgfVxyXG5cclxuICBpc0FjdGl2ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgcmV0dXJuIGFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGdldENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHZhbHVlIH0gPSBkb21FbGVtZW50LFxyXG4gICAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSBTZWxlY3Rpb24uZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcclxuICB9XHJcblxyXG4gIGhhc0NvbnRlbnRDaGFuZ2VkKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gdGhpcy5nZXRQcmV2aW91c0NvbnRlbnQoKSxcclxuICAgICAgICAgIGNvbnRlbnRQcmV2aW91c0NvbnRlbnQgPSAoY29udGVudCA9PT0gcHJldmlvdXNDb250ZW50KSxcclxuICAgICAgICAgIGNvbnRlbnRDaGFuZ2VkID0gIWNvbnRlbnRQcmV2aW91c0NvbnRlbnQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgaGFzU2VsZWN0aW9uQ2hhbmdlZCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHRoaXMuZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uLmlzRXF1YWxUbyhwcmV2aW91c1NlbGVjdGlvbiksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gIXNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uOyAvLy9cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uQ2hhbmdlZDtcclxuICB9XHJcblxyXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHJlYWRPbmx5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbnRlbnQoY29udGVudCwgc2V0UHJldmlvdXNDb250ZW50ID0gdHJ1ZSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihkb21FbGVtZW50LCB7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2V0UHJldmlvdXNDb250ZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQ7ICAvLy9cclxuXHJcbiAgICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb24oc2VsZWN0aW9uLCBzZXRQcmV2aW91c1NlbGVjdGlvbiA9IHRydWUpIHtcclxuICAgIGNvbnN0IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0U3RhcnRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kUG9zaXRpb24gPSBzZWxlY3Rpb24uZ2V0RW5kUG9zaXRpb24oKSxcclxuICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kUG9zaXRpb24sICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBkb21FbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IERFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICBldmVudCA9IG51bGwsXHJcbiAgICAgICAgICBlbGVtZW50ID0gdGhpcyxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c0NvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzQ29udGVudCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xyXG5cclxuICAgIHJldHVybiBwcmV2aW91c0NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91c1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IHsgcHJldmlvdXNTZWxlY3Rpb24gfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNTZWxlY3Rpb247XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gbnVsbCxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcHJldmlvdXNDb250ZW50LFxyXG4gICAgICBwcmV2aW91c1NlbGVjdGlvblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSBjb250ZW50LCAgLy8vXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IHNlbGVjdGlvbjsgIC8vL1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCk7XHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIHRoaXMuZm9jdXNIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5vblNlbGVjdGlvbkNoYW5nZSh0aGlzLnNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgd2lsbFVubW91bnQoKSB7XHJcbiAgICB0aGlzLm9mZkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgdGhpcy5ibHVySGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChGT0NVU19FVkVOVF9UWVBFLCB0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChJTlBVVF9FVkVOVF9UWVBFLCB0aGlzLmlucHV0SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vZmZFdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgdGhpcy5zY3JvbGxIYW5kbGVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5vZmZTZWxlY3Rpb25DaGFuZ2UodGhpcy5zZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpc2UoKSB7XHJcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcclxuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xyXG5cclxuICAgIHJldHVybiByaWNoVGV4dGFyZWE7XHJcbiAgfVxyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRk9DVVNfRVZFTlRfVFlQRSIsIklOUFVUX0VWRU5UX1RZUEUiLCJTQ1JPTExfRVZFTlRfVFlQRSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJhY3RpdmUiLCJpc0FjdGl2ZSIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsIlNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSIsImZvcmNlZCIsImlucHV0SGFuZGxlciIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwiYWRkQ2xhc3MiLCJBQ1RJVkFURV9DVVNUT01fRVZFTlRfVFlQRSIsIkZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFIiwiYmx1ckhhbmRsZXIiLCJCTFVSX0NVU1RPTV9FVkVOVF9UWVBFIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzZWxlY3Rpb24iLCJnZXRTZWxlY3Rpb24iLCJjb250ZW50Q2hhbmdlZCIsImhhc0NvbnRlbnRDaGFuZ2VkIiwic2VsZWN0aW9uQ2hhbmdlZCIsImhhc1NlbGVjdGlvbkNoYW5nZWQiLCJjYWxsQ3VzdG9tSGFuZGxlcnMiLCJwcmV2aW91c0NvbnRlbnQiLCJwcmV2aW91c1NlbGVjdGlvbiIsInNldFByZXZpb3VzQ29udGVudCIsInNldFByZXZpb3VzU2VsZWN0aW9uIiwiaXNSZWFkT25seSIsInJlYWRPbmx5IiwiaGFzQ2xhc3MiLCJ2YWx1ZSIsIlNlbGVjdGlvbiIsImZyb21ET01FbGVtZW50IiwiZ2V0UHJldmlvdXNDb250ZW50IiwiY29udGVudFByZXZpb3VzQ29udGVudCIsImdldFByZXZpb3VzU2VsZWN0aW9uIiwic2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24iLCJpc0VxdWFsVG8iLCJzZXRSZWFkT25seSIsIk9iamVjdCIsImFzc2lnbiIsInNldENvbnRlbnQiLCJzZXRTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNlbGVjdGlvbkVuZFBvc2l0aW9uIiwiZ2V0RW5kUG9zaXRpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFNlbGVjdGlvblJhbmdlIiwiYWN0aXZhdGUiLCJmb2N1cyIsImRlYWN0aXZhdGUiLCJyZW1vdmVDbGFzcyIsIkRFQUNUSVZBVEVfQ1VTVE9NX0VWRU5UX1RZUEUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uRXZlbnQiLCJkb2N1bWVudCIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwid2lsbFVubW91bnQiLCJvZmZFdmVudCIsIm9mZlNlbGVjdGlvbkNoYW5nZSIsImluaXRpYWxpc2UiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwicmljaFRleHRhcmVhIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwicHJvdG90eXBlIiwiY3VzdG9tRXZlbnRNaXhpbnMiLCJmdW5jIiwi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