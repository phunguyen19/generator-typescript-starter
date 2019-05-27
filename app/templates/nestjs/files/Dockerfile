FROM node:10-alpine

COPY package.json .

RUN npm install

RUN mkdir /app

WORKDIR /app

COPY ./ /app

RUN adduser -D user
USER user
