# A free toolkit for your needed

**Indonesian** : Toolkit sehari-hari untuk mempermudah pekerjaan. Toolkit ini akan terus update seiring dengan temuan kasus-kasus baru yang perlu di sederhanakan.

**English** : A daily toolkit to help you work. This toolkit will continue to update along with new cases that need to be simplified.

### Installation
  Node.js

      npm install vascommkit --save

  Bower

      bower install vascommkit --save

### Update to the latest version (1.1.11)
  Node.js

      npm update vascommkit --save

  Bower

      bower update vascommkit --save

### Initialization
  Node.js

      const vascommkit = require('vascommkit');

  Bower

      <script src="bower_components/vascommkit/dist/vascommkit.min.js"></script>
      <script>
        console.log(vascommkit);
      </script>

### Features
- `lps` (Left Padding Space).
- `lpz` (Left Padding Zero).
- `rps` (Right Padding Space).
- `rpz` (Right Padding Zero).
- `looper` Loop a lot of data without lossing your CPU. Based on interval.
- `soa` Some job to manipulate SOA data.
  - `getVal` get value by tagname.
- `time` Manipulate date & time.
  - `daysInMonth` get total days in current month & year.
  - `day` get current day.
  - `month` get current month.
  - `year` get current year.
  - `hour` get current hour.
  - `minute` get current minute.
  - `second` get current second.
  - `now` get current datetime | *YYYY-MM-DD HH:mm:ss*.
  - `date` get current date | *YYYY-MM-DD*.
  - `time` get current time | *HH:mm:ss*.
  - `custom` get current datetime with custom format.
  - `add` add specified time to datetime.
  - `isExpired` check datetime expired.
  - `secondsToTime` convert seconds to time string format | *HH:mm:ss*.
  - `dateDiff` *Date diff* from 2 dates.
  - `timeDiff` *Time diff* from 2 times.
- `fake` Generate massive amounts of fake data based on `faker`. This function returned the data as an object array. So, you can easily manage it.
- `string` Manipulate string data.
  - `camelCase` converts the given string to `camelCase`.
  - `snakeCase` converts the given string to `snakeCase`.
  - `titleCase` converts the given string to `titleCase`.
  - `studlyCase` converts the given string to `studlyCase`.
  - `basename` returns the base(class) name of the given namespace.
  - `endsWith` determines if the given string ends with the given value.
  - `startsWith` determines if the given string begins with the given value.
  - `after` returns everything after the given value in a string.
  - `before` returns everything before the given value in a string.
  - `start` adds a single instance of the given value to a string if it does not already start with the value.
  - `finish` adds a single instance of the given value to a string if it does not already end with the value.
  - `contains` determines if the given string contains the given value (case sensitive).
  - `limit` truncates the given string at the specified length.
  - `random` generates a random string of the specified length.
  - `randomNumeric` generates a random numeric string of the specified length.
  - `slug` generates a URL friendly "slug" from the given string.
- `cemtex` Cemtex file format is a format used by banks to allow for batch transactions.
  - `string` Generate a cemtex string from the given data. You can make your custom standard bank format.
  - `generate` Generate a cemtex file from the given data. You can make your custom standard bank format.
- `array` Manipulate array data.
  - `collapse` collapses an array of arrays into a single array.
  - `except` removes the given key / value pairs from an array.
  - `only` returns only the specified key / value pairs from the given array.
  - `first` returns the first element in the given array.
  - `last` returns the last element in the given array.

