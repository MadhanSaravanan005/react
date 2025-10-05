FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install root dependencies
RUN npm install --only=production

# Copy and build frontend
COPY frontend/package*.json ./frontend/
RUN cd frontend && npm install
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Copy backend files
COPY backend/ ./backend/
COPY public/ ./public/

# Copy the built React app to public
RUN cp -r frontend/build/* public/

# Expose port
EXPOSE 5000

# Start the application
CMD ["node", "backend/server.js"]