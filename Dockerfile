FROM node:10-alpine
COPY ./package.json /app/
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node","/app/index.js"]
