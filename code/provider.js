(async () => {
    const src = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js';
    const res = await fetch(src);
    const script = await res.text();
    eval(script);
    new VConsole({});
})();

async function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    await loadTool('AIScheduleTools')

    const frame = document.querySelector('iframe[src="/jsxsd/xskb/xskb_list.do"]');
    if (frame && frame.contentDocument && frame.contentDocument.getElementById('timetable')) {
        return frame.contentDocument.body.innerHTML;
    } else {
        await AIScheduleAlert('请点击"培养管理">"我的课表">"学期理论课表"，选择当前学期的课表，然后点击一键导入')
    }
    return 'do not continue';
}
