import data from "./data.json";
import useStyles from "./Genre.style";

function Genre({ id }) {
  const label = data.genres[id];
  const classes = useStyles();
  if (!label) return null;
  return (
    <div data-testid="genre" className={classes.root}>
      {label}
    </div>
  );
}

export default Genre;
