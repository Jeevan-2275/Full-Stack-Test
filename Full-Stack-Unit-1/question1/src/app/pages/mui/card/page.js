"use client";
import { Card, CardContent, Typography } from "@mui/material";

export default function CardPage() {
  return (
    <div>
      <h1>/mui/card</h1>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography variant="h5">MUI Card</Typography>
          <Typography>This is a simple card component.</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
