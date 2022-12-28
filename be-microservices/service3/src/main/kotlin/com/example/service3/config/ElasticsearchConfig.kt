package com.example.service3.config

import org.springframework.data.elasticsearch.client.RestClients
import org.springframework.data.elasticsearch.client.ClientConfiguration
import org.elasticsearch.client.RestHighLevelClient
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories

@Configuration
@EnableElasticsearchRepositories(basePackages = ["com.example.service3.repository"])
@ComponentScan(basePackages = ["com.example.service3"])
class ElasticsearchClientConfig : AbstractElasticsearchConfiguration() {
    @Value("\${elasticsearch.host}")
    private val esHost: String? = null

    @Value("\${elasticsearch.port}")
    private val esPort: Int = 0

    @Bean
    override fun elasticsearchClient(): RestHighLevelClient {
        val clientConfiguration = ClientConfiguration
            .builder()
            .connectedTo("$esHost:$esPort")
            .withBasicAuth("elastic", "bqtrong")
            .build()
        return RestClients.create(clientConfiguration).rest()
    }
}