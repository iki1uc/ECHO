export function ID_ECHO(pul, ion, mia){
    const alpha = 1.2;
    const beta  = 0.8;
    const gamma = 0.5;

    return {
        mode: "echo",
        identity: "Rückkehr-Transformation",
        value: alpha * ion + beta * mia - gamma * pul,
        info(){
            return `ECHO = ${alpha}·ION + ${beta}·MIA − ${gamma}·PUL`;
        }
    };
}
