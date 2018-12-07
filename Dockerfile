FROM nginx:1.15.6

ENV APP_HOME /home/customer-website-frontend
WORKDIR $APP_HOME

COPY build/ .
COPY nginx.conf /etc/nginx/conf.d/default.conf

