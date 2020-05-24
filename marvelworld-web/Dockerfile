# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app

# ENV REACT_APP_INMINUTU_API_URL2 PRUEBA2
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install
COPY . ./
RUN npm run build

# Create deployable image
FROM beamaustralia/react-env:latest as buildenv
WORKDIR /var/www
ARG ARG_REACT_APP_MARVEL
# RUN echo "Oh ARG_REACT_APP_MARVEL equal to: $ARG_REACT_APP_MARVEL"
#el orden de la variable de entorno importa en la capa.
ENV REACT_APP_MARVEL=$ARG_REACT_APP_MARVEL
COPY --from=build app/build /var/www
#COPY .env* /var/www/

# # production environment
# FROM nginx:stable-alpine
# COPY --from=buildenv /var/www /usr/share/nginx/html
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]