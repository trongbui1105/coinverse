import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Chrono } from "react-chrono";

const data = [
  {
    title: "1998 – 2009",
    cardTitle: "The pre-Bitcoin years",
    cardSubtitle:
      "The first cryptocurrency was eCash, developed by the company DigiCash in 1990.",
    cardDetailedText: `Although Bitcoin was the first established cryptocurrency, there had been previous attempts at creating online currencies with ledgers secured by encryption. Two examples of these were B-Money and Bit Gold, which were formulated but never fully developed.`
  },
  {
    title: "2009",
    cardTitle: "Bitcoin begins",
    cardSubtitle: `Bitcoin is valued for the first time`,
    cardDetailedText: `The Bitcoin software is made available to the public for the first time and mining – the process through which new Bitcoins are created and transactions are recorded and verified on the blockchain – begins.
    As it had never been traded, only mined, it was impossible to assign a monetary value to the units of the emerging cryptocurrency. In 2010, someone decided to sell theirs for the first time – swapping 10,000 of them for two pizzas. If the buyer had hung onto those Bitcoins, at today’s prices they would be worth more than $100 million.`
  },
  {
    title: "2011",
    cardTitle: "Rival cryptocurrencies emerge",
    cardSubtitle: `Rival cryptocurrencies started to emerge into the market, with Litecoin, Namecoin and Swiftcoin to name a few all making their debut.`,
    cardDetailedText: `As Bitcoin increases in popularity and the idea of decentralised and encrypted currencies catch on, the first alternative cryptocurrencies appear. 
    These are sometimes known as altcoin and generally try to improve on the original Bitcoin design by offering greater speed, anonymity or some other advantage.
    Among the first to emerge were Namecoin and Litecoin. Currently there are over 1,000 cryptocurrencies in circulation with new ones frequently appearing.`
  },
  {
    title: "2013",
    cardTitle: "Bitcoin price crashes",
    cardSubtitle: `Early 2013 saw an extraordinary Bitcoin boom.`,
    cardDetailedText: `Shortly after the price of one Bitcoin reaches $1,000 for the first time, the price quickly begins to decline.
     Many who invested money at this point will have suffered losses as the price plummeted to around $300 – it would be more than two years before it reached $1,000 again.`
  },
  {
    title: "2014",
    cardTitle: "Scams and theft",
    cardSubtitle: `Scammers are stealing not only your money but also your data, which they then use to commit identity theft or to sell to other scammers`,
    cardDetailedText: `Perhaps unsurprisingly for a currency designed with anonymity and lack of control in mind, Bitcoin has proven to be an attractive and lucrative target for criminals.
     In January 2014, the world’s largest Bitcoin exchange Mt.Gox went offline, and the owners of 850,000Bitcoins never saw them again.
      Investigations are still trying to get to the bottom of exactly what happened but whatever the story, someone dishonestly got their hands on a haul which at the time was valued at $450 million dollars.
     At today’s prices, those missing coins would be worth $4.4 billion.    `
  },
  {
    title: "2016",
    cardTitle: "Ethereum and ICOs",
    cardSubtitle: `In 2016, excluding The DAO, ethereum ICOs raised a total of $46m`,
    cardDetailedText: `One cryptocurrency came close to stealing Bitcoin’s thunder this year, as enthusiasm grew around the Ethereum platform.
     This platform uses cryptocurrency known as Ether to facilitate blockchain-based smart contracts and apps.
    Ethereum’s arrival was marked by the emergence of Initial Coin Offerings (ICOs). These are fundraising platforms which offer investors the chance to trade what are often essentially stocks or shares in startup ventures, in the same manner that they can invest and trade cryptocurrencies. In the US the SEC warned investors that due to the lack of oversight ICOs could easily be scams or ponzi schemes disguised as legitimate investments.
     The Chinese government went one further, by banning them outright.`
  },
  {
    title: "2017",
    cardTitle: "Bitcoin reaches $10,000 and continues to grow",
    cardSubtitle: `As Bitcoin Scrapes $10000, an Investment Boom Like No Other`,
    cardDetailedText: `A gradual increase in the places where Bitcoin could be spent contributed to its continued growth in popularity, during a period where it’s value remained below previous peaks. Gradually as more and more uses emerged, it became clear that more money was flowing into the Bitcoin and cryptocoin ecosystem. During this period the market cap of all cryptocoins rose from $11bn to its current height of over $300bn. Banks including Barclays, Citi Bank, Deutsche Bankand BNP Paribas have said they are investigating ways they might be able to work with Bitcoin. Meanwhile the technology behind Bitcoin – blockchain – has sparked a revolution in the fintech industry (and beyond) which is only just getting started.
    Whatever your opinion on Bitcoin and cryptocurrency – and educated commenters have described them as everything from the future of money to an outright scam – it seems they are here to stay. Will it succeed in doing what many early adopters and evangelists claim it is destined to – replace government-controlled, centralised money with a distributed and decentralised alternative, controlled by nothing besides market forces? Well, 2018 may yield some clues but we are unlikely to know the answer for some time yet.`
  },
  {
    title: "July 2018",
    cardTitle: "Amazon",
    cardSubtitle: `Assume you invested $1,000 in a Tech Vanguard ETF at a $52 cost (VITAX). Current price $221.94`,
    cardDetailedText: `Amazon was granted two crypto-related patents. While the American e-commerce pioneer, with a revenue of over $177 billion, has not chosen to accept Bitcoin (BTC) and major altcoins as a payment option despite public interest and competitors’ experience, it has not ignored the subject altogether. In fact, Amazon Web Services (AWS), the company’s cloud computing arm, has contributed to blockchain adoption.`
  }
];

export default function OutlineTimeline() {
  return (
    <Box mt="70px" mb="50px">
        <VStack align="center" mt="10px">
            <Text variant="h4" color="gray.500">
                Roadmap
            </Text>
            <Text variant="h2" color="black.600">
                How Investing Can Change Your Future
            </Text>
        </VStack>
      <div style={{ width: "100%", height: "600px", marginTop: "20px" }}>
        <Chrono items={data} mode="VERTICAL" />
      </div>
    </Box>
  );
}
