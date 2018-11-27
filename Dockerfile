FROM node:10.9.0-jessie as build-stage

ARG API_ENV="staging"
ENV API_ENV=$API_ENV

ENV APP_HOME /home/customer-website-frontend
WORKDIR $APP_HOME

COPY internals internals
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:1.15.6

ENV APP_HOME /home/customer-website-frontend
WORKDIR $APP_HOME

COPY --from=build-stage /home/customer-website-frontend/build/ .
COPY --from=build-stage /home/customer-website-frontend/nginx.conf /etc/nginx/conf.d/default.conf
