const nodeStr = "1-10,12-17(周)";
const regex = /(?<target>\d+[\s\-]*\d+|\d+)/gi;
console.log([...nodeStr.matchAll(regex)])
const matchedList = [...nodeStr.matchAll(regex)]
    .map(value => [value.input,value.groups.target]);
console.log(matchedList)
