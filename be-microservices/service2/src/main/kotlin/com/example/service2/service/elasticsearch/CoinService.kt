package com.example.service2.service.elasticsearch

import com.example.service2.model.Coin
import com.example.service2.repository.ElasticsearchRepository
import lombok.Generated
import org.springframework.stereotype.Service

@Service
@Generated
class CoinService (private val esRepository: ElasticsearchRepository) : ICoinService {
    override fun saveToEs(data: List<Coin>) {
        esRepository.saveAll(data)
    }
}