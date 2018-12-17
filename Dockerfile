FROM node:10.9.0-jessie as builder

WORKDIR /home/customer-website-frontend

COPY internals internals
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

ARG API_ENV="staging"

ENV API_ENV=$API_ENV

RUN yarn build

FROM nginx:1.15.6

ENV APP_HOME /home/customer-website-frontend
WORKDIR $APP_HOME

COPY --from=builder /home/customer-website-frontend/build .

COPY nginx.conf /etc/nginx/conf.d/default.conf

