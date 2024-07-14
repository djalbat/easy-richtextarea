"use strict";

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import Button from "./view/button";
import RichTextarea from "./view/richTextarea";

const { second } = arrayUtilities;

let count = 0;

export default class View extends Element {
  buttonClickHandler = (event, element) => {
    const richTextarea = this.getRickTextarea();

    richTextarea.activate();
  }

  blurCustomHandler = (event, element) => {
    console.log(count++, "blur")
  }

  focusCustomHandler = (event, element) => {
    console.log(count++, "focus")
  }

  scrollCustomHandler = (event, element) => {
    const richTextarea = this.getRickTextarea(),
          scrollTop = richTextarea.getScrollTop(),
          scrollLeft = richTextarea.getScrollLeft();

    console.log(count++, "scroll", scrollTop, scrollLeft)
  }

  changeCustomHandler = (event, element) => {
    const richTextarea = this.getRickTextarea(),
          contentChanged = richTextarea.hasContentChanged(),
          selectionChanged = richTextarea.hasSelectionChanged();

    console.log(count++, "change", contentChanged, selectionChanged)
  }

  activateCustomHandler = (event, element) => {
    console.log(count++, "activate")
  }

  deactivateCustomHandler = (event, element) => {
    console.log(count++, "deactivate")
  }

  getRickTextarea() {
    const childElements = this.getChildElements(),
          secondChildElement = second(childElements),
          richTextarea = secondChildElement;  ///

    return richTextarea;
  }

  childElements() {
    return ([

      <Button onClick={this.buttonClickHandler}>
        Activate
      </Button>,
      <RichTextarea onCustomBlur={this.blurCustomHandler}
                    onCustomFocus={this.focusCustomHandler}
                    onCustomScroll={this.scrollCustomHandler}
                    onCustomChange={this.changeCustomHandler}
                    onCustomActivate={this.activateCustomHandler}
                    onCustomDeactivate={this.deactivateCustomHandler}
      />

    ]);
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  }
}
