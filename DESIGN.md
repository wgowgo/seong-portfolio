---
name: Seong Portfolio
description: Illustrated desk you click like a room — a developer portfolio in the gkoberger.com interaction language.
colors:
  paper: "#F8F3EC"
  ink: "#1A1C28"
  cobalt: "#3A3F8C"
  pin: "#C94A32"
  surface: "#FFFcf7"
  muted: "#5C5E6E"
  night: "#16182A"
  header: "#333333"
typography:
  display:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(2.4rem, 6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Karla, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  ui:
    fontFamily: "Karla, Helvetica, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0"
rounded:
  sm: "4px"
  md: "10px"
  lg: "18px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  overlay-header:
    backgroundColor: "{colors.header}"
    textColor: "#ffffff"
    typography: "{typography.ui}"
    height: "50px"
    padding: "0 18px"
  hotspot-label:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
    typography: "{typography.ui}"
  project-title:
    backgroundColor: "transparent"
    textColor: "{colors.cobalt}"
    typography: "{typography.ui}"
---

## Overview

Hand-drawn studio desk on cream paper. Thick ink outlines, flat fills, objects that bounce once then wait to be clicked. Opening a thing drops a dark 50px chrome bar (`esc` + title) and a paper-white panel over a faint dim. Night mode is the same room after the lights go out — cobalt sky, warm lamp, not a generic dark theme.

Visual-direction mocks were skipped: the live reference is [gkoberger.com](https://gkoberger.com/). Art, copy, and characters are original.

## Colors

Paper `oklch(0.962 0.012 85)` is the room, not a trendy beige landing. Ink leans cobalt so type belongs to the hoodie and the links. Pin coral is only for pushpins, close-hover, and a few object accents. Project titles use cobalt, never gradient text.

Night paper becomes `oklch(0.18 0.03 260)`. Body text stays ≥4.5:1.

## Typography

Karla carries UI and body — a humanist sans with actual italics, not Inter. Caveat is the signature and the little handwritten labels, like a Sharpie on the corkboard. Body is 16px. Overlay chrome is 14px/600. Signature is large Caveat, slightly rotated.

## Elevation

The desk is flat illustration; depth is overlap and outline, not drop-shadow soup. Overlay panels get one soft shadow (`0 18px 50px oklch(0.2 0.03 260 / 0.18)`). Header bar is a hard slab, no shadow.

## Components

- **Hotspot**: invisible hit area over an object; focus-visible ink ring; hover shows a black label with the object's name.
- **Overlay**: `role="dialog"`, 50px #333 header, esc + ×, scrollable body, click dim to close.
- **Project row**: 48px color icon, cobalt title, muted one-liner.
- **Featured tile**: saturated block, white type, short pitch.
- **Timeline**: vertical ink line, date, title, role pill.
- **Sun toggle**: 16px disc + 8 rays, top-right, always reachable.

## Do's and Don'ts

**Do** keep outlines ~3px and colors flat, like a picture book.
**Do** let objects invite the click (one bob, then rest).
**Don't** add a top nav that duplicates the desk.
**Don't** put glassmorphism, gradient text, or identical icon-cards on the desk.
**Don't** copy Greg Koberger's owl, face, or photos.
