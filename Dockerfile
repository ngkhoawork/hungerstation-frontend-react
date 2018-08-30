FROM node:10.9.0-jessie

ENV APP_HOME /home/customer-website-frontend
WORKDIR $APP_HOME

COPY internals internals
COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

ENTRYPOINT ["yarn", "run"]
CMD ["start:prod"]