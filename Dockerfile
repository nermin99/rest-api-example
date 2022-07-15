FROM node:14-alpine
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY config config
COPY db db
COPY src src
COPY .env .env
COPY app.js app.js

EXPOSE 3000
CMD [ "npm", "start" ]
