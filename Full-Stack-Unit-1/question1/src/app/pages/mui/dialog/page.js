"use client";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";

export default function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>/mui/dialog</h1>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Dialog Example</DialogTitle>
        <DialogContent>This is a MUI Dialog component.</DialogContent>
      </Dialog>
    </div>
  );
}
