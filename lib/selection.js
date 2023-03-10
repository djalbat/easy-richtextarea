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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZWxlY3Rpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgICB0aGlzLmVuZFBvc2l0aW9uID0gZW5kUG9zaXRpb247XG4gIH1cblxuICBnZXRTdGFydFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBnZXRFbmRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRQb3NpdGlvbjtcbiAgfVxuXG4gIHNldFN0YXJ0UG9zaXRpb24oc3RhcnRQb3NpdGlvbikge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIH1cblxuICBzZXRFbmRQb3NpdGlvbihlbmRQb3NpdGlvbikge1xuICAgIHRoaXMuZW5kUG9zaXRpb24gPSBlbmRQb3NpdGlvbjtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzZWxlY3Rpb24pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKHNlbGVjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXG4gICAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxuICAgICAgICAgICAgc3RhcnRQb3NpdGlvbnNFcXVhbCA9ICh0aGlzLnN0YXJ0UG9zaXRpb24gPT09IHNlbGVjdGlvblN0YXJ0UG9zaXRpb24pLFxuICAgICAgICAgICAgZW5kUG9zaXRpb25zRXF1YWwgPSAodGhpcy5lbmRQb3NpdGlvbiA9PT0gc2VsZWN0aW9uRW5kUG9zaXRpb24pO1xuXG4gICAgICBlcXVhbFRvID0gKHN0YXJ0UG9zaXRpb25zRXF1YWwgJiYgZW5kUG9zaXRpb25zRXF1YWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gMCxcbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCB9ID0gZG9tRWxlbWVudCxcbiAgICAgICAgICBzdGFydFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQsIC8vL1xuICAgICAgICAgIGVuZFBvc2l0aW9uID0gc2VsZWN0aW9uRW5kLCAvLy9cbiAgICAgICAgICBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTtcblxuICAgIHJldHVybiBzZWxlY3Rpb247XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhcnRQb3NpdGlvbkFuZEVuZFBvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbihzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbik7XG5cbiAgICByZXR1cm4gc2VsZWN0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlNlbGVjdGlvbiIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iLCJnZXRFbmRQb3NpdGlvbiIsInNldFN0YXJ0UG9zaXRpb24iLCJzZXRFbmRQb3NpdGlvbiIsImlzRXF1YWxUbyIsInNlbGVjdGlvbiIsImVxdWFsVG8iLCJzZWxlY3Rpb25TdGFydFBvc2l0aW9uIiwic2VsZWN0aW9uRW5kUG9zaXRpb24iLCJzdGFydFBvc2l0aW9uc0VxdWFsIiwiZW5kUG9zaXRpb25zRXF1YWwiLCJmcm9tTm90aGluZyIsImZyb21ET01FbGVtZW50IiwiZG9tRWxlbWVudCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiZnJvbVN0YXJ0UG9zaXRpb25BbmRFbmRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwwQkFBTjthQUFNQSxVQUNQQyxhQUFhLEVBQUVDLFdBQVc7OEJBRG5CRjtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztpQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUI7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSixhQUFhLEVBQUU7Z0JBQzlCLElBQUksQ0FBQ0EsYUFBYSxHQUFHQTtZQUN2Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixXQUFXLEVBQUU7Z0JBQzFCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxTQUFTLEVBQUU7Z0JBQ25CLElBQUlDLFVBQVUsS0FBSztnQkFFbkIsSUFBSUQsY0FBYyxJQUFJLEVBQUU7b0JBQ3RCLElBQU1FLHlCQUF5QkYsVUFBVUwsZ0JBQWdCLElBQ25EUSx1QkFBdUJILFVBQVVKLGNBQWMsSUFDL0NRLHNCQUF1QixJQUFJLENBQUNYLGFBQWEsS0FBS1Msd0JBQzlDRyxvQkFBcUIsSUFBSSxDQUFDWCxXQUFXLEtBQUtTO29CQUVoREYsVUFBV0csdUJBQXVCQztnQkFDcEMsQ0FBQztnQkFFRCxPQUFPSjtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLGNBQWM7Z0JBQ25CLElBQU1iLGdCQUFnQixHQUNoQkMsY0FBYyxHQUNkTSxZQUFZLElBeENEUixVQXdDZUMsZUFBZUM7Z0JBRS9DLE9BQU9NO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVLEVBQUU7Z0JBQ2hDLElBQVFDLGlCQUFpQ0QsV0FBakNDLGdCQUFnQkMsZUFBaUJGLFdBQWpCRSxjQUNsQmpCLGdCQUFnQmdCLGdCQUNoQmYsY0FBY2dCLGNBQ2RWLFlBQVksSUFqRERSLFVBaURlQyxlQUFlQztnQkFFL0MsT0FBT007WUFFVDs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLGdDQUFnQ2xCLGFBQWEsRUFBRUMsV0FBVyxFQUFFO2dCQUNqRSxJQUFNTSxZQUFZLElBeEREUixVQXdEZUMsZUFBZUM7Z0JBRS9DLE9BQU9NO1lBQ1Q7OztXQTNEbUJSIn0=