import { AppBar, Toolbar, Grid, Typography, Button } from "@material-ui/core";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const Navbar: FC = (): ReactElement => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid style={{ flex: 1 }} item>
            <Typography variant="h5" color="inherit">
              Meded Easy
            </Typography>
          </Grid>
          <Button onClick={() => {}} color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              {" "}
              Login{" "}
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/signup"
            >
              {" "}
              Sign Up{" "}
            </Link>
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
