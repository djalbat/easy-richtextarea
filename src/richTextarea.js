"use strict";

import { Element, document, eventTypes } from "easy";

import Selection from "./selection"
import customEventMixins from "./mixins/customEvent";

import { BLUR_CUSTOM_EVENT_TYPE, FOCUS_CUSTOM_EVENT_TYPE, SCROLL_CUSTOM_EVENT_TYPE, CHANGE_CUSTOM_EVENT_TYPE } from "./customEventTypes";

const { BLUR_EVENT_TYPE,
        FOCUS_EVENT_TYPE,
        INPUT_EVENT_TYPE,
        SCROLL_EVENT_TYPE,
        SELECTIONCHANGE_EVENT_TYPE } = eventTypes;

export default class RichTextarea extends Element {
  blurHandler = (event, element) => {
    const customEventType = BLUR_CUSTOM_EVENT_TYPE,
          selectionChanged = true;

    this.customHandler(event, element, customEventType, selectionChanged);
  }

  focusHandler = (event, element) => {
    defer(() => {
      const customEventType = FOCUS_CUSTOM_EVENT_TYPE,
            selectionChanged = true;

      this.customHandler(event, element, customEventType, selectionChanged);
    });
  }

  inputHandler = (event, element) => {
    const customEventType = CHANGE_CUSTOM_EVENT_TYPE,
          selectionChanged = this.hasSelectionChanged();

    this.customHandler(event, element, customEventType, selectionChanged);
  }

  scrollHandler = (event, element) => {
    const customEventType = SCROLL_CUSTOM_EVENT_TYPE;

    this.callCustomHandlers(customEventType, event);
  }

  selectChangeHandler = (event, element) => {
    const { currentTarget } = event,
          { activeElement } = currentTarget,
          domElement = this.getDOMElement();

    if (activeElement === domElement) {
      element = this; ///

      const customEventType = CHANGE_CUSTOM_EVENT_TYPE,
            selectionChanged = this.hasSelectionChanged();

      this.customHandler(event, element, customEventType, selectionChanged);
    }
  }

  customHandler = (event, element, customEventType, selectionChanged) => {
    const content = this.getContent(),
          selection = this.getSelection(),
          contentChanged = this.hasContentChanged();

    if (contentChanged || selectionChanged) {
      this.callCustomHandlers(customEventType, event);
    }

    const previousContent = content,  ///
          previousSelection = selection;  ///

    this.setPreviousContent(previousContent);

    this.setPreviousSelection(previousSelection);
  }

  isReadOnly() {
    const domElement = this.getDOMElement(),
          { readOnly } = domElement;

    return readOnly;
  }

  isActive() {
    const active = this.hasClass("active");

    return active;
  }

  getContent() {
    const domElement = this.getDOMElement(),
          { value } = domElement,
          content = value;  ///

    return content;
  }

  getSelection() {
    const domElement = this.getDOMElement(),
          selection = Selection.fromDOMElement(domElement);

    return selection;
  }

  hasContentChanged() {
    const content = this.getContent(),
          previousContent = this.getPreviousContent(),
          contentPreviousContent = (content === previousContent),
          contentChanged = !contentPreviousContent;

    return contentChanged;
  }

  hasSelectionChanged() {
    const selection = this.getSelection(),
          previousSelection = this.getPreviousSelection(),
          selectionPreviousSelection = selection.isEqualTo(previousSelection),
          selectionChanged = !selectionPreviousSelection; ///

    return selectionChanged;
  }

  setReadOnly(readOnly) {
    const domElement = this.getDOMElement();

    Object.assign(domElement, {
      readOnly
    });
  }

  setContent(content, setPreviousContent = true) {
    const value = content,  ///
          domElement = this.getDOMElement();

    Object.assign(domElement, {
      value
    });

    if (setPreviousContent) {
      const previousContent = content;  ///

      this.setPreviousContent(previousContent);
    }
  }

  setSelection(selection, setPreviousSelection = true) {
    const selectionStartPosition = selection.getStartPosition(),
          selectionEndPosition = selection.getEndPosition(),
          selectionStart = selectionStartPosition,  ///
          selectionEnd = selectionEndPosition,  ///
          domElement = this.getDOMElement();

    domElement.setSelectionRange(selectionStart, selectionEnd);

    if (setPreviousSelection) {
      const previousSelection = selection;  ///

      this.setPreviousSelection(previousSelection);
    }
  }

  activate() {
    this.onEvent(BLUR_EVENT_TYPE, this.blurHandler);

    this.onEvent(FOCUS_EVENT_TYPE, this.focusHandler);

    this.onEvent(INPUT_EVENT_TYPE, this.inputHandler);

    this.onEvent(SCROLL_EVENT_TYPE, this.scrollHandler);

    document.onEvent(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);

    this.addClass("active");
  }

  deactivate() {
    this.offEvent(BLUR_EVENT_TYPE, this.blurHandler);

    this.offEvent(FOCUS_EVENT_TYPE, this.focusHandler);

    this.offEvent(INPUT_EVENT_TYPE, this.inputHandler);

    this.offEvent(SCROLL_EVENT_TYPE, this.scrollHandler);

    document.offEvent(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);

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

  didMount() {
    const content = this.getContent(),
          selection = this.getSelection(),
          previousContent = content,  ///
          previousSelection = selection;  ///

    this.setPreviousContent(previousContent);

    this.setPreviousSelection(previousSelection);
  }

  willUnmount() {
    const active = this.isActive();

    if (active) {
      this.deactivate();
    }
  }

  setInitialState() {
    const previousContent = null,
          previousSelection = null;

    this.setState({
      previousContent,
      previousSelection
    });
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "textarea";

  static defaultProperties = {
    className: "rich"
  };

  static fromClass(Class, properties, ...remainingArguments) {
    const richTextarea = Element.fromClass(Class, properties, ...remainingArguments);

    return richTextarea;
  }
}

Object.assign(RichTextarea.prototype, customEventMixins);

function defer(func) {
  setTimeout(func, 0);
}
