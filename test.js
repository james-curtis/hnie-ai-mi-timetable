
const regex = /\[(?<begin>\d+)-(?<end>\d+)节\]/gm;
console.log(regex.exec('1-15(周)[05-06节]'));
