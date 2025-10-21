import { translations } from "../lib/texts";
import Grid from "./Grid";

export default function Footer() {
  return (
    <Grid className="py-[3.75rem] min-h-screen bg-yellow">
      <div className="col-span-3">
        No t'oblidis de confirmar assistència. Pots fer-ho fent clic aquí
      </div>
      <div className="col-start-5 col-span-5">
        I quan tot hagi acabat on recupero els records d'aquell dia? Després de
        gaudir-ho al màxim posarem en aquest espai un enllaç a la galeria
        digital que ens facilitarà el fotògraf. També t'animem a compartir tots
        els records que hagis generat en aquest álbum compartit que omplirem
        entre tots i totes!
      </div>
      <div className="col-span-full flex items-end">
        <div className="flex flex-col w-max">
          <h1 className="text-title-xl">{translations.orioleva}</h1>
          <h2 className="text-subtitle">
            Gràcies per acompanyar-nos. Ens veiem aviat!
          </h2>
        </div>
      </div>
    </Grid>
  );
}
