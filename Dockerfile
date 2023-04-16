FROM node:19 

COPY . /code
WORKDIR /code
RUN npm install

EXPOSE 300

CMD npm run dev

