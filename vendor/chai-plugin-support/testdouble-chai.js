var td;

try {
  td = require('testdouble').default;
} catch(e) {
  td = window.td;
}

(function() {
  chai.use(tdChai(td));
})();
