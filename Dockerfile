FROM node

WORKDIR /opt/cliente
add . /opt/cliente
RUN npm install --quiet
RUN npm install nodemon -g --quiet


EXPOSE 8001

CMD npm start