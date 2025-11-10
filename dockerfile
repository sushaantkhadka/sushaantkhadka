# Use official Node.js 20 LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose default Next.js port
EXPOSE 3000

# Run dev server (hot reload)
CMD ["npm", "run", "dev"]
