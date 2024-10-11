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
var Selection = /*#__PURE__*/ function() {
    function Selection(startPosition, endPosition) {
        _class_call_check(this, Selection);
        this.startPosition = startPosition;
        this.endPosition = endPosition;
    }
    _create_class(Selection, [
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
            value: function fromNothing() {
                var startPosition = 0, endPosition = 0, selection = new Selection(startPosition, endPosition);
                return selection;
            }
        },
        {
            key: "fromDOMElement",
            value: function fromDOMElement(domElement) {
                var selectionStart = domElement.selectionStart, selectionEnd = domElement.selectionEnd, startPosition = selectionStart, endPosition = selectionEnd, selection = new Selection(startPosition, endPosition);
                return selection;
            }
        },
        {
            key: "fromStartPositionAndEndPosition",
            value: function fromStartPositionAndEndPosition(startPosition, endPosition) {
                var selection = new Selection(startPosition, endPosition);
                return selection;
            }
        }
    ]);
    return Selection;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gZW5kUG9zaXRpb247XG4gIH1cblxuICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBnZXRFbmRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBzZXRFbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzZWxlY3Rpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLnN0YXJ0UG9zaXRpb24gPT09IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgICAgZW5kUG9zaXRpb25zRXF1YWwgPSAodGhpcy5lbmRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uRW5kUG9zaXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXJ0UG9zaXRpb25zRXF1YWwgJiYgZW5kUG9zaXRpb25zRXF1YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQsIC8vL1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uRW5kLCAvLy9cbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiZ2V0U3RhcnRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2V0U3RhcnRQb3NpdGlvbiIsInNldEVuZFBvc2l0aW9uIiwiaXNFcXVhbFRvIiwic2VsZWN0aW9uIiwiZXF1YWxUbyIsInNlbGVjdGlvblN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsInN0YXJ0UG9zaXRpb25zRXF1YWwiLCJlbmRQb3NpdGlvbnNFcXVhbCIsImZyb21Ob3RoaW5nIiwiZnJvbURPTUVsZW1lbnQiLCJkb21FbGVtZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDBCQUFOO2FBQU1BLFVBQ1BDLGFBQWEsRUFBRUMsV0FBVztnQ0FEbkJGO1FBRWpCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUhGRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJKLGFBQWE7Z0JBQzVCLElBQUksQ0FBQ0EsYUFBYSxHQUFHQTtZQUN2Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixXQUFXO2dCQUN4QixJQUFJLENBQUNBLFdBQVcsR0FBR0E7WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsU0FBUztnQkFDakIsSUFBSUMsVUFBVTtnQkFFZCxJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU1FLHlCQUF5QkYsVUFBVUwsZ0JBQWdCLElBQ25EUSx1QkFBdUJILFVBQVVKLGNBQWMsSUFDL0NRLHNCQUF1QixJQUFJLENBQUNYLGFBQWEsS0FBS1Msd0JBQzlDRyxvQkFBcUIsSUFBSSxDQUFDWCxXQUFXLEtBQUtTO29CQUVoREYsVUFBV0csdUJBQXVCQztnQkFDcEM7Z0JBRUEsT0FBT0o7WUFDVDs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNYixnQkFBZ0IsR0FDaEJDLGNBQWMsR0FDZE0sWUFBWSxJQXhDRFIsVUF3Q2VDLGVBQWVDO2dCQUUvQyxPQUFPTTtZQUNUOzs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFDOUIsSUFBUUMsaUJBQWlDRCxXQUFqQ0MsZ0JBQWdCQyxlQUFpQkYsV0FBakJFLGNBQ2xCakIsZ0JBQWdCZ0IsZ0JBQ2hCZixjQUFjZ0IsY0FDZFYsWUFBWSxJQWpERFIsVUFpRGVDLGVBQWVDO2dCQUUvQyxPQUFPTTtZQUVUOzs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsZ0NBQWdDbEIsYUFBYSxFQUFFQyxXQUFXO2dCQUMvRCxJQUFNTSxZQUFZLElBeEREUixVQXdEZUMsZUFBZUM7Z0JBRS9DLE9BQU9NO1lBQ1Q7OztXQTNEbUJSIn0=