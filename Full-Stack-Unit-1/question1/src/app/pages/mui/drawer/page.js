"use client";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

export default function DrawerPage() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <h1>/mui/drawer</h1>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sent" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
