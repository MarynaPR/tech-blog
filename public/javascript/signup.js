async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};
document.getElementById('signup-button').addEventListener('submit', signupFormHandler);