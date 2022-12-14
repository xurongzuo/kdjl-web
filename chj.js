function getImage(str) {
    const fs = require('fs')
    const base64 = fs.readFileSync(`/Users/guoshengqiang/Documents/kdjl/kdjl.jar.src/c/${str}.chj`).toString('base64')
    kdjl.dats[`/c/${str}.chj`] = base64
    const data = kdjl.O000O_fun(str)
    console.log(data)
    const img = data.OO000O
    img.onload = function() {
        fs.writeFileSync(`/Users/guoshengqiang/Documents/kdjl/kdjl.jar.src/c/${str}-${data.O0O00O}-${data.O00OOOO}x${data.OO000}-${img.width / data.O00OOOO}.png`, Buffer.from(img.src.replace('data:image/png;base64,', ''), 'base64'))
    }
    document.body.appendChild(img)
}
const files = [
    '14',
    '15',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '29',
    '31',
    '32',
    '33',
    '34',
    '35',
    '37',
    '39',
    '42',
    '51',
    '53',
    '54',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '77',
    '105',
    '106',
    '108',
    '117',
    '121',
    '129',
    '133',
    '156',
    '160',
    '161',
    '162',
    '248',
    '249',
    '250',
    '251',
    '252',
    '255',
    '256',
    '257',
    '259',
    '261',
    '263',
    '265',
    '267',
    '269',
    '271',
    '273',
    '275',
    '277',
    '279',
    '281',
    '283',
    '285',
    '287',
    '289',
    '291',
    '297',
    '301',
    '302',
    '303',
    '305',
    '307',
    '309',
    '310',
    '313',
    '315',
    '317',
    '319',
    '340',
    '341',
    '342',
    '345',
    '350',
    '365',
    '366',
    '367',
    '368',
    '369',
    '370',
    '371',
    '372',
    '373',
    '374',
    '375',
    '376',
    '377',
    '378',
    '379',
    '380',
    '381',
    '382',
    '383',
    '384',
    '385',
    '389',
    '391',
    '421',
    '422',
    '425',
    '427',
    '429',
    '438',
    '440',
    '442',
    '461',
    '465',
    '1000',
    '1001',
    '1002',
    '1003',
    '1004',
    '1005',
    '1006',
    '1007',
    '1008',
    '1009',
    '1010',
    '1011',
    '1012',
    '1013',
    '1014',
    '1015',
    '1016',
    '1017',
    '1018',
    '1019',
    '1020',
    '1021',
    '1022',
    '1023',
    '1024',
    '1025',
    '1026',
    '1027',
    '1028',
    '1029',
    '1030',
    '1031',
    '1032',
    '1033',
    '1034',
    '1035',
    '1036',
    '1037',
    '1038',
    '1039',
    '1040',
    '1041',
    '1042',
    '1043',
    '2000',
    '2001',
    '2004',
    '2005',
    '2006',
    '2007',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2021',
    '2025',
    '2026',
    '2027',
    '2035',
    '2036',
    '2040',
    '2053',
    '2056',
    '2572',
    '2592',
    '2612',
    '2632',
    '2652',
    '2672',
    '2692',
    '2712',
    '2732',
    '2752',
    '2772',
    '2792',
    '2852',
    '2872',
    '3132',
    '3152',
    '3172',
    '3192',
    '3612',
    '4001',
    '4002',
    '5000',
    '5302',
    '5402',
    'a53',
    'a54',
]
files.forEach(file => {
    getImage(file)
})