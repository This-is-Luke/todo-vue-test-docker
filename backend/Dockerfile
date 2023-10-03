# Use Node.js image
FROM node:18.16.0
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . ./

# Expose port and start application
EXPOSE 3000
CMD ["npm", "start"]
