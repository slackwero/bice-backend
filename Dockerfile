FROM node:14.15.5-alpine3.13
ENV LANG C.UTF-8

WORKDIR /app
RUN apk add --no-cache git bash
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
#CMD [ "node", "index.js" ]