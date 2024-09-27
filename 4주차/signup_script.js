document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password'); // 비밀번호 입력 필드 선택
    const password_msg = document.getElementById('password_msg'); // 비밀번호 메시지 영역 선택
    password_msg.style.fontSize='12px';
    const showPasswordBtn = document.querySelector('.input-pw i'); // 비밀번호 보이기 버튼 선택 (아이콘)

    // 아이디 중복 확인 관련 변수
    const checkDuplicateBtn = document.querySelector('.input-id button'); // 중복 확인 버튼 선택
    const idInput = document.querySelector('.input-id input'); // 아이디 입력 필드 선택
    const check_msg = document.getElementById('check_msg'); // 중복 확인 메시지 표시 영역
    check_msg.style.fontSize='12px';
    const existingIds = ['user1', 'user2', 'user3']; // 기존 아이디 목록

    // 중복 확인 버튼 클릭 이벤트
    checkDuplicateBtn.addEventListener("click", function () {
        const username = idInput.value; 

        if (!username) {
            check_msg.innerHTML = "아이디를 입력하세요.";
            check_msg.style.display = "block"; // 메시지 표시
            check_msg.style.color = "red";
            return;
        } 
        
        if (existingIds.includes(username)) { // 입력한 아이디가 existingIds 배열에 포함되어 있는지 확인
            check_msg.textContent = "이미 사용 중인 아이디입니다.";
            check_msg.style.display = "block"; // 메시지 표시
            check_msg.style.color = "red";
        } else {
            check_msg.textContent = "사용할 수 있는 아이디입니다.";
            check_msg.style.display = "block"; // 메시지 표시
            check_msg.style.color = "blue";
        }
    });

    // 비밀번호 보기/숨기기 기능
    showPasswordBtn.addEventListener('click', () => {
        
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // password에서 text로 변경하여 비밀번호를 보이게 설정
            showPasswordBtn.classList.remove('fa-eye'); // 아이콘 변경
            showPasswordBtn.classList.add('fa-eye-slash'); 
        } else {
            passwordInput.type = "password"; // 비밀번호를 숨기게 설정
            showPasswordBtn.classList.remove('fa-eye-slash'); // 아이콘 변경
            showPasswordBtn.classList.add('fa-eye');
        }
    });

    // 비밀번호 유효성 검사 함수
    function password_check() {
        const pwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).*$/; // 비밀번호 정규 표현식
        return pwValidation.test(passwordInput.value);
    }

    // 비밀번호 입력 필드에서 포커스하지 않을 때 유효성 검사
    passwordInput.addEventListener('blur', () => {
        if (!password_check()) {
            password_msg.innerHTML = '비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자(!@#$%^&*)를 사용해 주세요.'; // 유효하지 않은 경우 메시지
            password_msg.style.color = 'red';
            password_msg.style.display = 'block'; // 메시지 표시
        } else {
            password_msg.style.display = 'none'; // 유효한 경우 메시지 숨기기
        }
    });    

    const signupBtn = document.querySelector('.submitInfo button'); // 가입하기 버튼 선택
    signupBtn.addEventListener('click', () => {
        const idValue = idInput.value; // 아이디 값
        const passwordValue = passwordInput.value; // 비밀번호 값
        const nameValue = document.querySelector('.input-name input').value.trim(); // 이름 값
        const dobValue = document.querySelector('.input-dob input').value.trim(); // 생년월일 값
        const genderValue = document.querySelector('input[name="identityGender"]:checked'); // 선택된 성별
        const nationalityValue = document.querySelector('input[name="foreigner"]:checked'); // 선택된 국적
        
        if (!idValue || !passwordValue || !nameValue || !dobValue || !genderValue || !nationalityValue) {
            alert('내용을 입력해주세요.'); // 경고 메시지
            return;
        }

        // 가입 완료 메시지
        alert('가입이 완료되었습니다!'); // 가입 완료 알림
    });
});


