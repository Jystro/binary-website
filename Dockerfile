FROM alpine AS builder

RUN apk --no-cache add npm

RUN adduser -D app
USER app

COPY --chown=app package*.json /app/

WORKDIR /app

RUN npm ci


FROM node:alpine

RUN adduser -D app
USER app

COPY --chown=app package*.json /app/

WORKDIR /app

COPY --from=builder --chown=app /app/node_modules node_modules

COPY --chown=app ./*.js /app/

COPY --chown=app src /app/

EXPOSE 8808

CMD ["npm", "start"]