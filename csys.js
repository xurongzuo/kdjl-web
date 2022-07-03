function getImage(str) {
    const fs = require('fs')
    const base64 = fs.readFileSync(`/Users/guoshengqiang/Documents/kdjl/kdjl.jar.src/csys/${str}.dat`).toString('base64')
    kdjl.dats[`/csys/${str}.dat`] = base64
    const img = kdjl.OO(str)
    document.body.appendChild(img)
    fs.writeFileSync(`/Users/guoshengqiang/Documents/kdjl/kdjl.jar.src/csys/${str}.png`, Buffer.from(img.src.replace('data:image/png;base64,', ''), 'base64'))
}
const files = [
    '5back',
    'arr',
    'auto',
    'blood',
    'charback',
    'cover0',
    'cover1',
    'cover2',
    'damage',
    'deplugin',
    'dh',
    'face',
    'fback',
    'first',
    'fmenu',
    'frame',
    'frame1',
    'frame2',
    'frame3',
    'frame4',
    'ico',
    'item',
    'item2',
    'jd',
    'jd0',
    'jd1',
    'loading1',
    'loading2',
    'loading3',
    'menu',
    'mframe0',
    'mframe1',
    'mframe2',
    'mframe3',
    'mframe4',
    'mframe5',
    'mm1',
    'mm2',
    'mmy1',
    'mmy2',
    'mp',
    'n5',
    'num',
    'p',
    'sa',
    'si',
    'tou3',
    'tou5',
    'tou7',
    'toua',
    'ver',
]
files.forEach(file => {
    getImage(file)
})