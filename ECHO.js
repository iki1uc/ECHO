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
// ECHO_HALL.js
import { ID_ECHO } from "./ECHO.js";
import { CR } from "./CR.js";
import { Core } from "./Core.js";
import { DO } from "./DO.js";
import { DSY } from "./DSY.js";
import { EC } from "./EC.js";
import { HO } from "./HO.js";
import { IT } from "./IT.js";
import { Dashboard } from "./Dashboard.js";

export function ECHO_HALL(cells){

    let pos = 0;

    const roll = () => {

        // 1 · alle Module vorbereiten
        const pul = CR(pos);
        const ion = Core(pos);
        const mia = DO(pos);

        const echo = ID_ECHO(pul, ion, mia);
        const dsy  = DSY(echo.value);
        const ec   = EC(echo.value);
        const ho   = HO(pos);
        const it   = IT(pos);

        Dashboard({
            echo,
            dsy,
            ec,
            ho,
            it,
            pos
        });

        // 2 · Hall-Effekt erzeugen
        cells.forEach(c => c.style.boxShadow = "none");

        for(let i = 0; i < 12; i++){
            const idx = (pos + i) % cells.length;
            const fade = 1 - (i / 12);

            cells[idx].style.boxShadow =
                `0 0 ${30 * fade}px ${fade * 15}px #00eaff`;
        }

        // 3 · Position weiterrollen
        pos = (pos + 1) % cells.length;

        requestAnimationFrame(roll);
    };

    roll();
}
