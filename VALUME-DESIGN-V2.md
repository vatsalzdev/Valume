# VALUME --- DESIGN SYSTEM V2

## 0. Purpose

Valume is a growth systems studio that builds lead-generation systems,
business automation, and digital products for businesses and creators.

This document is the visual and interaction specification for the Valume
website.

It is intentionally NOT based on a single reference site's layout.

Use the system below as a design language, then make original
compositions.

------------------------------------------------------------------------

# 1. Creative Direction

## Core aesthetic

**Dark editorial × kinetic studio × commercial technology**

Valume should feel like a serious independent studio that understands
business, design, software, and acquisition.

The site should communicate:

-   intelligence
-   taste
-   commercial awareness
-   technical capability
-   confidence
-   movement
-   restraint

It should NOT feel like:

-   an AI agency template
-   a SaaS landing page
-   a developer portfolio
-   a generic marketing agency
-   a cyberpunk site
-   a crypto site
-   a design-system demo
-   an Aceternity showcase
-   a collection of random motion effects

### Design principle

**Editorial first. Technology second. Decoration last.**

The visitor should remember the work and the point of view, not the
animation library.

------------------------------------------------------------------------

# 2. What Was Wrong With V1

V1 over-indexed on:

-   monochrome hairline grids
-   technical schematics
-   tiny metadata
-   abstract system diagrams
-   architectural labels
-   extremely restrained typography
-   empty black space

Those elements created a polished visual language, but they pushed
Valume toward an abstract technology studio rather than a commercially
credible growth systems agency.

V2 keeps the discipline but introduces:

-   stronger imagery
-   larger visual compositions
-   warmer editorial contrast
-   more expressive typography
-   asymmetric layouts
-   real product visuals
-   real work
-   stronger section transitions
-   clearer commercial messaging

Do not return to the dense schematic/dashboard aesthetic.

------------------------------------------------------------------------

# 3. Color System

The palette is intentionally small.

## Base

### Ink

`#0B0B0B`

Primary page background.

### Deep Ink

`#050505`

Used for visual depth, overlays, and selected image treatments.

### Bone

`#F1EEE7`

Primary text and light surfaces.

### Smoke

`#A7A39B`

Secondary text.

### Line

`#292824`

Structural borders.

## Signature Accent

### Signal Orange

`#FF4D2E`

This is Valume's only strong chromatic accent.

Use it for:

-   small indicators
-   selected navigation states
-   important arrows
-   interaction feedback
-   occasional typographic emphasis
-   tiny visual markers

Do NOT use it as a large background fill across sections.

Do NOT create orange gradients.

## Optional Image Accent

Generated imagery may contain controlled warm tones, metallics, skin
tones, restaurant lighting, concrete, glass, paper, etc.

The UI itself remains restrained.

------------------------------------------------------------------------

# 4. Typography

## Primary display

Use:

**Inter Tight**, **Satoshi**, **General Sans**, or another contemporary
grotesk.

Fallback:

`Inter, Arial, sans-serif`

Display weight:

400--500.

Avoid heavy 700/800 display typography.

The scale should create authority rather than font weight.

### Desktop display

Approximately:

`clamp(64px, 9vw, 148px)`

Line-height:

`0.88 – 0.98`

Letter spacing:

`-0.055em`

Do not force every headline into one size.

Allow different sections to have different scales.

## Secondary / body

16--19px.

Line-height:

1.45--1.6.

Maximum readable line length.

## Editorial accent

Use a restrained serif only when it genuinely improves editorial
contrast.

Preferred:

`Instrument Serif`, `DM Serif Display`, or `Georgia`.

Use for:

-   one or two words
-   short statements
-   editorial emphasis

Never use serif for everything.

## Utility / metadata

Use:

`IBM Plex Mono`, `DM Mono`, or `JetBrains Mono`.

Small uppercase labels.

Use sparingly.

------------------------------------------------------------------------

# 5. Layout Philosophy

The page should NOT be a centered stack of cards.

Use:

