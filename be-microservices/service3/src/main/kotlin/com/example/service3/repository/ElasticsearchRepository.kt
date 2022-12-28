package com.example.service3.repository

import com.example.service3.model.Coin
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository
import org.springframework.stereotype.Repository

@Repository
interface ElasticsearchRepository : ElasticsearchRepository<Coin, String> {
}