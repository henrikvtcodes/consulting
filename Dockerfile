FROM node:16.13.1

ENV NODE_ENV production

RUN yarn install

RUN yarn run build

RUN yarn workspace server run start:prod

EXPOSE 3333