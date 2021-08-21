import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6), //(top, right, bot, left), (top, 0, bot)
  },
}));

export default useStyles;
