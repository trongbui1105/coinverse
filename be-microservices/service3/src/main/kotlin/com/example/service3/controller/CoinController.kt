package com.example.service3.controller

import com.example.service3.model.Coin
import com.example.service3.service.CoinService
import org.springframework.data.domain.Page
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api")
class CoinController (private val coinService : CoinService) {

    @CrossOrigin
    @GetMapping("coin/{pageNumber}")
    fun getByPage(@PathVariable("pageNumber") pageNumber : Int): ResponseEntity<Page<Coin>>? {
        return ResponseEntity<Page<Coin>>(coinService.getByPage(pageNumber - 1), HttpStatus.OK)
    }
}