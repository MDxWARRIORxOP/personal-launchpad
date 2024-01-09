"use client";
import {
  Button,
  TextField,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import React, { ElementRef, useRef } from "react";

const LINKS = [
  {
    url: "https://youtube.com",
    title: "Youtube",
  },
  {
    url: "http://chat.openai.com",
    title: "Chat GPT",
  },
  {
    url: "https://github.com/MDxWARRIORxOP",
    title: "My Github",
  },
  {
    url: "https://canva.com",
    title: "Canva",
  },
  {
    url: "http://localhost:3s000",
    title: "Localhost",
  },
  { url: "https://console.firebase.google.com", title: "Firebase" },
  {
    url: "https://stackoverflow.com",
    title: "Stack Overflow",
  },
  {
    url: "https://replit.com",
    title: "Replit",
  },
  {
    url: "https://dash.cloudflare.com",
    title: "Cloudflare",
  },
  {
    url: "https://fontawesome.com",
    title: "Font Awesome",
  },
];

export default function Home() {
  const linkRef = useRef<ElementRef<"a">>(null);

  function handleUrlRedirect(e: React.SyntheticEvent<ElementRef<"form">>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data.get("url"));

    if (linkRef.current) {
      linkRef.current.href = data.get("url")?.toString() as string;
      linkRef.current.click();
    }
  }

  return (
    <>
      <a href="" ref={linkRef} target="_blank" rel="noopener noreferrer" />
      <header>
        <h1 className="center">Hey There!</h1>
      </header>
      <main>
        <section className="center" style={{ padding: "15px" }}>
          <Box component={"form"} onSubmit={handleUrlRedirect}>
            <TextField
              name="url"
              type="url"
              sx={{
                input: { color: "white", borderBottom: "1px solid white" },
              }}
              id="url"
              variant="standard"
              placeholder="URL"
            />
          </Box>
        </section>
        <Divider sx={{ bgcolor: "grey" }} />
        <section>
          <Box>
            <List>
              {LINKS.map((link, index) => (
                <>
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end">
                        <ArrowForward sx={{ color: "white" }} />
                      </IconButton>
                    }
                    data-url={link.url}
                    onClick={(e) => {
                      e.preventDefault();
                      if (linkRef.current) {
                        linkRef.current.href = e.currentTarget.dataset
                          .url as string;
                        linkRef.current.click();
                      }
                    }}
                  >
                    <ListItemButton>
                      <p>
                        <strong style={{ fontSize: "18px" }}>
                          {link.title}
                        </strong>
                        <br />{" "}
                        <span style={{ fontSize: "14px" }}>{link.url}</span>
                      </p>
                    </ListItemButton>
                  </ListItem>
                  <Divider
                    variant="middle"
                    component={"li"}
                    sx={{ bgcolor: "white" }}
                  />
                </>
              ))}
            </List>
          </Box>
        </section>
      </main>
    </>
  );
}
