import Grid from "./Grid";

const title = `Volem fer un viatge`;
const text = `Com bé ja sabeu, l'any passat vam mudar-nos a viure junts. Ara tenim un piset molt acollidor i ben preparat pel nostre dia a dia. Tot això gràcies a molts de vosaltres, que ens heu ajudat amb un munt de coses: pintar, tapar forats, desmuntar i muntar mobles, compres vàries, electrodomèstics, cortines, tèxtils, decoració i fins i tot el ‘maleït' donut (que tant ens va costar trobar!!!).

Aquesta invitació és perquè volem celebrar el nostre compromís amb tu, i no ens cal cap regal. Si tot i així vols participar en el nostre camí, pots donar-nos un cop de mà perquè la lluna de mel sigui encara més inoblidable ✨

Pots fer una transferència a aquest número de compte: IBAN ES91 XXXX XXXX XXXX XXXX XXXX`;

export default function Present() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem]">
      <div className="col-span-7">
        <h2 className="text-title-l">{title}</h2>
        <p className="text-base">{text}</p>
      </div>
    </Grid>
  );
}
