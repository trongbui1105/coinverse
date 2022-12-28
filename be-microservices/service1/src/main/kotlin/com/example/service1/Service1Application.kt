package com.example.service1

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories
class Service1Application

fun main(args: Array<String>) {
    runApplication<Service1Application>(*args)
}
