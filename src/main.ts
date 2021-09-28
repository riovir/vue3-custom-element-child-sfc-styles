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
 * - import every child component used
 * - manually add their styles to the root element
 * - [if TypeScript is set to strict, sort out the missing "styles" prop from the component type] */

// import HelloWorld from "./components/HelloWorld.vue"; // Has undefined styles prop
import HelloWorldCe from "./components/HelloWorld.ce.vue";

if (USE_WORKAROUND) {
  App.styles = App.styles.concat(HelloWorldCe.styles);
}
/** </Workaround> */

customElements.define("the-app", defineCustomElement(App));
document.body.innerHTML = "<the-app></the-app>";
