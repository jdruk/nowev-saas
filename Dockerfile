FROM node:20.11.0-alpine3.19

WORKDIR /app

RUN mkdir -p /app

COPY package.json /app

RUN npm cache clean --force && \
    rm -rf node_modules package-lock.json && \
    npm install --frozen-lockfile

COPY . /app

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]