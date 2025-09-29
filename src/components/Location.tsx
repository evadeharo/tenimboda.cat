import Grid from "./Grid";

const title = `Un decorat de pel·lícula`;
const text = `La Cerdanya és un petit paradís al Pirineu, una vall oberta, pobles amb molta història i unes vistes d'infart. A nosaltres ens encanta fer-la servir com a camp base: a l'hivern ens passem els caps de setmana esquiant i després recuperant-nos davant de la llar de foc. 
A l'estiu us recomanem caminar per la muntanya, respirar aire ben net i gaudir d'uns paisatges (que com diu l'Eva) són dignes d'una pel·lícula.

En vuit anys de relació hem viscut molts moments a la Cerdanya, hem gaudit de les coses que més ens agrada fer com a parella i compartit instants que no podrem oblidar mai amb amics i família. No ens imaginem un millor “spot” per fer oficial el nostre compromís. Sempre serà el nostre lloc segur al que tornar 🥰`;

export default function Location() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem]">
      <div className="col-span-8">
        <h2 className="text-title-m">{title}</h2>
        <p className="text-base mr-8">{text}</p>
      </div>
    </Grid>
  );
}
