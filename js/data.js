const issues = [
    {
        code: 'const hamburger = 3;\rconst coke = 2;\rconst sum = (hamburger * 300) + coke * 200);\r\r//ここから先は変更不要です。\rsum;',
        goal: 1300,
    },

    {
        code: 'const money = 10000;\rlet message;\rif(money > 5000){\r   message = \'You Are Rich\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'You Are Rich',
    },
    {
        code: 'const familyName = \'Tanaka\';\rconst lastName = \'Toshiyuki\';\rconst fullName = familiName + lastName;\r\r//ここから先は変更不要です。\rfullName;',
        goal: 'TanakaToshiyuki',
    },
    {
        code: 'const cake = {\r    toping: \'strawberry\',\r    outside: \'cream\',\r}\r\r//ここから先は変更不要です。\rcake.topping.toUpperCase()+cake.outside.toUpperCase()+`CAKE`;',
        goal: 'STRAWBERRYCREAMCAKE',
    },
    {
        code: 'const word = \'Supercalifragilisticexpialidocious\';\rconst match1 = word.match(/listce/);\rconst match2 = word.match(/docios/);\rconst match3 = word.match(/fragil/);\r\rconst select = match1;\r\r//ここから先は変更不要です。\rselect[0].length;',
        goal: 6,
    },
    {
        code: 'function loopCheck (flag) {\r	if(flag === false) {\r        return \'No probrem!\';\r    } else if(flag === true) {\r        return \'You might be arrested\';\r    }\r}\rconst check = true();\r\r//ここから先は変更不要です。\rloopCheck(check);',
        goal: 'No probrem!',
    },
    {
        code: 'const studentA = {\r    name = \'Taro\',\r    weight = 63,\r}\r\r//ここから先は変更不要です。\rstudentA.weight;',
        goal: 63,
    },
    {
        code: 'const speed = 50;\rconst accelerator = 20;\rspeed = speed + accelerator;\r\r//ここから先は変更不要です。\rspeed;',
        goal: 70,
    },
    {
        code: 'const score = 70;\rlet comment;\r    \rif(score > 80){\r	comment = \'good!\';	\r} else if {\r    comment = \'so so\';\r}\r\r//ここから先は変更不要です。\rcomment;',
        goal: 'so so',
    },
    {
        code: 'function createMessage () {\r    return \'passed\';\r}\rconst message = createMesage;\r\r//ここから先は変更不要です。\rmessage;\r',
        goal: 'passed',
    },
    {
        code: 'let result;\rfunction add (num) {\r    if(num >= 1000000000000000000000){\r        result = \'done!\';\r        return;\r    }\r    add(num+1);\r}\radd(0);\r\r//ここから先は変更不要です。\rresult;',
        goal: 'done!',
    },
    {
        code: 'const family = {\r    father : \'Bob\'\r    mother : \'Kate\'\r}\r\r//ここから先は変更不要です。\rfamily.mother;',
        goal: 'Kate',
    },
    {
        code: 'let sum = 0;\rfor(let i = 0, i < 10, i++) {\r    sum = sum + i;\r}\r\r//ここから先は変更不要です。\rsum;',
        goal: 45,
    },
    {
        code: 'function cheer {\r    return \'My best wishes!\';\r}\r\r//ここから先は変更不要です。\rcheer();',
        goal: 'My best wishes!',
    },
    {
        code: 'const family = [\r    father : \'Bob\',\r    mother : \'Kate\'\r]\r\r//ここから先は変更不要です。\rfamily.mother;',
        goal: 'Kate',
    },
    {
        code: 'const family = [\'Bob\',\'Kate\',]\r\r//ここから先は変更不要です。\rfamily[2];',
        goal: 'Kate',
    },
    {
        code: 'const family = [\r    \'Bob\'\r    \'Kate\'\r]\r\r//ここから先は変更不要です。\rfamily[1];',
        goal: 'Kate',
    },
    {
        code: 'const button = doument.getElementById(\'button\');\rconst message = \'passed!\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'passed!',
    },
    {
        code: 'const button = document.getElmentById(\'button\');\rconst message = \'passed!\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'passed!',
    },
    {
        code: 'const button = document.createElement(\'button\');\rbutton.addEvenetListener(\'click\', () => {\r	console.log(\'pushed\');\r}); \rconst message = \'passed!\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'passed!',
    },
    {
        code: 'const button = document.createElement(\'button\');\rbutton.addEventListener(() => {\r	console.log(\'pushed\');\r}); \rconst message = \'passed!\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'passed!',
    },
    {
        code: 'const score = 70;\rlet comment;\r    \r/* 80以上はgood\rif(score > 80){\r	comment = \'good!\';	\r} else if {\r    comment = \'so so\';\r}\r\r//ここから先は変更不要です。\rcomment;',
        goal: 'good!',
    },
    {
        code: 'let message;\rconst color = \'green\';\r\rswitch(color) {\r	case: \'green\'\r		message = \'Go!\';\r		break;\r	case: \'red\'\r		message = \'Stop!\';\r		break;\r}\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'Go!',
    },
    {
        code: 'const message = \'I\'m full!\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'I\'m full!',
    },
    {
        code: 'function cheer() {\r    const message = \'My best wishes!\';\r    retun message;\r}\r\r//ここから先は変更不要です。\rcheer();',
        goal: 'My best wishes!',
    },
    {
        code: 'console.log(\'Cheese\' \'Burger\');\rconst message = \'yummy!\';\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'yummy!',
    },
    {
        code: 'const money = 10000;\rlet message;\rif(money > 5000){\r   message = You Are Rich;\r}\r\r//ここから先は変更不要です。\rmessage;',
        goal: 'You Are Rich',
    },
    {
        code: 'const hamburger = 3;\rconst coke = 2;\rconst sum = (hamburger * 300) + (coke * 200):\r\r//ここから先は変更不要です。\rsum;',
        goal: 1300,
    },
    {
        code: 'const cake = {\r    topping \'strawberry\',\r    outside \'cream\',\r}\r\r//ここから先は変更不要です。\rcake.topping.toUpperCase()+cake.outside.toUpperCase()+`CAKE`;',
        goal: 'STRAWBERRYCREAMCAKE',
    },
    {
        code: 'let sum = 0;\rfor(let i = 0; i < 11;  i++) {\r	for(let j = 0; j < 11; j++) {\r		sum = sum + j;\r	}\r    sum = sum + j;\r}\r\r//ここから先は変更不要です。\rsum;',
        goal: 660,
    },
];