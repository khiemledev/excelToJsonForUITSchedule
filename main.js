'use strict'
const fs = require('fs')
const excelToJson = require('convert-excel-to-json')

const result = excelToJson({
  sourceFile: 'tkb.xlsx',
  header: {
    rows: 1,
  },
  columnToKey: {
    A: 'STT',
    B: 'MaMH',
    C: 'MaLop',
    D: 'TenMH',
    E: 'MaGV',
    F: 'TenGV',
    G: 'SiSo',
    H: 'SoTC',
    I: 'TH',
    J: 'HTGD',
    K: 'Thu',
    L: 'Tiet',
    M: 'CachTuan',
    N: 'PhongHoc',
    O: 'KhoaHoc',
    P: 'HocKy',
    Q: 'NamHoc',
    R: 'HeDT',
    S: 'KhoaQL',
    T: 'NBD',
    U: 'NKT',
    W: 'Lang',
  },
})

fs.writeFileSync('TKB.json', JSON.stringify(result), 'utf-8')

