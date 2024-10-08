FROM node:18
WORKDIR /app
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]