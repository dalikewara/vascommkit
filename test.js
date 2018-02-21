const vascommkit = require('./index.js');

// // lps
// console.log('lps test');
// console.log(vascommkit.lps(5, 200));
//
// // lpz
// console.log('lpz test');
// console.log(vascommkit.lpz(5, 200));
//
// // rps
// console.log('rps test');
// console.log(vascommkit.rps(5, 200));
//
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
//       // optional
//       header: {
//         // require
//         keys: {
//           header1: { type: 'rps', length: 40, default: '' },
//           header2: { type: 'lpz', length: 12, default: '0' }
//         },
//         // require
//         data: { header1: 'Data1', header2: 'Data2' }
//       },
//       // optional
//       detail: {
//         // require
//         keys: {
//           name: { type: 'rps', length: 40, default: '' },
//           phone: { type: 'lpz', length: 12, default: '0' }
//         },
//         // require
//         data: [
//           { name: 'Linus Torvald', phone: '08888888' },
//           { name: 'Dali Kewara', phone: '09999999' }
//         ],
//         // optional
//         // description: {
//         //   keys: {}
//         // }
//       },
//       // optional
//       footer: {
//         // require
//         keys: {
//           footer1: { type: 'rps', length: 40, default: '' },
//           footer2: { type: 'lpz', length: 12, default: '0' }
//         },
//         // require
//         data: { footer1: 'Data1', footer2: 'Data2' }
//       }
//     }, {
//       enter: false, // default
//       default: ' ', // default
//       charLength: 160, // default
//     }, function (err, string) {
//       console.log(string);
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


/* ------------------------------------------------------------------------- */
