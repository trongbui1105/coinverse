package com.example.service2.service.elasticsearch

import com.example.service2.model.Coin

interface ICoinService {
    fun saveToEs(data: List<Coin>)
}