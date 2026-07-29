export function ECHO_DASHBOARD(echo){
    return {
        mode: echo.mode,
        amplitude: echo.amplitude,
        resonance: echo.resonance,
        state: echo.state
    };
}
