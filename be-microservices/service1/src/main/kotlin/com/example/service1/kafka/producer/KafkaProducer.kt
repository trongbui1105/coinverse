package com.example.service1.kafka.producer

import com.example.service1.model.Coin
import org.springframework.kafka.core.KafkaTemplate
import org.springframework.stereotype.Component

@Component
class KafkaProducer (private val kafkaTemplate: KafkaTemplate<String, List<Coin>>) {
    fun sendMessage(message: List<Coin>) {
        kafkaTemplate.send("coin", "Coin Data", message)
    }
}

