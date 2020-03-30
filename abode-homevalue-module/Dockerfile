# What image do you want to start building on?
FROM node:8.17

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

# Script file that tells the container to wait for something else to complete
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Does your app have any dependencies that should be installed?
RUN npm install

# What port will the container talk to the outside world with once created?
EXPOSE 3333

# How do you start your app?
CMD [ "npm", "start" ]
