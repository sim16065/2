document.addEventListener('DOMContentLoaded', function() {
    const todoButton = document.getElementById('todobutton');
    const todoInputFields = document.getElementById('todoInputFields');
    const saveTodoButton = document.getElementById('saveTodo');
    const todoList = document.getElementById('todoList'); // 할 일 목록을 표시할 영역 추가


    // '할 일 추가' 버튼 클릭 시 입력 필드 보이기
    todoButton.addEventListener('click', function() {
        if (todoInputFields.style.display == 'none') {
            todoInputFields.style.display = 'block';
        } else {
            todoInputFields.style.display = 'none';
        }
    });

    function formatDatetime(datetime){
        const date = new Date(datetime);
        const year = String(date.getFullYear()).padStart(2, '0');
        const month = String(date.getMonth()+1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2,'0');
        const hour = String(date.getHours()).padStart(2,'0');
        const minute = String(date.getMinutes()).padStart(2,'0');
        
        return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`;
    }

    // 저장 버튼을 클릭했을 때 할 일 저장
    saveTodoButton.addEventListener('click', function() {
        const todoTitle = document.getElementById('todoTitle').value;
        const todoDetails = document.getElementById('todoDetails').value;
        const todoDatetime = document.getElementById('todoDatetime').value;

        if (todoTitle) {
            // 목록에 할 일 추가 
            const newTodoItem = document.createElement('li');
            newTodoItem.innerHTML = `
                <strong class="todo-title">${todoTitle}</strong>
                <button class="deletebtn">삭제</button><br>
                ${todoDetails ? `<span class="todo-details">${todoDetails}</span><br>` : ''}                
                <span class="todo-datetime">${todoDatetime ? `${formatDatetime(todoDatetime)}<br>` : ''}`;
            todoList.appendChild(newTodoItem);
            
            // 삭제 버튼에 이벤트 리스너 추가
            newTodoItem.querySelector('.deletebtn').addEventListener('click',function() {
                newTodoItem.remove(); // 해당 아이템 삭제
            });

           
            newTodoItem.addEventListener('click', function() { 
                const titleElement = newTodoItem.querySelector('.todo-title');
                if (titleElement.style.textDecoration == "line-through") {
                    titleElement.style.textDecoration = "none"; // 줄 긋기 해제
                } else {
                    titleElement.style.textDecoration = "line-through"; // 줄 긋기
                }
            });
            

            // 저장 후 입력 필드 초기화
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

