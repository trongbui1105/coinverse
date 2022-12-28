package com.example.service3.model

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.annotation.Id
import org.springframework.data.elasticsearch.annotations.Document

@Document(indexName = "coin")
@JsonIgnoreProperties(ignoreUnknown = true)
data class Coin(
    @Id
    @JsonProperty("name")
    val name: String,

    @JsonProperty("image")
    val image: String,

    @JsonProperty("current_price")
    val current_price: Double,

    @JsonProperty("market_cap")
    val market_cap: Long,

    @JsonProperty("market_cap_rank")
    val market_cap_rank: Int,

    @JsonProperty("fully_diluted_valuation")
    val fully_diluted_valuation: Long,

    @JsonProperty("total_volume")
    val total_volume: Long,

    @JsonProperty("high_24h")
    val high_24h: Double,

    @JsonProperty("low_24h")
    val low_24h: Double,

    @JsonProperty("price_change_24h")
    val price_change_24h: Double,

    @JsonProperty("price_change_percentage_24h")
    val price_change_percentage_24h: Double,

    @JsonProperty("market_cap_change_24h")
    val market_cap_change_24h: Double,

    @JsonProperty("market_cap_change_percentage_24h")
    val market_cap_change_percentage_24h: Double,

    @JsonProperty("price_change_percentage_1h_in_currency")
    val price_change_percentage_1h_in_currency: Double,

    @JsonProperty("price_change_percentage_24h_in_currency")
    val price_change_percentage_24h_in_currency: Double,

    @JsonProperty("price_change_percentage_30d_in_currency")
    val price_change_percentage_30d_in_currency: Double,

    @JsonProperty("price_change_percentage_7d_in_currency")
    val price_change_percentage_7d_in_currency: Double,
)
