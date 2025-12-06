# Easy Rich Textarea

A textarea element that handles and hands off events well.

In the DOM API the active element is the one that has the focus.
That concept is twisted here somewhat.
A rich textarea is active if it has the focus but can remain active when it loses it.
Rich textareas are made for sitting behind a pretty printer that is still shown even when the focus is lost.
Scroll events still need to be handled, for example.

As well as a different concept of being active, rich textareas also have an improved change event mechanism that results in custom change events being fired not just whenever the content changes but when the selection changes to.
Again this makes them more suitable for sitting behind a pretty printer.

### JSX support

There is now support for JSX in the form of [Juxtapose](https://github.com/djalbat/Juxtapose). What this means is that Easy *will* now help you with the architecture of your large application. So although Easy elements will continue to work standalone, their use with Juxtapose is recommended.

### Easy projects

- [Easy](https://github.com/djalbat/easy) Elements that abstract away from the DOM.
- [Easy Layout](https://github.com/djalbat/easy-layout) Layout elements that work with CSS flexbox.
- [Easy Gestures](https://github.com/djalbat/easy-gestures) Touch gestures for web applications.
- [Easy Navigation](https://github.com/djalbat/easy-navigation) A responsive accordion and associated navigation.
- [Easy File System](https://github.com/djalbat/easy-file-system) A file system explorer and a rubbish bin.
- [Easy Rich Textarea](https://github.com/djalbat/easy-richtextarea) A textarea element that handles and hands off events well.
- [Easy Drag and Drop](https://github.com/djalbat/easy-drag-and-drop) Drag and drop functionality for Easy elements.

## Installation

You can install Easy RichTextarea with [npm](https://www.npmjs.com/):

    npm install easy-richtextarea

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-richtextarea.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding`src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

The `RichTextarea` element is typically created with several handlers:

```
import { RichTextarea } from "easy-richtextarea";

const richTextarea =

        <RichTextarea onCustomChange={changeCustomHandler}
                      onCustomScroll={scrollCUstomHandler}
                      onCustomFocus={focusCustomHandler}
                      onCustomBlur={blurCustomHandler}
        />

      ;

function changeCustomHandler(event, element) {
  const contentChanged = element.hasContentChanged(),
        selectionChanged = element.hasSelectionChanged();

  console.log(contentChanged, selectionChanged)
}

function scrollCUstomHandler(event, element) {
  const scrollTop = element.getScrollTop(),
        scrollLeft = element.getScrollLeft();

  console.log(scrollTop, scrollLeft)
}

function focusCustomHandler(event, element) {
  console.log("focus")
}

function blurCustomHandler(event, element) {
  console.log("blur")
}
```

Activating and deactivating the element couldn't be simpler:

```
richTextarea.activate();

richTextarea.deactivate();
```
Or you can just set the `active` attribute directly initially:
```
<RichTextarea ... active />
```

## Styles

There is no default styling. The rich textarea element has a class name, however, allowing you to style it with CSS. Or a better way is to use [Easy with Style](https://github.com/djalbat/easy-with-style). For example:

```
import withStyle from "easy-with-style";

export default withStyle(RichTextarea)`

  display: none;

  .active {

    display: block

  }

`;
```

Here active rich textarea elements are visible, inactive ones are not.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
