# A free toolkit for your needed

**Indonesian** : Toolkit sehari-hari untuk mempermudah pekerjaan. Toolkit ini akan terus update seiring dengan temuan kasus-kasus baru yang perlu di sederhanakan.

**English** : Maintenance...

### Installation
      npm install vascommkit --save

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

### Changelog
Soon...

### Credits
Copyright &copy; 2018 **Dali Kewara** and team:
  - **Teguh Wahyu Santoso**

### Examples
- `lps` **function (n, val)**
        const lps = vascommkit.lps(5, 200);

        console.log(lps); // output `  200`
  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br><br>
- `lpz` **function (n, val)**
        const lpz = vascommkit.lpz(5, 200);

        console.log(lpz); // output `00200`
  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br><br>
- `rps` **function (n, val)**
        const rps = vascommkit.rps(5, 200);

        console.log(lps); // output `200  `
  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br><br>
- `rpz` **function (n, val)**
        const rpz = vascommkit.rpz(5, 200);

        console.log(lps); // output `20000`
  - *integer* **n**
  - *string* **val**
  - *return* string
<br><br><br>
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
<br><br><br>
- `soa` object {}
   - `getVal` **function (tag, xml)**
          const getSOAValue = vascommkit.soa.getVal('name', '<name xmlns:q0="https://www.dalikewara.com">Linus Torvald</name>');

          console.log(getSOAValue); // output 'Linus Torvald'
    - *string* **tag**
    - *string* **xml**
    - *return* string
<br><br><br>
- `time` object {}
  - `daysInMonth` **function (options[optional])**
          const daysInMonth = vascommkit.time.daysInMonth();

          console.log(daysInMonth);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `day` **function (options[optional])**
         const day = vascommkit.time.day();

         console.log(day);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `month` **function (options[optional])**
        const month = vascommkit.time.month();

        console.log(month);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `year` **function (options[optional])**
        const year = vascommkit.time.year();

        console.log(year);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `hour` **function (options[optional])**
        const hour = vascommkit.time.hour();

        console.log(hour);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `minute` **function (options[optional])**
        const minute = vascommkit.time.minute();

        console.log(minute);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `second` **function (options[optional])**
        const second = vascommkit.time.second();

        console.log(second);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
 - `now` **function (options[optional])**
        const now = vascommkit.time.now();

        console.log(now);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `date` **function (options[optional])**
        const date = vascommkit.time.date();

        console.log(date);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `time` **function (options[optional])**
        const time = vascommkit.time.time();

        console.log(time);
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `custom` **function (format, options[optional])**
        const custom = vascommkit.time.custom('DD-MM-YYYY');

        console.log(custom);
   - *string* **format**
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
  - `add` **function (date, len, prefix, options[optional])**
        const add = vascommkit.time.add('2018-02-13 13:00:00', '40', 'minutes');

        console.log(add);
   - *string* **date**
   - *string* **len**
   - *string* **prefix** | verb(s)
   - *object* **options**
     - *string* timezone
   - *return* string
<br><br><br>
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
