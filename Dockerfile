# Base image
FROM node:16.12.0
# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Copy project files
COPY . .

# Build arguments
ARG NODE_VERSION=16.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION

# Build the React app
RUN yarn build

# Expose the app port
EXPOSE 80

# Start the app
CMD ["yarn", "start"]