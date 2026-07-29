export function ECHO_CORE(ion){
    return {
        mode: "echo",
        origin: ion.pulse,
        amplitude: (ion.warp + ion.charge) % 700,
        resonance: Math.sin(ion.curvature / 42),
        state: ion.state === "overdrive" ? "loud" : "soft"
    };
}
