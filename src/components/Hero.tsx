import Grid from "./Grid";

const title = `Oriol & Eva`;
const subtitle = `Dissabte 11 d'abril de 2026`;

export default function Hero() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem]">
      <div className="col-span-full">
        <div className="flex flex-col items-center w-max">
          <h1 className="text-title-xl">{title}</h1>
          <h2 className="text-subtitle">{subtitle}</h2>
        </div>
      </div>
    </Grid>
  );
}
