# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all files
COPY . .

# Expose the port and start the app
EXPOSE 3000
CMD ["npm", "run", "start"]
