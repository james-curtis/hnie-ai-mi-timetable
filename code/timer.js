/**
 * @description 这里在生产环境好像不能接参数，在本地测试可以接参数
 * @returns {Promise<{totalWeek: number, afternoon: number, night: number, startWithSunday: boolean, showWeekend: boolean, forenoon: number, sections: [{section: number, startTime: string, endTime: string},{section: number, startTime: string, endTime: string},{section: number, startTime: string, endTime: string},{section: number, startTime: string, endTime: string},{section: number, startTime: string, endTime: string},null,null,null,null,null]}>}
 */
async function scheduleTimer() {

    function getWinterTimeSections() {
        return [
            {
                section: 1,
                startTime: "08:00",
                endTime: "08:45"
            },
            {
                section: 2,
                startTime: "08:55",
                endTime: "09:40"
            },
            {
                section: 3,
                startTime: "10:10",
                endTime: "10:55"
            },
            {
                section: 4,
                startTime: "11:05",
                endTime: "11:50"
            },
            {
                section: 5,
                startTime: "14:00",
                endTime: "14:45"
            },
            {
                section: 6,
                startTime: "14:55",
                endTime: "15:40"
            },
            {
                section: 7,
                startTime: "16:10",
                endTime: "16:55"
            },
            {
                section: 8,
                startTime: "17:05",
                endTime: "17:50"
            },
            {
                section: 9,
                startTime: "19:00",
                endTime: "19:45"
            },
            {
                section: 10,
                startTime: "19:55",
                endTime: "20:40"
            },
            {
                section: 11,
                startTime: "20:50",
                endTime: "21:35"
            }
        ];
    }

    function getSummaryTimeSections() {
        return [
            {
                section: 1,
                startTime: "08:00",
                endTime: "08:45"
            },
            {
                section: 2,
                startTime: "08:55",
                endTime: "09:40"
            },
            {
                section: 3,
                startTime: "10:10",
                endTime: "10:55"
            },
            {
                section: 4,
                startTime: "11:05",
                endTime: "11:50"
            },
            {
                section: 5,
                startTime: "14:30",
                endTime: "15:15"
            },
            {
                section: 6,
                startTime: "15:25",
                endTime: "16:10"
            },
            {
                section: 7,
                startTime: "16:40",
                endTime: "17：25"
            },
            {
                section: 8,
                startTime: "17：35",
                endTime: "18：20"
            },
            {
                section: 9,
                startTime: "19：30",
                endTime: "20：15"
            },
            {
                section: 10,
                startTime: "20：25",
                endTime: "21：10"
            },
            {
                section: 11,
                startTime: "21：20",
                endTime: "22：05"
            }
        ];
    }

    const summary = '夏季';
    const winter = '冬季';
    function getSections(timer) {
        if (!timer) {
            return getSummaryTimeSections()
        } else {
            return getWinterTimeSections();
        }
    }

    await loadTool('AIScheduleTools')
    await AIScheduleAlert('数据收拣完毕！\n最后的最后，请手动设置一下开学日期和学期总周数哦！！！(导入功能不保证100%正确，为以防万一，最好检查一下确保无误哦)')

    // 确认模块，用于让用户选择是或者否，返回值为Boolean
    const userConfrim = await AIScheduleConfirm({
        // titleText: '请选择作息时间', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
        contentText: '请选择作息时间', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，为必传，不传显示版本号
        cancelText: summary, // 取消按钮文字，可不传默认为取消
        confirmText: winter, // 确认按钮文字，可不传默认为确认
    })

    let sec = getSections(userConfrim);

    // 支持异步操作 推荐await写法
    // 返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象
    let maxWeek = 30;
    // parserRes.map(value => {
    //     if (maxWeek < value.weeks.at(-1)) {
    //         maxWeek = value.weeks.at(-1);
    //     }
    // })
    return {
        totalWeek: maxWeek, // 总周数：[1, 30]之间的整数
        // startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: true, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: true, // 是否显示周末
        forenoon: 4, // 上午课程节数：[1, 10]之间的整数
        afternoon: 4, // 下午课程节数：[0, 10]之间的整数
        night: 3, // 晚间课程节数：[0, 10]之间的整数
        sections: sec, // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    }
    // PS: 夏令时什么的还是让用户在夏令时的时候重新导入一遍吧，在这个函数里边适配吧！奥里给！————不愿意透露姓名的嘤某人
}

