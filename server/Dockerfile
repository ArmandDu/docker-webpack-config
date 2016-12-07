FROM node:5.10.1

RUN     npm install nodemon babel-cli -g

WORKDIR /base
COPY package.json /base/
RUN npm config set registry http://registry.npmjs.org/ && npm install


WORKDIR /base/app
COPY . /base/app

ENV     PORT=3000
EXPOSE  3000

CMD     ["npm", "start"]
