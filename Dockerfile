FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 7090
CMD ["node", "app.js"]
