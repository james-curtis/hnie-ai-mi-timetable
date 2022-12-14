function scheduleHtmlParser(html) {
    let $ = cheerio.load(html, {
        decodeEntities: false
    })

    let result = []
    // let maxWeek = 0;
    $('tbody').children().each(function (i, el) {
        if (i) { //除去第一行
            const num = [] //那一节课到哪一节课
            let brk = false
            $(el).children().each(function (i1, el1) { //tr
                if (brk) return
                if (i1 === 0) { //th
                    let inner = el1.childNodes[0]
                    if (inner.data.includes('备注')) {
                        brk = true
                        return
                    }
                    brk = false
                    num.push(...Array.from(inner.data.trim().matchAll(/\d+/g)).map(e => +e))
                } else { //td
                    $(this).children().each((i2, el2) => { //格子
                        const none = new RegExp(/display\s?:\s?none/)
                        if (el2.name === 'div' && !(el2.attribs && (el2.attribs.type === 'hidden' || none.test(el2.attribs.style)))) { //显示的格子
                            let cls = {
                                name: ''
                            }
                            el2.childNodes.forEach((node, index) => { //格子里每一行
                                if (node.type === 'text') {
                                    if (!node.data.trim()) return
                                    if (/^\-+$/.test(node.data.trim())) {//分割线
                                        result.push(cls)
                                        cls = {name: ''}
                                        return
                                    }
                                    cls.name += node.data.trim()
                                    cls.day = i1
                                } else {
                                    if (node.attribs && none.test(node.attribs.style)) return
                                    if (node.name === 'font') {
                                        if (node.attribs && node.attribs.title && node.attribs.title.includes('教师')) {
                                            cls.teacher = $(node).text().replace(/其他|副?教授|讲师|\(.+\)|（.+）/g, '').trim()
                                        } else if (node.attribs && node.attribs.title && node.attribs.title.includes('周次')) {
                                            let nodeStr = $(node).text().trim().replace(/(\[.*\])/, '');
                                            // let str = /(\d+[\s\-]*\d+|\d+)/g.exec(nodeStr)
                                            const matchedList = [...nodeStr.matchAll(/(?<target>\d+[\s\-]*\d+|\d+)/gi)]
                                                .map(value => [value.input, value.groups.target]);

                                            function calcWeekList(str) {
                                                console.log(str)
                                                if(!str[0] || !str[1]) return [];
                                                if (str[1].includes('-')) {
                                                    let arr = str[1].split('-'),
                                                        arr1 = Array(arr[1] - arr[0] + 1).fill(0).map((v, i) => +i + +arr[0].trim())
                                                    if (str[0].includes('单周')) {
                                                        return arr1.filter(v => v & 1)
                                                    } else if (str[0].includes('双周')) {
                                                        return arr1.filter(v => !(v & 1))
                                                    } else {
                                                        return arr1
                                                    }
                                                } else {
                                                    return str[1].split(',').map(v => +v.trim())
                                                }
                                            }

                                            const weeks = matchedList.map(value => calcWeekList(value));
                                            cls.weeks = [...(new Set(weeks.flat()))];

                                            // maxWeek = cls.weeks[cls.length-1];
                                            if (node.attribs && node.attribs.title && node.attribs.title.includes('节次')) {
                                                const sessionsStr = $(node).text().trim();
                                                const regex = /\[(?<begin>\d+)-(?<end>\d+)节\]/i;
                                                if (regex.test(sessionsStr)) {
                                                    const RegRes = regex.exec(sessionsStr);
                                                    const sessionArr = Array(Number(RegRes.groups.end) - Number(RegRes.groups.begin) + 1)
                                                        .fill(Number(RegRes.groups.begin))
                                                        .map((val, index) => Number(val) + index);
                                                    cls.sections = sessionArr;
                                                }
                                            }
                                        } else if (node.attribs && node.attribs.title && node.attribs.title.includes('教室')) {
                                            cls.position = $(node).text().trim()
                                        }
                                    }
                                }
                            })
                            if (cls.name) {
                                result.push(cls)
                            }
                            // console.info(cls)
                        }
                    })
                }
            })
        }
    })
    // console.info(result)
    return result
}


