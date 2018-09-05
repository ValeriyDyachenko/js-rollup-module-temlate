# Rollup boilerplate

included:
* NEW JAVASCRIPT FEATURES WITH BABEL
* ESLINT
* PLUGINS TO HANDLE NON-ES MODULES
* COMPRESS AND MINIFY WITH UGLIFYJS

In case of problems with "babel-eslint" and "eslint-config-google" (cannot find module) install them globally.

Install:
1) copy or clone repository
2) npm install (from project directory)
3) npm install --global rollup babel-eslint eslint-config-google
4) rollup -c

files:
source: \src\scripts\main.js  
output: \build\js\main.min.js
