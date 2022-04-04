FROM node:14.17-alpine
RUN export NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "run", "dev"]