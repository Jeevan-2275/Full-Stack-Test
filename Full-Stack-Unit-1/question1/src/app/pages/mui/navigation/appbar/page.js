"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppbarPage() {
  return (
    <div>
      <h1>/mui/navigation/appbar</h1>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI AppBar</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
