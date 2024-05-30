# develop stage
FROM node:18-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm run build
# production stage
FROM node:18-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/.output /app/.output

EXPOSE 3000


# 使用 node 運行構建項目
ENTRYPOINT ["node", ".output/server/index.mjs"]

