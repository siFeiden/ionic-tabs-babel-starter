# ionic-tabs-babel-starter
Empty project structure for the ionic framework. Contains an app with two tabs, uses sass and babel to transpile js.


Things that need to be configured:
- [ ] index.html <title></title>
- [ ] index.html script sources of controllers etc
- [ ] rename templates
- [ ] rename tabs and paths in templates/tabs.html
- [ ] change dependecies in app.js
- [ ] change tab names in routes js
- [ ] rename controller and service js files
- [ ] rename modules and controllers
- [ ] rename modules and service

This might help:
```
ag --js --html --ignore lib 'tab1|tab2|data' www
find www/ -name '*tab1*' -o -name '*tab2*' -o -name '*data*'
```
