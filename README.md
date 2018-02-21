# A free toolkit for your needed

**Indonesian** : Toolkit sehari-hari untuk mempermudah pekerjaan. Toolkit ini akan terus update seiring dengan temuan kasus-kasus baru yang perlu di sederhanakan.

**English** : Maintenance...

### Installation
      npm install vascommkit --save

### Update to the latest version (1.1.4)
      npm update vascommkit --save

### Initialization
      const vascommkit = require('vascommkit');

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
  - `slug` generates a URL friendly "slug" from the given string.

### Changelog
See [https://github.com/dalikewara/vascommkit/blob/master/Changelog.md](https://github.com/dalikewara/vascommkit/blob/master/Changelog.md)

### Credits
Copyright &copy; 2018 [Dali Kewara](https://www.dalikewara.com) and team:
  - [Teguh Wahyu Santoso](https://teguh.ws/)

### License
[MIT License](https://github.com/dalikewara/vascommkit/blob/master/LICENSE)

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
  - `snakeCase` **function (str)**

        conts str = vascommkit.string.snakeCase('foo Bar');

        console.log(str); // output 'foo_bar'

    - *string* **str**
    - *return* string
  - `titleCase` **function (str)**

        conts str = vascommkit.string.titleCase('foo Bar');

        console.log(str); // output 'Foo Bar'

    - *string* **str**
    - *return* string
  - `studlyCase` **function (str)**

        conts str = vascommkit.string.studlyCase('foo Bar');

        console.log(str); // output 'FooBar'

    - *string* **str**
    - *return* string
  - `basename` **function (ns, str)**

        conts str = vascommkit.string.basename('/', 'Foo/Bar');

        console.log(str); // output 'Bar'

    - *char* **ns** | `/`, `-`, `+`, etc...
    - *string* **str**
    - *return* string
  - `endsWith` **function (e, str)**

        conts str = vascommkit.string.endsWith('John', 'Smith John');

        console.log(str); // output true

    - *string* **e**
    - *string* **str**
    - *return* true | false
  - `startsWith` **function (e, str)**

        conts str = vascommkit.string.startsWith('Smith', 'Smith John');

        console.log(str); // output true

    - *string* **e**
    - *string* **str**
    - *return* true | false
  - `after` **function (e, str)**

        conts str = vascommkit.string.after('Smith', 'Smith John');

        console.log(str); // output ' John'

    - *string* **e**
    - *string* **str**
    - *return* string
  - `before` **function (e, str)**

        conts str = vascommkit.string.before('John', 'Smith John');

        console.log(str); // output 'Smith '

    - *string* **e**
    - *string* **str**
    - *return* string
  - `finish` **function (e, str)**

        conts str = vascommkit.string.finish('John', 'Smith John');
        conts str2 = vascommkit.string.finish('Alex', 'Smith John');

        console.log(str); // output 'Smith John'
        console.log(str2); // output 'Smith JohnAlex'

    - *string* **e**
    - *string* **str**
    - *return* string
  - `start` **function (e, str)**

        conts str = vascommkit.string.start('Smith', 'Smith John');
        conts str2 = vascommkit.string.start('Alex', 'Smith John');

        console.log(str); // output 'Smith John'
        console.log(str2); // output 'AlexSmith John'

    - *string* **e**
    - *string* **str**
    - *return* string
  - `contains` **function (e, str)**

        conts str = vascommkit.string.contains('John', 'Smith John');

        console.log(str); // output true

    - *string* **e**
    - *string* **str**
    - *return* true | false
  - `limit` **function (n, str, prefix[optional])**

        conts str = vascommkit.string.limit(12, 'Lorem ipsum dolor sit amet');
        conts str2 = vascommkit.string.limit(12, 'Lorem ipsum dolor sit amet', 'readmore...');

        console.log(str); // output 'Lorem ipsum ...'
        console.log(str2); // output 'Lorem ipsum readmore...'

    - *integer* **n**
    - *string* **str**
    - *string* **prefix**
    - *return* string
  - `random` **function (n)**

        conts str = vascommkit.string.random(3);

        console.log(str); // output '8FE'

    - *integer* **n**
    - *return* string
  - `slug` **function (str, prefix[optional])**

        conts str = vascommkit.string.slug('Smith John');
        conts str2 = vascommkit.string.slug('Smith John', '+');

        console.log(str); // output 'smith-john'
        console.log(str2); // output 'smith+john'

    - *string* **str**
    - *char* **prefix** | `-`, `+`, etc... | default `-`
    - *return* string
