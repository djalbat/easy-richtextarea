"use strict";

import RichTextarea from "./richTextarea";

const content = "",
      richTextarea =

        <RichTextarea onCustomBlur={customBlurHandler}
                      onCustomFocus={customFocusHandler}
                      onCustomScroll={customScrollHandler}
                      onCustomChange={customChangeHandler} />

      ;

richTextarea.setContent(content);

richTextarea.activate();

const View = (properties) =>

  <div className="view">
    {richTextarea}
  </div>

;

export default View;

function customBlurHandler(event, element) {
  console.log("blur")
}

function customFocusHandler(event, element) {
  console.log("focus")
}

function customScrollHandler(event, element) {
  const scrollTop = richTextarea.getScrollTop(),
        scrollLeft = richTextarea.getScrollLeft();

  console.log(scrollTop, scrollLeft)
}

function customChangeHandler(event, element) {
  const contentChanged = richTextarea.hasContentChanged(),
        selectionChanged = richTextarea.hasSelectionChanged();

  console.log(contentChanged, selectionChanged)
}
