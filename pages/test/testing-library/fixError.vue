<template>
  <div>
    <h1>Reactjs</h1>
    <h2>Axios</h2>
    <section>
      lỗi import axios trong các component SyntaxError: Cannot use import statement
      outside a module import axios from 'axios';
      <details>
        <summary>
          không nhận cấu hình trong file jest.config và babel.config.js nên cấu hình trong
          package.json
          <code>
            run: npm install --save-dev @babel/preset-env @babel/preset-react babel-jest
            <pre>
              {{
                `
                "type": "module",
                "jest": {
                    "transform": {
                      "^.+\\.(js|jsx)?$": "babel-jest"
                    },
                    //"testEnvironment": "jsdom",
                    //"moduleDirectories": [
                    //  "node_modules"
                    //],
                    "transformIgnorePatterns": [
                      "node_modules/(?!axios)"
                    ]
                  },
                  "babel": {
                    "presets": [
                      "@babel/preset-env",
                      "@babel/preset-react"
                    ]
                  }
                `
              }}
              </pre
            >
          </code>
        </summary>
      </details>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
