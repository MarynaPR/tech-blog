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
    window.onmousemove = restartTimer;
    window.onclick = restartTimer;
    window.onscroll = restartTimer;
    window.onkeypress = restartTimer;
    function logout() {
        window.location.href = '/';
    }
    function reload() {
        window.location = self.location.href;
    }
    function restartTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 50000);
        time = setTimeout(reload, 50000);
    }
}
idleTimer();