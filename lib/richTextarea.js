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
const _easy = require("easy");
const _selection = /*#__PURE__*/ _interop_require_default(require("./selection"));
const _customEvent = /*#__PURE__*/ _interop_require_default(require("./mixins/customEvent"));
const _customEventTypes = require("./customEventTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RichTextarea extends _easy.Textarea {
    selectionChangeHandler = (event, element)=>{
        const active = this.isActive();
        if (!active) {
            return;
        }
        const { currentTarget } = event, { activeElement } = currentTarget, domElement = this.getDOMElement();
        if (activeElement !== domElement) {
            return;
        }
        element = this; ///
        const customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
        this.customHandler(customEventType, event, element);
    };
    scrollHandler = (event, element)=>{
        const active = this.isActive();
        if (!active) {
            return;
        }
        const customEventType = _customEventTypes.SCROLL_CUSTOM_EVENT_TYPE, forced = true;
        this.customHandler(customEventType, event, element, forced);
    };
    inputHandler = (event, element)=>{
        const active = this.isActive();
        if (!active) {
            return;
        }
        const customEventType = _customEventTypes.CHANGE_CUSTOM_EVENT_TYPE;
        this.customHandler(customEventType, event, element);
    };
    focusHandler = (event, element)=>{
        defer(()=>{
            const active = this.isActive();
            if (!active) {
                this.addClass("active");
            }
            const customEventType = _customEventTypes.FOCUS_CUSTOM_EVENT_TYPE, forced = true;
            this.customHandler(customEventType, event, element, forced);
        });
    };
    blurHandler = (event, element)=>{
        const active = this.isActive();
        if (!active) {
            return;
        }
        const customEventType = _customEventTypes.BLUR_CUSTOM_EVENT_TYPE, forced = true;
        this.customHandler(customEventType, event, element, forced);
    };
    customHandler = (customEventType, event, element, forced = false)=>{
        const content = this.getContent(), selection = this.getSelection(), contentChanged = this.hasContentChanged(), selectionChanged = this.hasSelectionChanged();
        if (forced || contentChanged || selectionChanged) {
            this.callCustomHandlers(customEventType, event, element);
        }
        const previousContent = content, previousSelection = selection; ///
        this.setPreviousContent(previousContent);
        this.setPreviousSelection(previousSelection);
    };
    isReadOnly() {
        const domElement = this.getDOMElement(), { readOnly } = domElement;
        return readOnly;
    }
    isActive() {
        const active = this.hasClass("active");
        return active;
    }
    getContent() {
        const domElement = this.getDOMElement(), { value } = domElement, content = value; ///
        return content;
    }
    getSelection() {
        const domElement = this.getDOMElement(), selection = _selection.default.fromDOMElement(domElement);
        return selection;
    }
    hasContentChanged() {
        const content = this.getContent(), previousContent = this.getPreviousContent(), contentPreviousContent = content === previousContent, contentChanged = !contentPreviousContent;
        return contentChanged;
    }
    hasSelectionChanged() {
        const selection = this.getSelection(), previousSelection = this.getPreviousSelection(), selectionPreviousSelection = selection.isEqualTo(previousSelection), selectionChanged = !selectionPreviousSelection; ///
        return selectionChanged;
    }
    setReadOnly(readOnly) {
        const domElement = this.getDOMElement();
        Object.assign(domElement, {
            readOnly
        });
    }
    setContent(content, setPreviousContent = true) {
        const value = content, domElement = this.getDOMElement();
        Object.assign(domElement, {
            value
        });
        if (setPreviousContent) {
            const previousContent = content; ///
            this.setPreviousContent(previousContent);
        }
    }
    setSelection(selection, setPreviousSelection = true) {
        const selectionStartPosition = selection.getStartPosition(), selectionEndPosition = selection.getEndPosition(), selectionStart = selectionStartPosition, selectionEnd = selectionEndPosition, domElement = this.getDOMElement();
        domElement.setSelectionRange(selectionStart, selectionEnd);
        if (setPreviousSelection) {
            const previousSelection = selection; ///
            this.setPreviousSelection(previousSelection);
        }
    }
    activate() {
        const active = this.isActive();
        if (active) {
            return;
        }
        this.focus(); ///
    }
    deactivate() {
        const active = this.isActive();
        if (!active) {
            return;
        }
        this.removeClass("active");
    }
    getPreviousContent() {
        const { previousContent } = this.getState();
        return previousContent;
    }
    getPreviousSelection() {
        const { previousSelection } = this.getState();
        return previousSelection;
    }
    setPreviousContent(previousContent) {
        this.updateState({
            previousContent
        });
    }
    setPreviousSelection(previousSelection) {
        this.updateState({
            previousSelection
        });
    }
    setInitialState() {
        const previousContent = null, previousSelection = null;
        this.setState({
            previousContent,
            previousSelection
        });
    }
    didMount() {
        const content = this.getContent(), selection = this.getSelection(), previousContent = content, previousSelection = selection; ///
        this.setPreviousContent(previousContent);
        this.setPreviousSelection(previousSelection);
        this.onBlur(this.blurHandler);
        this.onFocus(this.focusHandler);
        this.onInput(this.inputHandler);
        this.onScroll(this.scrollHandler);
        _easy.document.onSelectionChange(this.selectionChangeHandler, this);
    }
    willUnmount() {
        this.offBlur(this.blurHandler);
        this.offFocus(this.focusHandler);
        this.offInput(this.inputHandler);
        this.offScroll(this.scrollHandler);
        _easy.document.offSelectionChange(this.selectionChangeHandler, this);
    }
    initialise() {
        this.setInitialState();
    }
    static defaultProperties = {
        className: "rich"
    };
}
Object.assign(RichTextarea.prototype, _customEvent.default);
function defer(func) {
    setTimeout(func, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yaWNoVGV4dGFyZWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBUZXh0YXJlYSwgZG9jdW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xyXG5cclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tIFwiLi9zZWxlY3Rpb25cIlxyXG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XHJcblxyXG5pbXBvcnQgeyBCTFVSX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBGT0NVU19DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9jdXN0b21FdmVudFR5cGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XHJcbiAgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50LFxyXG4gICAgICAgICAgeyBhY3RpdmVFbGVtZW50IH0gPSBjdXJyZW50VGFyZ2V0LFxyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBkb21FbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50ID0gdGhpczsgLy8vXHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQ0hBTkdFX0NVU1RPTV9FVkVOVF9UWVBFO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tSGFuZGxlcihjdXN0b21FdmVudFR5cGUsIGV2ZW50LCBlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHNjcm9sbEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gU0NST0xMX0NVU1RPTV9FVkVOVF9UWVBFLFxyXG4gICAgICAgICAgZm9yY2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICB9XHJcblxyXG4gIGlucHV0SGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XHJcbiAgICBkZWZlcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gRk9DVVNfQ1VTVE9NX0VWRU5UX1RZUEUsXHJcbiAgICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmN1c3RvbUhhbmRsZXIoY3VzdG9tRXZlbnRUeXBlLCBldmVudCwgZWxlbWVudCwgZm9yY2VkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYmx1ckhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXNBY3RpdmUoKTtcclxuXHJcbiAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gQkxVUl9DVVNUT01fRVZFTlRfVFlQRSxcclxuICAgICAgICAgIGZvcmNlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jdXN0b21IYW5kbGVyKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCk7XHJcbiAgfVxyXG5cclxuICBjdXN0b21IYW5kbGVyID0gKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQsIGZvcmNlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSB0aGlzLmhhc0NvbnRlbnRDaGFuZ2VkKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2VkID0gdGhpcy5oYXNTZWxlY3Rpb25DaGFuZ2VkKCk7XHJcblxyXG4gICAgaWYgKGZvcmNlZCB8fCBjb250ZW50Q2hhbmdlZCB8fCBzZWxlY3Rpb25DaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgZXZlbnQsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGlzUmVhZE9ubHkoKSB7XHJcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXHJcbiAgICAgICAgICB7IHJlYWRPbmx5IH0gPSBkb21FbGVtZW50O1xyXG5cclxuICAgIHJldHVybiByZWFkT25seTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICByZXR1cm4gYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHsgdmFsdWUgfSA9IGRvbUVsZW1lbnQsXHJcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcclxuICAgICAgICAgIHNlbGVjdGlvbiA9IFNlbGVjdGlvbi5mcm9tRE9NRWxlbWVudChkb21FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gc2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgaGFzQ29udGVudENoYW5nZWQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBwcmV2aW91c0NvbnRlbnQgPSB0aGlzLmdldFByZXZpb3VzQ29udGVudCgpLFxyXG4gICAgICAgICAgY29udGVudFByZXZpb3VzQ29udGVudCA9IChjb250ZW50ID09PSBwcmV2aW91c0NvbnRlbnQpLFxyXG4gICAgICAgICAgY29udGVudENoYW5nZWQgPSAhY29udGVudFByZXZpb3VzQ29udGVudDtcclxuXHJcbiAgICByZXR1cm4gY29udGVudENoYW5nZWQ7XHJcbiAgfVxyXG5cclxuICBoYXNTZWxlY3Rpb25DaGFuZ2VkKCkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5nZXRQcmV2aW91c1NlbGVjdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb24uaXNFcXVhbFRvKHByZXZpb3VzU2VsZWN0aW9uKSxcclxuICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZWQgPSAhc2VsZWN0aW9uUHJldmlvdXNTZWxlY3Rpb247IC8vL1xyXG5cclxuICAgIHJldHVybiBzZWxlY3Rpb25DaGFuZ2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHtcclxuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgcmVhZE9ubHlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChjb250ZW50LCBzZXRQcmV2aW91c0NvbnRlbnQgPSB0cnVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQsICAvLy9cclxuICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKGRvbUVsZW1lbnQsIHtcclxuICAgICAgdmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZXRQcmV2aW91c0NvbnRlbnQpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNDb250ZW50ID0gY29udGVudDsgIC8vL1xyXG5cclxuICAgICAgdGhpcy5zZXRQcmV2aW91c0NvbnRlbnQocHJldmlvdXNDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGlvbihzZWxlY3Rpb24sIHNldFByZXZpb3VzU2VsZWN0aW9uID0gdHJ1ZSkge1xyXG4gICAgY29uc3Qgc2VsZWN0aW9uU3RhcnRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRTdGFydFBvc2l0aW9uKCksXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmRQb3NpdGlvbiA9IHNlbGVjdGlvbi5nZXRFbmRQb3NpdGlvbigpLFxyXG4gICAgICAgICAgc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydFBvc2l0aW9uLCAgLy8vXHJcbiAgICAgICAgICBzZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmRQb3NpdGlvbiwgIC8vL1xyXG4gICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xyXG5cclxuICAgIGRvbUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQsIHNlbGVjdGlvbkVuZCk7XHJcblxyXG4gICAgaWYgKHNldFByZXZpb3VzU2VsZWN0aW9uKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0aW9uID0gc2VsZWN0aW9uOyAgLy8vXHJcblxyXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2VsZWN0aW9uKHByZXZpb3VzU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmIChhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZm9jdXMoKTsgLy8vXHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCkge1xyXG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5pc0FjdGl2ZSgpO1xyXG5cclxuICAgIGlmICghYWN0aXZlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNDb250ZW50KCkge1xyXG4gICAgY29uc3QgeyBwcmV2aW91c0NvbnRlbnQgfSA9IHRoaXMuZ2V0U3RhdGUoKTtcclxuXHJcbiAgICByZXR1cm4gcHJldmlvdXNDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJldmlvdXNTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB7IHByZXZpb3VzU2VsZWN0aW9uIH0gPSB0aGlzLmdldFN0YXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJldmlvdXNDb250ZW50KHByZXZpb3VzQ29udGVudCkge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c1NlbGVjdGlvbihwcmV2aW91c1NlbGVjdGlvbikge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzU2VsZWN0aW9uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgIGNvbnN0IHByZXZpb3VzQ29udGVudCA9IG51bGwsXHJcbiAgICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHByZXZpb3VzQ29udGVudCxcclxuICAgICAgcHJldmlvdXNTZWxlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXHJcbiAgICAgICAgICBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpLFxyXG4gICAgICAgICAgcHJldmlvdXNDb250ZW50ID0gY29udGVudCwgIC8vL1xyXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBzZWxlY3Rpb247ICAvLy9cclxuXHJcbiAgICB0aGlzLnNldFByZXZpb3VzQ29udGVudChwcmV2aW91c0NvbnRlbnQpO1xyXG5cclxuICAgIHRoaXMuc2V0UHJldmlvdXNTZWxlY3Rpb24ocHJldmlvdXNTZWxlY3Rpb24pO1xyXG5cclxuICAgIHRoaXMub25CbHVyKHRoaXMuYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub25Gb2N1cyh0aGlzLmZvY3VzSGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5vbklucHV0KHRoaXMuaW5wdXRIYW5kbGVyKTtcclxuXHJcbiAgICB0aGlzLm9uU2Nyb2xsKHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub25TZWxlY3Rpb25DaGFuZ2UodGhpcy5zZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5vZmZCbHVyKHRoaXMuYmx1ckhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmRm9jdXModGhpcy5mb2N1c0hhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmSW5wdXQodGhpcy5pbnB1dEhhbmRsZXIpO1xyXG5cclxuICAgIHRoaXMub2ZmU2Nyb2xsKHRoaXMuc2Nyb2xsSGFuZGxlcik7XHJcblxyXG4gICAgZG9jdW1lbnQub2ZmU2VsZWN0aW9uQ2hhbmdlKHRoaXMuc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXNlKCkge1xyXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcclxuICAgIGNsYXNzTmFtZTogXCJyaWNoXCJcclxuICB9O1xyXG59XHJcblxyXG5PYmplY3QuYXNzaWduKFJpY2hUZXh0YXJlYS5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcclxuXHJcbmZ1bmN0aW9uIGRlZmVyKGZ1bmMpIHtcclxuICBzZXRUaW1lb3V0KGZ1bmMsIDApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSaWNoVGV4dGFyZWEiLCJUZXh0YXJlYSIsInNlbGVjdGlvbkNoYW5nZUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJhY3RpdmUiLCJpc0FjdGl2ZSIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJjdXN0b21FdmVudFR5cGUiLCJDSEFOR0VfQ1VTVE9NX0VWRU5UX1RZUEUiLCJjdXN0b21IYW5kbGVyIiwic2Nyb2xsSGFuZGxlciIsIlNDUk9MTF9DVVNUT01fRVZFTlRfVFlQRSIsImZvcmNlZCIsImlucHV0SGFuZGxlciIsImZvY3VzSGFuZGxlciIsImRlZmVyIiwiYWRkQ2xhc3MiLCJGT0NVU19DVVNUT01fRVZFTlRfVFlQRSIsImJsdXJIYW5kbGVyIiwiQkxVUl9DVVNUT01fRVZFTlRfVFlQRSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiY29udGVudENoYW5nZWQiLCJoYXNDb250ZW50Q2hhbmdlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJoYXNTZWxlY3Rpb25DaGFuZ2VkIiwiY2FsbEN1c3RvbUhhbmRsZXJzIiwicHJldmlvdXNDb250ZW50IiwicHJldmlvdXNTZWxlY3Rpb24iLCJzZXRQcmV2aW91c0NvbnRlbnQiLCJzZXRQcmV2aW91c1NlbGVjdGlvbiIsImlzUmVhZE9ubHkiLCJyZWFkT25seSIsImhhc0NsYXNzIiwidmFsdWUiLCJTZWxlY3Rpb24iLCJmcm9tRE9NRWxlbWVudCIsImdldFByZXZpb3VzQ29udGVudCIsImNvbnRlbnRQcmV2aW91c0NvbnRlbnQiLCJnZXRQcmV2aW91c1NlbGVjdGlvbiIsInNlbGVjdGlvblByZXZpb3VzU2VsZWN0aW9uIiwiaXNFcXVhbFRvIiwic2V0UmVhZE9ubHkiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRDb250ZW50Iiwic2V0U2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnRQb3NpdGlvbiIsImdldFN0YXJ0UG9zaXRpb24iLCJzZWxlY3Rpb25FbmRQb3NpdGlvbiIsImdldEVuZFBvc2l0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImFjdGl2YXRlIiwiZm9jdXMiLCJkZWFjdGl2YXRlIiwicmVtb3ZlQ2xhc3MiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkaWRNb3VudCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvbklucHV0Iiwib25TY3JvbGwiLCJkb2N1bWVudCIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwid2lsbFVubW91bnQiLCJvZmZCbHVyIiwib2ZmRm9jdXMiLCJvZmZJbnB1dCIsIm9mZlNjcm9sbCIsIm9mZlNlbGVjdGlvbkNoYW5nZSIsImluaXRpYWxpc2UiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInByb3RvdHlwZSIsImN1c3RvbUV2ZW50TWl4aW5zIiwiZnVuYyIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBcUJBOzs7c0JBVmM7a0VBRWI7b0VBQ1E7a0NBS1c7Ozs7OztBQUUxQixNQUFNQSxxQkFBcUJDLGNBQVE7SUFDaERDLHlCQUF5QixDQUFDQyxPQUFPQztRQUMvQixNQUFNQyxTQUFTLElBQUksQ0FBQ0MsUUFBUTtRQUU1QixJQUFJLENBQUNELFFBQVE7WUFDWDtRQUNGO1FBRUEsTUFBTSxFQUFFRSxhQUFhLEVBQUUsR0FBR0osT0FDcEIsRUFBRUssYUFBYSxFQUFFLEdBQUdELGVBQ3BCRSxhQUFhLElBQUksQ0FBQ0MsYUFBYTtRQUVyQyxJQUFJRixr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