### Changelog
See [https://github.com/dalikewara/vascommkit/blob/master/Changelog.md](https://github.com/dalikewara/vascommkit/blob/master/Changelog.md)

### Credits
Copyright &copy; 2018 [Dali Kewara](https://www.dalikewara.com) and team:
  - [Teguh Wahyu Santoso](https://teguh.ws/)

### License
[MIT License](https://github.com/dalikewara/vascommkit/blob/master/LICENSE)

### Notes
- *Most `string` & `array` functions implemented from Laravel's Helpers.*
- *Sorry for bad english.*

<br><hr><br>

## Examples
- `lps` **function (n, val)**

        const lps = vascommkit.lps(5, 200);

        console.log(lps); // output `  200`

  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br>
- `lpz` **function (n, val)**

        const lpz = vascommkit.lpz(5, 200);

        console.log(lpz); // output `00200`

  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br>
- `rps` **function (n, val)**

        const rps = vascommkit.rps(5, 200);

        console.log(lps); // output `200  `

  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br>
- `rpz` **function (n, val)**

        const rpz = vascommkit.rpz(5, 200);

        console.log(lps); // output `20000`

  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br>
- `looper` **function (start, end, callback, end[optional])**

        vascommkit.looper(0, 100, function (num) {
          console.log(num);
        }, function () {
          console.log('done');
        });

  - *integer* **start**
  - *integer* **end**
  - *function* **callback**
  - *function* **end**
  - *return* mixed
<br><br>
- `soa` object {}
  - `getVal` **function (tag, xml)**

        const getSOAValue = vascommkit.soa.getVal('name', '<name xmlns:q0="https://www.dalikewara.com">Linus Torvald</name>');

        console.log(getSOAValue); // output 'Linus Torvald'

    - *string* **tag**
    - *string* **xml**
    - *return* string
<br><br>
- `time` object {}
  - `daysInMonth` **function (options[optional])**

          const daysInMonth = vascommkit.time.daysInMonth();

          console.log(daysInMonth);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `day` **function (options[optional])**

         const day = vascommkit.time.day();

         console.log(day);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `month` **function (options[optional])**

        const month = vascommkit.time.month();

        console.log(month);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `year` **function (options[optional])**

        const year = vascommkit.time.year();

        console.log(year);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `hour` **function (options[optional])**

        const hour = vascommkit.time.hour();

        console.log(hour);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `minute` **function (options[optional])**

        const minute = vascommkit.time.minute();

        console.log(minute);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `second` **function (options[optional])**

        const second = vascommkit.time.second();

        console.log(second);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `now` **function (options[optional])**

        const now = vascommkit.time.now();

        console.log(now);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `date` **function (options[optional])**

        const date = vascommkit.time.date();

        console.log(date);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `time` **function (options[optional])**

        const time = vascommkit.time.time();

        console.log(time);

    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `custom` **function (format, options[optional])**

        const custom = vascommkit.time.custom('DD-MM-YYYY');

        console.log(custom);

    - *string* **format**
    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `add` **function (date, len, prefix, options[optional])**

        const add = vascommkit.time.add('2018-02-13 13:00:00', '40', 'minutes');

        console.log(add);

    - *string* **date**
    - *string* **len**
    - *string* **prefix** | verb(s)
    - *object* **options**
      - *string* timezone
    - *return* string
<br><br>
  - `isExpired` **function (date, params[optional], options[optional])**

        const isExpired = vascommkit.time.isExpired('2018-02-13 13:00:00');

        console.log(isExpired);

    - *string* **date**
    - *object* **params**
      - *string* len
      - *string* prefix | verb(s)
    - *object* **options**
      - *string* timezone
    - *return* true | false
<br><br>
  - `secondsToTime` **function (seconds)**

        const secondsToTime = vascommkit.time.secondsToTime(35111);

        console.log(secondsToTime);

    - *integer* **seconds**
    - *return* string
<br><br>
  - `dateDiff` **function (start, end, prefix)**

        const dateDiff = vascommkit.time.dateDiff('2018-04-05', '2018-04-10', 'day');

        console.log(dateDiff);

    - *string* **start**
    - *string* **end**
    - *string* **prefix**
    - *return* string
<br><br>
  - `timeDiff` **function (start, end, prefix)**

        const timeDiff = vascommkit.time.timeDiff('09:45:00', '10:00:00');

        console.log(timeDiff);

    - *string* **start**
    - *string* **end**
    - *return* string
<br><br>
- `fake` **function (len, keys[optional], local[optional])**

        const len = 100;
        const keys = {
          name: 'firstName|lastName|findName',
          internet: 'userName|password',
          address: 'city'
        };
        const data = vascommkit.fake(len, keys);

        console.log(data);

        // output
        // [ { firstName: 'Jeffrey',
        //    lastName: 'Hills',
        //    findName: 'Boris Collier II',
        //    userName: 'Stella_Emard',
        //    password: '6239pKNeKTDvfON',
        //    city: 'Stehrside' },
        //  { firstName: 'Reuben',
        //    lastName: 'Armstrong',
        //    findName: 'Elenor Nolan',
        //    userName: 'Reta.Kulas',
        //    password: 'rouYSPvYpX1elsA',
        //    city: 'Gleichnerport' }, ... ]

   If you want to make your own key, use this format `expectedKey@originalKey` with `@` separator. See following example:

        const len = 1;
        const keys = {
          name: 'firstName'
        };
        const data = vascommkit.fake(len, keys);

        console.log(data);

        // output
        // [{ firstName: 'Jeffrey' }]



        const keys2 = {
          name: 'myname@firstName'
        };
        const data2 = vascommkit.fake(len, keys2);

        console.log(data2);

        // output
        // [{ myname: 'Jeffrey' }]

  - *integer* **len**
  - *object* **keys**
    - *string* name
      - *firstName* | *lastName* | *findName* | *jobTitle* | *prefix* | *suffix* | *title* | *jobDescriptor* | *jobArea* | *jobType*
    - *string* internet
      - *avatar* | *email* | *exampleEmail* | *userName* | *protocol* | *url* | *domainName* | *domainSuffix* | *domainWord* | *ip* | *ipv6* | *userAgent* | *color* | *mac* | *password*
    - *string* address
      - *zipCode* | *city* | *cityPrefix* | *citySuffix* | *streetName* | *streetAddress* | *streetSuffix* | *streetPrefix*  | *secondaryAddress* | *county* | *country* | *countryCode* | *state* | *stateAbbr* | *latitude* | *longitude*
    - *string* commerce
      - *color* | *department* | *productName* | *price* | *productAdjective* | *productMaterial* | *product*
    - *string* company
      - *suffixes* | *companyName* | *companySuffix* | *catchPhrase* | *bs* | *catchPhraseAdjective* | *catchPhraseDescriptor* | *catchPhraseNoun* | *bsAdjective* | *bsBuzz* | *bsNoun*
    - *string* database
     - *column* | *type* | *collation* | *engine*
    - *string* date
      - *past* | *future* | *between* | *recent* | *soon* | *month* | *weekday*
    - *string* fake
    - *string* finance
      - *account* | *accountName* | *mask* | *amount* | *transactionType* | *currencyCode* | *currencyName* | *currencySymbol* | *bitcoinAddress* | *ethereumAddress* | *iban* | *bic*
    - *string* hacker
      - *abbreviation* | *adjective* | *noun* | *verb* | *ingverb* | *phrase*
    - *string* helpers
      - *randomize* | *slugify* | *replaceSymbolWithNumber* | *replaceSymbols* | *shuffle* | *mustache* | *createCard* | *contextualCard* | *userCard* | *createTransaction*
    - *string* image
      - *image* | *avatar* | *imageUrl* | *abstract* | *animals* | *business* | *cats* | *city* | *food* | *nightlife* | *fashion* | *people* | *nature* | *sports* | *technics* | *transport* | *dataUri*
    - *string* lorem
      - *word* | *words* | *sentence* | *slug* | *sentences* | *paragraph* | *paragraphs* | *text* | *lines*
    - *string* phone
      - *phoneNumber* | *phoneNumberFormat* | *phoneFormats*
    - *string* random
      - *number* | *arrayElement* | *objectElement* | *uuid* | *boolean* | *word* | *words* | *image* | *locale* | *alphaNumeric* | *hexaDecimal*
    - *string* system
      - *fileName*  *commonFileName* | *mimeType* | *commonFileType* | *commonFileExt* | *fileType* | *fileExt* | *directoryPath* | *filePath* | *semver*
  - *string* local | default 'id_ID'
    - *az* | *cz* | *de* | *de_AT* | *de_CH* | *en* | *en_AU* ... More see -> [https://github.com/Marak/Faker.js](https://github.com/Marak/Faker.js)
  - *return* array
<br><br>
- `string` object {}
  - `camelCase` **function (str)**

        conts str = vascommkit.string.camelCase('foo bar');

        console.log(str); // output 'fooBar'

    - *string* **str**
    - *return* string
<br><br>
  - `snakeCase` **function (str)**

        conts str = vascommkit.string.snakeCase('foo Bar');

        console.log(str); // output 'foo_bar'

    - *string* **str**
    - *return* string
<br><br>
  - `titleCase` **function (str)**

        conts str = vascommkit.string.titleCase('foo Bar');

        console.log(str); // output 'Foo Bar'

    - *string* **str**
    - *return* string
<br><br>
  - `studlyCase` **function (str)**

        conts str = vascommkit.string.studlyCase('foo Bar');

        console.log(str); // output 'FooBar'

    - *string* **str**
    - *return* string
<br><br>
  - `basename` **function (ns, str)**

        conts str = vascommkit.string.basename('/', 'Foo/Bar');

        console.log(str); // output 'Bar'

    - *char* **ns** | `/`, `-`, `+`, etc...
    - *string* **str**
    - *return* string
<br><br>
  - `endsWith` **function (e, str)**

        conts str = vascommkit.string.endsWith('John', 'Smith John');

        console.log(str); // output true

    - *string* **e**
    - *string* **str**
    - *return* true | false
<br><br>
  - `startsWith` **function (e, str)**

        conts str = vascommkit.string.startsWith('Smith', 'Smith John');

        console.log(str); // output true

    - *string* **e**
    - *string* **str**
    - *return* true | false
<br><br>
  - `after` **function (e, str)**

        conts str = vascommkit.string.after('Smith', 'Smith John');

        console.log(str); // output ' John'

    - *string* **e**
    - *string* **str**
    - *return* string
<br><br>
  - `before` **function (e, str)**

        conts str = vascommkit.string.before('John', 'Smith John');

        console.log(str); // output 'Smith '

    - *string* **e**
    - *string* **str**
    - *return* string
<br><br>
  - `finish` **function (e, str)**

        conts str = vascommkit.string.finish('John', 'Smith John');
        conts str2 = vascommkit.string.finish('Alex', 'Smith John');

        console.log(str); // output 'Smith John'
        console.log(str2); // output 'Smith JohnAlex'

    - *string* **e**
    - *string* **str**
    - *return* string
<br><br>
  - `start` **function (e, str)**

        conts str = vascommkit.string.start('Smith', 'Smith John');
        conts str2 = vascommkit.string.start('Alex', 'Smith John');

        console.log(str); // output 'Smith John'
        console.log(str2); // output 'AlexSmith John'

    - *string* **e**
    - *string* **str**
    - *return* string
<br><br>
  - `contains` **function (e, str)**

        conts str = vascommkit.string.contains('John', 'Smith John');

        console.log(str); // output true

    - *string* **e**
    - *string* **str**
    - *return* true | false
<br><br>
  - `limit` **function (n, str, prefix[optional])**

        conts str = vascommkit.string.limit(12, 'Lorem ipsum dolor sit amet');
        conts str2 = vascommkit.string.limit(12, 'Lorem ipsum dolor sit amet', 'readmore...');

        console.log(str); // output 'Lorem ipsum ...'
        console.log(str2); // output 'Lorem ipsum readmore...'

    - *integer* **n**
    - *string* **str**
    - *string* **prefix**
    - *return* string
<br><br>
  - `random` **function (n)**

        conts str = vascommkit.string.random(3);

        console.log(str); // output '8FE'

    - *integer* **n**
    - *return* string
<br><br>
  - `randomNumeric` **function (n)**

        conts str = vascommkit.string.randomNumeric(6);

        console.log(str); // output '152043'

    - *integer* **n**
    - *return* string
<br><br>
  - `slug` **function (str, prefix[optional])**

        conts str = vascommkit.string.slug('Smith John');
        conts str2 = vascommkit.string.slug('Smith John', '+');

        console.log(str); // output 'smith-john'
        console.log(str2); // output 'smith+john'

    - *string* **str**
    - *char* **prefix** | `-`, `+`, etc... | default is `-`
    - *return* string
<br><br>
- `cemtex` object {}
  - `string` **function (params, options[optional]|callback, callback)**

    Here is basic example:
        
        vascommkit.cemtex.string({
          header: {
            keys: {
              key1: { type: 'rps', length: 8 },
              key2: { type: 'lpz', length: 9 }
            },
            data: { key1: 'Header1', key2: 'Header2' }
          },
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12 }
            },
            data: [
              { key1: 'Detail1 A', key2: 'Detail2 A' },
              { key1: 'Detail1 B', key2: 'Detail2 B' }
            ],
          },
          footer: {
            keys: {
              key1: { type: 'rps', length: 9 },
              key2: { type: 'lpz', length: 11 }
            },
            data: { key1: 'Footer1', key2: 'Footer2' }
          }
        }, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });

        // output result
        // Header1 0090                                                                                                                                                    Detail1 A 000000012345                                                                                                                                          Detail1 B 000000067890                                                                                                                                          Footer1  0002                                                                                                                                                   

    Example above returned a single line cemtex string. The default `charLength` of each `params` is 160. So it has 160 header, 160 detail (per 1 row), and 160 footer chars length. If we do split, it looks like this:

        // header
        'Header1 0090                                                                                                                                                    ' // 160

        // detail
        'Detail1 A 000000012345                                                                                                                                          ' // 160
        'Detail1 B 000000067890                                                                                                                                          ' // 160

        // footer
        'Footer1  0002                                                                                                                                                   ' // 160

    Each `params` (header, detail, footer) has 2 required properties: `keys` & `data`. It should be the same object. If `keys` has key 'name', so `data` should be contains 'name'. But don't worry, in most cases, you can ignore & not follow this conditions.

        header: {

          // Configuration of the main data. 'type' & 'length' always required.
          keys: {
            name: { type: 'lps', length: 15}, // So, the main data 'data.name' is lps (Left Padding Space) and it has max 15 length.
            phone: { type: 'lpz', length: 15} // So, the main data 'data.phone' is lpz (Left Padding Zero) and it has max 15 length.
          },

          // The main data.
          data: { 
            name: 'John Smith', // `data.name` = '     John Smith'
            phone: '12345', // `data.phone` = '000000000012345'
          }

        }

        // Header = '     John Smith000000000012345'

    Specifically for `params` 'detail', property `data` is an array, not object, but stil have the same structure.

        detail: {

          // Configuration of the main data. 'type' & 'length' always required.
          keys: {
            name: { type: 'lps', length: 15}, // So, the main data 'data.name' is lps (Left Padding Space) and it has max 15 length.
            phone: { type: 'lpz', length: 15} // So, the main data 'data.phone' is lpz (Left Padding Zero) and it has max 15 length.
          },

          // The main data.
          data: [
            { 
              name: 'John Smith', // `data.name` = '     John Smith'
              phone: '12345', // `data.phone` = '000000000012345'
            },
            { 
              name: 'Matthew Alex', // `data.name` = '   Matthew Alex'
              phone: '987654321', // `data.phone` = '0000987654321'
            }
          ]

        }

        // Detail = '     John Smith000000000012345   Matthew Alex0000987654321'


    Here more example... Remember that `params` (header, detail, footer) are optional.

        // Without header
        vascommkit.cemtex.string({
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12 }
            },
            data: [
              { key1: 'Detail1 A', key2: 'Detail2 A' },
              { key1: 'Detail1 B', key2: 'Detail2 B' }
            ],
          },
          footer: {
            keys: {
              key1: { type: 'rps', length: 9 },
              key2: { type: 'lpz', length: 11 }
            },
            data: { key1: 'Footer1', key2: 'Footer2' }
          }
        }, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });

        // output result
        // Detail1 A 000000012345                                                                                                                                          Detail1 B 000000067890                                                                                                                                          Footer1  0002                                                                                                                                                   
        
        
        // With an option.
        vascommkit.cemtex.string({
          header: {
            keys: {
              key1: { type: 'rps', length: 8 },
              key2: { type: 'lpz', length: 9 }
            },
            data: { key1: 'Header1', key2: 'Header2' }
          },
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12 }
            },
            data: [
              { key1: 'Detail1 A', key2: 'Detail2 A' },
              { key1: 'Detail1 B', key2: 'Detail2 B' }
            ],
          },
          footer: {
            keys: {
              key1: { type: 'rps', length: 9 },
              key2: { type: 'lpz', length: 11 }
            },
            data: { key1: 'Footer1', key2: 'Footer2' }
          }
        }, {
          charLength: '40'
        }, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });

        // output result
        // Header1 00Header2                       Detail1 A 000Detail2 A                  Detail1 B 000Detail2 B                  Footer1  0000Footer2                    
        
        
        
        // This all configurations is valid.
        {
          header: {
            keys: {
              key1: { type: 'rps', length: 8 },
              key2: { type: 'lpz', length: 9, default: '0' }
            },
            data: { key1: 'Header1' }
          },
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12 } // default is ' '
            },
            data: [
              { key1: 'Detail1 A', key2: 'Detail2 A' },
              { key1: 'Detail1 B' }
            ],
          },
          footer: {
            keys: {
              key1: { type: 'rps', length: 9 },
              key2: { type: 'lpz', length: 11 }
            },
            data: { key1: 'Footer1', key2: 'Footer2' }
          }
        }
        
        
        {
          header: {
            keys: {
              key1: { type: 'rps', length: 8 },
              key2: { type: 'lpz', length: 9, from: 'key1' }
            },
            data: { key1: 'Header1' }
          },
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12, from: 'key1' }
            },
            data: [
              { key1: 'Detail1 A', key2: 'Detail2 A' },
              { key1: 'Detail1 B' }
            ],
          }
        }
        
        
        {
          header: {
            keys: {
              key1: { type: 'rps', length: 8 },
              key2: { type: 'lpz', length: 9, default: 'key1' }
            },
            data: { key2: 'Header1' }
          },
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12, from: 'key1' }
            },
            data: [
              { key2: 'Detail2 A' },
              { }
            ],
          }
        }
        
        
        {
          detail: {
            keys: {
              amount: { type: 'lpz', length: 10 },
              key2: { type: 'lpz', length: 12 }
            },
            data: [
              { amount: '1000', key2: 'Detail2 A' },
              { amount: '1200' }
            ],
          },
          footer: {
            keys: {
              key1: { type: 'rps', length: 9 },
              key2: { type: 'lpz', length: 11, countFromDetail: 'amount' }
            },
            data: { key1: 'Footer1', key2: 'Footer2' } // key2 = 2200
          }
        }

    - *object* **params**
      - *object* header | optional
        - *object* keys | required
          - *type* | required | 'lps', 'lpz', 'rps', & 'rpz' | default is `lps`
          - *length* | required
          - *default* | optional | default value if key not found or it has null value.
          - *decimal* | optional | true or false | default is `true`
          - *from* | optional | get value based on `params` property `keys`.
        - *object* data | required
      - *object* detail | optional
        - *object* keys | required
          - *type* | required | 'lps', 'lpz', 'rps', & 'rpz' | default is `lps`
          - *length* | required
          - *default* | optional | default value if key not found or it has null value.
          - *decimal* | optional | true or false | default is `true`
          - *from* | optional | get value based on `params` property `keys`.
        - *array* data | required
      - *object* footer | optional
        - *object* keys | required
          - *type* | required | 'lps', 'lpz', 'rps', & 'rpz' | default is `lps`
          - *length* | required
          - *default* | optional | default value if key not found or it has null value.
          - *decimal* | optional | true or false | default is `true`
          - *from* | optional | get value based on `params` property `keys`.
          - *countFromDetail* | optional | count amount from specified `detail` data key.
        - *object* data | required
    - *object* **options** | make it as callback[function] if you dont want to pass an option.
      - *boolean* enter | true (row string `\n`) or false (single string) | default is `false`
      - *char* default | `0`, `_`, etc... | default is ' '
      - *integer* charLength | default is `160`
    - *function* **callback**
    - *return* string
