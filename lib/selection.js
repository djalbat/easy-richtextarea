"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Selection;
    }
});
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Selection = /*#__PURE__*/ function() {
    function Selection(startPosition, endPosition) {
        _classCallCheck(this, Selection);
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
    _createClass(Selection, [
        {
            key: "getStartPosition",
            value: function getStartPosition() {
                return this.startPosition;
            }
        },
        {
            key: "getEndPosition",
            value: function getEndPosition() {
                return this.endPosition;
            }
        },
        {
            key: "setStartPosition",
            value: function setStartPosition(startPosition) {
                this.startPosition = startPosition;
            }
        },
        {
            key: "setEndPosition",
            value: function setEndPosition(endPosition) {
                this.endPosition = endPosition;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(selection) {
                var equalTo = false;
                if (selection !== null) {
                    var selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), startPositionsEqual = this.startPosition === selectionStartPosition, endPositionsEqual = this.endPosition === selectionEndPosition;
                    equalTo = startPositionsEqual && endPositionsEqual;
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                if (Class === undefined) {
                    Class = Selection;
                }
                var startPosition = 0, endPosition = 0, selection = new Class(startPosition, endPosition);
                return selection;
            }
        },
        {
            key: "fromDOMElement",
            value: function fromDOMElement(Class, domElement) {
                if (domElement === undefined) {
                    domElement = Class; ///
                    Class = Selection;
                }
                var selectionStart = domElement.selectionStart, selectionEnd = domElement.selectionEnd, startPosition = selectionStart, endPosition = selectionEnd, selection = new Class(startPosition, endPosition);
                return selection;
            }
        },
        {
            key: "fromStartPositionAndEndPosition",
            value: function fromStartPositionAndEndPosition(Class, startPosition, endPosition) {
                if (endPosition === undefined) {
                    startPosition = Class; ///
                    endPosition = startPosition; ///
                    Class = Selection;
                }
                var selection = new Class(startPosition, endPosition);
                return selection;
            }
        }
    ]);
    return Selection;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gZW5kUG9zaXRpb247XG4gIH1cblxuICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBnZXRFbmRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBzZXRFbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzZWxlY3Rpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLnN0YXJ0UG9zaXRpb24gPT09IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgICAgZW5kUG9zaXRpb25zRXF1YWwgPSAodGhpcy5lbmRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uRW5kUG9zaXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXJ0UG9zaXRpb25zRXF1YWwgJiYgZW5kUG9zaXRpb25zRXF1YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIENsYXNzID0gU2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgQ2xhc3Moc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCkge1xuICAgIGlmIChkb21FbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRvbUVsZW1lbnQgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gU2VsZWN0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQsIC8vL1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uRW5kLCAvLy9cbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgQ2xhc3Moc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcblxuICB9XG5cbiAgc3RhdGljIGZyb21TdGFydFBvc2l0aW9uQW5kRW5kUG9zaXRpb24oQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgaWYgKGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBDbGFzczsgIC8vL1xuXG4gICAgICBlbmRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247ICAvLy9cblxuICAgICAgQ2xhc3MgPSBTZWxlY3Rpb247XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IENsYXNzKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2V0U3RhcnRQb3NpdGlvbiIsInNldEVuZFBvc2l0aW9uIiwiaXNFcXVhbFRvIiwic2VsZWN0aW9uIiwiZXF1YWxUbyIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb25zRXF1YWwiLCJlbmRQb3NpdGlvbnNFcXVhbCIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJmcm9tRE9NRWxlbWVudCIsImRvbUVsZW1lbnQiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsImZyb21TdGFydFBvc2l0aW9uQW5kRW5kUG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsMEJBQU47YUFBTUEsVUFDUEMsYUFBYSxFQUFFQyxXQUFXOzhCQURuQkY7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7aUJBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCO2dCQUNmLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkosYUFBYSxFQUFFO2dCQUM5QixJQUFJLENBQUNBLGFBQWEsR0FBR0E7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosV0FBVyxFQUFFO2dCQUMxQixJQUFJLENBQUNBLFdBQVcsR0FBR0E7WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsU0FBUyxFQUFFO2dCQUNuQixJQUFJQyxVQUFVLEtBQUs7Z0JBRW5CLElBQUlELGNBQWMsSUFBSSxFQUFFO29CQUN0QixJQUFNRSx5QkFBeUJGLFVBQVVMLGdCQUFnQixJQUNuRFEsdUJBQXVCSCxVQUFVSixjQUFjLElBQy9DUSxzQkFBdUIsSUFBSSxDQUFDWCxhQUFhLEtBQUtTLHdCQUM5Q0csb0JBQXFCLElBQUksQ0FBQ1gsV0FBVyxLQUFLUztvQkFFaERGLFVBQVdHLHVCQUF1QkM7Z0JBQ3BDLENBQUM7Z0JBRUQsT0FBT0o7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLLEVBQUU7Z0JBQ3hCLElBQUlBLFVBQVVDLFdBQVc7b0JBQ3ZCRCxRQXZDZWY7Z0JBd0NqQixDQUFDO2dCQUVELElBQU1DLGdCQUFnQixHQUNoQkMsY0FBYyxHQUNkTSxZQUFZLElBQUlPLE1BQU1kLGVBQWVDO2dCQUUzQyxPQUFPTTtZQUNUOzs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUYsS0FBSyxFQUFFRyxVQUFVLEVBQUU7Z0JBQ3ZDLElBQUlBLGVBQWVGLFdBQVc7b0JBQzVCRSxhQUFhSCxPQUFPLEdBQUc7b0JBRXZCQSxRQXJEZWY7Z0JBc0RqQixDQUFDO2dCQUVELElBQVFtQixpQkFBaUNELFdBQWpDQyxnQkFBZ0JDLGVBQWlCRixXQUFqQkUsY0FDbEJuQixnQkFBZ0JrQixnQkFDaEJqQixjQUFja0IsY0FDZFosWUFBWSxJQUFJTyxNQUFNZCxlQUFlQztnQkFFM0MsT0FBT007WUFFVDs7O1lBRU9hLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ04sS0FBSyxFQUFFZCxhQUFhLEVBQUVDLFdBQVcsRUFBRTtnQkFDeEUsSUFBSUEsZ0JBQWdCYyxXQUFXO29CQUM3QmYsZ0JBQWdCYyxPQUFRLEdBQUc7b0JBRTNCYixjQUFjRCxlQUFnQixHQUFHO29CQUVqQ2MsUUF2RWVmO2dCQXdFakIsQ0FBQztnQkFFRCxJQUFNUSxZQUFZLElBQUlPLE1BQU1kLGVBQWVDO2dCQUUzQyxPQUFPTTtZQUNUOzs7V0E3RW1CUiJ9