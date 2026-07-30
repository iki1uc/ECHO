export function IS_CORE(echo){
    return {
        mode: "interstellar-signal",

        // Amplitude aus ECHO
        amplitude: echo.amplitude,

        // Spread = wie weit das Signal geht
        spread: (echo.amplitude * 3) % 1000,

        // Vector = Richtung des Signals
        vector: echo.resonance * 42,

        // State = abhängig vom Echo-Zustand
        state: echo.state === "loud" ? "broadcast" : "whisper"
    };
}
