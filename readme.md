# ACS 3220 - FINAL PROJECT 

## Reddit Clone App

| Health Check (UpTime Robot| 
|----------|
| [Link](https://stats.uptimerobot.com/Ng8Z3iVjJy) | 

[![Status](https://img.shields.io/badge/Status-Success-brightgreen.svg)](https://example.com)

This is a simple Reddit clone application built using Node.js and MongoDB.

### Prerequisites

Before you begin, ensure you have met the following requirements:

    Docker installed on your local machine.

### Getting Started

To get this application up and running, follow these steps:

Clone this repository to your local machine:

    bash

    git clone [https://github.com/yourusername/reddit-clone.git](https://github.com/this-is-emma/acs3220-project-edith)

### Navigate to the project's directory:

    bash
    
    cd acs3220-project-edith

### Build and start the Docker containers:

    bash
    
    docker-compose up --build

This command will start two containers: one for MongoDB and one for the Reddit Clone Node.js app.

The Reddit Clone app should now be running. You can access it in your web browser by navigating to:

    http://localhost:4000


### Stopping the Application

To stop the application and shut down the Docker containers, press Ctrl + C in the terminal where the docker-compose command is running. Then, to remove the containers, run:

    bash
    
    docker-compose down

### Configuration

The Node.js app is configured to run on port 3000 within the container and is exposed on port 4000 on your local machine. 
You can change the local port by modifying the ports section in the docker-compose.yml file if needed.

MongoDB is set up with a volume to persist data in the mongo_data volume. You can modify the MongoDB configuration by editing the mongo_db service in the docker-compose.yml file.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

This project is based on the Reddit platform.
  
