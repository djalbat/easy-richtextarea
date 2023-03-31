"use strict";

import { Element, document, eventTypes } from "easy";

import Selection from "./selection"
import eventMixins from "./mixins/event";

const { BLUR_EVENT_TYPE,
        FOCUS_EVENT_TYPE,
        INPUT_EVENT_TYPE,
        SCROLL_EVENT_TYPE,
        CHANGE_EVENT_TYPE,
        CUT_EVENT_TYPE,
        COPY_EVENT_TYPE,
        PASTE_EVENT_TYPE,
        KEYDOWN_EVENT_TYPE,
        MOUSEDOWN_EVENT_TYPE,
        SELECTIONCHANGE_EVENT_TYPE } = eventTypes;

export default class RichTextarea extends Element {
  blurHandler = (event, element) => {
    const eventType = BLUR_EVENT_TYPE,
          selectionChanged = true;

    this.intermediateHandler(event, element, eventType, selectionChanged);
  }

  focusHandler = (event, element) => {
    defer(() => {
      const eventType = FOCUS_EVENT_TYPE,
            selectionChanged = true;

      this.intermediateHandler(event, element, eventType, selectionChanged);
    });
  }

  inputHandler = (event, element) => {
    this.intermediateHandler(event, element);
  }

  scrollHandler = (event, element) => {
    const eventType = SCROLL_EVENT_TYPE;

    this.callHandlers(eventType, event, element);
  }

  cutHandler = (event, element) => {
    ///
  }

  copyHandler = (event, element) => {
    ///
  }

  pasteHandler = (event, element) => {
    ///
  }

  keyDownHandler = (event, element) => {
    ///
  }

  mouseDownHandler = (event, element) => {
    ///
  }

  selectChangeHandler = (event, element) => {
    const { currentTarget } = event,
          { activeElement } = currentTarget,
          domElement = this.getDOMElement();

    if (activeElement === domElement) {
      element = this; ///

      this.intermediateHandler(event, element);
    }
  }

  intermediateHandler = (event, element, eventType = CHANGE_EVENT_TYPE, selectionChanged = this.hasSelectionChanged()) => {
    const content = this.getContent(),
          selection = this.getSelection(),
          contentChanged = this.hasContentChanged();

    if (contentChanged || selectionChanged) {
      this.callHandlers(eventType, event, element);
    }

    const previousContent = content,  ///
          previousSelection = selection;  ///

    this.setPreviousContent(previousContent);

    this.setPreviousSelection(previousSelection);
  }

  callHandlers(eventType, ...remainingArguments) {
    const eventListeners = this.findEventListeners(eventType);

    eventListeners.forEach((eventListener) => {
      let { element } = eventListener;

      const { handler } = eventListener;

      if ( (handler !== this.blurHandler)
        && (handler !== this.focusHandler)
        && (handler !== this.inputHandler)
        && (handler !== this.scrollHandler)
        && (handler !== this.cutHandler)
        && (handler !== this.copyHandler)
        && (handler !== this.pasteHandler)
        && (handler !== this.keyDownHandler)
        && (handler !== this.mouseDownHandler)
        && (handler !== this.selectChangeHandler) ) {

        const handlerElement = element; ///

        element = this; ///

        handler.call(handlerElement, ...remainingArguments, element);
      }
    });
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

  getSelectedContent() {
    const content = this.getContent(),
          selection = this.getSelection(),
          endPosition = selection.getEndPosition(),
          startPosition = selection.getStartPosition(),
          start = startPosition,  ///
          end = endPosition,  ///
          selectedContent = content.slice(start, end);

    return selectedContent;
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
    this.on(BLUR_EVENT_TYPE, this.blurHandler);

    this.on(FOCUS_EVENT_TYPE, this.focusHandler);

    this.on(INPUT_EVENT_TYPE, this.inputHandler);

    this.on(SCROLL_EVENT_TYPE, this.scrollHandler);

    this.on(CUT_EVENT_TYPE, this.cutHandler);

    this.on(COPY_EVENT_TYPE, this.copyHandler);

    this.on(PASTE_EVENT_TYPE, this.pasteHandler);

    this.on(KEYDOWN_EVENT_TYPE, this.keyDownHandler);

    this.on(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler);

    document.on(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);

    this.addClass("active");
  }

  deactivate() {
    this.off(BLUR_EVENT_TYPE, this.blurHandler);

    this.off(FOCUS_EVENT_TYPE, this.focusHandler);

    this.off(INPUT_EVENT_TYPE, this.inputHandler);

    this.off(SCROLL_EVENT_TYPE, this.scrollHandler);

    this.off(CUT_EVENT_TYPE, this.cutHandler);

    this.off(COPY_EVENT_TYPE, this.copyHandler);

    this.off(PASTE_EVENT_TYPE, this.pasteHandler);

    this.off(KEYDOWN_EVENT_TYPE, this.keyDownHandler);

    this.off(MOUSEDOWN_EVENT_TYPE, this.mouseDownHandler);

    document.off(SELECTIONCHANGE_EVENT_TYPE, this.selectChangeHandler);

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
    const { onBlur, onFocus, onScroll, onChange } = this.properties,
          blurHandler = onBlur, ///
          focusHandler = onFocus, ///
          scrollHandler = onScroll, ///
          changeHandler = onChange; ///

    this.updateInitialState();

    blurHandler && this.onBlur(blurHandler, this);

    focusHandler && this.onFocus(focusHandler, this);

    scrollHandler && this.onScroll(scrollHandler, this);

    changeHandler && this.onChange(changeHandler, this);
  }

  willUnmount() {
    const { onBlur, onFocus, onScroll, onChange } = this.properties,
            blurHandler = onBlur, ///
            focusHandler = onFocus, ///
            scrollHandler = onScroll, ///
            changeHandler = onChange; ///

    blurHandler && this.offBlur(blurHandler, this);

    focusHandler && this.offFocus(focusHandler, this);

    scrollHandler && this.offScroll(scrollHandler, this);

    changeHandler && this.offChange(changeHandler, this);

    const active = this.isActive();

    if (active) {
      this.deactivate();
    }
  }

  updateInitialState() {
    const content = this.getContent(),
          selection = this.getSelection(),
          previousContent = content,  ///
          previousSelection = selection;  ///

    this.setPreviousContent(previousContent);

    this.setPreviousSelection(previousSelection);
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

  static ignoredProperties = [
    "onBlur",
    "onFocus",
    "onScroll",
    "onChange"
  ];

  static defaultProperties = {
    className: "rich"
  };

  static fromClass(Class, properties, ...remainingArguments) {
    const richTextarea = Element.fromClass(Class, properties, ...remainingArguments);

    return richTextarea;
  }
}

Object.assign(RichTextarea.prototype, eventMixins);

function defer(func) {
  setTimeout(func, 0);
}
