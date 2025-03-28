"use strict";

import { Textarea, document } from "easy";

import Selection from "./selection"
import customEventMixins from "./mixins/customEvent";

import { BLUR_CUSTOM_EVENT_TYPE,
         FOCUS_CUSTOM_EVENT_TYPE,
         SCROLL_CUSTOM_EVENT_TYPE,
         CHANGE_CUSTOM_EVENT_TYPE } from "./customEventTypes";

export default class RichTextarea extends Textarea {
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

  scrollHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const customEventType = SCROLL_CUSTOM_EVENT_TYPE,
          forced = true;

    this.customHandler(customEventType, event, element, forced);
  }

  inputHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const customEventType = CHANGE_CUSTOM_EVENT_TYPE;

    this.customHandler(customEventType, event, element);
  }

  focusHandler = (event, element) => {
    defer(() => {
      const active = this.isActive();

      if (!active) {
        this.addClass("active");
      }

      const customEventType = FOCUS_CUSTOM_EVENT_TYPE,
            forced = true;

      this.customHandler(customEventType, event, element, forced);
    });
  }

  blurHandler = (event, element) => {
    const active = this.isActive();

    if (!active) {
      return;
    }

    const customEventType = BLUR_CUSTOM_EVENT_TYPE,
          forced = true;

    this.customHandler(customEventType, event, element, forced);
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

    this.onBlur(this.blurHandler);

    this.onFocus(this.focusHandler);

    this.onInput(this.inputHandler);

    this.onScroll(this.scrollHandler);

    document.onSelectionChange(this.selectionChangeHandler, this);
  }

  willUnmount() {
    this.offBlur(this.blurHandler);

    this.offFocus(this.focusHandler);

    this.offInput(this.inputHandler);

    this.offScroll(this.scrollHandler);

    document.offSelectionChange(this.selectionChangeHandler, this);
  }

  initialise() {
    this.setInitialState();
  }

  static defaultProperties = {
    className: "rich"
  };
}

Object.assign(RichTextarea.prototype, customEventMixins);

function defer(func) {
  setTimeout(func, 0);
}
