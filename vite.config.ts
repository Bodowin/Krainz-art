import vinext from "vinext";
import { defineConfig, type Plugin } from "vite";

function bundleSitesServerDependencies(): Plugin {
  return {
    name: "krainz-art:bundle-sites-server-dependencies",
    enforce: "post",
    configEnvironment(name, config) {
      if (name !== "rsc" && name !== "ssr") return;

      config.resolve ??= {};
      config.resolve.external = [];
      config.resolve.noExternal = true;
    },
  };
}

export default defineConfig({
  plugins: [vinext(), bundleSitesServerDependencies()],
});
