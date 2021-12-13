# Henrik VT Consulting Website & Dashboard

This is a dashboard that I am making for my I.T. Consulting business. Built using the hypebeast stack variety A of Next.js/Tailwind, Supabase, API Routes, and Stripe. I could have built with variety B of NextAuth, Prisma, and Planetscale but chose the former for development speed.

## Supabase
Chosen because I love the open source nature of this product. I could also use the 
#### Database
I have chosen to use a tool called DrawSQL to create the schema. You can find a link to that [here](<https://drawsql.app/n-a-63/diagrams/hvtconsulting>).
#### Authentication
My project has Email/Password, Google, and Facebook authentication methods enabled. However, this app has a funky signup flow. In order to limit who can create an account and therefore commission my services, I have an invite code based signup flow.

## API Routes
I am using Nextjs API Routes for a few things: Stripe payment handling and Supabase administrator functions. The stripe one is obvious; secure payment handling is very important. As for Supabase administrator functions, there are just some things that are easier to do in a secure environment with a service role key.

---
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
