function add(char) {
    var display = document.getElementById('display');
    var content = display.value;

    if (char === '=') {
        calculate();
    }else {
        display.value += char;
        counting();
    }
}

function calculate() {
    var display = document.getElementById('display');
    try {
        // 바로 eval로 계산 (더 이상 변환 필요 없음)
        var result = eval(display.value);
        display.value = result;
        counting() 
    } catch (error) {
        display.value = 'Error'; // 잘못된 입력 시 'Error' 표시
    }
}

function reset() {
    document.getElementById('display').value = "";
}
function del() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // 마지막 문자 삭제
}

function counting() {
    var display = document.getElementById('display');
    if(display.value.length > 20){
        display.value = display.value.substring(0, 20);
    }
}
