package com.example.service1.service.saveData

import com.example.service1.kafka.producer.KafkaProducer
import com.example.service1.repository.MongoRepositoryImpl
import com.example.service1.service.crawlData.CrawlData
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service

@Service
class SaveData (private val mongoRepo : MongoRepositoryImpl, private val kafkaProducer: KafkaProducer) {

    private val log: Logger = LoggerFactory.getLogger(SaveData::class.java)

    @Bean
    fun save() {
        val data = CrawlData().getAll()
        kafkaProducer.sendMessage(data)
//        data.forEach {
//            mongoRepo.save(it)
//        }
        log.info("Save Successfully")
    }
}