FROM node:14
COPY package*.json ./
RUN npm install
RUN npm install nodemon -g
RUN npm install --save express
RUN npm install --save sequelize
RUN npm install --save mysql2
RUN npm install --save express-handlebars
RUN npm install --save body-parser
COPY . .
EXPOSE 8081
RUN ./ngrok authtoken 1Y7MgtXe14O02wxYgHh1WbdY1Tq_33sfGSK6TZD7rhpSboVpx

# Para rodar sua aplicação localmente execute:
# nodemon index.js
# E para publicar sua aplicação na internet execute:
# ./ngrok http 8081
# Copie o link gerado, e compartilhe com quem quiser.