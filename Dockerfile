FROM node:14

COPY package*.json ./

RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 8080
CMD [ "nodemon", "server.js" ]
