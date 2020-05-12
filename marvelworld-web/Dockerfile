# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
# ARG REACT_APP_MARVEL=DEFAULT
# ENV REACT_APP_API_URL=$REACT_APP_MARVEL
# ENV REACT_APP_INMINUTU_API_URL2 PRUEBA2
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]