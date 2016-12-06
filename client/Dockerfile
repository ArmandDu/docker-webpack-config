FROM node:5.10.1

RUN npm install webpack webpack-dev-server -g

WORKDIR /base
COPY package.json /base/
RUN npm config set registry http://registry.npmjs.org/ && npm install


WORKDIR /base/app
COPY . /base/app

ENV     PORT=8000
EXPOSE  8000

CMD     ["npm", "start"]
