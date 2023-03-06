const parser = require('../code/parser');

let html = `
<iframe id="notSession" name="notSession" style="display: none;" src=""></iframe>
<script type="text/javascript">
jQuery(document).ready(function(){
\twindow.setInterval(function(){
\t\t document.getElementById("notSession").src = "/jsxsd/framework/blankPage.jsp";
\t }, 1000 * 60 * 10);


});
</script>



<link rel="stylesheet" type="text/css" href="/jsxsd/assets_v1/css/personalPage/jsxsPersonjsxsgrkb.css">
<style>
    .sz{
        cursor: pointer
    }
    .search-form-content {
        width: 100%;
        padding: 12px 24px 0px 0px;
        min-height: 32px;
        float: left;

    }
    .search-line {
        width:248px;
        height: 32px;
        /*line-height: 32px;*/
        margin-left: 24px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        float:left;
    }
    .search-line_new {
        /*width:248px;*/
        height: 32px;
        /*line-height: 32px;*/
        margin-left: 24px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        float:left;
    }
    .search-line-label {
        float:left;
        width: 48px;
        font-size: 12px;
        height: 32px;
        /*line-height: 32px;*/
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .search-line-input {
        width: 190px;
        margin-left: 10px;
        float:left;

    }
    .search-line-button {
        width:248px;
        height: 32px;
        line-height: 32px;
        margin-left: 22px;
        margin-bottom: 16px;
        float:right;
        text-align: right;
    }
</style>

<style>
    .per-bg1{background: #F5B4FF;}
    .per-bg2{background: #FFB8B8;}
    .per-bg3{background: #FFD9B3;}
    .per-bg4{background: #C8C4FF;}
    .per-bg5{background: #CCFF99;}
    .per-bg6{background: #ECEDFD;}
    .per-bg7{background: #CCFFFF;}
    .per-bg8{background: #ff87b3;}
    .per-bg9{background: #F8F8F8;}
    .per-bg10{background: #FFFACD;}
    .per-bg11{background: #CCFFCC;}
    .per-bg12{background: #F86969;}
    .per-bg13{background: #FFE4E1;}
    .per-bg14{background: #ADD8E6;}
    .per-bg15{background: #FFC0CB;}
    .per-bg16{background: #FFFFCC;}
    .per-bg17{background: #99CCCC;}
    .per-bg18{background: #FF9999;}
    .per-bg19{background: #FFFF66;}
    .per-bg20{background: #FFCC66;}
    .per-bg21{background: #66CCCC;}
    .per-bg22{background: #CCCC99;}
</style>


 
<div class="Nsb_pw">
    







 
    <div class="Nsb_layout_r">
        <iframe style="display:none;" name="ifrmPrint" id="ifrmPrint"></iframe>
        <div class="Nsb_layout_r title">学期理论课表</div>
        <form action="" name="FormPrint" id="FormPrint" method="post" target="ifrmPrint">
        </form>
    </div>
</div>

<div class="content_box" style="height: auto;">
    <form action="" name="Form1" id="Form1" method="post" target="_self">
        <input type="hidden" name="cj0701id" id="cj0701id" value="">
        <div class="search-form-content" id="search-form-content">
            <div class="search-line">
                <div class="search-line-label"><span>周次</span></div>
                <div class="search-line-input">
                    <select name="zc" id="zc" onchange="javascript:document.getElementById('Form1').submit();">
                        <option value="">(全部)</option>
                        
                        <option value="1">第1周</option>
                        
                        <option value="2">第2周</option>
                        
                        <option value="3">第3周</option>
                        
                        <option value="4">第4周</option>
                        
                        <option value="5">第5周</option>
                        
                        <option value="6">第6周</option>
                        
                        <option value="7">第7周</option>
                        
                        <option value="8">第8周</option>
                        
                        <option value="9">第9周</option>
                        
                        <option value="10">第10周</option>
                        
                        <option value="11">第11周</option>
                        
                        <option value="12">第12周</option>
                        
                        <option value="13">第13周</option>
                        
                        <option value="14">第14周</option>
                        
                        <option value="15">第15周</option>
                        
                        <option value="16">第16周</option>
                        
                        <option value="17">第17周</option>
                        
                        <option value="18">第18周</option>
                        
                        <option value="19">第19周</option>
                        
                        <option value="20">第20周</option>
                        
                        <option value="21">第21周</option>
                        
                        <option value="22">第22周</option>
                        
                        <option value="23">第23周</option>
                        
                        <option value="24">第24周</option>
                        
                        <option value="25">第25周</option>
                        
                        <option value="26">第26周</option>
                        
                        <option value="27">第27周</option>
                        
                        <option value="28">第28周</option>
                        
                        <option value="29">第29周</option>
                        
                        <option value="30">第30周</option>
                        
                        </select><input type="hidden" name="demo" id="demo" value="">
                    
                </div>
            </div>
            <div class="search-line">
                <div class="search-line-label"><span>学年学期</span></div>
                <div class="search-line-input">
                    <select name="xnxq01id" id="xnxq01id" onchange="javascript:document.getElementById('Form1').submit();" 　style="width:180px;">
                        
                            <option value="2023-2024-1">2023-2024-1</option>
                        
                            <option value="2022-2023-2" selected="selected">2022-2023-2</option>
                        
                            <option value="2022-2023-1">2022-2023-1</option>
                        
                            <option value="2021-2022-2">2021-2022-2</option>
                        
                            <option value="2021-2022-1">2021-2022-1</option>
                        
                    </select>
                </div>
            </div>
            <div class="search-line_new">
                <input type="button" value="导出" class="button el-button" onclick="print(this)">&nbsp;
                <label class="checkbox checkbox-xs" style="margin-top: 15px;">
                    <input type="checkbox" name="sfFD" id="sfFD" value="1" onclick="funFD(this.checked)" checked="">
                    <i class="icon-checkbox"></i>
                    <span> 放大 </span>
                </label>
                <label class="checkbox checkbox-xs" style="margin-top: 15px;display: none"><!-- 下方展示无课表和有课表,沟通后去掉勾选 -->
                    <input type="checkbox" name="wkbkc" id="wkbkc" value="1" onclick="funShowWkbkc(this.checked)" checked="">
                    <i class="icon-checkbox"></i><span>显示无课表课程</span>
                </label>
                <label class="checkbox checkbox-xs" style=" margin: auto;">
                    <input type="checkbox" id="xstzd" name="xstzd" value="1" onclick="funShowXstzd(this.checked)" style="vertical-align:middle;">
                    <i class="icon-checkbox"></i><span>显示通知单编号</span>
                </label>
                <label class="checkbox checkbox-xs" style=" margin: auto;">
                    <input type="checkbox" id="xswk" name="xswk" value="1" onclick="funShowWkxx(this.checked)" style="vertical-align:middle;">
                    <i class="icon-checkbox"></i><span>显示网课群号及链接</span>
                </label>
                
                
                


            </div>
            <div class="search-line">
                <div class="search-line-label"><span>时间模式</span></div>
                <div class="search-line-input">
                    <select name="kbjcmsid" id="kbjcmsid" onchange="javascript:document.getElementById('Form1').submit();" style="width: 190px;">
                        
                            <option value="A8D5DE61BEA64EB79D2C4FDCE246D8FB" selected="selected">默认节次模式</option>
                        
                    </select>
                </div>
            </div>
            
        </div>
    </form>

    <table border="1" width="100%" id="timetable" bordercolor="#E5E5E5" style="border-color: silver">
        <tbody><tr>
            <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                &nbsp;
            </th>
            <th width="123" height="28" align="center" style="background: rgb(222,225,230)">星期一</th>
            <th width="123" height="28" align="center" style="background: rgb(222,225,230)">星期二</th>
            <th width="123" height="28" align="center" style="background: rgb(222,225,230)">星期三</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期四</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期五</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期六</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期日</th>
        </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第一大节&nbsp;
                    <br>(01,02小节)
                    <br>08:00-09:40
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-1-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">4,6,8,10(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">邬思奇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">4,6,8,10(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001996</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:30)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-2-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-2-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋601</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋601</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-2-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋601</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:63)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋601</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:63),讲课:63)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-3-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">4,6,8,10,14(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">余新宇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">4,6,8,10,14(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002002</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:60)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">余新宇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002002</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:60),讲课:60)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-4-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">邬思奇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001996</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:30)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-5-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-5-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">形势与政策（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">8-10(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋401</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-5-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">形势与政策（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">何艳辉</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">8-10(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋401</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001990</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001990" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：网络工程2102班,软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:6)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-6-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-7-4">

                    <div id="3C2B1EACE44A42909034297CEECB726C-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第二大节&nbsp;
                    <br>(03,04小节)
                    <br>10:10-11:50
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-1-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">余新宇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002002</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:60)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">余新宇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002002</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:60),讲课:60)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-2-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-2-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">4,6(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">5(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">7(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-2-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">张玉洁</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">4,6(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001994</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：网络工程2101班,软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:32)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">邬思奇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">5(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001996</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:32),讲课:30)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">JavaEE企业级项目开发（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">邬思奇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">7(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001996</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001996" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(((讲课:32),讲课:30),讲课:30)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">张玉洁</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001994</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：网络工程2101班,软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((((讲课:32),讲课:30),讲课:30),讲课:32)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-3-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">数据库原理与应用</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15,19-20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋206</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">数据库原理与应用</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘洞波</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15,19-20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋206</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002004</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:56)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-4-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">余新宇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002002</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:60)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">响应式Web开发技术</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">余新宇</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼E栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">实验楼E栋513</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002002</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002002" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:60),讲课:60)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-5-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-5-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-5-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-6-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-7-4">

                    <div id="A7BCD7B620204235BC214C3EADC209B7-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第三大节&nbsp;
                    <br>(05,06小节)
                    <br>14:00-15:40
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-1-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-14(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">谢雅</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-14(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001998</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:46)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">谢雅</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001998</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:46),讲课:46)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-2-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-2-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-2-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-3-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">体育（4）<br>(武术1（男）)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-19(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">虚拟教室</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">体育（4）<br>(武术1（男）)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">毛文德</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-19(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【艺术楼】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">虚拟教室</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232006940</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006940" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：生物工程[2101-2102]班,生物工程2102班,应用化学[2101-2104]班,物流管理[2101-2102]班,金融工程[2101-2102]班,统计学[2101-2102]班,数字经济[2101-2102]班,软件工程[2101-2102]班,数字媒体2101班,人力资源[2101-2102]班,工商管理[2101-2102]班,人工智能[2101-2102]班,经济学[2101-2102]班,测控技术[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实践:2)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-4-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:63)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:63),讲课:63)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-5-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-5-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-5-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">张玉洁</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001994</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：网络工程2101班,软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:32)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">概论(1)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">张玉洁</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001994</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001994" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：网络工程2101班,软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:32),讲课:32)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-6-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-7-4">

                    <div id="2261B930EA2148FDBCE85D01B638CC9C-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第四大节&nbsp;
                    <br>(07,08小节)
                    <br>16:10-17:50
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-1-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">数据库原理与应用</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15,19-20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋401</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">数据库原理与应用</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘洞波</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15,19-20(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋401</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002004</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002004" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:56)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-2-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-2-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-2-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-3-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-3-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-3-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-4-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-14(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">谢雅</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-14(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001998</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:46)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">软件工程</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">谢雅</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232001998</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232001998" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:46),讲课:46)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-5-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-5-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,13-15(双周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(双周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-5-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,13-15(双周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:63)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（4）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">夏艳萍</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(双周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋101</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232002000</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232002000" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：软件工程[2101-2102]班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:63),讲课:63)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-6-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-7-4">

                    <div id="2280DE07F5C94BE38224D0021CC98D69-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第五大节&nbsp;
                    <br>(09,10,11小节)
                    <br>19:00-21:35
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-1-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-1-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-1-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-2-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-2-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-2-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-3-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-3-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-3-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-4-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-4-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-4-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-5-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-5-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-5-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-6-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-7-4">

                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
        <tr>
            <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                备注:
            </th> <td colspan="7" align="left" style="color: #3B82FF;">公益劳动  12周;Web应用开发综合课设  16-18周;</td>
        </tr>
        
    </tbody></table>
    
    <form action="" name="shjhmxForm" id="shjhmxForm" method="post">
        <input type="hidden" name="sfykb" id="sfykb" value="1">
        <input type="hidden" name="xnxq" id="xnxq" value="">
        <input type="hidden" name="kbjcms" id="kbjcms" value="">
    </form>
    <table border="0" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px" bordercolor="#E5E5E5">
        <tbody><tr>
            <th width="70" height="28" align="left" colspan="11" style="font-size: 16px;">
                <input type="radio" name="kblx" value="1" checked="" onclick="chagkb(this)">无课表课程
                <input type="radio" name="kblx" value="2" onclick="chagkb(this)">有课表课程
                
            </th>
        </tr>
    </tbody></table>
    
    　<table id="dataTables" border="1" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px" bordercolor="#E5E5E5">
    
    <tbody><tr>
        <th width="70" height="28" align="left" colspan="11" style="font-size: 16px;">
            <b>无课表课程</b>
        </th>
    </tr>
    
    <tr>
        <th width="80" height="28" align="center">序号</th>
        <th width="80" height="28" align="center">上课班级</th>

        

        <th width="80" height="28" align="center">课程编号</th>
        <th width="120" height="28" align="center">课程名称</th>
        <th width="100" height="28" align="center">授课教师</th>
        
        <th width="80" height="28" align="center">排课人数</th>
        <th width="120" height="28" align="center">选课人数</th>
        
        
        <th width="60" height="28" align="center">课程性质</th>
        <th width="60" height="28" align="center">课程属性</th>
        
        
    </tr>
    
        <tr>
            <th width="70" align="center">
                    1&nbsp;
            </th>
            <td height="28" align="center" valign="top">
                    软件工程2102班
            </td>
            
            <td height="28" align="center" valign="top">
                    0502000
            </td>
            
                <td height="28" align="center" valign="top">
                        公益劳动
                </td>
            

            <td height="28" align="center" valign="top">
                    
            </td>
            
            <td height="28" align="center" valign="top">
                    50
            </td>
            <td height="28" align="center" valign="top">
                    50
            </td>
            
            
            <td height="28" align="center" valign="top">
                    实践环节
            </td>
            <td height="28" align="center" valign="top">
                    必修
            </td>
            
            
        </tr>
    
        <tr>
            <th width="70" align="center">
                    2&nbsp;
            </th>
            <td height="28" align="center" valign="top">
                    软件工程2102班
            </td>
            
            <td height="28" align="center" valign="top">
                    L0304524
            </td>
            
                <td height="28" align="center" valign="top">
                        Web应用开发综合课设
                </td>
            

            <td height="28" align="center" valign="top">
                    
            </td>
            
            <td height="28" align="center" valign="top">
                    50
            </td>
            <td height="28" align="center" valign="top">
                    50
            </td>
            
            
            <td height="28" align="center" valign="top">
                    实践环节
            </td>
            <td height="28" align="center" valign="top">
                    必修
            </td>
            
            
        </tr>
    
</tbody></table>
    
    　<table id="dataTables2" border="1" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px;display: none" bordercolor="#E5E5E5">
        <tbody><tr>
            <th width="70" height="28" align="left" colspan="11" style="font-size: 16px;">
                <b>有课表课程</b>
            </th>
        </tr>
        <tr>
            <th width="80" height="28" align="center">序号</th>
            <th width="80" height="28" align="center">上课班级</th>
            <th width="80" height="28" align="center">课程编号</th>
            <th width="120" height="28" align="center">课程名称</th>
            <th width="100" height="28" align="center">授课教师</th>
            <th width="80" height="28" align="center">排课人数</th>
            <th width="120" height="28" align="center">选课人数</th>
            <th width="60" height="28" align="center">课程性质</th>
            <th width="60" height="28" align="center">课程属性</th>
        </tr>
        
            <tr>
                <th width="70" align="center">
                        1&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        生物工程[2101-2102]班,生物工程2102班,应用化学[2101-2104]班,物流管理[2101-2102]班,金融工程[2101-2102]班,统计学[2101-2102]班,数字经济[2101-2102]班,软件工程[2101-2102]班,数字媒体2101班,人力资源[2101-2102]班,工商管理[2101-2102]班,人工智能[2101-2102]班,经济学[2101-2102]班,测控技术[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        1100003
                </td>
                <td height="28" align="center" valign="top">
                        体育（4）
                </td>
                <td height="28" align="center" valign="top">
                        毛文德
                </td>
                <td height="28" align="center" valign="top">
                        50
                </td>
                <td height="28" align="center" valign="top">
                        45
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        2&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        生物工程[2101-2102]班,生物工程2102班,应用化学[2101-2104]班,物流管理[2101-2102]班,金融工程[2101-2102]班,统计学[2101-2102]班,数字经济[2101-2102]班,软件工程[2101-2102]班,数字媒体2101班,人力资源[2101-2102]班,工商管理[2101-2102]班,人工智能[2101-2102]班,经济学[2101-2102]班,测控技术[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        1100003
                </td>
                <td height="28" align="center" valign="top">
                        体育（4）
                </td>
                <td height="28" align="center" valign="top">
                        毛文德
                </td>
                <td height="28" align="center" valign="top">
                        50
                </td>
                <td height="28" align="center" valign="top">
                        45
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        3&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L0302014
                </td>
                <td height="28" align="center" valign="top">
                        数据库原理与应用
                </td>
                <td height="28" align="center" valign="top">
                        刘洞波
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        4&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L0302504A
                </td>
                <td height="28" align="center" valign="top">
                        响应式Web开发技术
                </td>
                <td height="28" align="center" valign="top">
                        余新宇
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        5&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L0302504A
                </td>
                <td height="28" align="center" valign="top">
                        响应式Web开发技术
                </td>
                <td height="28" align="center" valign="top">
                        余新宇
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        6&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L0302505A
                </td>
                <td height="28" align="center" valign="top">
                        JavaEE企业级项目开发（1）
                </td>
                <td height="28" align="center" valign="top">
                        邬思奇
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        7&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L0302505A
                </td>
                <td height="28" align="center" valign="top">
                        JavaEE企业级项目开发（1）
                </td>
                <td height="28" align="center" valign="top">
                        邬思奇
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        8&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L035458
                </td>
                <td height="28" align="center" valign="top">
                        软件工程
                </td>
                <td height="28" align="center" valign="top">
                        谢雅
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        9&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L044267
                </td>
                <td height="28" align="center" valign="top">
                        大学英语（4）
                </td>
                <td height="28" align="center" valign="top">
                        夏艳萍
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        103
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        10&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        网络工程2102班,软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        L0503004
                </td>
                <td height="28" align="center" valign="top">
                        形势与政策（4）
                </td>
                <td height="28" align="center" valign="top">
                        何艳辉
                </td>
                <td height="28" align="center" valign="top">
                        135
                </td>
                <td height="28" align="center" valign="top">
                        135
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        11&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        网络工程2101班,软件工程[2101-2102]班
                </td>
                <td height="28" align="center" valign="top">
                        LS0511003
                </td>
                <td height="28" align="center" valign="top">
                        概论(1)
                </td>
                <td height="28" align="center" valign="top">
                        张玉洁
                </td>
                <td height="28" align="center" valign="top">
                        134
                </td>
                <td height="28" align="center" valign="top">
                        134
                </td>
                <td height="28" align="center" valign="top">
                        
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
    </tbody></table>
</div>
<div id="frameView" style="width:100%;height:100%">
    <iframe frameborder="0" id="fcenter" name="fcenter" style="HEIGHT:100%;width:100%;" scrolling="auto"></iframe>
</div>
<br>
 
<script language="javascript">
    
    function printtydc(){
        document.getElementById("xnxq").value=document.getElementById("xnxq01id").value;
        document.getElementById("kbjcms").value=document.getElementById("kbjcmsid").value;
        document.getElementById("shjhmxForm").target='hideFrame';
        document.getElementById("shjhmxForm").action = "/jsxsd/kbcx/pirntxsywkb";
        document.getElementById("shjhmxForm").submit();
        document.getElementById("shjhmxForm").target='';
    }
    function kbtc(t){
        var xswk=document.getElementById("xswk").checked;
        if(xswk||xswk=="checked"){
            t.previousElementSibling.style.display = "flex";
        }
    }
    function kbot(t) {
        t.previousElementSibling.style.display = "none";
    }
    function chagkb(obj){
        if(obj.value=="1"){
            $("#dataTables").show();
            $("#dataTables2").hide();
            document.getElementById("sfykb").value="1";
        }else if(obj.value=="2"){
            $("#dataTables2").show();
            $("#dataTables").hide();
            document.getElementById("sfykb").value="2";
        }
    }
    function qrxx(id) {
        if(confirm("是否确定确认？")){
            document.forms["Form1"].action = "/jsxsd/xskb/qrjx0501?jx0404id="+id;
            document.forms["Form1"].target="fcenter";
            document.forms["Form1"].submit();
        }
    }

    loadjs();
    function loadjs(){
        if( ''!=''){
            alert('');
        }

    }
    $(function () {
        var sy="";
        if(sy=="1"){
            waterMark();
        }
    })
    function indexSx1(type) {
        window.location.reload();
    }
       function waterMark(){
        $(document).ready(function() {
            //测试水印直接写把下面测试水印 替换为 userid 就可        //以动态添加水印了
            watermark({ watermark_txt: '非正式课表' })//传入动态水印内容  可以从Session中拿出你需要的用户信息
            function watermark(settings) {
                //默认设置
                var defaultSettings={
                    watermark_txt:"text",
                    watermark_x:100,//水印起始位置x轴坐标
                    watermark_y:150,//水印起始位置Y轴坐标
                    watermark_rows:20,//水印行数
                    watermark_cols:20,//水印列数
                    watermark_x_space:100,//水印x轴间隔
                    watermark_y_space:50,//水印y轴间隔
                    watermark_color:'#FF0000',//水印字体颜色
                    watermark_alpha:0.5,//水印透明度
                    watermark_fontsize:'20px',//水印字体大小
                    watermark_font:'微软雅黑',//水印字体
                    watermark_width:120,//水印宽度
                    watermark_height:80,//水印长度
                    watermark_angle:15//水印倾斜度数
                };
                //采用配置项替换默认值，作用类似jquery.extend
                if(arguments.length===1&&typeof arguments[0] ==="object" )
                {
                    var src=arguments[0]||{};
                    for(key in src)
                    {
                        if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
                            continue;
                        else if(src[key])
                            defaultSettings[key]=src[key];
                    }
                }

                var oTemp = document.createDocumentFragment();

                //获取页面最大宽度
                var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
                //获取页面最大长度
                var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);

                //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
                if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
                    defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
                    defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
                }
                //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
                if (defaultSettings.watermark_rows == 0 ||(parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
                    defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
                    defaultSettings.watermark_y_space = parseInt((page_height - defaultSettings.watermark_y - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
                }
                var x;
                var y;
                for (var i = 0; i < defaultSettings.watermark_rows; i++) {
                    y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
                    for (var j = 0; j < defaultSettings.watermark_cols; j++) {
                        x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

                        var mask_div = document.createElement('div');
                        mask_div.id = 'mask_div' + i + j;
                        mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
                        //设置水印div倾斜显示
                        mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.visibility = "";
                        mask_div.style.position = "absolute";
                        mask_div.style.left = x + 'px';
                        mask_div.style.top = y + 'px';
                        mask_div.style.overflow = "hidden";
                        mask_div.style.zIndex = "9999";
                        //mask_div.style.border="solid #eee 1px";
                        mask_div.style.opacity = defaultSettings.watermark_alpha;
                        mask_div.style.fontSize = defaultSettings.watermark_fontsize;
                        mask_div.style.fontFamily = defaultSettings.watermark_font;
                        mask_div.style.color = defaultSettings.watermark_color;
                        mask_div.style.textAlign = "center";
                        mask_div.style.width = defaultSettings.watermark_width + 'px';
                        mask_div.style.height = defaultSettings.watermark_height + 'px';
                        mask_div.style.display = "block";
                        oTemp.appendChild(mask_div);
                    };
                };
                document.body.appendChild(oTemp);
                // 给指定id添加水印效果
                //document.getElementById("waterMarkID").appendChild(oTemp);
            }
        });
    }

    //放大显示详细
    function funFD(flag){
        if(flag){
            var jx0415zbdiv_1 = document.getElementsByName("jx0415zbdiv_1");
            for(var i = 0; i < jx0415zbdiv_1.length; i++){
                document.getElementById(jx0415zbdiv_1[i].value).style.display="none";
            }
            var jx0415zbdiv_2 = document.getElementsByName("jx0415zbdiv_2");
            for(var i = 0; i < jx0415zbdiv_2.length; i++){
                document.getElementById(jx0415zbdiv_2[i].value).style.display="";
            }
        }else{
            var jx0415zbdiv_1 = document.getElementsByName("jx0415zbdiv_1");
            for(var i = 0; i < jx0415zbdiv_1.length; i++){
                document.getElementById(jx0415zbdiv_1[i].value).style.display="";
            }
            var jx0415zbdiv_2 = document.getElementsByName("jx0415zbdiv_2");
            for(var i = 0; i < jx0415zbdiv_2.length; i++){
                document.getElementById(jx0415zbdiv_2[i].value).style.display="none";
            }
        }
    }

    function funShowXsfl(flag){
        if(flag){
            var jx0415zbdiv_4 = document.getElementsByName("jx0415zbdiv_4");
            for(var i = 0; i < jx0415zbdiv_4.length; i++){
                document.getElementById(jx0415zbdiv_4[i].value).style.display="";
            }
            $("font[name='xsks']").show();
        }else{
            var jx0415zbdiv_4 = document.getElementsByName("jx0415zbdiv_4");
            for(var i = 0; i < jx0415zbdiv_4.length; i++){
                document.getElementById(jx0415zbdiv_4[i].value).style.display="none";
            }
            $("font[name='xsks']").hide();
        }
    }
    function funShowWkbkc(flag){
        if(flag){
            $("#dataTables").show();
        }else{
            $("#dataTables").hide();
        }
    }
    function funShowAlljxlmc(flag){
        if(flag){
            $("font[name='jxlmc']").show();
        }else{
            $("font[name='jxlmc']").hide();
        }
    }
    function  funShowXsjxbz(flag) {
        if(flag){
            $("font[name='jxbz']").show();
        }else{
            $("font[name='jxbz']").hide();
        }
    }
    function  funShowXstzd(flag) {
        if(flag){
            $("font[name='tzdbh']").show();
        }else{
            $("font[name='tzdbh']").hide();
        }
    }
    function  funShowWkxx(flag) {
        if(flag){
            $("font[name='wkxx']").show();
        }else{
            $("font[name='wkxx']").hide();
        }
    }
    function  funShowktmc(flag) {
        if(flag){
            $("font[name='ktmcstr']").show();
        }else{
            $("font[name='ktmcstr']").hide();
        }
    }
    function  funShowbz(flag) {
        if(flag){
            $("font[name='bzstr']").show();
        }else{
            $("font[name='bzstr']").hide();
        }
    }
    function search(obj){
        if(obj != null){
            obj.value = "查询中";
            obj.disabled = true;
        }
        document.getElementById('Form1').submit();
    }
    function print(obj){
        var url = "";
        var xnxq01id = document.getElementById("xnxq01id").value ;
        var zc = document.getElementById("zc").value ;
        var sjms = document.getElementById("kbjcmsid");

        url += "?xnxq01id="+xnxq01id;
        url += "&zc="+zc;
        
        var kbjcmsid = "";
        if(sjms){
            kbjcmsid = sjms.value;
            url += "&kbjcmsid="+kbjcmsid;
        }
        if($( '#wkbkc').is( ':checked')) {
            url += "&wkbkc=1";
        }
        if($( '#xswk').is( ':checked')) {
            url += "&xswk=1";
        }
        
        
        document.getElementById("FormPrint").action = "/jsxsd/xskb/xskb_print.do"+url;
        

        document.getElementById("FormPrint").submit();
    }
    funFD(document.getElementById("sfFD").checked);

    
    function scEwm(jx0408id) {
        JsMod("/jsxsd/jskb/kcewm?jx0408id="+jx0408id+"&type=1",460,350);
    }

    function jbkbck(){
        var xnxq01id=document.getElementById("xnxq01id").value;
        var kbjcmsid=document.getElementById("kbjcmsid").value;
        if(xnxq01id== ""){
            alert("请选择学年学期！");
            return false;
        }
        if(kbjcmsid== ""){
            alert("请选择时间模式！");
            return false;
        }

        JsMAdd("/jsxsd/xskb/viewtable.do?xnxq01id="+xnxq01id+"&kbjcmsid="+kbjcmsid+ "&xs0101id=202110050329&lx=xs0101id",1500,1000);

    }

    function JsMAdd(htmlurl,tmpWidth,tmpHeight){
        var newwin = window.showModalDialog(htmlurl,"","dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");
        if (newwin != null && newwin == "ok")
        {
            creating.style.visibility='visible';
            window.Form1.submit();
        }
    }
    function ylkcdg(jx02id) {
        window.showModalDialog('/jsxsd/xskb/ylkcdg?jx02id='+jx02id,window,"dialogHeight:800px; dialogWidth:1000px");
    }
</script>

`

