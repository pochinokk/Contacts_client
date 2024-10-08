FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install @angular/router @angular/core @angular/platform-browser
RUN npm install @angular/forms @angular/common

COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
