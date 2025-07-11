# Docker Full-Stack Application

A full-stack web application built with Docker Compose, featuring a Vue.js frontend, Node.js API, MySQL database, and Nginx reverse proxy.

## 🏗️ Architecture

This project consists of four main services:

- **Frontend (Vue.js)**: Reactive web application served on port 3000
- **API (Node.js)**: RESTful API server running on port 8000
- **Database (MySQL 8.0)**: Persistent database on port 3306
- **Nginx**: Reverse proxy and static file server on port 80

## 🚀 Quick Start

### Prerequisites

- Docker Desktop installed and running
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd test-docker-php
   ```

2. **Build and start all services**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:8000
   - Nginx: http://localhost:80 (or http://localhost)

## 📁 Project Structure

```
test-docker-php/
├── app/                    # Vue.js frontend application
│   ├── src/
│   ├── package.json
│   └── .dockerignore
├── api/                    # Node.js API server
│   ├── src/
│   ├── package.json
│   └── .dockerignore
├── docker/                 # Docker configuration files
│   ├── api/Dockerfile
│   ├── app/Dockerfile
│   └── nginx/
├── compose.yaml            # Docker Compose configuration
├── .gitignore
└── README.md
```

## 🔧 Services Configuration

### Frontend (Vue.js)
- **Port**: 3000
- **Build**: Custom Dockerfile with Node.js 22 Alpine
- **Features**: Hot reload, TypeScript support

### API (Node.js)
- **Port**: 8000
- **Database**: MySQL connection with connection pooling
- **Features**: CORS enabled, RESTful endpoints

### Database (MySQL 8.0)
- **Port**: 3306
- **Database**: `products`
- **Persistence**: Docker volume `mysql_data`

### Nginx
- **Port**: 80
- **Role**: Reverse proxy and static file server
- **Configuration**: Custom nginx.conf

## 🛠️ Development

### Rebuilding Services
```bash
# Rebuild all services
docker-compose up --build

# Rebuild specific service
docker-compose up --build api
```

## 🗄️ Database

### Connecting to MySQL
```bash
# Connect via Docker
docker exec -it mysql mysql -u root -p

# Or connect from host (if port 3306 is available)
mysql -h localhost -P 3306 -u root -p
```

### Database Schema
The application uses a `products` table with the following structure:
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255)
);
```

## 🔍 API Endpoints

### Products
- **GET** `/products` - Retrieve all products
- **Response**: Array of product objects with `id`, `name`, `price`, and `image`