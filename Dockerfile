FROM node:19 

COPY . /code
WORKDIR /code
RUN npm install

EXPOSE 3000

CMD npm run dev

