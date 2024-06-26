# User Management
This project implements a RESTful API using Docker for containerization, Node.js for server-side scripting, and PostgreSQL for the database, RESTful API design principles.

## Prerequisites

- Docker installed or (PostgreSQL): Follow the official installation guide for your operating system https://docs.docker.com/engine/install/.
- Node.js and npm (Node Package Manager) installed: Download and install Node.js from the official website, which includes npm https://nodejs.org/en.

## Result
| Feature | Image |
|---------|-------|
| Create User | [![Create User](https://github.com/loitd296/User-Management/assets/97017479/f2fe3f4d-322c-4fb6-bd64-ac06395c3deb)](#) |
| Update User | [![Update User](https://github.com/loitd296/User-Management/assets/97017479/30181ea3-86e4-4c71-9d41-0a5c6bf9d87e)](#) |
| Delete User | [![Delete User](https://github.com/loitd296/User-Management/assets/97017479/e7c9bf2c-aafe-4857-ac07-14551c07a1ab)](#) |
| Search User | [![Search User](https://github.com/loitd296/User-Management/assets/97017479/46821bf0-c9e1-4b30-b36a-e95a195fe49d)](#) |
| Docker Container | ![image](https://github.com/loitd296/User-Management/assets/97017479/4d945723-6d17-4290-a4d6-129a4ab73a20) |
| Nodejs App | ![image](https://github.com/loitd296/User-Management/assets/97017479/42df3967-63aa-48fe-9d8f-9f637a86fa48) |
| Postgre | ![image](https://github.com/loitd296/User-Management/assets/97017479/af598c71-6150-4c22-b88e-8d9cde0b60da) |
| [Docker Hub](https://hub.docker.com/layers/loitdgcc200345834/user-management-app/1.0/images/sha256:c7c76a15d639f5d72252199b6e58cc7e03addffa3f049c8cba20f7f5bcc4bb37?uuid=08314D9A-19D8-4C50-98A9-D80C9C0A9AD0) | ![image](https://github.com/loitd296/User-Management/assets/97017479/c8a9c551-6305-48e0-add7-23ef51b841e6) |




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
- `-c "CREATE DATABASE my-user;"`: Executes the SQL command to create the database named my_api_db.


you can check the database is created, you can use this command:

```docker
\l
```

Connect with my_api_db

```docker
\c my_api_db
```

Create Table:

```docker
CREATE TABLE users (
username varchar(255) PRIMARY KEY,
fullname varchar(255) NOT NULL,
role varchar(255) NOT NULL,
project text[] DEFAULT '{}', -- Array of strings for projects
activeYn varchar(1) CHECK (activeYn IN ('Y', 'N')) -- Enforce Y or N values
);
```

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
7. Running on the docker container
```
docker-compose up --build
```






