FROM node:14
ENV HOST=0.0.0.0
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
CMD npm start
