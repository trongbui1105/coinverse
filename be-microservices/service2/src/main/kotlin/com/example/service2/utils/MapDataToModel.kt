package com.example.service2.utils

import com.example.service2.model.Coin
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue

class MapDataToModel {

    fun mapToCoin(data: String): List<Coin> {
        val mapper = ObjectMapper()
        val json = mapper.readTree(data)
        return mapper.readValue(json.toString())
    }

}