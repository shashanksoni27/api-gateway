FROM node:10.14.2
COPY ./package.json /app/
WORKDIR /app
RUN npm install
COPY . .
EXPOSE 8000
CMD ["node","/app/index.js"]
