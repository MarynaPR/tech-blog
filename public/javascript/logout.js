async function logout() {

    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout-link').addEventListener('click', logout);

function idleTimer() {
    var time;

    window.onclick = restartTimer;
    document.onmousemove = restartTimer;
    function logout() {

        window.location.href = '/login';
    }
    function restartTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 3000);
    }
}

idleTimer();
