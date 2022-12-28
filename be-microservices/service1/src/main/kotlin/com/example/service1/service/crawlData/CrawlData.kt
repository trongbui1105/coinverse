package com.example.service1.service.crawlData

import com.example.service1.model.Coin
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ArrayNode
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.http.ResponseEntity
import org.springframework.web.client.RestTemplate
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

class CrawlData {
    private val log: Logger = LoggerFactory.getLogger(CrawlData::class.java)

    fun getAll() : List<Coin> {
        val result = mutableListOf<Coin>()
        for (i in 1..20) {
            result += get(i)
        }
        return result
    }

    fun get(page: Int) : List<Coin> {
        val restTemplate = RestTemplate()
        val url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=$page&sparkline=false&price_change_percentage=1h,24h,7d,30d"
        val response : ResponseEntity<ArrayNode> = restTemplate.getForEntity(url, ArrayNode::class.java)
        val mapper = ObjectMapper()
        return mapper.readValue(response.body.toString())
    }
}