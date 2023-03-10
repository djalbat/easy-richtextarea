"use strict";

import RichTextarea from "./richTextarea";

const content = "",
      richTextarea =

        <RichTextarea onBlur={blurHandler} onFocus={focusHandler} onChange={changeHandler} onScroll={scrollHandler} />

      ;

richTextarea.setContent(content);

richTextarea.activate();

const View = (properties) =>

  <div className="view">
    {richTextarea}
  </div>

;

export default View;

function blurHandler(event, element) {
  console.log("blur")
}

function focusHandler(event, element) {
  console.log("focus")
}

function changeHandler(event, element) {
  const contentChanged = richTextarea.hasContentChanged(),
        selectionChanged = richTextarea.hasSelectionChanged();

  console.log(contentChanged, selectionChanged)
}

function scrollHandler(event, element) {
  const scrollTop = richTextarea.getScrollTop(),
        scrollLeft = richTextarea.getScrollLeft();

  console.log(scrollTop, scrollLeft)
}
