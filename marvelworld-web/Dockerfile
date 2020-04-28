# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app

ENV NODE_ENV production

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install --production --silent 
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]