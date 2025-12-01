FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install deps
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . /usr/src/app

# Expose port and start
ENV PORT=3001
EXPOSE 3001
CMD ["node", "index.js"]
