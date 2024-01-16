"use strict";

import { BLUR_CUSTOM_EVENT_TYPE, FOCUS_CUSTOM_EVENT_TYPE, SCROLL_CUSTOM_EVENT_TYPE, CHANGE_CUSTOM_EVENT_TYPE } from "../customEventTypes";

function onCustomBlur(blurCustomHandler, element) {
  const customEventType = BLUR_CUSTOM_EVENT_TYPE,
        customHandler = blurCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function onCustomFocus(focusCustomHandler, element) {
  const customEventType = FOCUS_CUSTOM_EVENT_TYPE,
        customHandler = focusCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function onCustomScroll(scrollCustomHandler, element) {
  const customEventType = SCROLL_CUSTOM_EVENT_TYPE,
        customHandler = scrollCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function onCustomChange(changeCustomHandler, element) {
  const customEventType = CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = changeCustomHandler;  ///

  this.onCustomEvent(customEventType, customHandler, element);
}

function offCustomBlur(blurCustomHandler, element) {
  const customEventType = BLUR_CUSTOM_EVENT_TYPE,
        customHandler = blurCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function offCustomFocus(blurCustomHandler, element) {
  const customEventType = FOCUS_CUSTOM_EVENT_TYPE,
        customHandler = blurCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function offCustomScroll(scrollCustomHandler, element) {
  const customEventType = SCROLL_CUSTOM_EVENT_TYPE,
        customHandler = scrollCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

function offCustomChange(changeCustomHandler, element) {
  const customEventType = CHANGE_CUSTOM_EVENT_TYPE,
        customHandler = changeCustomHandler;  ///

  this.offCustomEvent(customEventType, customHandler, element);
}

const customEventMixins = {
  onCustomBlur,
  onCustomFocus,
  onCustomScroll,
  onCustomChange,
  offCustomBlur,
  offCustomFocus,
  offCustomScroll,
  offCustomChange
};

export default customEventMixins;
