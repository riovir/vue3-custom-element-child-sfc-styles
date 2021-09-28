# vue3-custom-element-child-sfc-styles

Reproduces child component style disappearance when using `Vue 3` + `defineCustomElement`.

## Project setup

```
git clone https://github.com/riovir/vue3-custom-element-child-sfc-styles.git
cd vue3-custom-element-child-sfc-styles
npm ci
npm start
```
Open [localhost:8080](http://localhost:8080).

## Intent

Turning a Vue component with un-scoped styles, and child components with scoped styles into a custom element.

_Actual behavior: child element styles are not added to the host's shadow root. Effectively, it loses its styles._
