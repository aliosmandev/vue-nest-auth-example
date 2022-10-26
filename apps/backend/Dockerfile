FROM node:lts-alpine
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
ENV MONGODB_URL=mongodb://root:rootroot@mongo:27017/vue-nest-auth-example?authSource=admin
RUN npm run build

CMD [ "node", "dist/main.js" ]