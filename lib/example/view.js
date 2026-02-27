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
const _easy = require("easy");
const _necessary = require("necessary");
const _button = /*#__PURE__*/ _interop_require_default(require("./view/button"));
const _richTextarea = /*#__PURE__*/ _interop_require_default(require("./view/richTextarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { second } = _necessary.arrayUtilities;
let count = 0;
class View extends _easy.Element {
    buttonClickHandler = (event, element)=>{
        const richTextarea = this.getRickTextarea();
        richTextarea.activate();
    };
    blurCustomHandler = (event, element)=>{
        console.log(count++, "blur");
    };
    focusCustomHandler = (event, element)=>{
        console.log(count++, "focus");
    };
    scrollCustomHandler = (event, element)=>{
        const richTextarea = this.getRickTextarea(), scrollTop = richTextarea.getScrollTop(), scrollLeft = richTextarea.getScrollLeft();
        console.log(count++, "scroll", scrollTop, scrollLeft);
    };
    changeCustomHandler = (event, element)=>{
        const richTextarea = this.getRickTextarea(), contentChanged = richTextarea.hasContentChanged(), selectionChanged = richTextarea.hasSelectionChanged();
        console.log(count++, "change", contentChanged, selectionChanged);
    };
    activateCustomHandler = (event, element)=>{
        console.log(count++, "activate");
    };
    deactivateCustomHandler = (event, element)=>{
        console.log(count++, "deactivate");
    };
    getRickTextarea() {
        const childElements = this.getChildElements(), secondChildElement = second(childElements), richTextarea = secondChildElement; ///
        return richTextarea;
    }
    childElements() {
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
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b25cIjtcbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vdmlldy9yaWNoVGV4dGFyZWFcIjtcblxuY29uc3QgeyBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5sZXQgY291bnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGJ1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHJpY2hUZXh0YXJlYSA9IHRoaXMuZ2V0Umlja1RleHRhcmVhKCk7XG5cbiAgICByaWNoVGV4dGFyZWEuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGJsdXJDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coY291bnQrKywgXCJibHVyXCIpXG4gIH1cblxuICBmb2N1c0N1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb3VudCsrLCBcImZvY3VzXCIpXG4gIH1cblxuICBzY3JvbGxDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gdGhpcy5nZXRSaWNrVGV4dGFyZWEoKSxcbiAgICAgICAgICBzY3JvbGxUb3AgPSByaWNoVGV4dGFyZWEuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHJpY2hUZXh0YXJlYS5nZXRTY3JvbGxMZWZ0KCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb3VudCsrLCBcInNjcm9sbFwiLCBzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG4gIH1cblxuICBjaGFuZ2VDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcmljaFRleHRhcmVhID0gdGhpcy5nZXRSaWNrVGV4dGFyZWEoKSxcbiAgICAgICAgICBjb250ZW50Q2hhbmdlZCA9IHJpY2hUZXh0YXJlYS5oYXNDb250ZW50Q2hhbmdlZCgpLFxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSByaWNoVGV4dGFyZWEuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xuXG4gICAgY29uc29sZS5sb2coY291bnQrKywgXCJjaGFuZ2VcIiwgY29udGVudENoYW5nZWQsIHNlbGVjdGlvbkNoYW5nZWQpXG4gIH1cblxuICBhY3RpdmF0ZUN1c3RvbUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb3VudCsrLCBcImFjdGl2YXRlXCIpXG4gIH1cblxuICBkZWFjdGl2YXRlQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvdW50KyssIFwiZGVhY3RpdmF0ZVwiKVxuICB9XG5cbiAgZ2V0Umlja1RleHRhcmVhKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBzZWNvbmRDaGlsZEVsZW1lbnQgPSBzZWNvbmQoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgcmljaFRleHRhcmVhID0gc2Vjb25kQ2hpbGRFbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gcmljaFRleHRhcmVhO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmJ1dHRvbkNsaWNrSGFuZGxlcn0+XG4gICAgICAgIEFjdGl2YXRlXG4gICAgICA8L0J1dHRvbj4sXG4gICAgICA8UmljaFRleHRhcmVhIG9uQ3VzdG9tQmx1cj17dGhpcy5ibHVyQ3VzdG9tSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DdXN0b21Gb2N1cz17dGhpcy5mb2N1c0N1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tU2Nyb2xsPXt0aGlzLnNjcm9sbEN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tQ2hhbmdlPXt0aGlzLmNoYW5nZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3VzdG9tQWN0aXZhdGU9e3RoaXMuYWN0aXZhdGVDdXN0b21IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkN1c3RvbURlYWN0aXZhdGU9e3RoaXMuZGVhY3RpdmF0ZUN1c3RvbUhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImNvdW50IiwiRWxlbWVudCIsImJ1dHRvbkNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInJpY2hUZXh0YXJlYSIsImdldFJpY2tUZXh0YXJlYSIsImFjdGl2YXRlIiwiYmx1ckN1c3RvbUhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZm9jdXNDdXN0b21IYW5kbGVyIiwic2Nyb2xsQ3VzdG9tSGFuZGxlciIsInNjcm9sbFRvcCIsImdldFNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJnZXRTY3JvbGxMZWZ0IiwiY2hhbmdlQ3VzdG9tSGFuZGxlciIsImNvbnRlbnRDaGFuZ2VkIiwiaGFzQ29udGVudENoYW5nZWQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiaGFzU2VsZWN0aW9uQ2hhbmdlZCIsImFjdGl2YXRlQ3VzdG9tSGFuZGxlciIsImRlYWN0aXZhdGVDdXN0b21IYW5kbGVyIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJzZWNvbmRDaGlsZEVsZW1lbnQiLCJCdXR0b24iLCJvbkNsaWNrIiwiUmljaFRleHRhcmVhIiwib25DdXN0b21CbHVyIiwib25DdXN0b21Gb2N1cyIsIm9uQ3VzdG9tU2Nyb2xsIiwib25DdXN0b21DaGFuZ2UiLCJvbkN1c3RvbUFjdGl2YXRlIiwib25DdXN0b21EZWFjdGl2YXRlIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXFCQTs7O3NCQVZHOzJCQUNPOytEQUVaO3FFQUNNOzs7Ozs7QUFFekIsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFakMsSUFBSUMsUUFBUTtBQUVHLE1BQU1ILGFBQWFJLGFBQU87SUFDdkNDLHFCQUFxQixDQUFDQyxPQUFPQztRQUMzQixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZTtRQUV6Q0QsYUFBYUUsUUFBUTtJQUN2QixFQUFDO0lBRURDLG9CQUFvQixDQUFDTCxPQUFPQztRQUMxQkssUUFBUUMsR0FBRyxDQUFDVixTQUFTO0lBQ3ZCLEVBQUM7SUFFRFcscUJBQXFCLENBQUNSLE9BQU9DO1FBQzNCSyxRQUFRQyxHQUFHLENBQUNWLFNBQVM7SUFDdkIsRUFBQztJQUVEWSxzQkFBc0IsQ0FBQ1QsT0FBT0M7UUFDNUIsTUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNPLFlBQVlSLGFBQWFTLFlBQVksSUFDckNDLGFBQWFWLGFBQWFXLGFBQWE7UUFFN0NQLFFBQVFDLEdBQUcsQ0FBQ1YsU0FBUyxVQUFVYSxXQUFXRTtJQUM1QyxFQUFDO0lBRURFLHNCQUFzQixDQUFDZCxPQUFPQztRQUM1QixNQUFNQyxlQUFlLElBQUksQ0FBQ0MsZUFBZSxJQUNuQ1ksaUJBQWlCYixhQUFhYyxpQkFBaUIsSUFDL0NDLG1CQUFtQmYsYUFBYWdCLG1CQUFtQjtRQUV6RFosUUFBUUMsR0FBRyxDQUFDVixTQUFTLFVBQVVrQixnQkFBZ0JFO0lBQ2pELEVBQUM7SUFFREUsd0JBQXdCLENBQUNuQixPQUFPQztRQUM5QkssUUFBUUMsR0FBRyxDQUFDVixTQUFTO0lBQ3ZCLEVBQUM7SUFFRHVCLDBCQUEwQixDQUFDcEIsT0FBT0M7UUFDaENLLFFBQVFDLEdBQUcsQ0FBQ1YsU0FBUztJQUN2QixFQUFDO0lBRURNLGtCQUFrQjtRQUNoQixNQUFNa0IsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxxQkFBcUI1QixPQUFPMEIsZ0JBQzVCbkIsZUFBZXFCLG9CQUFxQixHQUFHO1FBRTdDLE9BQU9yQjtJQUNUO0lBRUFtQixnQkFBZ0I7UUFDZCxPQUFROzBCQUVOLG9CQUFDRyxlQUFNO2dCQUFDQyxTQUFTLElBQUksQ0FBQzFCLGtCQUFrQjtlQUFFOzBCQUcxQyxvQkFBQzJCLHFCQUFZO2dCQUFDQyxjQUFjLElBQUksQ0FBQ3RCLGlCQUFpQjtnQkFDcEN1QixlQUFlLElBQUksQ0FBQ3BCLGtCQUFrQjtnQkFDdENxQixnQkFBZ0IsSUFBSSxDQUFDcEIsbUJBQW1CO2dCQUN4Q3FCLGdCQUFnQixJQUFJLENBQUNoQixtQkFBbUI7Z0JBQ3hDaUIsa0JBQWtCLElBQUksQ0FBQ1oscUJBQXFCO2dCQUM1Q2Esb0JBQW9CLElBQUksQ0FBQ1osdUJBQXVCOztTQUcvRDtJQUNIO0lBRUEsT0FBT2EsVUFBVSxNQUFNO0lBRXZCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUM7QUFDSCJ9