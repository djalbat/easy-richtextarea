"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _customEventTypes = require("../customEventTypes");
function onCustomBlur(blurCustomHandler, element) {
    var customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, customHandler = blurCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function onCustomFocus(focusCustomHandler, element) {
    var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, customHandler = focusCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function onCustomScroll(scrollCustomHandler, element) {
    var customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE, customHandler = scrollCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function onCustomChange(changeCustomHandler, element) {
    var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, customHandler = changeCustomHandler; ///
    this.onCustomEvent(customEventType, customHandler, element);
}
function offCustomBlur(blurCustomHandler, element) {
    var customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, customHandler = blurCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function offCustomFocus(blurCustomHandler, element) {
    var customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, customHandler = blurCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function offCustomScroll(scrollCustomHandler, element) {
    var customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE, customHandler = scrollCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
function offCustomChange(changeCustomHandler, element) {
    var customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE, customHandler = changeCustomHandler; ///
    this.offCustomEvent(customEventType, customHandler, element);
}
var customEventMixins = {
    onCustomBlur: onCustomBlur,
    onCustomFocus: onCustomFocus,
    onCustomScroll: onCustomScroll,
    onCustomChange: onCustomChange,
    offCustomBlur: offCustomBlur,
    offCustomFocus: offCustomFocus,
    offCustomScroll: offCustomScroll,
    offCustomChange: offCustomChange
};
var _default = customEventMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsIEZPQ1VTX0NVU1RPTV9FVkVOVF9UWVBFLCBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsIENIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9jdXN0b21FdmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tQmx1cihibHVyQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gYmx1ckN1c3RvbUhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21Gb2N1cyhmb2N1c0N1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBmb2N1c0N1c3RvbUhhbmRsZXI7ICAvLy9cblxuICB0aGlzLm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb25DdXN0b21TY3JvbGwoc2Nyb2xsQ3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBTQ1JPTExfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBzY3JvbGxDdXN0b21IYW5kbGVyOyAgLy8vXG5cbiAgdGhpcy5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tQ2hhbmdlKGNoYW5nZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gY2hhbmdlQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21CbHVyKGJsdXJDdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IEJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBibHVyQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRm9jdXMoYmx1ckN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUsXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSBibHVyQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tU2Nyb2xsKHNjcm9sbEN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gc2Nyb2xsQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tQ2hhbmdlKGNoYW5nZUN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gY2hhbmdlQ3VzdG9tSGFuZGxlcjsgIC8vL1xuXG4gIHRoaXMub2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbn1cblxuY29uc3QgY3VzdG9tRXZlbnRNaXhpbnMgPSB7XG4gIG9uQ3VzdG9tQmx1cixcbiAgb25DdXN0b21Gb2N1cyxcbiAgb25DdXN0b21TY3JvbGwsXG4gIG9uQ3VzdG9tQ2hhbmdlLFxuICBvZmZDdXN0b21CbHVyLFxuICBvZmZDdXN0b21Gb2N1cyxcbiAgb2ZmQ3VzdG9tU2Nyb2xsLFxuICBvZmZDdXN0b21DaGFuZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUV2ZW50TWl4aW5zO1xuIl0sIm5hbWVzIjpbIm9uQ3VzdG9tQmx1ciIsImJsdXJDdXN0b21IYW5kbGVyIiwiZWxlbWVudCIsImN1c3RvbUV2ZW50VHlwZSIsIkJMVVJfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwib25DdXN0b21FdmVudCIsIm9uQ3VzdG9tRm9jdXMiLCJmb2N1c0N1c3RvbUhhbmRsZXIiLCJGT0NVU19DVVNUT01fRVZFTlRfVFlQRSIsIm9uQ3VzdG9tU2Nyb2xsIiwic2Nyb2xsQ3VzdG9tSGFuZGxlciIsIlNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSIsIm9uQ3VzdG9tQ2hhbmdlIiwiY2hhbmdlQ3VzdG9tSGFuZGxlciIsIkNIQU5HRV9DVVNUT01fRVZFTlRfVFlQRSIsIm9mZkN1c3RvbUJsdXIiLCJvZmZDdXN0b21FdmVudCIsIm9mZkN1c3RvbUZvY3VzIiwib2ZmQ3VzdG9tU2Nyb2xsIiwib2ZmQ3VzdG9tQ2hhbmdlIiwiY3VzdG9tRXZlbnRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVFQTs7O2VBQUE7OztnQ0FyRW9IO0FBRXBILFNBQVNBLGFBQWFDLGlCQUFpQixFQUFFQyxPQUFPO0lBQzlDLElBQU1DLGtCQUFrQkMsd0NBQXNCLEVBQ3hDQyxnQkFBZ0JKLG1CQUFvQixHQUFHO0lBRTdDLElBQUksQ0FBQ0ssYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU0ssY0FBY0Msa0JBQWtCLEVBQUVOLE9BQU87SUFDaEQsSUFBTUMsa0JBQWtCTSx5Q0FBdUIsRUFDekNKLGdCQUFnQkcsb0JBQXFCLEdBQUc7SUFFOUMsSUFBSSxDQUFDRixhQUFhLENBQUNILGlCQUFpQkUsZUFBZUg7QUFDckQ7QUFFQSxTQUFTUSxlQUFlQyxtQkFBbUIsRUFBRVQsT0FBTztJQUNsRCxJQUFNQyxrQkFBa0JTLDBDQUF3QixFQUMxQ1AsZ0JBQWdCTSxxQkFBc0IsR0FBRztJQUUvQyxJQUFJLENBQUNMLGFBQWEsQ0FBQ0gsaUJBQWlCRSxlQUFlSDtBQUNyRDtBQUVBLFNBQVNXLGVBQWVDLG1CQUFtQixFQUFFWixPQUFPO0lBQ2xELElBQU1DLGtCQUFrQlksMENBQXdCLEVBQzFDVixnQkFBZ0JTLHFCQUFzQixHQUFHO0lBRS9DLElBQUksQ0FBQ1IsYUFBYSxDQUFDSCxpQkFBaUJFLGVBQWVIO0FBQ3JEO0FBRUEsU0FBU2MsY0FBY2YsaUJBQWlCLEVBQUVDLE9BQU87SUFDL0MsSUFBTUMsa0JBQWtCQyx3Q0FBc0IsRUFDeENDLGdCQUFnQkosbUJBQW9CLEdBQUc7SUFFN0MsSUFBSSxDQUFDZ0IsY0FBYyxDQUFDZCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsU0FBU2dCLGVBQWVqQixpQkFBaUIsRUFBRUMsT0FBTztJQUNoRCxJQUFNQyxrQkFBa0JNLHlDQUF1QixFQUN6Q0osZ0JBQWdCSixtQkFBb0IsR0FBRztJQUU3QyxJQUFJLENBQUNnQixjQUFjLENBQUNkLGlCQUFpQkUsZUFBZUg7QUFDdEQ7QUFFQSxTQUFTaUIsZ0JBQWdCUixtQkFBbUIsRUFBRVQsT0FBTztJQUNuRCxJQUFNQyxrQkFBa0JTLDBDQUF3QixFQUMxQ1AsZ0JBQWdCTSxxQkFBc0IsR0FBRztJQUUvQyxJQUFJLENBQUNNLGNBQWMsQ0FBQ2QsaUJBQWlCRSxlQUFlSDtBQUN0RDtBQUVBLFNBQVNrQixnQkFBZ0JOLG1CQUFtQixFQUFFWixPQUFPO0lBQ25ELElBQU1DLGtCQUFrQlksMENBQXdCLEVBQzFDVixnQkFBZ0JTLHFCQUFzQixHQUFHO0lBRS9DLElBQUksQ0FBQ0csY0FBYyxDQUFDZCxpQkFBaUJFLGVBQWVIO0FBQ3REO0FBRUEsSUFBTW1CLG9CQUFvQjtJQUN4QnJCLGNBQUFBO0lBQ0FPLGVBQUFBO0lBQ0FHLGdCQUFBQTtJQUNBRyxnQkFBQUE7SUFDQUcsZUFBQUE7SUFDQUUsZ0JBQUFBO0lBQ0FDLGlCQUFBQTtJQUNBQyxpQkFBQUE7QUFDRjtJQUVBLFdBQWVDIn0=