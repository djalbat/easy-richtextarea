"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
var _easy = require("easy");
var _necessary = require("necessary");
var _button = /*#__PURE__*/ _interop_require_default(require("./view/button"));
var _richTextarea = /*#__PURE__*/ _interop_require_default(require("./view/richTextarea"));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var second = _necessary.arrayUtilities.second;
var count = 0;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "buttonClickHandler", function(event, element) {
            var richTextarea = _this.getRickTextarea();
            richTextarea.activate();
        }), _define_property(_this, "blurCustomHandler", function(event, element) {
            console.log(count++, "blur");
        }), _define_property(_this, "focusCustomHandler", function(event, element) {
            console.log(count++, "focus");
        }), _define_property(_this, "scrollCustomHandler", function(event, element) {
            var richTextarea = _this.getRickTextarea(), scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
            console.log(count++, "scroll", scrollTop, scrollLeft);
        }), _define_property(_this, "changeCustomHandler", function(event, element) {
            var richTextarea = _this.getRickTextarea(), contentChanged = richTextarea.hasContentChanged(), selectionChanged = richTextarea.hasSelectionChanged();
            console.log(count++, "change", contentChanged, selectionChanged);
        }), _define_property(_this, "activateCustomHandler", function(event, element) {
            console.log(count++, "activate");
        }), _define_property(_this, "deactivateCustomHandler", function(event, element) {
            console.log(count++, "deactivate");
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "getRickTextarea",
            value: function getRickTextarea() {
                var childElements = this.getChildElements(), secondChildElement = second(childElements), richTextarea = secondChildElement; ///
                return richTextarea;
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_button.default, {
                        onClick: this.buttonClickHandler
                    }, "Activate"),
                    /*#__PURE__*/ React.createElement(_richTextarea.default, {
                        onCustomBlur: this.blurCustomHandler,
                        onCustomFocus: this.focusCustomHandler,
                        onCustomScroll: this.scrollCustomHandler,
                        onCustomChange: this.changeCustomHandler,
                        onCustomActivate: this.activateCustomHandler,
                        onCustomDeactivate: this.deactivateCustomHandler
                    })
                ];
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vdmlldy9yaWNoVGV4dGFyZWFcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5sZXQgY291bnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IHRoaXMuZ2V0Umlja1RleHRhcmVhKCk7XG5cbiAgICByaWNoVGV4dGFyZWEuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGJsdXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coY291bnQrKywgXCJibHVyXCIpXG4gIH1cblxuICBmb2N1c0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb3VudCsrLCBcImZvY3VzXCIpXG4gIH1cblxuICBzY3JvbGxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gdGhpcy5nZXRSaWNrVGV4dGFyZWEoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb3VudCsrLCBcInNjcm9sbFwiLCBzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gIH1cblxuICBjaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gdGhpcy5nZXRSaWNrVGV4dGFyZWEoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpLFxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xuXG4gICAgY29uc29sZS5sb2coY291bnQrKywgXCJjaGFuZ2VcIiwgY29udGVudENoYW5nZWQsIHNlbGVjdGlvbkNoYW5nZWQpXG4gIH1cblxuICBhY3RpdmF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb3VudCsrLCBcImFjdGl2YXRlXCIpXG4gIH1cblxuICBkZWFjdGl2YXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvdW50KyssIFwiZGVhY3RpdmF0ZVwiKVxuICB9XG5cbiAgZ2V0Umlja1RleHRhcmVhKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZEVsZW1lbnQgPSBzZWNvbmQoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmljaFRleHRhcmVhID0gc2Vjb25kQ2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIEFjdGl2YXRlXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ3VzdG9tQmx1cj17dGhpcy5ibHVyQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Gb2N1cz17dGhpcy5mb2N1c0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU2Nyb2xsPXt0aGlzLnNjcm9sbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tQ2hhbmdlPXt0aGlzLmNoYW5nZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tQWN0aXZhdGU9e3RoaXMuYWN0aXZhdGVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbURlYWN0aXZhdGU9e3RoaXMuZGVhY3RpdmF0ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImNvdW50IiwiYnV0dG9uQ2xpY2tIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwicmljaFRleHRhcmVhIiwiZ2V0Umlja1RleHRhcmVhIiwiYWN0aXZhdGUiLCJibHVyQ3VzdG9tSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJmb2N1c0N1c3RvbUhhbmRsZXIiLCJzY3JvbGxDdXN0b21IYW5kbGVyIiwic2Nyb2xsVG9wIiwiZ2V0U2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsImdldFNjcm9sbExlZnQiLCJjaGFuZ2VDdXN0b21IYW5kbGVyIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiYWN0aXZhdGVDdXN0b21IYW5kbGVyIiwiZGVhY3RpdmF0ZUN1c3RvbUhhbmRsZXIiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsInNlY29uZENoaWxkRWxlbWVudCIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJSaWNoVGV4dGFyZWEiLCJvbkN1c3RvbUJsdXIiLCJvbkN1c3RvbUZvY3VzIiwib25DdXN0b21TY3JvbGwiLCJvbkN1c3RvbUNoYW5nZSIsIm9uQ3VzdG9tQWN0aXZhdGUiLCJvbkN1c3RvbURlYWN0aXZhdGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OztvQkFWRzt5QkFDTzs2REFFWjttRUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUMsU0FBV0MseUJBQWMsQ0FBekJEO0FBRVIsSUFBSUUsUUFBUTtBQUVHLElBQUEsQUFBTUgscUJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztrQ0FBQUEsa0JBQ25CSSx3QkFBQUEsc0JBQXFCLFNBQUNDLE9BQU9DO1lBQzNCLElBQU1DLGVBQWUsTUFBS0MsZUFBZTtZQUV6Q0QsYUFBYUUsUUFBUTtRQUN2QixJQUVBQyx3QkFBQUEscUJBQW9CLFNBQUNMLE9BQU9DO1lBQzFCSyxRQUFRQyxHQUFHLENBQUNULFNBQVM7UUFDdkIsSUFFQVUsd0JBQUFBLHNCQUFxQixTQUFDUixPQUFPQztZQUMzQkssUUFBUUMsR0FBRyxDQUFDVCxTQUFTO1FBQ3ZCLElBRUFXLHdCQUFBQSx1QkFBc0IsU0FBQ1QsT0FBT0M7WUFDNUIsSUFBTUMsZUFBZSxNQUFLQyxlQUFlLElBQ25DTyxZQUFZUixhQUFhUyxZQUFZLElBQ3JDQyxhQUFhVixhQUFhVyxhQUFhO1lBRTdDUCxRQUFRQyxHQUFHLENBQUNULFNBQVMsVUFBVVksV0FBV0U7UUFDNUMsSUFFQUUsd0JBQUFBLHVCQUFzQixTQUFDZCxPQUFPQztZQUM1QixJQUFNQyxlQUFlLE1BQUtDLGVBQWUsSUFDbkNZLGlCQUFpQmIsYUFBYWMsaUJBQWlCLElBQy9DQyxtQkFBbUJmLGFBQWFnQixtQkFBbUI7WUFFekRaLFFBQVFDLEdBQUcsQ0FBQ1QsU0FBUyxVQUFVaUIsZ0JBQWdCRTtRQUNqRCxJQUVBRSx3QkFBQUEseUJBQXdCLFNBQUNuQixPQUFPQztZQUM5QkssUUFBUUMsR0FBRyxDQUFDVCxTQUFTO1FBQ3ZCLElBRUFzQix3QkFBQUEsMkJBQTBCLFNBQUNwQixPQUFPQztZQUNoQ0ssUUFBUUMsR0FBRyxDQUFDVCxTQUFTO1FBQ3ZCOzs7a0JBckNtQkg7O1lBdUNuQlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1rQixnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLHFCQUFxQjNCLE9BQU95QixnQkFDNUJuQixlQUFlcUIsb0JBQXFCLEdBQUc7Z0JBRTdDLE9BQU9yQjtZQUNUOzs7WUFFQW1CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFRO2tDQUVOLG9CQUFDRyxlQUFNO3dCQUFDQyxTQUFTLElBQUksQ0FBQzFCLGtCQUFrQjt1QkFBRTtrQ0FHMUMsb0JBQUMyQixxQkFBWTt3QkFBQ0MsY0FBYyxJQUFJLENBQUN0QixpQkFBaUI7d0JBQ3BDdUIsZUFBZSxJQUFJLENBQUNwQixrQkFBa0I7d0JBQ3RDcUIsZ0JBQWdCLElBQUksQ0FBQ3BCLG1CQUFtQjt3QkFDeENxQixnQkFBZ0IsSUFBSSxDQUFDaEIsbUJBQW1CO3dCQUN4Q2lCLGtCQUFrQixJQUFJLENBQUNaLHFCQUFxQjt3QkFDNUNhLG9CQUFvQixJQUFJLENBQUNaLHVCQUF1Qjs7aUJBRy9EO1lBQ0g7OztXQTlEbUJ6QjtxQkFBYXNDLGFBQU87QUFnRXZDLGlCQWhFbUJ0QyxNQWdFWnVDLFdBQVU7QUFFakIsaUJBbEVtQnZDLE1Ba0Vad0MscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==