const vascommkit = require('./app.js');

// // lps
// console.log('lps test');
// console.log(vascommkit.lps(5, 200));

// // lpz
// console.log('lpz test');
// console.log(vascommkit.lpz(5, 200));

// // rps
// console.log('rps test');
// console.log(vascommkit.rps(5, 200));

// // rpz
// console.log('rpz test');
// console.log(vascommkit.rpz(5, 200));

// // looper
// console.log('looper test');
// vascommkit.looper(0, 1, function (num) {
//     console.log(num);
// }, function () {
//     console.log('done');
// });

// // soa
//     // getVal
//     console.log('soa getVal test');
//     console.log(vascommkit.soa.getVal('name', '<name type="type">My name is Linus</name>'));

// // cemtex
//     // string
//     console.log('cemtex string test');
//     vascommkit.cemtex.string({
//       header: {
//         keys: {
//           key1: { type: 'rps', length: 8 },
//           key2: { type: 'lpz', length: 4 }
//         },
//         data: { key1: 'Header1', key2: '90' }
//       },
//       detail: {
//         keys: {
//           key1: { type: 'rps', length: 10 },
//           key2: { type: 'lpz', length: 12 }
//         },
//         data: [
//           { key1: 'Detail1 A', key2: '12345' },
//           { key1: 'Detail1 B', key2: '67890' }
//         ],
//       },
//       footer: {
//         keys: {
//           key1: { type: 'rps', length: 9 },
//           key2: { type: 'lpz', length: 4 }
//         },
//         data: { key1: 'Footer1', key2: '2' }
//       }
//     }, function (err, result) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(result);
//       }
//     });

// // time
//     // daysInMonth
//     console.log('time daysInMonth test');
//     console.log(vascommkit.time.daysInMonth());
//     // day
//     console.log('time day test');
//     console.log(vascommkit.time.day());
//     // month
//     console.log('time month test');
//     console.log(vascommkit.time.month());
//     // year
//     console.log('time year test');
//     console.log(vascommkit.time.year());
//     // hour
//     console.log('time hour test');
//     console.log(vascommkit.time.hour());
//     // minute
//     console.log('time minute test');
//     console.log(vascommkit.time.minute());
//     // second
//     console.log('time second test');
//     console.log(vascommkit.time.second());
//     // now
//     console.log('time now test');
//     console.log(vascommkit.time.now());
//     // date
//     console.log('time date test');
//     console.log(vascommkit.time.date());
//     // time
//     console.log('time time test');
//     console.log(vascommkit.time.time());
//     // custom
//     console.log('time custom test');
//     console.log(vascommkit.time.custom('DD-MM-YYYY'));
//     // add
//     console.log('time add test');
//     console.log(vascommkit.time.add('2018-02-13 13:00:00', '40', 'minutes'));
//     // isExpired
//     console.log('time isExpired test');
//     console.log(vascommkit.time.isExpired('2018-02-13 13:00:00'));

// // fake
// console.log('fake test');
// console.log(vascommkit.fake(10, {
//   name: 'firstName|lastName|findName',
//   internet: 'username@userName|password',
//   address: 'city'
// }));

// // string
//     // camelCase
//     console.log('string camelCase test');
//     console.log(vascommkit.string.camelCase('foo bar'));
//     // snakeCase
//     console.log('string snakeCase test');
//     console.log(vascommkit.string.snakeCase('foo Bar'));
//     // titleCase
//     console.log('string titleCase test');
//     console.log(vascommkit.string.titleCase('foo Bar'));
//     // studlyCase
//     console.log('string studlyCase test');
//     console.log(vascommkit.string.studlyCase('foo Bar'));
//     // basename
//     console.log('string basename test');
//     console.log(vascommkit.string.basename('/', 'Foo/Bar'));
//     // endsWith
//     console.log('string endsWith test');
//     console.log(vascommkit.string.endsWith('John', 'Smith John'));
//     // startsWith
//     console.log('string startsWith test');
//     console.log(vascommkit.string.startsWith('Smith', 'Smith John'));
//     // after
//     console.log('string after test');
//     console.log(vascommkit.string.after('Smith', 'Smith John'));
//     // before
//     console.log('string before test');
//     console.log(vascommkit.string.before('John', 'Smith John'));
//     // finish
//     console.log('string finish test');
//     console.log(vascommkit.string.finish('Alex', 'Smith John'));
//     // start
//     console.log('string start test');
//     console.log(vascommkit.string.start('Alex', 'Smith John'));
//     // contains
//     console.log('string contains test');
//     console.log(vascommkit.string.contains('John', 'Smith John'));
//     // limit
//     console.log('string limit test');
//     console.log(vascommkit.string.limit(12, 'Lorem ipsum dolor sit amet'));
//     // random
//     console.log('string random test');
//     console.log(vascommkit.string.random(3));
//     // slug
//     console.log('string slug test');
//     console.log(vascommkit.string.slug('Smith John', '+'));

// // array
    // // collapse
    // console.log('string collapse test');
    // console.log(vascommkit.array.collapse([[1, 2, 3], [4, 5, 6], 7, 8, 9, 10]));
    // // except
    // console.log('string except test');
    // console.log(vascommkit.array.except(['hello', 'world'], ['world', 'hellow']));
    // // only
    // console.log('string only test');
    // console.log(vascommkit.array.only(['js', 'php', 'python'], ['js', 'php']));
    // // first
    // console.log('string first test');
    // console.log(vascommkit.array.first(['js', 'php', 'python']));
    // // last
    // console.log('string last test');
    // console.log(vascommkit.array.last(['js', 'php', 'python']));

/* ------------------------------------------------------------------------- */