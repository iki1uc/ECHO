<div class="block">
    <div class="title">ID_ECHO – mathematische Identität</div>
    <pre id="echo-id"></pre>
</div>
const echoID = ID_ECHO(pul, ion, mia);
document.getElementById("echo-id").innerText =
    JSON.stringify(ID_ECHO_DASH(echoID), null, 2);
