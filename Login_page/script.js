document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const category = document.getElementById('category').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (category && username && password) {
        alert(`Logged in as ${category} with username: ${username}`);
    } else {
        alert('Please fill in all fields.');
    }
});