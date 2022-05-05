FROM node:16.13.1

ENV NODE_ENV production

RUN yarn install && yarn run build &&  yarn workspace server run start:prod

EXPOSE 3333