//旅游管理

html1 =`<iframe id="notSession" name="notSession" style="display: none;" src=""></iframe>
<script type="text/javascript">
jQuery(document).ready(function(){
\twindow.setInterval(function(){
\t\t document.getElementById("notSession").src = "/jsxsd/framework/blankPage.jsp";
\t }, 1000 * 60 * 10);


});
</script>



<link rel="stylesheet" type="text/css" href="/jsxsd/assets_v1/css/personalPage/jsxsPersonjsxsgrkb.css">
<style>
    .sz{
        cursor: pointer
    }
    .search-form-content {
        width: 100%;
        padding: 12px 24px 0px 0px;
        min-height: 32px;
        float: left;

    }
    .search-line {
        width:248px;
        height: 32px;
        /*line-height: 32px;*/
        margin-left: 24px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        float:left;
    }
    .search-line_new {
        /*width:248px;*/
        height: 32px;
        /*line-height: 32px;*/
        margin-left: 24px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        float:left;
    }
    .search-line-label {
        float:left;
        width: 48px;
        font-size: 12px;
        height: 32px;
        /*line-height: 32px;*/
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .search-line-input {
        width: 190px;
        margin-left: 10px;
        float:left;

    }
    .search-line-button {
        width:248px;
        height: 32px;
        line-height: 32px;
        margin-left: 22px;
        margin-bottom: 16px;
        float:right;
        text-align: right;
    }
</style>

<style>
    .per-bg1{background: #F5B4FF;}
    .per-bg2{background: #FFB8B8;}
    .per-bg3{background: #FFD9B3;}
    .per-bg4{background: #C8C4FF;}
    .per-bg5{background: #CCFF99;}
    .per-bg6{background: #ECEDFD;}
    .per-bg7{background: #CCFFFF;}
    .per-bg8{background: #ff87b3;}
    .per-bg9{background: #F8F8F8;}
    .per-bg10{background: #FFFACD;}
    .per-bg11{background: #CCFFCC;}
    .per-bg12{background: #F86969;}
    .per-bg13{background: #FFE4E1;}
    .per-bg14{background: #ADD8E6;}
    .per-bg15{background: #FFC0CB;}
    .per-bg16{background: #FFFFCC;}
    .per-bg17{background: #99CCCC;}
    .per-bg18{background: #FF9999;}
    .per-bg19{background: #FFFF66;}
    .per-bg20{background: #FFCC66;}
    .per-bg21{background: #66CCCC;}
    .per-bg22{background: #CCCC99;}
</style>


 
<div class="Nsb_pw">
    







 
    <div class="Nsb_layout_r">
        <iframe style="display:none;" name="ifrmPrint" id="ifrmPrint"></iframe>
        <div class="Nsb_layout_r title">学期理论课表</div>
        <form action="" name="FormPrint" id="FormPrint" method="post" target="ifrmPrint">
        </form>
    </div>
</div>

<div class="content_box" style="height: auto;">
    <form action="" name="Form1" id="Form1" method="post" target="_self">
        <input type="hidden" name="cj0701id" id="cj0701id" value="">
        <div class="search-form-content" id="search-form-content">
            <div class="search-line">
                <div class="search-line-label"><span>周次</span></div>
                <div class="search-line-input">
                    <select name="zc" id="zc" onchange="javascript:document.getElementById('Form1').submit();">
                        <option value="">(全部)</option>
                        
                        <option value="1">第1周</option>
                        
                        <option value="2">第2周</option>
                        
                        <option value="3">第3周</option>
                        
                        <option value="4">第4周</option>
                        
                        <option value="5">第5周</option>
                        
                        <option value="6">第6周</option>
                        
                        <option value="7">第7周</option>
                        
                        <option value="8">第8周</option>
                        
                        <option value="9">第9周</option>
                        
                        <option value="10">第10周</option>
                        
                        <option value="11">第11周</option>
                        
                        <option value="12">第12周</option>
                        
                        <option value="13">第13周</option>
                        
                        <option value="14">第14周</option>
                        
                        <option value="15">第15周</option>
                        
                        <option value="16">第16周</option>
                        
                        <option value="17">第17周</option>
                        
                        <option value="18">第18周</option>
                        
                        <option value="19">第19周</option>
                        
                        <option value="20">第20周</option>
                        
                        <option value="21">第21周</option>
                        
                        <option value="22">第22周</option>
                        
                        <option value="23">第23周</option>
                        
                        <option value="24">第24周</option>
                        
                        <option value="25">第25周</option>
                        
                        <option value="26">第26周</option>
                        
                        <option value="27">第27周</option>
                        
                        <option value="28">第28周</option>
                        
                        <option value="29">第29周</option>
                        
                        <option value="30">第30周</option>
                        
                        </select><input type="hidden" name="demo" id="demo" value="">
                    
                </div>
            </div>
            <div class="search-line">
                <div class="search-line-label"><span>学年学期</span></div>
                <div class="search-line-input">
                    <select name="xnxq01id" id="xnxq01id" onchange="javascript:document.getElementById('Form1').submit();" 　style="width:180px;">
                        
                            <option value="2023-2024-1">2023-2024-1</option>
                        
                            <option value="2022-2023-2" selected="selected">2022-2023-2</option>
                        
                            <option value="2022-2023-1">2022-2023-1</option>
                        
                    </select>
                </div>
            </div>
            <div class="search-line_new">
                <input type="button" value="导出" class="button el-button" onclick="print(this)">&nbsp;
                <label class="checkbox checkbox-xs" style="margin-top: 15px;">
                    <input type="checkbox" name="sfFD" id="sfFD" value="1" onclick="funFD(this.checked)" checked="">
                    <i class="icon-checkbox"></i>
                    <span> 放大 </span>
                </label>
                <label class="checkbox checkbox-xs" style="margin-top: 15px;display: none"><!-- 下方展示无课表和有课表,沟通后去掉勾选 -->
                    <input type="checkbox" name="wkbkc" id="wkbkc" value="1" onclick="funShowWkbkc(this.checked)" checked="">
                    <i class="icon-checkbox"></i><span>显示无课表课程</span>
                </label>
                <label class="checkbox checkbox-xs" style=" margin: auto;">
                    <input type="checkbox" id="xstzd" name="xstzd" value="1" onclick="funShowXstzd(this.checked)" style="vertical-align:middle;">
                    <i class="icon-checkbox"></i><span>显示通知单编号</span>
                </label>
                <label class="checkbox checkbox-xs" style=" margin: auto;">
                    <input type="checkbox" id="xswk" name="xswk" value="1" onclick="funShowWkxx(this.checked)" style="vertical-align:middle;">
                    <i class="icon-checkbox"></i><span>显示网课群号及链接</span>
                </label>
                
                
                


            </div>
            <div class="search-line">
                <div class="search-line-label"><span>时间模式</span></div>
                <div class="search-line-input">
                    <select name="kbjcmsid" id="kbjcmsid" onchange="javascript:document.getElementById('Form1').submit();" style="width: 190px;">
                        
                            <option value="A8D5DE61BEA64EB79D2C4FDCE246D8FB" selected="selected">默认节次模式</option>
                        
                    </select>
                </div>
            </div>
            
        </div>
    </form>

    <table border="1" width="100%" id="timetable" bordercolor="#E5E5E5" style="border-color: silver">
        <tbody><tr>
            <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                &nbsp;
            </th>
            <th width="123" height="28" align="center" style="background: rgb(222,225,230)">星期一</th>
            <th width="123" height="28" align="center" style="background: rgb(222,225,230)">星期二</th>
            <th width="123" height="28" align="center" style="background: rgb(222,225,230)">星期三</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期四</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期五</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期六</th>
            <th width="124" height="28" align="center" style="background: rgb(222,225,230)">星期日</th>
        </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第一大节&nbsp;
                    <br>(01,02小节)
                    <br>08:00-09:40
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-1-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-1-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-1-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-2-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-2-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,15,18-19(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-2-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡蓉晖</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,15,18-19(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003305</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：市场营销[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:70)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡蓉晖</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋201</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003305</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：市场营销[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:70),讲课:70)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-3-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">4,6,8,10,12,16(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教C栋403</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">G栋411</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">曹云野</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">4,6,8,10,12,16(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼C栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教C栋403</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003630</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:38)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">曹云野</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【实验楼G栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">G栋411</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003630</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:38),讲课:38)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-4-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">线性代数</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,16-19(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋402</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">线性代数</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋402</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">线性代数</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">喻汉夫</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,16-19(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋402</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003624</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：工商管理[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:28)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">线性代数</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">喻汉夫</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[01-02节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋402</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003624</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003624" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：工商管理[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:28),讲课:28)<br></font></div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-5-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-5-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-5-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-6-4">
                    <div id="3C2B1EACE44A42909034297CEECB726C-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="3C2B1EACE44A42909034297CEECB726C-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="3C2B1EACE44A42909034297CEECB726C-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="3C2B1EACE44A42909034297CEECB726C-7-4">

                    <div id="3C2B1EACE44A42909034297CEECB726C-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="3C2B1EACE44A42909034297CEECB726C-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第二大节&nbsp;
                    <br>(03,04小节)
                    <br>10:10-11:50
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-1-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">旅游礼仪学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-12,14-18(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋102</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">旅游礼仪学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋102</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">旅游礼仪学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘伏英</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-12,14-18(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋102</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003626</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:32)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">旅游礼仪学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘伏英</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋102</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003626</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003626" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:32),讲课:32)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-2-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-2-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3,5-11,15-18(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-2-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡高飞</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3,5-11,15-18(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003629</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：人力资源[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:38)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡高飞</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003629</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：人力资源[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:38),讲课:38)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-3-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-12,15-19(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋107</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋107</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">杨源</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-12,15-19(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋107</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003623</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:30)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学英语（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">杨源</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋107</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003623</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003623" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:30),讲课:30)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-4-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">5,7,9,11,16,18(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡高飞</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">5,7,9,11,16,18(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003629</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：人力资源[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:38)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">思想道德与法治</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡高飞</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003629</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003629" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：人力资源[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:38),讲课:38)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-5-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-5-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">体育（2）<br>(羽毛球（女）)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-19(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">虚拟教室</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">体育（2）<br>(羽毛球（女）)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">虚拟教室</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-5-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">体育（2）<br>(羽毛球（女）)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">杨洁1</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-19(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【艺术楼】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">虚拟教室</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232006865</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：数字媒体2201班,人力资源[2201-2202]班,应用化学[2201-2204]班,经济学[2201-2202]班,工业工程[2201-2204]班,金融工程[2201-2202]班,国际贸易[2201-2202]班,市场营销[2201-2202]班,电子信息[2201-2205]班,软件工程[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:32,实践:4)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">体育（2）<br>(羽毛球（女）)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">杨洁1</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[03-04节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【艺术楼】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">虚拟教室</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232006865</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232006865" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：数字媒体2201班,人力资源[2201-2202]班,应用化学[2201-2204]班,经济学[2201-2202]班,工业工程[2201-2204]班,金融工程[2201-2202]班,国际贸易[2201-2202]班,市场营销[2201-2202]班,电子信息[2201-2205]班,软件工程[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:32,实践:4),讲课:32,实践:4)<br></font></div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-6-4">
                    <div id="A7BCD7B620204235BC214C3EADC209B7-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="A7BCD7B620204235BC214C3EADC209B7-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="A7BCD7B620204235BC214C3EADC209B7-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="A7BCD7B620204235BC214C3EADC209B7-7-4">

                    <div id="A7BCD7B620204235BC214C3EADC209B7-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="A7BCD7B620204235BC214C3EADC209B7-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第三大节&nbsp;
                    <br>(05,06小节)
                    <br>14:00-15:40
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-1-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">导游实务</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-12,14-18(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋309</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">导游实务</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋309</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">导游实务</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">米振华</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-12,14-18(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋309</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003622</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:32)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">导游实务</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">米振华</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋309</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003622</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003622" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:32),讲课:32)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-2-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-2-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-2-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-3-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学生职业发展与就业指导（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-6(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋204</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学生职业发展与就业指导（1）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">彭小玲</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-6(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋204</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003619</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003619" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:8)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-4-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">管理学A</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-12,14-16(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教C栋208</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">管理学A</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">吴振顺</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-12,14-16(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼C栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教C栋208</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003628</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:38)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-5-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-5-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-11,15,18-19(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋603</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋603</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-5-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡蓉晖</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-11,15,18-19(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋603</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003305</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：市场营销[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:70)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡蓉晖</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[05-06节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋603</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003305</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：市场营销[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:70),讲课:70)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-6-4">
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2261B930EA2148FDBCE85D01B638CC9C-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2261B930EA2148FDBCE85D01B638CC9C-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2261B930EA2148FDBCE85D01B638CC9C-7-4">

                    <div id="2261B930EA2148FDBCE85D01B638CC9C-7-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">军事理论及国家安全教育</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">5-10(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-7-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">军事理论及国家安全教育</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘宸均</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">5-10(周)[05-06-07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003627</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：人力资源2201班,物流管理2202班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:24)<br></font></div>
                    <div id="2261B930EA2148FDBCE85D01B638CC9C-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第四大节&nbsp;
                    <br>(07,08小节)
                    <br>16:10-17:50
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-1-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-1-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">形势与政策</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">9-11(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教C栋406</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-1-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">形势与政策</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">钟周丽嫄</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">9-11(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼C栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教C栋406</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232004864</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232004864" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：工商管理[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:6)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-2-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-2-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">管理学A</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3,5,7,9,11,15(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教A栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-2-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">管理学A</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">吴振顺</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3,5,7,9,11,15(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼A栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教A栋301</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003628</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003628" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:38)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-3-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-3-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">2-11,15,18-20(单周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋603</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-3-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">高等数学B（2）</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">胡蓉晖</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">2-11,15,18-20(单周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋603</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003305</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003305" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：市场营销[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:70)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-4-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-4-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学生心理及健康教育</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-10(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教D栋203</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-4-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">大学生心理及健康教育</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘琤</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-10(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼D栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教D栋203</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232008726</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232008726" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：物流管理[2201-2202]班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:16)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-5-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-5-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">3-12,15-16(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋204</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br>----------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">20(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋204</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-5-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">曹云野</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">3-12,15-16(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋204</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003630</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:38)<br></font>---------------------<br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">西方经济学</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">曹云野</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">20(周)[07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋204</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003630</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003630" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">((讲课:38),讲课:38)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-6-4">
                    <div id="2280DE07F5C94BE38224D0021CC98D69-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="2280DE07F5C94BE38224D0021CC98D69-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="2280DE07F5C94BE38224D0021CC98D69-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="2280DE07F5C94BE38224D0021CC98D69-7-4">

                    <div id="2280DE07F5C94BE38224D0021CC98D69-7-1" style="display: none;position: relative" class="kbcontent1"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">军事理论及国家安全教育</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="周次(节次)">5-10(周)</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)" title="教室">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-7-2" style="position: relative;" class="kbcontent"><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font onmouseover="kbtc(this)" onmouseout="kbot(this)">军事理论及国家安全教育</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="教师" onmouseover="kbtc(this)" onmouseout="kbot(this)">刘宸均</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="周次(节次)" onmouseover="kbtc(this)" onmouseout="kbot(this)">5-10(周)[05-06-07-08节]</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="教学楼" name="jxlmc" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)">【1教学楼B栋】</font><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font title="教室" onmouseover="kbtc(this)" onmouseout="kbot(this)">1教B栋106</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font name="tzdbh" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)" title="通知单编号">通知单编号：202220232003627</font><br><div class="item-box" style="display:none;"><img src="/jsxsd/jsxx/ewmck?id=202220232003627" width="80/"></div><font name="wkxx" style="display:none;" onmouseover="kbtc(this)" onmouseout="kbot(this)"><br></font><br><font name="ktmcstr" style="display:none;" title="班级">班级：人力资源2201班,物流管理2202班,旅游管理2201班</font><br><font name="bzstr" style="display:none;" title="备注">备注：</font><br><font name="xsks" color="black" style="display:none;">(讲课:24)<br></font></div>
                    <div id="2280DE07F5C94BE38224D0021CC98D69-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
            <tr>
                <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                        第五大节&nbsp;
                    <br>(09,10,11小节)
                    <br>19:00-21:35
                </th>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-1-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-1-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-1-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-1-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-1-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-1-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-2-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-2-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-2-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-2-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-2-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-2-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-3-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-3-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-3-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-3-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-3-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-3-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-4-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-4-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-4-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-4-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-4-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-4-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-5-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-5-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-5-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-5-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-5-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-5-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-6-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-6-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-6-4">
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-6-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-6-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-6-4" style="display:none;" class="kbcontent"></div>
                </td>
                <td width="123" height="28" align="center" valign="top">
                    <input type="hidden" name="jx0415zbdiv_1" value="B55B0D8D0F4647ED8C81BFC0067E484A-7-1">
                    <input type="hidden" name="jx0415zbdiv_2" value="B55B0D8D0F4647ED8C81BFC0067E484A-7-2">
                    <input type="hidden" name="jx0415zbdiv_4" value="B55B0D8D0F4647ED8C81BFC0067E484A-7-4">

                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-7-1" style="display: none;position: relative" class="kbcontent1">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-7-2" style="position: relative;" class="kbcontent">&nbsp;</div>
                    <div id="B55B0D8D0F4647ED8C81BFC0067E484A-7-4" style="display:none;" class="kbcontent"></div>
                </td>

            </tr>
        
        <tr>
            <th width="70" height="28" align="center" style="background: rgb(222,225,230)">
                备注:
            </th> <td colspan="7" align="left" style="color: #3B82FF;">礼仪实训  2-19周;英语应用能力实践  14周;</td>
        </tr>
        
    </tbody></table>
    
    <form action="" name="shjhmxForm" id="shjhmxForm" method="post">
        <input type="hidden" name="sfykb" id="sfykb" value="1">
        <input type="hidden" name="xnxq" id="xnxq" value="">
        <input type="hidden" name="kbjcms" id="kbjcms" value="">
    </form>
    <table border="0" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px" bordercolor="#E5E5E5">
        <tbody><tr>
            <th width="70" height="28" align="left" colspan="11" style="font-size: 16px;">
                <input type="radio" name="kblx" value="1" checked="" onclick="chagkb(this)">无课表课程
                <input type="radio" name="kblx" value="2" onclick="chagkb(this)">有课表课程
                
            </th>
        </tr>
    </tbody></table>
    
    　<table id="dataTables" border="1" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px" bordercolor="#E5E5E5">
    
    <tbody><tr>
        <th width="70" height="28" align="left" colspan="11" style="font-size: 16px;">
            <b>无课表课程</b>
        </th>
    </tr>
    
    <tr>
        <th width="80" height="28" align="center">序号</th>
        <th width="80" height="28" align="center">上课班级</th>

        

        <th width="80" height="28" align="center">课程编号</th>
        <th width="120" height="28" align="center">课程名称</th>
        <th width="100" height="28" align="center">授课教师</th>
        
        <th width="80" height="28" align="center">排课人数</th>
        <th width="120" height="28" align="center">选课人数</th>
        
        
        <th width="60" height="28" align="center">课程性质</th>
        <th width="60" height="28" align="center">课程属性</th>
        
        
    </tr>
    
        <tr>
            <th width="70" align="center">
                    1&nbsp;
            </th>
            <td height="28" align="center" valign="top">
                    旅游管理2201班
            </td>
            
            <td height="28" align="center" valign="top">
                    0402000
            </td>
            
                <td height="28" align="center" valign="top">
                        英语应用能力实践
                </td>
            

            <td height="28" align="center" valign="top">
                    
            </td>
            
            <td height="28" align="center" valign="top">
                    38
            </td>
            <td height="28" align="center" valign="top">
                    38
            </td>
            
            
            <td height="28" align="center" valign="top">
                    实践环节
            </td>
            <td height="28" align="center" valign="top">
                    必修
            </td>
            
            
        </tr>
    
        <tr>
            <th width="70" align="center">
                    2&nbsp;
            </th>
            <td height="28" align="center" valign="top">
                    旅游管理2201班
            </td>
            
            <td height="28" align="center" valign="top">
                    0502002
            </td>
            
                <td height="28" align="center" valign="top">
                        社会调查
                </td>
            

            <td height="28" align="center" valign="top">
                    
            </td>
            
            <td height="28" align="center" valign="top">
                    38
            </td>
            <td height="28" align="center" valign="top">
                    38
            </td>
            
            
            <td height="28" align="center" valign="top">
                    实践环节
            </td>
            <td height="28" align="center" valign="top">
                    必修
            </td>
            
            
        </tr>
    
        <tr>
            <th width="70" align="center">
                    3&nbsp;
            </th>
            <td height="28" align="center" valign="top">
                    旅游管理2201班
            </td>
            
            <td height="28" align="center" valign="top">
                    0702601
            </td>
            
                <td height="28" align="center" valign="top">
                        礼仪实训
                </td>
            

            <td height="28" align="center" valign="top">
                    
            </td>
            
            <td height="28" align="center" valign="top">
                    38
            </td>
            <td height="28" align="center" valign="top">
                    38
            </td>
            
            
            <td height="28" align="center" valign="top">
                    实践环节
            </td>
            <td height="28" align="center" valign="top">
                    必修
            </td>
            
            
        </tr>
    
</tbody></table>
    
    　<table id="dataTables2" border="1" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px;display: none" bordercolor="#E5E5E5">
        <tbody><tr>
            <th width="70" height="28" align="left" colspan="11" style="font-size: 16px;">
                <b>有课表课程</b>
            </th>
        </tr>
        <tr>
            <th width="80" height="28" align="center">序号</th>
            <th width="80" height="28" align="center">上课班级</th>
            <th width="80" height="28" align="center">课程编号</th>
            <th width="120" height="28" align="center">课程名称</th>
            <th width="100" height="28" align="center">授课教师</th>
            <th width="80" height="28" align="center">排课人数</th>
            <th width="120" height="28" align="center">选课人数</th>
            <th width="60" height="28" align="center">课程性质</th>
            <th width="60" height="28" align="center">课程属性</th>
        </tr>
        
            <tr>
                <th width="70" align="center">
                        1&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0010000
                </td>
                <td height="28" align="center" valign="top">
                        大学生职业发展与就业指导（1）
                </td>
                <td height="28" align="center" valign="top">
                        彭小玲
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        2&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0400001
                </td>
                <td height="28" align="center" valign="top">
                        大学英语（2）
                </td>
                <td height="28" align="center" valign="top">
                        杨源
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        3&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        人力资源[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0500000
                </td>
                <td height="28" align="center" valign="top">
                        思想道德与法治
                </td>
                <td height="28" align="center" valign="top">
                        胡高飞
                </td>
                <td height="28" align="center" valign="top">
                        102
                </td>
                <td height="28" align="center" valign="top">
                        102
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        4&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        工商管理[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0500005
                </td>
                <td height="28" align="center" valign="top">
                        形势与政策
                </td>
                <td height="28" align="center" valign="top">
                        钟周丽嫄
                </td>
                <td height="28" align="center" valign="top">
                        102
                </td>
                <td height="28" align="center" valign="top">
                        102
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        5&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0700000
                </td>
                <td height="28" align="center" valign="top">
                        管理学A
                </td>
                <td height="28" align="center" valign="top">
                        吴振顺
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        学科基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        6&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0700000
                </td>
                <td height="28" align="center" valign="top">
                        管理学A
                </td>
                <td height="28" align="center" valign="top">
                        吴振顺
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        学科基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        7&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0700606
                </td>
                <td height="28" align="center" valign="top">
                        旅游礼仪学
                </td>
                <td height="28" align="center" valign="top">
                        刘伏英
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        学科基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        8&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        0700613
                </td>
                <td height="28" align="center" valign="top">
                        导游实务
                </td>
                <td height="28" align="center" valign="top">
                        米振华
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        专业课
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        9&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        市场营销[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1000003
                </td>
                <td height="28" align="center" valign="top">
                        高等数学B（2）
                </td>
                <td height="28" align="center" valign="top">
                        胡蓉晖
                </td>
                <td height="28" align="center" valign="top">
                        101
                </td>
                <td height="28" align="center" valign="top">
                        101
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        10&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        工商管理[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1000004
                </td>
                <td height="28" align="center" valign="top">
                        线性代数
                </td>
                <td height="28" align="center" valign="top">
                        喻汉夫
                </td>
                <td height="28" align="center" valign="top">
                        102
                </td>
                <td height="28" align="center" valign="top">
                        102
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        11&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        数字媒体2201班,人力资源[2201-2202]班,应用化学[2201-2204]班,经济学[2201-2202]班,工业工程[2201-2204]班,金融工程[2201-2202]班,国际贸易[2201-2202]班,市场营销[2201-2202]班,电子信息[2201-2205]班,软件工程[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1100001
                </td>
                <td height="28" align="center" valign="top">
                        体育（2）
                </td>
                <td height="28" align="center" valign="top">
                        杨洁1
                </td>
                <td height="28" align="center" valign="top">
                        45
                </td>
                <td height="28" align="center" valign="top">
                        42
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        12&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        数字媒体2201班,人力资源[2201-2202]班,应用化学[2201-2204]班,经济学[2201-2202]班,工业工程[2201-2204]班,金融工程[2201-2202]班,国际贸易[2201-2202]班,市场营销[2201-2202]班,电子信息[2201-2205]班,软件工程[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1100001
                </td>
                <td height="28" align="center" valign="top">
                        体育（2）
                </td>
                <td height="28" align="center" valign="top">
                        杨洁1
                </td>
                <td height="28" align="center" valign="top">
                        45
                </td>
                <td height="28" align="center" valign="top">
                        42
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        13&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        人力资源2201班,物流管理2202班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1600000
                </td>
                <td height="28" align="center" valign="top">
                        军事理论及国家安全教育
                </td>
                <td height="28" align="center" valign="top">
                        刘宸均
                </td>
                <td height="28" align="center" valign="top">
                        101
                </td>
                <td height="28" align="center" valign="top">
                        101
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        14&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        物流管理[2201-2202]班,旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1800000
                </td>
                <td height="28" align="center" valign="top">
                        大学生心理及健康教育
                </td>
                <td height="28" align="center" valign="top">
                        刘琤
                </td>
                <td height="28" align="center" valign="top">
                        100
                </td>
                <td height="28" align="center" valign="top">
                        100
                </td>
                <td height="28" align="center" valign="top">
                        通识教育基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        15&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1900903
                </td>
                <td height="28" align="center" valign="top">
                        西方经济学
                </td>
                <td height="28" align="center" valign="top">
                        曹云野
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        学科基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
            <tr>
                <th width="70" align="center">
                        16&nbsp;
                </th>
                <td height="28" align="center" valign="top">
                        旅游管理2201班
                </td>
                <td height="28" align="center" valign="top">
                        1900903
                </td>
                <td height="28" align="center" valign="top">
                        西方经济学
                </td>
                <td height="28" align="center" valign="top">
                        曹云野
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        38
                </td>
                <td height="28" align="center" valign="top">
                        学科基础
                </td>
                <td height="28" align="center" valign="top">
                        必修
                </td>
            </tr>
        
    </tbody></table>
</div>
<div id="frameView" style="width:100%;height:100%">
    <iframe frameborder="0" id="fcenter" name="fcenter" style="HEIGHT:100%;width:100%;" scrolling="auto"></iframe>
</div>
<br>
 
<script language="javascript">
    
    function printtydc(){
        document.getElementById("xnxq").value=document.getElementById("xnxq01id").value;
        document.getElementById("kbjcms").value=document.getElementById("kbjcmsid").value;
        document.getElementById("shjhmxForm").target='hideFrame';
        document.getElementById("shjhmxForm").action = "/jsxsd/kbcx/pirntxsywkb";
        document.getElementById("shjhmxForm").submit();
        document.getElementById("shjhmxForm").target='';
    }
    function kbtc(t){
        var xswk=document.getElementById("xswk").checked;
        if(xswk||xswk=="checked"){
            t.previousElementSibling.style.display = "flex";
        }
    }
    function kbot(t) {
        t.previousElementSibling.style.display = "none";
    }
    function chagkb(obj){
        if(obj.value=="1"){
            $("#dataTables").show();
            $("#dataTables2").hide();
            document.getElementById("sfykb").value="1";
        }else if(obj.value=="2"){
            $("#dataTables2").show();
            $("#dataTables").hide();
            document.getElementById("sfykb").value="2";
        }
    }
    function qrxx(id) {
        if(confirm("是否确定确认？")){
            document.forms["Form1"].action = "/jsxsd/xskb/qrjx0501?jx0404id="+id;
            document.forms["Form1"].target="fcenter";
            document.forms["Form1"].submit();
        }
    }

    loadjs();
    function loadjs(){
        if( ''!=''){
            alert('');
        }

    }
    $(function () {
        var sy="";
        if(sy=="1"){
            waterMark();
        }
    })
    function indexSx1(type) {
        window.location.reload();
    }
       function waterMark(){
        $(document).ready(function() {
            //测试水印直接写把下面测试水印 替换为 userid 就可        //以动态添加水印了
            watermark({ watermark_txt: '非正式课表' })//传入动态水印内容  可以从Session中拿出你需要的用户信息
            function watermark(settings) {
                //默认设置
                var defaultSettings={
                    watermark_txt:"text",
                    watermark_x:100,//水印起始位置x轴坐标
                    watermark_y:150,//水印起始位置Y轴坐标
                    watermark_rows:20,//水印行数
                    watermark_cols:20,//水印列数
                    watermark_x_space:100,//水印x轴间隔
                    watermark_y_space:50,//水印y轴间隔
                    watermark_color:'#FF0000',//水印字体颜色
                    watermark_alpha:0.5,//水印透明度
                    watermark_fontsize:'20px',//水印字体大小
                    watermark_font:'微软雅黑',//水印字体
                    watermark_width:120,//水印宽度
                    watermark_height:80,//水印长度
                    watermark_angle:15//水印倾斜度数
                };
                //采用配置项替换默认值，作用类似jquery.extend
                if(arguments.length===1&&typeof arguments[0] ==="object" )
                {
                    var src=arguments[0]||{};
                    for(key in src)
                    {
                        if(src[key]&&defaultSettings[key]&&src[key]===defaultSettings[key])
                            continue;
                        else if(src[key])
                            defaultSettings[key]=src[key];
                    }
                }

                var oTemp = document.createDocumentFragment();

                //获取页面最大宽度
                var page_width = Math.max(document.body.scrollWidth,document.body.clientWidth);
                //获取页面最大长度
                var page_height = Math.max(document.body.scrollHeight,document.body.clientHeight);

                //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
                if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width *defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
                    defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
                    defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
                }
                //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
                if (defaultSettings.watermark_rows == 0 ||(parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
                    defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
                    defaultSettings.watermark_y_space = parseInt((page_height - defaultSettings.watermark_y - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
                }
                var x;
                var y;
                for (var i = 0; i < defaultSettings.watermark_rows; i++) {
                    y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
                    for (var j = 0; j < defaultSettings.watermark_cols; j++) {
                        x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;

                        var mask_div = document.createElement('div');
                        mask_div.id = 'mask_div' + i + j;
                        mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
                        //设置水印div倾斜显示
                        mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
                        mask_div.style.visibility = "";
                        mask_div.style.position = "absolute";
                        mask_div.style.left = x + 'px';
                        mask_div.style.top = y + 'px';
                        mask_div.style.overflow = "hidden";
                        mask_div.style.zIndex = "9999";
                        //mask_div.style.border="solid #eee 1px";
                        mask_div.style.opacity = defaultSettings.watermark_alpha;
                        mask_div.style.fontSize = defaultSettings.watermark_fontsize;
                        mask_div.style.fontFamily = defaultSettings.watermark_font;
                        mask_div.style.color = defaultSettings.watermark_color;
                        mask_div.style.textAlign = "center";
                        mask_div.style.width = defaultSettings.watermark_width + 'px';
                        mask_div.style.height = defaultSettings.watermark_height + 'px';
                        mask_div.style.display = "block";
                        oTemp.appendChild(mask_div);
                    };
                };
                document.body.appendChild(oTemp);
                // 给指定id添加水印效果
                //document.getElementById("waterMarkID").appendChild(oTemp);
            }
        });
    }

    //放大显示详细
    function funFD(flag){
        if(flag){
            var jx0415zbdiv_1 = document.getElementsByName("jx0415zbdiv_1");
            for(var i = 0; i < jx0415zbdiv_1.length; i++){
                document.getElementById(jx0415zbdiv_1[i].value).style.display="none";
            }
            var jx0415zbdiv_2 = document.getElementsByName("jx0415zbdiv_2");
            for(var i = 0; i < jx0415zbdiv_2.length; i++){
                document.getElementById(jx0415zbdiv_2[i].value).style.display="";
            }
        }else{
            var jx0415zbdiv_1 = document.getElementsByName("jx0415zbdiv_1");
            for(var i = 0; i < jx0415zbdiv_1.length; i++){
                document.getElementById(jx0415zbdiv_1[i].value).style.display="";
            }
            var jx0415zbdiv_2 = document.getElementsByName("jx0415zbdiv_2");
            for(var i = 0; i < jx0415zbdiv_2.length; i++){
                document.getElementById(jx0415zbdiv_2[i].value).style.display="none";
            }
        }
    }

    function funShowXsfl(flag){
        if(flag){
            var jx0415zbdiv_4 = document.getElementsByName("jx0415zbdiv_4");
            for(var i = 0; i < jx0415zbdiv_4.length; i++){
                document.getElementById(jx0415zbdiv_4[i].value).style.display="";
            }
            $("font[name='xsks']").show();
        }else{
            var jx0415zbdiv_4 = document.getElementsByName("jx0415zbdiv_4");
            for(var i = 0; i < jx0415zbdiv_4.length; i++){
                document.getElementById(jx0415zbdiv_4[i].value).style.display="none";
            }
            $("font[name='xsks']").hide();
        }
    }
    function funShowWkbkc(flag){
        if(flag){
            $("#dataTables").show();
        }else{
            $("#dataTables").hide();
        }
    }
    function funShowAlljxlmc(flag){
        if(flag){
            $("font[name='jxlmc']").show();
        }else{
            $("font[name='jxlmc']").hide();
        }
    }
    function  funShowXsjxbz(flag) {
        if(flag){
            $("font[name='jxbz']").show();
        }else{
            $("font[name='jxbz']").hide();
        }
    }
    function  funShowXstzd(flag) {
        if(flag){
            $("font[name='tzdbh']").show();
        }else{
            $("font[name='tzdbh']").hide();
        }
    }
    function  funShowWkxx(flag) {
        if(flag){
            $("font[name='wkxx']").show();
        }else{
            $("font[name='wkxx']").hide();
        }
    }
    function  funShowktmc(flag) {
        if(flag){
            $("font[name='ktmcstr']").show();
        }else{
            $("font[name='ktmcstr']").hide();
        }
    }
    function  funShowbz(flag) {
        if(flag){
            $("font[name='bzstr']").show();
        }else{
            $("font[name='bzstr']").hide();
        }
    }
    function search(obj){
        if(obj != null){
            obj.value = "查询中";
            obj.disabled = true;
        }
        document.getElementById('Form1').submit();
    }
    function print(obj){
        var url = "";
        var xnxq01id = document.getElementById("xnxq01id").value ;
        var zc = document.getElementById("zc").value ;
        var sjms = document.getElementById("kbjcmsid");

        url += "?xnxq01id="+xnxq01id;
        url += "&zc="+zc;
        
        var kbjcmsid = "";
        if(sjms){
            kbjcmsid = sjms.value;
            url += "&kbjcmsid="+kbjcmsid;
        }
        if($( '#wkbkc').is( ':checked')) {
            url += "&wkbkc=1";
        }
        if($( '#xswk').is( ':checked')) {
            url += "&xswk=1";
        }
        
        
        document.getElementById("FormPrint").action = "/jsxsd/xskb/xskb_print.do"+url;
        

        document.getElementById("FormPrint").submit();
    }
    funFD(document.getElementById("sfFD").checked);

    
    function scEwm(jx0408id) {
        JsMod("/jsxsd/jskb/kcewm?jx0408id="+jx0408id+"&type=1",460,350);
    }

    function jbkbck(){
        var xnxq01id=document.getElementById("xnxq01id").value;
        var kbjcmsid=document.getElementById("kbjcmsid").value;
        if(xnxq01id== ""){
            alert("请选择学年学期！");
            return false;
        }
        if(kbjcmsid== ""){
            alert("请选择时间模式！");
            return false;
        }

        JsMAdd("/jsxsd/xskb/viewtable.do?xnxq01id="+xnxq01id+"&kbjcmsid="+kbjcmsid+ "&xs0101id=AF73531F601A4CB8BFBB8628C80AC868&lx=xs0101id",1500,1000);

    }

    function JsMAdd(htmlurl,tmpWidth,tmpHeight){
        var newwin = window.showModalDialog(htmlurl,"","dialogWidth:"+tmpWidth+"px;status:no;dialogHeight:"+tmpHeight+"px");
        if (newwin != null && newwin == "ok")
        {
            creating.style.visibility='visible';
            window.Form1.submit();
        }
    }
    function ylkcdg(jx02id) {
        window.showModalDialog('/jsxsd/xskb/ylkcdg?jx02id='+jx02id,window,"dialogHeight:800px; dialogWidth:1000px");
    }
</script>

`

console.log(parser.scheduleHtmlParser(html));