# Use node alpine as it's a small node image
FROM node:16.3.0

# Create the directory on the node image 
# where our Next.js app will live
WORKDIR ./usr/app

# Set /app as the working directory

# Copy package.json and package-lock.json
# to the /app working directory
COPY ./package.json  ./
COPY ./yarn.lock ./

COPY . .
COPY ./.env ./.env

# Install dependencies in /app

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 
CMD ["yarn", "start"]