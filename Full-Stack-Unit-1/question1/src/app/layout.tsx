import "./globals.css";
import type { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const metadata = {
  title: "Next.js MUI + API Demo",
  description: "Assignment project with Material UI & API routes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {/* Global AppBar for navigation */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Next.js Assignment
            </Typography>
            <Button color="inherit" href="/mui/button">MUI</Button>
            <Button color="inherit" href="/profile/jack">Profile</Button>
            <Button color="inherit" href="/blog/101">Blog</Button>
            <Button color="inherit" href="/api/posts">API</Button>
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
