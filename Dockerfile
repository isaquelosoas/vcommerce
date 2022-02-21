FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY prisma .
RUN npx prisma generate
COPY . .

CMD ["npm", "run" ,"start:dev"]
