FROM node:16.13.1

ENV NODE_ENV production

RUN yarn install

RUN ls

EXPOSE 3333