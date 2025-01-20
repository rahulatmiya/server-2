FROM node:16

WORKDIR /CONDITIONAL-RENDERING/src

COPY . .

COPY package*.json ./
RUN npm install

CMD ["npm", "run", "dev"]