<br><br>
  - `generate` **function (fullpath, params, options[optional]|callback, callback)**

        vascommkit.cemtex.generate(__dirname + '/test.ctx', {
          header: {
            keys: {
              key1: { type: 'rps', length: 8 },
              key2: { type: 'lpz', length: 9 }
            },
            data: { key1: 'Header1', key2: 'Header2' }
          },
          detail: {
            keys: {
              key1: { type: 'rps', length: 10 },
              key2: { type: 'lpz', length: 12 }
            },
            data: [
              { key1: 'Detail1 A', key2: 'Detail2 A' },
              { key1: 'Detail1 B', key2: 'Detail2 B' }
            ],
          },
          footer: {
            keys: {
              key1: { type: 'rps', length: 9 },
              key2: { type: 'lpz', length: 11 }
            },
            data: { key1: 'Footer1', key2: 'Footer2' }
          }
        }, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
          }
        });

    - *string* **fullpath**
    - **params, options, callback** follow the `cemtex.string` instructions.
<br><br>
- `array` object {}
  - `collapse` **function (array)**

        const array = [
          [1, 2, 3],
          [4, 5, 6],
          7,
          8,
          9,
          10
        ];
        const n = vascommkit.array.collapse(array);

        console.log(n); // output [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    - *array* **array**
    - *return* array
