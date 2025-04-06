# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency declarations
COPY package*.json ./

# Install with relaxed peer dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build the project
RUN npm run build

# Expose API port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main.js"]