-   asymmetric grids
-   large image fields
-   overlapping compositions
-   edge-aligned typography
-   full-bleed sections
-   sticky labels
-   large project numbers
-   intentional whitespace
-   changing section rhythms

## Content width

Primary content:

`min(92vw, 1440px)`

Some visuals may become full viewport width.

## Grid

12-column desktop grid.

Use actual asymmetry.

Examples:

-   7 columns text / 5 columns image
-   4 columns metadata / 8 columns project
-   5 columns project title / 7 columns visual
-   full-width image with text overlapping its lower edge

Do not place everything inside equal cards.

------------------------------------------------------------------------

# 6. Border Radius

Default:

`0–6px`

Large visual containers:

`0–12px`

Buttons:

`9999px` only when a pill is visually appropriate.

Do not make every element rounded.

------------------------------------------------------------------------

# 7. Borders

Use borders selectively.

The old design used hairlines as the primary visual structure.

V2 uses them as support.

Use:

`1px solid #292824`

for:

-   section boundaries
-   project metadata
-   navigation separators
-   form structure

Do not draw a border around every card.

------------------------------------------------------------------------

# 8. Imagery

Imagery is now a major part of the identity.

But it must be art-directed.

## Image philosophy

Use generated images as **editorial campaign imagery**, not generic
stock photography.

Good:

-   cinematic restaurant interiors
-   close-up of a POS terminal
-   phone displaying a QR code in a real environment
-   creator workstation
-   hands interacting with a product
-   urban storefront at night
-   printed materials
-   business environments
-   abstract physical representations of data/attention
-   product interface photographed as an object

Bad:

-   smiling business people shaking hands
-   generic office meeting
-   robot head
-   holographic AI brain
-   blue/purple futuristic city
-   random 3D spheres
-   fake dashboard floating in space
-   generic laptop mockup

## Image treatment

Prefer:

-   hard crops
-   unusual aspect ratios
-   grain when appropriate
-   natural shadows
-   directional light
-   editorial framing
-   close-up details

Avoid:

-   overly polished stock-photo perfection
-   excessive glow
-   AI artifacts
-   surrealism without purpose

Generated images should feel like part of a campaign art direction.

------------------------------------------------------------------------

# 9. Hero

The hero must immediately explain Valume.

It should occupy roughly 80--100vh on desktop.

Do NOT make it a tiny centered SaaS hero.

## Recommended composition

Top:

VALUME

small navigation

Then a large statement:

**WE BUILD THE SYSTEMS\
BEHIND GROWTH.**

or:

**TURN ATTENTION\
INTO OPPORTUNITY.**

Final wording can be chosen during copy development.

Below:

A concise explanation of what Valume actually builds.

Then:

`SEE THE WORK →`

`START A PROJECT →`

## Hero visual

Use one large generated editorial image or art-directed visual.

The image should feel physical and commercially grounded.

Example direction:

A cinematic nighttime restaurant environment viewed from behind the
counter, with a phone/QR interaction in the foreground, subtle warm
light, deep blacks, realistic materials, editorial photography, no
visible brand logos.

The visual must not imply that the restaurant is a real client.

------------------------------------------------------------------------

# 10. Opening Point of View

Immediately after the hero, introduce a strong statement.

Example:

**Most businesses don't have an attention problem.\
They have a conversion problem.**

Then a short explanation.

This section exists to establish Valume's thinking.

It should feel editorial, not like a feature section.

------------------------------------------------------------------------

# 11. Selected Work

This is the most important section.

Do not create a 3-card grid.

Use large case-study compositions.

Each project should feel like an editorial spread.

## Project format

### Number

`01`

### Category

`HOSPITALITY / CUSTOMER EXPERIENCE`

### Project title

Large.

### One-sentence explanation

Short.

### Large visual

70--100% of the available composition.

### System flow

A simple visual showing what was built.

### Details

Problem

System

Technology

Status

Do not fabricate results.

------------------------------------------------------------------------

# 12. Project 01 --- QR Review Engine

