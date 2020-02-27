FROM node:8.10-alpine
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
EXPOSE 80
CMD ["npm", "run", "test"]
