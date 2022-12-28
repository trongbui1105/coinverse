# Coinverse

A software system to collect data of digital currencies by market capitalization

# Table Of Content

# About the project

In this application, it will collect the real-time and historical data of cryptocurrencies by market capitalization

The users can see the whole and details of data about cryptocurrencies.

# About the high level architecture

![Screen Shot 2022-12-28 at 18.25.51.png](images/Screen_Shot_2022-12-28_at_18.25.51.png)

# **Built With**

### For front-end service

- ReactJS
- Chakra UI

### For back-end service

- Kotlin
- Spring Boot

### Other technologies

- Docker Swarm
- AWS Cloud
- Elasticsearch, Kibana
- Kafka
- MongoDB Replication Set

# **Getting Started**

### **Prerequisites**:

- At least 6 machines (Recommend cloud machine like AWS, Azure, etc)
- Have knowledge about Docker and Docker Swarm

### **Installation**:

1. Clone the repo and change to that folder

```jsx
git clone https://github.com/trongbui1105/coinverse.git
```

1. Install packages for the frontend service

```jsx
cd frontend
npm install
```

1. Set up MongoDB Replication Set on cloud machines (at least 3 nodes)
2. Set up Kafka
3. Set up Elasticsearch & Kibana
4. Change the host & port of these containers in file `[application.properties](http://application.properties)` of each backend  service

### Usage:

1. Run sequence of service in the backend services to collect data.
2. Run the frontend service:

```jsx
cd frontend
npm start
```

# User Interface

- Main page

![Screen Shot 2022-12-08 at 22.46.38.png](images/Screen_Shot_2022-12-08_at_22.46.38.png)

![Screen Shot 2022-12-08 at 22.46.57.png](images/Screen_Shot_2022-12-08_at_22.46.57.png)

![Screen Shot 2022-12-08 at 22.47.19.png](images/Screen_Shot_2022-12-08_at_22.47.19.png)

- Prices page

![Screen Shot 2022-12-08 at 22.48.24.png](images/Screen_Shot_2022-12-08_at_22.48.24.png)

![Screen Shot 2022-12-28 at 18.39.00.png](images/Screen_Shot_2022-12-28_at_18.39.00.png)

- Details of coin

![Screen Shot 2022-12-08 at 22.49.42.png](images/Screen_Shot_2022-12-08_at_22.49.42.png)

- Learning page

![Screen Shot 2022-12-08 at 22.57.12.png](images/Screen_Shot_2022-12-08_at_22.57.12.png)

![Screen Shot 2022-12-08 at 22.57.35.png](images/Screen_Shot_2022-12-08_at_22.57.35.png)

![Screen Shot 2022-12-08 at 22.57.47.png](images/Screen_Shot_2022-12-08_at_22.57.47.png)

- News page

![Screen Shot 2022-12-08 at 22.58.05.png](images/Screen_Shot_2022-12-08_at_22.58.05.png)