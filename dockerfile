# develop stage
FROM node:18-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli
COPY . .
# build stage
FROM develop-stage as build-stage
RUN npm i
RUN quasar build
# production stage
FROM nginx:1.17.5-alpine as production-stage
# 将字体文件复制到Nginx容器
COPY --from=build-stage /app/public/jf-openhuninn-2.0.woff /usr/share/nginx/html/jf-openhuninn-2.0.woff

# 复制构建后的应用程序文件
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
