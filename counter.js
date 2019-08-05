var count = 0;
var st = localStorage;
function resetClear() {
    count = 0;
    document.getElementById('c-num').innerHTML = count;
    document.getElementById('continue').value = "";
}
function increase() {
    count ++;
    document.getElementById('c-num').innerHTML = count;
    st.setItem("#auto", count);
}
function decrease() {
    if (count - 1 < 0) {
        count = 0;
        document.getElementById('c-num').innerHTML = count;
        st.setItem("#auto", count);
    } else {
        count = count - 1;
        document.getElementById('c-num').innerHTML = count;
        st.setItem("#auto", count);
    }
}
function set() {
    var inputNum = document.getElementById('continue').value;
    var intInputNum = parseInt(inputNum);
    if (intInputNum >= 0) {
        count = intInputNum;
        document.getElementById('c-num').innerHTML = inputNum;
        st.setItem("#auto", count);
        document.getElementById('continue').value = "";
    } else if (inputNum === "github") {
        return true;
    } else {
        window.alert("You cannot enter number under zero...");
        document.getElementById('continue').value = "";
    }
}
function save() {
    var st = localStorage;
    var keyVal = "#manual";
    var valVal = count;
    // var timeVal = new Date();
    // var valList = new Array();
    // valList.push(timeVal, valVal)
    st.setItem(keyVal, valVal);
}
function read(x) {
    var st = localStorage;
    var lsItem = st.getItem(x);
    if (lsItem === null){
        lsItem = 0;
    }
    count = lsItem;
    document.getElementById('c-num').innerHTML = lsItem;
}
function readtime(){
    var dt=new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var week = dt.getDay();
    var day = dt.getDate();
}
function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var uhour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var year = now.getFullYear();
    var uyear = now.getFullYear();
    var month = now.getMonth() + 1;
    var umonth = now.getMonth() + 1;
    var day = now.getDate();
    var uday = now.getDate();
    var jpnyear = year - 2018;
    var oldget = document.getElementById("continue").value;
    if ( hour < 10 ) hour = "0" + hour;
    if ((uhour - 9) <= 0){
        uhour = uhour + 24 - 9;
        if ((uday - 1) <= 0){
            if ((umonth - 1) <= 0){
                uyear = uyear - 1;
            } else {
                umonth = umonth - 1;
            }
        } else {
            uday = uday - 1;
        }
    } else {
        uhour = uhour - 9;
    }
    if ( minute < 10 ) minute = "0" + minute;
    if ( second < 10 ) second = "0" + second;
    // if (jpnyear = 1) jpnyear = "元";
    function distime(){
        document.getElementById('timeJ').innerHTML = year + " (R" + jpnyear + ")  / " + month + " / " + day + " , " + hour + " : " + minute + " : " + second + " JST";
        document.getElementById('timeU').innerHTML = uyear + "/" + umonth + "/" + uday + " , " + uhour + ":" + minute + ":" + second + " UTC";
    }
    distime();
}
function start() {
    setInterval("updateClock();", 150);
    updateClock();
}
function showref() {
    document.getElementById('ref'),innerHTML = "";
}
function keyAct(){
    var inputNum = document.getElementById('continue').value;
    // alert(event.keyCode);
    if (event.keyCode/*x*/ === 13 || event.keyCode/*x*/ === 32 || event.keyCode/*x*/ === 38){
        // キーはEnter, Space, up
        increase();
    } else if (event.keyCode/*x*/ === 40 || event.keyCode/*x*/ === 189 || event.keyCode/*x*/ === 68){
        // キーは下矢印, -, d
        decrease();
    } else if (event.keyCode/*x*/ === 67){
        // キーはc
        resetClear();
    } else if (event.keyCode === 18 && inputNum === "github") {
        function cl(){
            document.getElementById("continue").value = "";
            st.removeItem('#auto');
            st.removeItem('#manual');
        }
        setTimeout(function() {cl();window.alert("処理は実行されました。\nローカルストレージの値は消去されました。");}, 1000);
    } else if (inputNum === "github" && event.keyCode !== 18){
        window.alert("鍵キーが確認できなかったか、不正な操作のため、処理を中断しました。")
    }
}
function re(x){
    if (x === 0){
        keyAct2();
    } else {
        keyAct();
    }
}
function autosave(x){
    var now = new Date();
    var nowmin = now.getMinutes();
    var nowsec = now.getSeconds();
    if ((nowmin % 15) === 0 || nowsec === 0){
        var now = new Date();
        var hour = now.getHours();
        // var uhour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        var year = now.getFullYear();
        // var uyear = now.getFullYear();
        var month = now.getMonth() + 1;
        // var umonth = now.getMonth() + 1;
        var day = now.getDate();
        // var uday = now.getDate();
        // var jpnyear = year - 2018;
        if ( hour < 10 ) hour = "0" + hour;
        /*if ((uhour - 9) <= 0){
            uhour = uhour + 24 - 9;
            if ((uday - 1) <= 0){
                if ((umonth - 1) <= 0){
                    uyear = uyear - 1;
                } else {
                    umonth = umonth - 1;
                }
            } else {
                uday = uday - 1;
            }
        } else {
            uhour = uhour - 9;
        }*/
        if ( minute < 10 ) minute = "0" + minute;
        if ( second < 10 ) second = "0" + second;
        var d = year + "/"+ month + "/" + day + " " + hour + ":" + minute + ":" + second + " JST";
        var keyVal = d;
        var valVal = count;
        // var timeVal = new Date();
        // var valList = new Array();
        // valList.push(timeVal, valVal)
        st.setItem("#" + keyVal, valVal);
    }
    if (x === 1){
        var keyVal = document.getElementById('timeJ').value;
        var valVal = count;
        st.setItem(("#" + keyVal), valVal);
    }
}
function check2(x, y){
    var ckls001 = x;
    var ansls1 = y;
    for (i=0;i<ansls1.length;i++){
        if (ckls001[i] !== ansls1[i]){
            return false;
            break;
        }
        if (i === (ansls1.length - 1) && ckls001[i] === ansls1[i]){
            return true;
        }
    }
}
function checkdo(){
    var pw = window.prompt("本当に削除しますか？\n削除する場合はパスワードを入力してください:");
    var lskc = [];
    var whilect = 0;
    var ansls = [83, 69, 83, 83, 65, 16, 84, 65, 75, 85, 77, 65, 50, 48, 49, 56, 16, 86, 17, 13];
    var checker = 0;
    function sum(x){
        sumans = 0;
        for (i=0;i<x.length;i++){
            sumans += x[i];
        }
        return sumans;
    }
    if (pw === "pass.github.io"){
        //パスワード正答時
        setTimeout(function lastck(){if (set() === true/* && check2(keyAct2(ansls), ansls) === true*/){lsClearAll();} else {window.alert("パスワードが確認できませんでした。処理を中断します。")}}, 10000);
    } else {
        window.alert("パスワードが違います。リトライしてください。");
    }
}
function keyAct2(){
    if (event.keyCode === 18){
        st.clear();
        setTimeout(function() {window.alert("処理は実行されました。\nローカルストレージの値は消去されました。");}, 1000);
    } else {
        window.alert("キーが確認できないため、処理を中断しました。")
    }
}
function lsClearAll(){
    ck = window.prompt("本当に実行しますか？\n実行する場合は0を入力してください。");
    if (ck === "0"){
        var sel = window.confirm("処理を実行します。");
        if (sel === true){
            var lsel = window.confirm("ローカルストレージのクリアをこの端末に許可しますか？");
            if (lsel === true){
                var gets = document.getElementById("continue").value;
                document.getElementById("continue").value = "鍵キーを入力してください。"
                setTimeout(function() {document.getElementById("continue").value = gets}, 3000);
            } else {
                window.alert("権限がないため、処理を終了しました。");
            }
        } else {
            window.alert("処理は中断されました。");
        }
    } else {
        window.alert("処理は中断されました。");
    }
}
function checkls() {
    var st = localStorage;
    window.alert("length: " + st.length);
    var lsst;
    /*for (i=0;i<st.length;i++){
        var key = st.key(i);
        var val = st.getItem(key);
        if (st.key[i][0] === "#"){
            console.log(key, val);
            window.alert(key + "\n" + val);
        }
    }*/
    window.alert("#auto", st.getItem("#auto"));
    window.alert("#manual", st.getItem("#manual"));
}
