FROM node:14.15.4
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm build
CMD ["node", "index.js"]