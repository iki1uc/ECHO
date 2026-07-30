const echo = ECHO_CORE(ion);
document.getElementById("echo").innerText =
    JSON.stringify(ECHO_DASHBOARD(echo), null, 2);
