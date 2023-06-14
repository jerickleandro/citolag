FROM node:16-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH  
COPY package.json /app/package.json 

RUN yarn install 
RUN yarn global add react-scripts@4.0.3 -g  

CMD ["yarn", "start"]