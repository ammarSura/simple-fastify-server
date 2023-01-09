FROM node:18-alpine
WORKDIR /src
COPY . .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 4000
