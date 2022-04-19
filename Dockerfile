# syntax=docker/dockerfile:1
FROM node:14-alpine

WORKDIR /huy-test-devops

COPY . .
RUN yarn install --production

CMD ["node", "index.js"]

EXPOSE 3000