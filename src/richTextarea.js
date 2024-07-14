"use strict";

import { Element, document, eventTypes } from "easy";

import Selection from "./selection"
import customEventMixins from "./mixins/customEvent";

import { BLUR_CUSTOM_EVENT_TYPE,
         FOCUS_CUSTOM_EVENT_TYPE,
         SCROLL_CUSTOM_EVENT_TYPE,
         CHANGE_CUSTOM_EVENT_TYPE,
         ACTIVATE_CUSTOM_EVENT_TYPE,
         DEACTIVATE_CUSTOM_EVENT_TYPE } from "./customEventTypes";

const { BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE, INPUT_EVENT_TYPE, SCROLL_EVENT_TYPE } = eventTypes;

export default class RichTextarea extends Element {
  blurHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const customEventType = BLUR_CUSTOM_EVENT_TYPE,
          forced = true;

    this.customHandler(customEventType, event, element, forced);
  }

  focusHandler = (event, element) => {
    defer(() => {
      const active = this.isActive();

      if (!active) {
        this.addClass("active");

        const customEventType = ACTIVATE_CUSTOM_EVENT_TYPE,
              event = null,
              element = this,
              forced = true;

        this.customHandler(customEventType, event, element, forced);
      }

      const customEventType = FOCUS_CUSTOM_EVENT_TYPE,
            forced = true;

      this.customHandler(customEventType, event, element, forced);
    });
  }

  inputHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const customEventType = CHANGE_CUSTOM_EVENT_TYPE;

    this.customHandler(customEventType, event, element);
  }

  scrollHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const customEventType = SCROLL_CUSTOM_EVENT_TYPE,
          forced = true;

    this.customHandler(customEventType, event, element, forced);
  }

  selectionChangeHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const { currentTarget } = event,
          { activeElement } = currentTarget,
          domElement = this.getDOMElement();

    if (activeElement !== domElement) {
      return;
    }

    element = this; ///

    const customEventType = CHANGE_CUSTOM_EVENT_TYPE;

    this.customHandler(customEventType, event, element);
  }

  customHandler = (customEventType, event, element, forced = false) => {
    const content = this.getContent(),
          selection = this.getSelection(),
          contentChanged = this.hasContentChanged(),
          selectionChanged = this.hasSelectionChanged();

    if (forced || contentChanged || selectionChanged) {
      this.callCustomHandlers(customEventType, event, element);
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
    const active = this.isActive();

    if (active) {
      return;
    }

    this.focus();
  }

  deactivate() {
    const active = this.isActive();

    if (!active) {
      return;
    }

    this.removeClass("active");

    const customEventType = DEACTIVATE_CUSTOM_EVENT_TYPE,
          event = null,
          element = this,
          forced = true;

    this.customHandler(customEventType, event, element, forced);
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
    const previousContent = null,
          previousSelection = null;

    this.setState({
      previousContent,
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

    this.onEvent(BLUR_EVENT_TYPE, this.blurHandler);

    this.onEvent(FOCUS_EVENT_TYPE, this.focusHandler);

    this.onEvent(INPUT_EVENT_TYPE, this.inputHandler);

    this.onEvent(SCROLL_EVENT_TYPE, this.scrollHandler);

    document.onSelectionChange(this.selectionChangeHandler, this);
  }

  willUnmount() {
    this.offEvent(BLUR_EVENT_TYPE, this.blurHandler);

    this.offEvent(FOCUS_EVENT_TYPE, this.focusHandler);

    this.offEvent(INPUT_EVENT_TYPE, this.inputHandler);

    this.offEvent(SCROLL_EVENT_TYPE, this.scrollHandler);

    document.offSelectionChange(this.selectionChangeHandler, this);
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
