// 초기 배터리 상태
let batteryLevel = 100;
let currentDate = new Date();
let alarmHour;
let alarmMinute;
let alarmSecond;
let alarmCount = 0; // 알람 개수를 추적하는 변수
const maxAlarms = 3; // 최대 알람 개수 설정
let timeUpdating = true;

// 현재 시간을 기반으로 알람 시간을 설정하는 함수
function setInitialAlarmTime() {
    alarmHour = currentDate.getHours();    // 현재 시간의 시
    alarmMinute = currentDate.getMinutes(); // 현재 시간의 분
    alarmSecond = currentDate.getSeconds(); // 현재 시간의 초
}

// 배터리 상태를 업데이트하는 함수
function updateBattery() {
    if (batteryLevel > 0) {
        batteryLevel -= 1; // 배터리 감소
        document.getElementById('battery-level').textContent = batteryLevel + '%';
    } else {
        zerobattery();
        timeUpdating = false;
    }
}

// 1분(60000ms)마다 배터리 상태를 업데이트
setInterval(updateBattery, 1000);

function zerobattery() {
    document.querySelector('.time').style.backgroundColor = 'black';
}

// 시간을 표시하는 함수 - 알람 설정한 시간을 표시
function updateTime() {
    if (!timeUpdating) return;

    const formattedMonth = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const formattedDate = ('0' + currentDate.getDate()).slice(-2);
    const formattedDateDisplay = `${currentDate.getFullYear()}-${formattedMonth}-${formattedDate}`;

    const formattedHour = alarmHour.toString().padStart(2, '0');
    const formattedMinute = alarmMinute.toString().padStart(2, '0');
    const formattedSecond = alarmSecond.toString().padStart(2, '0');
    const formattedTimeDisplay = `${formattedHour}:${formattedMinute}:${formattedSecond}`;

    // 알람 시간 표시
    document.getElementById('time-display').textContent = formattedTimeDisplay;
    document.getElementById('date-display').textContent = formattedDateDisplay;
}


// 시/분/초 버튼을 눌렀을 때 각각 시간/분/초 증가시키는 함수
function increaseHour() {
    alarmHour = (alarmHour + 1) % 24; // 0-23 사이로 유지
    updateTime();
}

function increaseMinute() {
    alarmMinute = (alarmMinute + 1) % 60; // 0-59 사이로 유지
    updateTime();
}

function increaseSecond() {
    alarmSecond = (alarmSecond + 1) % 60; // 0-59 사이로 유지
    updateTime();
}

// 알람 삭제 함수
function deleteAlarm(event) {
    const alarmItem = event.target.parentElement; // 삭제 버튼의 부모 li 요소 선택
    alarmItem.remove(); // 알람 목록에서 삭제
    alarmCount--; // 알람 개수 감소
}

// 알람 리스트에 추가하는 함수
function addalarm() {
    if (batteryLevel <= 0) {
        return; // 알람 추가를 중단
    }

    if (alarmCount >= maxAlarms) {
        alert("알람은 최대 3개까지 추가할 수 있습니다."); // 알람 개수가 3개 이상일 때 알림 표시
        return; // 알람 추가를 중단
    }

    const alarmTime = `${alarmHour.toString().padStart(2, '0')}:${alarmMinute.toString().padStart(2, '0')}:${alarmSecond.toString().padStart(2, '0')}`;
    
    const alarmList = document.getElementById('alarm-list');
    const li = document.createElement('li');
    li.textContent = alarmTime;

    // 삭제 버튼 추가
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = deleteAlarm;
    deleteButton.style.cursor='pointer';

    // li에 삭제 버튼 추가
    li.appendChild(deleteButton);
    alarmList.appendChild(li);

    alarmCount++; // 알람 개수 증가
}

// 페이지 로드 시 현재 시간을 기반으로 초기 알람 시간을 설정
setInitialAlarmTime();
updateTime();
