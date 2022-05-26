# Henrik VT Consulting Website & Dashboard

This is a dashboard that I am making for my I.T. Consulting business. Built using the hypebeast stack of Next.js/React/Tailwind, NextAuth, Prisma (with a Postgres DB), and Stripe. There are also other little components.

### NextAuth
My project primarily uses Google & Facebook OAuth to authenticate users. I chose NextAuth for its supreme degree of customizability. This app has an invite-code based signup system to guard against me getting spamming with proposals/messages. 

### Prisma (Postgres)
I chose Prisma simply because it's something that I've wanted to dig into for a while. Additionally, its a very well-loved ORM in the community. Full type safety is an amazing experience. NextAuth also has an adapter for it which allows me to easily tightly integrate sign up flows with custom authentication/authorization.

### NestJS
There is a NestJS app which effectively handles all my backend needs for this.

### Stripe  
Stripe was also a no-brainer. There are other payment processors out there but none of them match Stripe's amazing DX suite. Stripe just makes it so easy with all of the ways that they enable developers, whether its Checkout pages, or a custom form with Stripe Elements. I'm also making heavy use of Stripe's Invoicing features for this project.