This is a real Valume project.

Use it as the first flagship project.

## Positioning

**QR REVIEW ENGINE**

Hospitality / Customer Experience

A QR-driven customer experience that guides a customer from rating their
experience to generating, editing, copying, and manually submitting a
Google review.

## Visual material

Show actual product UI where possible.

Use generated environmental imagery around it.

Possible composition:

large restaurant photograph

-   

floating/embedded product interface

-   

QR code

-   

small flow:

SCAN → RATE → GENERATE → EDIT → COPY → REVIEW

Do not falsely show automated posting to Google.

------------------------------------------------------------------------

# 13. Project 02 --- Lead Generation System

This is an internal Valume system/prototype.

Do not present it as a completed client success story.

## Concept

Lead source research

↓

Lead database

↓

Qualification

↓

Personalized outreach

↓

Reply detection

↓

Human handoff / follow-up

Use actual system screenshots if available.

If screenshots are not available, create a carefully labeled conceptual
visualization.

Label:

`VALUME INTERNAL SYSTEM / IN DEVELOPMENT`

Never invent performance statistics.

------------------------------------------------------------------------

# 14. Project 03 --- Digital Products

This is a studio/lab section.

Purpose:

Show that Valume can turn recurring problems into software products.

Use a visual editorial treatment rather than a fake case study.

Possible copy:

**Some systems become products.**

When a recurring business problem can be solved beyond one client,
Valume turns the solution into software.

No fake launch dates.

No fake customers.

No fake revenue.

------------------------------------------------------------------------

# 15. Capabilities

Do not make a generic 4-card service grid.

Instead, use a large typographic list.

Example:

`01 — LEAD SYSTEMS`

`02 — BUSINESS AUTOMATION`

`03 — DIGITAL PRODUCTS`

`04 — CUSTOM SOFTWARE`

Each item expands or reveals a visual on hover/scroll.

The description should explain the business problem each capability
addresses.

------------------------------------------------------------------------

# 16. Who We Build For

Use a visually interesting horizontal or vertical taxonomy.

Examples:

BUSINESSES

Restaurants

Cafes

Hospitality

Real Estate

Service Businesses

CREATORS

Influencers

Educators

Digital Product Creators

Personal Brands

The point is not to claim expertise in every industry.

The section communicates range.

------------------------------------------------------------------------

# 17. Process

Use five steps.

### 01 --- FIND THE BOTTLENECK

Identify where attention, leads, time, or revenue are being lost.

### 02 --- MAP THE SYSTEM

Understand the actual workflow before choosing technology.

### 03 --- BUILD THE SMALLEST USEFUL VERSION

Avoid unnecessary features.

### 04 --- CONNECT IT TO THE BUSINESS

Integrate the system into the tools and workflow already being used.

### 05 --- IMPROVE

Use actual behavior and results to identify the next bottleneck.

Visual treatment:

Large numbers.

Large typography.

Small supporting text.

Minimal decoration.

------------------------------------------------------------------------

# 18. Anti-Agency Statement

This is an important brand section.

Possible direction:

**WE DON'T BUILD SOFTWARE\
BECAUSE SOFTWARE IS COOL.**

Then:

**We build when a system can remove friction, recover opportunities, or
create leverage.**

This establishes a point of view.

Do not make this section arrogant or insulting to competitors.

------------------------------------------------------------------------

# 19. Final CTA

Avoid:

"Ready to transform your business?"

Avoid:

"Unlock the future."

Avoid:

"Let's revolutionize your business."

Use direct language.

Example:

**THERE'S PROBABLY A BETTER WAY\
TO RUN THAT WORKFLOW.**

`TELL US WHAT'S BROKEN →`

Secondary:

`SEE THE WORK →`

------------------------------------------------------------------------

# 20. Footer

Minimal.

VALUME

Lead systems. Automation. Digital products.

WORK

CAPABILITIES

PROCESS

CONTACT

Small copyright / location metadata.

No giant footer sitemap.

------------------------------------------------------------------------

