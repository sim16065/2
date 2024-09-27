document.addEventListener('DOMContentLoaded', function() {
    const todoButton = document.getElementById('todobutton');
    const todoInputFields = document.getElementById('todoInputFields');
    const saveTodoButton = document.getElementById('saveTodo');
    const todoList = document.getElementById('todoList'); // 할 일 목록을 표시할 영역

    // '할 일 추가' 버튼 클릭 시 입력 필드 보이기
    todoButton.addEventListener('click', function() {
        todoInputFields.style.display = 'block';
    });
    

    // 저장 버튼을 클릭했을 때 할 일 저장
    saveTodoButton.addEventListener('click', function() {
        const todoTitle = document.getElementById('todoTitle').value;
        const todoDetails = document.getElementById('todoDetails').value;
        const todoDatetime = document.getElementById('todoDatetime').value;

        if (todoTitle) {
            // 할 일 목록에 새로운 아이템을 추가
            const newTodoItem = document.createElement('li');
            newTodoItem.innerHTML = `<strong>${todoTitle}</strong><br>
                          세부사항: ${todoDetails}<br>
                          ${todoDatetime ? `날짜: ${todoDatetime}<br>` : '날짜: 없음<br>'}
                          <button class="deleteBtn">삭제</button>`;
            todoList.appendChild(newTodoItem);


            // 삭제 버튼에 이벤트 리스너 추가
            newTodoItem.querySelector('.deleteBtn').addEventListener('click', function() {
                newTodoItem.remove(); // 해당 할 일 삭제
            });

            // 입력 필드 초기화
            document.getElementById('todoTitle').value = '';
            document.getElementById('todoDetails').value = '';
            document.getElementById('todoDatetime').value = '';

            // 입력 필드 숨기기
            todoInputFields.style.display = 'none';
        } else {
            alert('제목은 필수 입력 항목입니다.');
        }
    });
});
