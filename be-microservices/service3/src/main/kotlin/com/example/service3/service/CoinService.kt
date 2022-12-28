package com.example.service3.service

import com.example.service3.model.Coin
import com.example.service3.repository.ElasticsearchRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Service

@Service
class CoinService (private val esRepository: ElasticsearchRepository) {
    fun getByPage(pageNumber: Int): Page<Coin> {
        return esRepository.findAll(PageRequest.of(pageNumber, 50))
    }
}