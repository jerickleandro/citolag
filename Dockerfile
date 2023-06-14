# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Copy project files
COPY . .

# Build the React app
RUN yarn build

# Expose the app port
EXPOSE 80

# Start the app
CMD ["yarn", "start"]