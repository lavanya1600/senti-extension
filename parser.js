var querystring = require('querystring');
var data = querystring.parse('https://www.google.com/search?source=hp&ei=vN85XOr7Lc27rQHe6bOACA&q=test&btnK=Google+Search&oq=test&gs_l=psy-ab.3..35i39j0i67j0i131j0i20i263j0j0i131j0l4.78665.78887..79172...3.0..0.659.1347.2-3j5-1......0....1..gws-wiz.....0.7w8xhVxrNx0');

console.log(data.q);