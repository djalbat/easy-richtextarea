"use strict";

import { eventTypes } from "easy";

const { BLUR_EVENT_TYPE, FOCUS_EVENT_TYPE, SCROLL_EVENT_TYPE, CHANGE_EVENT_TYPE } = eventTypes;

function onBlur(blurHandler, element) {
  const eventType = BLUR_EVENT_TYPE,
        handler = blurHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function onFocus(blurHandler, element) {
  const eventType = FOCUS_EVENT_TYPE,
        handler = blurHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function onScroll(scrollHandler, element) {
  const eventType = SCROLL_EVENT_TYPE,
        handler = scrollHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function onChange(changeHandler, element) {
  const eventType = CHANGE_EVENT_TYPE,
        handler = changeHandler;  ///

  this.addEventListener(eventType, handler, element);
}

function offBlur(blurHandler, element) {
  const eventType = BLUR_EVENT_TYPE,
        handler = blurHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function offFocus(blurHandler, element) {
  const eventType = FOCUS_EVENT_TYPE,
        handler = blurHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function offScroll(scrollHandler, element) {
  const eventType = SCROLL_EVENT_TYPE,
        handler = scrollHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

function offChange(changeHandler, element) {
  const eventType = CHANGE_EVENT_TYPE,
        handler = changeHandler;  ///

  this.removeEventListener(eventType, handler, element);
}

const eventMixins = {
  onBlur,
  onFocus,
  onScroll,
  onChange,
  offBlur,
  offFocus,
  offScroll,
  offChange
};

export default eventMixins;
