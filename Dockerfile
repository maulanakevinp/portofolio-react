# Gunakan Node LTS
FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy file package.json dan lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file project
COPY . .

# Jalankan Vite Dev Server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]