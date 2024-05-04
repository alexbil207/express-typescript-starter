FROM node:20.12.2 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20.12.2-alpine
WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD [ "node", "dist/index.js" ]
