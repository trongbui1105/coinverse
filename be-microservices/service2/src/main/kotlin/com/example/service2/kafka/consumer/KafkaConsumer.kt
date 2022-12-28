package com.example.service2.kafka.consumer

import com.example.service2.service.elasticsearch.CoinService
import com.example.service2.utils.MapDataToModel
import lombok.Generated
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.kafka.annotation.KafkaListener
import org.springframework.stereotype.Component
import org.springframework.stereotype.Service


@Component
class KafkaConsumer(private val coinService : CoinService) {
    @KafkaListener(topics = ["coin"], groupId = "test-consumer-group")
    fun receivedMessage(message: String) {
        val data = MapDataToModel().mapToCoin(message)
        logger.info("Message Received using Kafka listener: \n ${data[0]}")
        if (message != null) {
            coinService.saveToEs(data)
        }
    }

    companion object {
        private val logger: Logger = LoggerFactory.getLogger(KafkaConsumer::class.java)
    }
}