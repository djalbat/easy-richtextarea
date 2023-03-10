"use strict";

export default class Selection {
  constructor(startPosition, endPosition) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  getStartPosition() {
    return this.startPosition;
  }

  getEndPosition() {
    return this.endPosition;
  }

  setStartPosition(startPosition) {
    this.startPosition = startPosition;
  }

  setEndPosition(endPosition) {
    this.endPosition = endPosition;
  }

  isEqualTo(selection) {
    let equalTo = false;

    if (selection !== null) {
      const selectionStartPosition = selection.getStartPosition(),
            selectionEndPosition = selection.getEndPosition(),
            startPositionsEqual = (this.startPosition === selectionStartPosition),
            endPositionsEqual = (this.endPosition === selectionEndPosition);

      equalTo = (startPositionsEqual && endPositionsEqual);
    }

    return equalTo;
  }

  static fromNothing(Class) {
    if (Class === undefined) {
      Class = Selection;
    }

    const startPosition = 0,
          endPosition = 0,
          selection = new Class(startPosition, endPosition);

    return selection;
  }

  static fromDOMElement(Class, domElement) {
    if (domElement === undefined) {
      domElement = Class; ///

      Class = Selection;
    }

    const { selectionStart, selectionEnd } = domElement,
          startPosition = selectionStart, ///
          endPosition = selectionEnd, ///
          selection = new Class(startPosition, endPosition);

    return selection;

  }

  static fromStartPositionAndEndPosition(Class, startPosition, endPosition) {
    if (endPosition === undefined) {
      startPosition = Class;  ///

      endPosition = startPosition;  ///

      Class = Selection;
    }

    const selection = new Class(startPosition, endPosition);

    return selection;
  }
}
