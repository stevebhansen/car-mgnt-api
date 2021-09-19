FROM node:latest

COPY app/ /opt/app/

WORKDIR /opt/app

RUN npm install

EXPOSE 3000

CMD cd /opt/app && node server.js

# ENTRYPOINT ["tail"]
# CMD ["-f","/dev/null"]