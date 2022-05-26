# syntax=docker/dockerfile:1

# Frontend 
FROM node:14.19.1-buster-slim as frontend
WORKDIR /angular
COPY angular/ ./angular
RUN cd angular && npm i @angular/cli && npm ci && npm run build

# Web Server
FROM node:14.19.1-buster-slim as web-server
WORKDIR /node
COPY --from=frontend angular/ .
COPY node/ ./node
RUN cd node && npm ci

ENV NODE_ENV=production
EXPOSE 3000

RUN cd node && npm run build

CMD [ "node", "node/dist/server.js" ]