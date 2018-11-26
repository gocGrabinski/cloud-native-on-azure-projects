FROM node:8
WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install #REMOVED THIS BECAUSE OF DOCKER-COMPOSE PROXY ISSUES ON WINDOWS 10.
COPY . .
EXPOSE 7272
CMD ["node","index.js"]