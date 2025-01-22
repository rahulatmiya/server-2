FROM node:16

WORKDIR /CONDITIONAL-RENDERING/src
COPY package*.json ./
RUN npm install

RUN npm ci
COPY . .


CMD ["npm", "run", "dev"]