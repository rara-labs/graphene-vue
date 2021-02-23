//
//   Copyright Tosli Labs. 2019, 2020.
//   This source code is licensed under the MPL-2.0 license
//   found in the LICENSE file in the root directory of this source tree.
//

const ctx = require.context(
  "./src/",
  true,
  /^(?!.*(?:\/_|-story\.vue|-test\.vue)).*\.vue$/
);
const components = ctx.keys().map(ctx);

// Export the components as a plugin
export default {
  // options is an array of components to be registered
  // e.g. ['gn-button', 'gn-text-field']
  install(Vue, options) {
    if (typeof options === "undefined") {
      for (let c of components) {
        Vue.component(c.default.name, c.default);
      }
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError("options must be an array");
      }

      for (let c of components) {
        // register only components specified in the options
        if (options.includes(c.default.name)) {
          Vue.component(c.default.name, c.default);
        }
      }
    }
  }
};

// Imports
import { Button } from "./src/gn-button";
import { TextField } from "./src/gn-text-field";

// Exports
export { Button, TextField };
