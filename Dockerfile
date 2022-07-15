FROM node:16-alpine
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY config .
COPY db .
COPY src .
COPY app.js .

EXPOSE 3000
CMD [ "npm", "start" ]
