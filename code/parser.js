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
 *
 * trans
 * '[05-06-07-08节]'
 * to
 *
 * @param str
 * @returns {unknown[]}
 */
function transSections(str = '[05-07-08节]') {
    //计算sections
    const sessionsStr = str.trim();

    // [05-06-07-08节]
    const rawSession = sessionsStr.slice(1, -2)
    const sessionArr = rawSession.split('-').map(e => Number(e))
    let sessionArrKey = 0
    while (1) {
        if (sessionArr[sessionArrKey] + 1 !== sessionArr[sessionArrKey + 1]) {
            sessionArr.splice(sessionArrKey + 1, 0, sessionArr[sessionArrKey] + 1)
        }
        sessionArrKey++;
        if (sessionArrKey + 1 >= sessionArr.length) break;
    }
    console.log()
    return sessionArr
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
    } = str.match(/(?<week>.*?)(?<section>\[[\d-]+节\])/i).groups;

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
            info.weeks = $(el).text();
            Object.assign(info, transWeekRow(info.weeks))
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
            /**
             * 重点不能使用可选链
             */
            if (!$(realColEl) || !$(realColEl).html() || !$(realColEl).html().trim()) return;
            const colElHtml = $(realColEl).html().trim();
            const res = transGridHtmlBatch(colElHtml.split(/-{3,}/).map(e => e.trim()), currentDay);
            courseArr.push(...res);
        });
    });
    return courseArr;
}

function unique(arr) {
    let strArr = [...new Set(arr.map(e => JSON.stringify(e)))]
    return strArr.map(e => JSON.parse(e))
}

function scheduleHtmlParser(html) {
    try {
        console.log(1678094305000);
        return unique(trans(html));
    } catch (e) {
        console.error(e);
    }
}

// module.exports = {
//     scheduleHtmlParser,
//     transSections
// }