<br><br>
  - `except` **function (array, keys)**

        var array = ['hello', 'world'];
        var keys = 'world';
        var n = vascommkit.array.except(array, keys);

        console.log(n); // output ['hello']

        var array = ['hello', 'world', 'yeah'];
        var keys = ['world', 'yeah'];
        var n = vascommkit.array.except(array, keys);

        console.log(n); // output ['hello']

    - *array* **array**
    - *array|string* **keys**
    - *return* array
<br><br>
  - `only` **function (array, keys)**

        var array = ['php', 'js', 'pyhton'];
        var keys = 'js';
        var n = vascommkit.array.only(array, keys);

        console.log(n); // output ['js']

        var array = ['php', 'js', 'pyhton'];
        var keys = ['js', 'php', 'ruby'];
        var n = vascommkit.array.only(array, keys);

        console.log(n); // output ['js', 'php']

    - *array* **array**
    - *array|string* **keys**
    - *return* array
<br><br>
  - `first` **function (array)**

        var array = ['js', 'php', 'python'];
        var n = vascommkit.array.first(array);

        console.log(n); // js

    - *array* **array**
    - *return* array
<br><br>
  - `last` **function (array)**

        var array = ['js', 'php', 'python'];
        var n = vascommkit.array.last(array);

        console.log(n); // python

    - *array* **array**
    - *return* array
<br><br>