# 21. Motion Philosophy

Motion should create rhythm and hierarchy.

Not spectacle.

## Good motion

-   image clip-path reveals
-   typography entering from below
-   subtle horizontal movement
-   sticky project metadata
-   project image scale from 0.97 → 1
-   masked transitions
-   smooth hover states
-   horizontal project progression
-   small accent movement

## Bad motion

-   constant floating
-   particles everywhere
-   glowing lines
-   cursor-following objects
-   excessive magnetic buttons
-   3D objects spinning for no reason
-   scroll hijacking
-   perpetual background animation

Every animation must answer:

**What does this animation communicate?**

If the answer is "it looks cool", remove it.

------------------------------------------------------------------------

# 22. Interaction Rules

Buttons should feel physical and deliberate.

Primary CTA:

Bone background.

Ink text.

Pill.

Hover:

slight translation or inverted treatment.

Secondary CTA:

transparent.

Thin border.

No glowing hover state.

Project cards:

image zoom max \~3--5%.

Text shifts only slightly.

No exaggerated spring animations.

------------------------------------------------------------------------

# 23. Mobile

Mobile is not a compressed desktop.

Use:

-   oversized typography
-   full-width images
-   stacked project layouts
-   sticky/simple navigation
-   fewer decorative elements
-   preserved editorial rhythm

Hero should still feel dramatic.

Case studies should remain visually dominant.

Never reduce text to unreadable 10px metadata just to preserve desktop
layouts.

------------------------------------------------------------------------

# 24. Anti-AI-Slop Rules

These rules are mandatory.

NEVER use:

-   purple/blue AI gradients
-   glassmorphism
-   glowing orb
-   holographic human
-   robot imagery
-   floating dashboard
-   random 3D sphere
-   excessive bento grids
-   generic "AI-powered" language
-   fake statistics
-   fake client logos
-   fake testimonials
-   fake awards
-   fake case-study results
-   stock-office photography
-   excessive rounded cards
-   every-section-is-a-card layouts
-   animation for animation's sake

Do not use Aceternity components simply because they are available.

Aceternity/Motion may provide implementation primitives, but the visual
identity must remain Valume.

------------------------------------------------------------------------

# 25. Design Reference Usage

Use Refero and similar libraries for:

-   composition
-   typography hierarchy
-   case-study pacing
-   image treatment
-   navigation ideas
-   interaction patterns

Do NOT copy:

-   exact layouts
-   exact visual motifs
-   branding
-   copy
-   distinctive artwork

Use Aceternity/Motion for implementation primitives when appropriate.

Do not allow component availability to dictate the design.

------------------------------------------------------------------------

# 26. Design Test

Before approving any section, ask:

### 1

Could this belong to 500 other AI agencies?

If yes, redesign.

### 2

Does the section communicate something without animation?

If no, redesign.

### 3

Is the visual serving the business story?

If no, remove it.

### 4

Are we showing real work or pretending?

If pretending, remove the claim.

### 5

Is there a clear hierarchy?

If everything is loud, nothing is important.

### 6

Would the design still look good in grayscale?

If no, the palette is doing too much work.

### 7

Would a human designer recognize this as intentional?

If no, simplify.

------------------------------------------------------------------------

# 27. Technical Implementation

Preferred stack:

-   React
-   Vite or Next.js
-   TypeScript where useful
-   CSS / Tailwind
-   Motion for React where necessary

Keep the implementation lightweight.

Prioritize:

-   performance
-   accessibility
-   responsive behavior
-   semantic HTML
-   SEO
-   reduced motion
-   image optimization

Do not add a dependency merely to implement a simple animation.

------------------------------------------------------------------------

# 28. Final Creative Rule

Valume should feel like:

**a studio that understands growth and knows how to build the machinery
behind it.**

Not:

**an AI agency trying to look futuristic.**

The work is the proof.

The design creates the expectation.

The copy explains the point of view.

The interaction creates rhythm.

Nothing should exist merely because an AI website generator knows how to
make it.
