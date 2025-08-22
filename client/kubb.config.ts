import { defineConfig } from "@kubb/core";
import { pluginClient } from "@kubb/plugin-client";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";

export default defineConfig(() => ({
  root: ".",
  input: { path: "./openapi.json" },
  output: {
    path: "./src/lib/api",
  },
  plugins: [
    pluginOas(),
    pluginTs(),
    pluginClient({
      importPath: "@/lib/axios-client",
      operations: true,
      parser: "client",
      exclude: [
        {
          type: "tag",
          pattern: "store",
        },
      ],
      pathParamsType: "object",
      dataReturnType: "data",
      client: "axios",
    }),
  ],
}));
