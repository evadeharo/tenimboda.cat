import Grid from "./Grid";

const title = `Com serà aquell dia?`;

export default function Time() {
  return (
    <Grid className="h-screen flex items-end pb-[3.75rem]">
      <div className="col-span-8">
        <h2 className="text-title-m">{title}</h2>
      </div>
    </Grid>
  );
}