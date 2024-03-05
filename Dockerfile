FROM node:20.11.0-alpine3.19

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app

RUN apk add --no-cache bash && \
    npm cache clean --force && \
    rm -rf node_modules package-lock.json && \
    npm install --frozen-lockfile

COPY . /app

RUN npm run build

EXPOSE ${API_PORT}