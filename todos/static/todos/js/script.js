// Get CSRF token from cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// Toggle todo completion status
function toggleTodo(todoId) {
    const csrftoken = getCookie('csrftoken');
    
    fetch(`/toggle/${todoId}/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        const todoItem = document.querySelector(`[data-todo-id="${todoId}"]`);
        if (data.completed) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to update todo. Please try again.');
    });
}

// Confirm delete action
function confirmDelete() {
    return confirm('Are you sure you want to delete this todo?');
}

// Add smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to todo items
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});
