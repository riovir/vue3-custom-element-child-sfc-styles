/**
 * Unfortunately, styles from child components are not automatically relayed
 * to the nearest shadow root anymore (like in Vue 2).
 *
 * Context: This use-case is intended to keep using webcomponent based microfrontends
 * after updating from Vue 2 + shadowMode + vue-webcomponent-wrapper.
 *
 * Pages are turned into a custom elements with Shadow DOM, inside of which
 * there are a small Vue applications.
 */
import { defineCustomElement } from "vue";
import App from "./App.ce.vue";

const USE_WORKAROUND = false;

/** <Workaround>
 *
 * Unfortunately it's error prone and results in poor dev experience:
 * - load everything as CE
 * - recursively add child element styles to the root element
 * - [if TypeScript is set to strict, sort out the "styles" prop being set to any] */

if (USE_WORKAROUND) {
  App.styles = deepStylesOf(App);
}

/** Returns the styles of a Vue component including all of its child components'. */
function deepStylesOf({ styles = [], components = {} }) {
  const unique = array => [...new Set(array)];
  return unique([...styles, ...Object.values(components).flatMap(deepStylesOf)]);
}
/** </Workaround> */

customElements.define("the-app", defineCustomElement(App));
document.body.innerHTML = "<the-app></the-app>";
