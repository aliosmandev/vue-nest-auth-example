FROM node:lts-alpine
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
ENV VITE_BACKEND_URL=http://localhost:5000
RUN npm run build

CMD [ "npm", "run", "preview"]