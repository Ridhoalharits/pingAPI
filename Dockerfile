# Gunakan image node resmi
FROM node:18

# Set work directory di dalam container
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file ke dalam container
COPY . .

# Expose port 3000
EXPOSE 3000

# Perintah untuk jalanin app
CMD ["node", "index.js"]