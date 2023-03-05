/**
 * trans
 * '3-11,13-15(周)'
 * to
 * Array(12) [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15]
 * @param weekStr
 * @returns {*[]}
 */
function transWeeks(weekStr = '3-11,13-15(周)') {
    /**
     * str[0] 原始html
     * str[1] e.g. 3-11,13-15
     * @param str
     * @returns {number[]|unknown[]|*[]}
     */
    function calcWeekList(str) {
        if (!str[0] || !str[1]) return [];
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

    // 计算weeks
    const matchedList = [...weekStr.matchAll(/(?<target>\d+[\s\-]*\d+|\d+)/gi)]
        .map(value => [value.input, value.groups.target]);
    let weeks = matchedList.map(value => calcWeekList(value));
    weeks = [...(new Set(weeks.flat()))];
    return weeks;
}

/**
 * trans
 * '[01-02节]'
 * to
 * Array(2) [1, 2]
 * @param str
 * @returns {unknown[]}
 */
function transSections(str = '[01-02节]') {
    //计算sections
    const sessionsStr = str.trim();
    const regex = /\[(?<begin>\d+)-(?<end>\d+)节\]/i;
    if (regex.test(sessionsStr)) {
        const RegRes = regex.exec(sessionsStr);
        const sessionArr = Array(Number(RegRes.groups.end) - Number(RegRes.groups.begin) + 1)
            .fill(Number(RegRes.groups.begin))
            .map((val, index) => Number(val) + index);
        return sessionArr;
    }
}

/**
 * trans
 * '3-11,13-15(周)[01-02节]'
 * to
 * {   "weeks": [     3,     4,     5,     6,     7,     8,     9,     10,     11,     13,     14,     15   ],   "sections": [     1,     2   ] }
 * @param str
 */
function transWeekRow(str = '3-11,13-15(周)[01-02节]') {

    const res = {
        weeks: undefined,
        sections: undefined,
    }
    let {
        week: weekStr,
        section: sectionStr
    } = str.match(/(?<week>.*?)(?<section>\[\d+-\d+节\])/i).groups;

    res.weeks = transWeeks(weekStr);

    res.sections = transSections(sectionStr);

    return res
}

function transGridHtml(html) {
    // example input
    // html = `<div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋601</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:63)<br></font>`;
    const $ = cheerio.load(html, {
        decodeEntities: false
    });
    const lines = $('font');

    const info = {
        name: undefined, // 课程名称
        position: undefined, // 上课地点
        teacher: undefined, // 教师名称
        weeks: undefined, // 周数
        day: undefined, // 星期
        sections: undefined, // 节次
    };
    info.name = $(lines[0]).text()
    lines.each(function (idx, el) {
        if (/<font\s+title="教师".+/i.test($(el).toString())) {
            info.teacher = $(el).text();
        }
    });
    lines.each(function (idx, el) {
        if (/<font\s+title="教室".+/i.test($(el).toString())) {
            info.position = $(el).text();
        }
    });
    lines.each(function (idx, el) {
        if (/<font\s+title="周次\(节次\)".+/i.test($(el).toString())) {
            info.position = $(el).text();
            Object.assign(info, transWeekRow(info.position))
        }
    });

    console.log()
    /*
     * example output
     * {
     *   "name": "大学英语（4）",
     *   "position": "3-11,13-15(周)[01-02节]",
     *   "teacher": "夏艳萍",
     *   "weeks": [
     *     3,
     *     4,
     *     5,
     *     6,
     *     7,
     *     8,
     *     9,
     *     10,
     *     11,
     *     13,
     *     14,
     *     15
     *   ],
     *   "sections": [
     *     1,
     *     2
     *   ]
     * }
     */
    return info;
}

/**
 *
 * @param htmlArr
 * @param day 星期
 */
function transGridHtmlBatch(htmlArr, day) {
    const res = [];
    for (const htmlArrElement of htmlArr) {
        const obj = transGridHtml(htmlArrElement);
        obj.day = day;
        res.push(obj);
    }
    return res;
}

function trans(html) {
    let $ = cheerio.load(html, {
        decodeEntities: false
    })
    const tbody = $('tbody');
    const rows = tbody.find('tr');
    const courseArr = [];
    rows.each((rowIdx, rowEl) => {
        // 每一行包括表头
        if (rowIdx === 0) return;
        $(rowEl).children().each((colIdx, colEl) => {
            const currentDay = colIdx;
            // 每一个格子
            if (colIdx === 0) return;
            let realColEl = $(colEl).children('.kbcontent').filter(function (i, e) {
                return $(this).text().trim() !== '';
            });
            // const coursePerGrid = []
            const colElHtml = $(realColEl)?.html()?.trim();
            if (!colElHtml) return;
            // console.log(rowIdx, colIdx, colElHtml);
            const res = transGridHtmlBatch(colElHtml.split(/--+/).map(e => e.trim()), currentDay);
            courseArr.push(...res);
            console.log()
        });
    });
    return courseArr;
}

function scheduleHtmlParser(html) {
    try {
        console.log(1678030416000);
        // return trans(html);
        return [
            {
                name: "数学", // 课程名称
                position: "教学楼1", // 上课地点
                teacher: "张三", // 教师名称
                weeks: [1, 2, 3, 4], // 周数
                day: 3, // 星期
                sections: [1, 2, 3], // 节次
            }, {
                name: "数学",
                position: "教学楼1",
                teacher: "张三",
                weeks: [1, 2, 3, 4],
                day: 1,
                sections: [1, 2, 3],
            },
        ];
    } catch (e) {
        console.error(e);
    }
}

/**
 * 老代码
 * @param html
 * @returns {*[]}
 */
function scheduleHtmlParserOld(html) {
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
                                                if (!str[0] || !str[1]) return [];
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

