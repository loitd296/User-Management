# User Management
This project implements a RESTful API using Docker for containerization, Node.js for server-side scripting, and PostgreSQL for the database, RESTful API design principles.

## Prerequisites

- Docker installed or (PostgreSQL): Follow the official installation guide for your operating system https://docs.docker.com/engine/install/.
- Node.js and npm (Node Package Manager) installed: Download and install Node.js from the official website, which includes npm https://nodejs.org/en.

## Result
| Feature | Image |
|---------|-------|
| Create User | [![Create User](https://github.com/loitd296/User-Management/assets/97017479/f2fe3f4d-322c-4fb6-bd64-ac06395c3deb)](#) |
| Update User | [![Update User](https://github.com/loitd296/User-Management/assets/97017479/347d1b75-fab9-4470-b221-fd1b1a9a105f)](#) |
| Delete User | [![Delete User](https://github.com/loitd296/User-Management/assets/97017479/e7c9bf2c-aafe-4857-ac07-14551c07a1ab)](#) |
| Search User | [![Search User](https://github.com/loitd296/User-Management/assets/97017479/46821bf0-c9e1-4b30-b36a-e95a195fe49d)](#) |




## Setting Up Docker (Optional)

1. Pull the PostgreSQL Image:
``` cmd
docker pull postgres
```
This command retrieves the official PostgreSQL image from Docker Hub.

2. Create a PostgreSQL Container:
``` cmd
docker run --name my-postgres -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres
```
Explanation:
- `--name my-postgres`: Assigns a custom name for easier identification.
- `-e POSTGRES_PASSWORD=your_password`: Sets the environment variable POSTGRES_PASSWORD for database access. Replace your password with a strong password.
- `-p 5432:5432`: Maps the container port 5432 to the host port 5432, allowing external access.
- `-d`: Runs the container in detached mode, allowing the command prompt to return.
- `Postgres`: Specifies the PostgreSQL image to use.

3. Verify Container Status:
``` cmd
docker ps
```
This command lists running containers. Look for the my-postgres container to be in the `Up` state.

4. Connect to PostgreSQL from the Container:

``` cmd
docker exec -it my-postgres bash
```
This grants access to the container's terminal.

5. Create the Database:
```
psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE my_api_db;"
```
Explanation:

- `psql`: The PostgreSQL command-line interface.
- `-U postgres`: Connects as the postgres user (default for the image).
- `-h localhost`: Connects to the PostgreSQL server on the host machine (localhost).
- `-p 5432`: Uses the mapped container port 5432.
- `-c "CREATE DATABASE my_api_db;"`: Executes the SQL command to create the database named my_api_db.

## Project Setup

1. Clone or download this project.
```
git clone https://github.com/loitd296/User-Management
```
2. Navigate to the project directory:
```
cd my-rest-api
```
3. Install dependencies:
```
npm install express pg dotenv
```
4. Modify .env
```
DB_USER="yourusername"
DB_HOST="localhost"
DB_NAME="yourdbname"
DB_PASSWORD="yourpassword"
DB_PORT="yourport"
```
6. Running project:
```
npm start
```






