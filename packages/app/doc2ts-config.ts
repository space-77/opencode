import type { Doc2TsConfig } from "doc2ts"

const doc2tsConfig: Doc2TsConfig = {
  outDir: "./src/services",
  origins: [{ url: "http://localhost:3001/api-docs-json" }],
  languageType: "typeScript",
  baseClassName: "ApiClient",
  postRender: "bunx prettier --write packages/app",
  baseClassPath: "./src/services/client.ts",
  resultTypeRender: 'Promise<[any, {typeName}["data"], {typeName}]>',
  gitConfig: {
    pushArgs: ["--no-verify"],
  },
}

export default doc2tsConfig
