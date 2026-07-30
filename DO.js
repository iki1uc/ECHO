export function ID_ECHO_DASH(echo){
    return {
        mode: echo.mode,
        identity: echo.identity,
        value: echo.value,
        formula: echo.info()
    };
}
