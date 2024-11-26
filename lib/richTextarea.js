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
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var RichTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(RichTextarea, Textarea);
    function RichTextarea() {
        _class_call_check(this, RichTextarea);
        var _this;
        _this = _call_super(this, RichTextarea, arguments), _define_property(_this, "selectionChangeHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var currentTarget = event.currentTarget, activeElement = currentTarget.activeElement, domElement = _this.getDOMElement();
            if (activeElement !== domElement) {
                return;
            }
            element = _this; ///
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
            _this.customHandler(customEventType, event, element);
        }), _define_property(_this, "scrollHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE, forced = true;
            _this.customHandler(customEventType, event, element, forced);
        }), _define_property(_this, "inputHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
            _this.customHandler(customEventType, event, element);
        }), _define_property(_this, "focusHandler", function(event, element) {
            defer(function() {
                var active = _this.isActive();
                if (!active) {
                    _this.addClass("active");
                }
                var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, forced = true;
                _this.customHandler(customEventType, event, element, forced);
            });
        }), _define_property(_this, "blurHandler", function(event, element) {
            var active = _this.isActive();
            if (!active) {
                return;
            }
            var customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, forced = true;
            _this.customHandler(customEventType, event, element, forced);
        }), _define_property(_this, "customHandler", function(customEventType, event, element) {
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
                this.onBlur(this.blurHandler);
                this.onFocus(this.focusHandler);
                this.onInput(this.inputHandler);
                this.onScroll(this.scrollHandler);
                _easy.document.onSelectionChange(this.selectionChangeHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offBlur(this.blurHandler);
                this.offFocus(this.focusHandler);
                this.offInput(this.inputHandler);
                this.offScroll(this.scrollHandler);
                _easy.document.offSelectionChange(this.selectionChangeHandler, this);
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return RichTextarea;
}(_easy.Textarea);
_define_property(RichTextarea, "defaultProperties", {
    className: "rich"
});
Object.assign(RichTextarea.prototype, _customEvent.default);
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0YXJlYSwgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb25cIlxyXG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XHJcblxyXG5pbXBvcnQgeyBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBGT0NVU19DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9jdXN0b21FdmVudFR5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XHJcbiAgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50LFxyXG4gICAgICAgICAgeyBhY3RpdmVFbGVtZW50IH0gPSBjdXJyZW50VGFyZ2V0LFxyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBkb21FbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgZm9yY2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmx1ckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQkxVUl9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBjdXN0b21IYW5kbGVyID0gKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGZvcmNlZCB8fCBjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHJldHVybiByZWFkT25seTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgaGFzQ29udGVudENoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSB0aGlzLmdldFByZXZpb3VzQ29udGVudCgpLFxyXG4gICAgICAgICAgY29udGVudFByZXZpb3VzQ29udGVudCA9IChjb250ZW50ID09PSBwcmV2aW91c0NvbnRlbnQpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSAhY29udGVudFByZXZpb3VzQ29udGVudDtcclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNFcXVhbFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSAhc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb247IC8vL1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb25DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50LCBzZXRQcmV2aW91c0NvbnRlbnQgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c0NvbnRlbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gY29udGVudDsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGlvbihzZWxlY3Rpb24sIHNldFByZXZpb3VzU2VsZWN0aW9uID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIGRvbUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcblxyXG4gICAgaWYgKHNldFByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9jdXMoKTsgLy8vXHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IG51bGwsXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudCxcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG5cclxuICAgIHRoaXMub25CbHVyKHRoaXMuYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25Gb2N1cyh0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbklucHV0KHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uU2Nyb2xsKHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub25TZWxlY3Rpb25DaGFuZ2UodGhpcy5zZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5vZmZCbHVyKHRoaXMuYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmRm9jdXModGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmSW5wdXQodGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmU2Nyb2xsKHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub2ZmU2VsZWN0aW9uQ2hhbmdlKHRoaXMuc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsImRvbUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiY3VzdG9tRXZlbnRUeXBlIiwiQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFIiwiY3VzdG9tSGFuZGxlciIsInNjcm9sbEhhbmRsZXIiLCJTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUiLCJmb3JjZWQiLCJpbnB1dEhhbmRsZXIiLCJmb2N1c0hhbmRsZXIiLCJkZWZlciIsImFkZENsYXNzIiwiRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUiLCJibHVySGFuZGxlciIsIkJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaGFzU2VsZWN0aW9uQ2hhbmdlZCIsImNhbGxDdXN0b21IYW5kbGVycyIsInByZXZpb3VzQ29udGVudCIsInByZXZpb3VzU2VsZWN0aW9uIiwic2V0UHJldmlvdXNDb250ZW50Iiwic2V0UHJldmlvdXNTZWxlY3Rpb24iLCJpc1JlYWRPbmx5IiwicmVhZE9ubHkiLCJoYXNDbGFzcyIsInZhbHVlIiwiU2VsZWN0aW9uIiwiZnJvbURPTUVsZW1lbnQiLCJnZXRQcmV2aW91c0NvbnRlbnQiLCJjb250ZW50UHJldmlvdXNDb250ZW50IiwiZ2V0UHJldmlvdXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25QcmV2aW91c1NlbGVjdGlvbiIsImlzRXF1YWxUbyIsInNldFJlYWRPbmx5IiwiT2JqZWN0IiwiYXNzaWduIiwic2V0Q29udGVudCIsInNldFNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJnZXRTdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJhY3RpdmF0ZSIsImZvY3VzIiwiZGVhY3RpdmF0ZSIsInJlbW92ZUNsYXNzIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiZGlkTW91bnQiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25JbnB1dCIsIm9uU2Nyb2xsIiwiZG9jdW1lbnQiLCJvblNlbGVjdGlvbkNoYW5nZSIsIndpbGxVbm1vdW50Iiwib2ZmQmx1ciIsIm9mZkZvY3VzIiwib2ZmSW5wdXQiLCJvZmZTY3JvbGwiLCJvZmZTZWxlY3Rpb25DaGFuZ2UiLCJpbml0aWFsaXNlIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImN1c3RvbUV2ZW50TWl4aW5zIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O29CQVZjO2dFQUViO2tFQUNRO2dDQUtXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTs7Z0JBQU4sa0JBQU1BLDBCQUNuQkMsd0JBQUFBLDBCQUF5QixTQUFDQyxPQUFPQztZQUMvQixJQUFNQyxTQUFTLE1BQUtDLFFBQVE7WUFFNUIsSUFBSSxDQUFDRCxR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