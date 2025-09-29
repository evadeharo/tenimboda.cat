import Grid from "./Grid";

const title = `Ei ei ei!`;
const title2 = `Tenim boda!`;
const text = `Hola {nomConvidat}! Si has rebut aquest lloc web vol dir que ens fa molta il·lusió que ens acompanyis durant aquell dia. I perquè puguis organitzar-te et deixem els detalls més importants a continuació.`;
const details = `Dissabte 11 d'abril de 2026
Cerimonia religiosa a l'esglèsia de Santa Maria de Llívia
Convit, celebració i festa a La Formatgería de Llívia`;

export default function Important() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem]">
      <div className="col-span-8">
        <h2 className="text-title-l">{title}</h2>
        <h2 className="text-title-l">{title2}</h2>
        <p className="text-base mr-8">{text}</p>
        <p className="text-base mr-8">{details}</p>
      </div>
    </Grid>
  );
}
