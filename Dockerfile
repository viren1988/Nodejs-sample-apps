# Use official Node.js image
FROM node:18-alpine
# Create app directory
WORKDIR /usr/src/app
# Copy package files
COPY package*.json ./
# Install dependencies
RUN npm install --production
# Copy app source
COPY src ./src
COPY public ./public
# Environment variables
ENV PORT=3000
ENV ENVIRONMENT=production
ENV APP_VERSION=1.0.0
# Expose port
EXPOSE 3000
# Start command
CMD [ "npm", "start" ]
