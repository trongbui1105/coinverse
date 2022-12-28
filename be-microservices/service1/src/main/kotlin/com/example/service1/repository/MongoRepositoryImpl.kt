package com.example.service1.repository

import com.example.service1.model.Coin
import org.springframework.data.mongodb.repository.MongoRepository

interface MongoRepositoryImpl : MongoRepository<Coin, String> {
}