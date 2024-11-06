"'use client'"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PortfolioTables() {
  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Overview</CardTitle>
          <CardDescription>A comprehensive view of financial markets and other investments</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="stocks">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stocks">Stocks</TabsTrigger>
              <TabsTrigger value="reits">REITs</TabsTrigger>
              <TabsTrigger value="bonds">Bonds</TabsTrigger>
              <TabsTrigger value="other">Other Markets</TabsTrigger>
            </TabsList>
            <TabsContent value="stocks">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>High Dividend Stocks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Sector</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Consolidated Edison, Inc.", ticker: "ED", sector: "Utilities" },
                          { name: "Verizon Communications Inc.", ticker: "VZ", sector: "Telecommunications" },
                          { name: "Pfizer Inc.", ticker: "PFE", sector: "Pharmaceuticals" },
                          { name: "NextEra Energy, Inc.", ticker: "NEE", sector: "Renewable Energy" },
                          { name: "The Coca-Cola Company", ticker: "KO", sector: "Consumer Goods" },
                          { name: "Johnson &", ticker: "JNJ", sector: "Healthcare" },
                          { name: "Procter & Gamble Co.", ticker: "PG", sector: "Consumer Goods" },
                          { name: "AT&T Inc.", ticker: "T", sector: "Telecommunications" },
                          { name: "Duke Energy Corporation", ticker: "DUK", sector: "Utilities" },
                          { name: "3M Company", ticker: "MMM", sector: "Industrials" }
                        ].map((stock, index) => (
                          <TableRow key={index}>
                            <TableCell>{stock.name}</TableCell>
                            <TableCell>{stock.ticker}</TableCell>
                            <TableCell>{stock.sector}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Growth Stocks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Sector</TableHead>
                          <TableHead>Growth Areas</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Tesla, Inc.", ticker: "TSLA", sector: "Automotive/Renewable", growth_areas: "Electric Vehicles, Batteries" },
                          { name: "NVIDIA Corporation", ticker: "NVDA", sector: "Semiconductors/AI", growth_areas: "GPUs, AI, Data Centers" },
                          { name: "Meta Platforms, Inc.", ticker: "META", sector: "Social Media/VR", growth_areas: "Social Media, Metaverse" },
                          { name: "Microsoft Corporation", ticker: "MSFT", sector: "Technology/Cloud", growth_areas: "Cloud, AI, Software" },
                          { name: "Apple Inc.", ticker: "AAPL", sector: "Consumer Electronics", growth_areas: "iPhone, Services, Wearables" },
                          { name: "Alphabet Inc.", ticker: "GOOGL", sector: "Internet Services/AI", growth_areas: "Search, Cloud, AI" },
                          { name: "Amazon.com, Inc.", ticker: "AMZN", sector: "E-Commerce/Cloud", growth_areas: "E-commerce, AWS" },
                          { name: "Advanced Micro Devices, Inc.", ticker: "AMD", sector: "Semiconductors", growth_areas: "CPUs, GPUs" },
                          { name: "Salesforce, Inc.", ticker: "CRM", sector: "Cloud Software", growth_areas: "CRM, Cloud Solutions" },
                          { name: "Palantir Technologies Inc.", ticker: "PLTR", sector: "Data Analytics/AI", growth_areas: "Big Data, AI" }
                        ].map((stock, index) => (
                          <TableRow key={index}>
                            <TableCell>{stock.name}</TableCell>
                            <TableCell>{stock.ticker}</TableCell>
                            <TableCell>{stock.sector}</TableCell>
                            <TableCell>{stock.growth_areas}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reits">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>US REITs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Sector</TableHead>
                          <TableHead>Dividend Yield</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Annaly Capital Management Inc.", ticker: "NLY", sector: "Mortgage REIT", dividend_yield: "13.2%" },
                          { name: "AGNC Investment Corp.", ticker: "AGNC", sector: "Mortgage REIT", dividend_yield: "12.5%" },
                          { name: "VICI Properties Inc.", ticker: "VICI", sector: "Gaming/Hospitality", dividend_yield: "9.5%" },
                          { name: "Realty Income Corp.", ticker: "O", sector: "Retail", dividend_yield: "9.3%" },
                          { name: "Simon Property Group, Inc.", ticker: "SPG", sector: "Retail", dividend_yield: "8.9%" },
                          { name: "Prologis Inc.", ticker: "PLD", sector: "Industrial", dividend_yield: "8.3%" }
                        ].map((reit, index) => (
                          <TableRow key={index}>
                            <TableCell>{reit.name}</TableCell>
                            <TableCell>{reit.ticker}</TableCell>
                            <TableCell>{reit.sector}</TableCell>
                            <TableCell>{reit.dividend_yield}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>European REITs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Sector</TableHead>
                          <TableHead>Dividend Yield</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Vonovia SE", ticker: "VNA.DE", sector: "Residential", dividend_yield: "3.6%" },
                          { name: "Unibail-Rodamco-Westfield", ticker: "URW.AS", sector: "Retail", dividend_yield: "8.1%" },
                          { name: "Segro plc", ticker: "SGRO.L", sector: "Industrial/Logistics", dividend_yield: "2.5%" },
                          { name: "Klépierre SA", ticker: "KLO.PA", sector: "Retail", dividend_yield: "3.3%" }
                        ].map((reit, index) => (
                          <TableRow key={index}>
                            <TableCell>{reit.name}</TableCell>
                            <TableCell>{reit.ticker}</TableCell>
                            <TableCell>{reit.sector}</TableCell>
                            <TableCell>{reit.dividend_yield}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="bonds">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>US Bonds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Issuer</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Maturity Date</TableHead>
                          <TableHead>Coupon Rate</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { type: "U.S. Treasury Bond", issuer: "U.S. Government", ticker: "-", maturity_date: "10 Years", coupon_rate: "4.31%" },
                          { type: "iShares 7-10 Year ETF", issuer: "iShares", ticker: "IEF", maturity_date: "7-10 Years", coupon_rate: "4.10%" },
                          { type: "Corporate Bond", issuer: "Apple Inc.", ticker: "-", maturity_date: "10 Years", coupon_rate: "3.25%" },
                          { type: "Corporate Bond", issuer: "Microsoft Corporation", ticker: "-", maturity_date: "10 Years", coupon_rate: "3.00%" },
                          { type: "Vanguard Corp Bond ETF", issuer: "Vanguard", ticker: "VTC", maturity_date: "Varies", coupon_rate: "3.50%" },
                          { type: "Municipal Bond", issuer: "California State", ticker: "-", maturity_date: "20 Years", coupon_rate: "3.50%" },
                          { type: "iShares Muni Bond ETF", issuer: "iShares", ticker: "MUB", maturity_date: "Varies", coupon_rate: "3.25%" }
                        ].map((bond, index) => (
                          <TableRow key={index}>
                            <TableCell>{bond.type}</TableCell>
                            <TableCell>{bond.issuer}</TableCell>
                            <TableCell>{bond.ticker}</TableCell>
                            <TableCell>{bond.maturity_date}</TableCell>
                            <TableCell>{bond.coupon_rate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>European Bonds</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Issuer</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Maturity Date</TableHead>
                          <TableHead>Coupon Rate</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { type: "Government Bond", issuer: "German Government (Bund)", ticker: "-", maturity_date: "10 Years", coupon_rate: "2.83%" },
                          { type: "Government Bond", issuer: "Italian Government (BTP)", ticker: "-", maturity_date: "10 Years", coupon_rate: "4.00%" },
                          { type: "Euro Gov Bond ETF", issuer: "iShares", ticker: "IBGL", maturity_date: "7-10 Years", coupon_rate: "3.00%" }
                        ].map((bond, index) => (
                          <TableRow key={index}>
                            <TableCell>{bond.type}</TableCell>
                            <TableCell>{bond.issuer}</TableCell>
                            <TableCell>{bond.ticker}</TableCell>
                            <TableCell>{bond.maturity_date}</TableCell>
                            <TableCell>{bond.coupon_rate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="other">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Cryptocurrencies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Ticker</TableHead>
                          <TableHead>Allocation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Bitcoin", ticker: "BTC", allocation: "70%" },
                          { name: "Ethereum", ticker: "ETH", allocation: "10%" },
                          { name: "Solana", ticker: "SOL", allocation: "10%" },
                          { name: "Tether", ticker: "USDT", allocation: "10%" }
                        ].map((crypto, index) => (
                          <TableRow key={index}>
                            <TableCell>{crypto.name}</TableCell>
                            <TableCell>{crypto.ticker}</TableCell>
                            <TableCell>{crypto.allocation}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Commodities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Sector</TableHead>
                          <TableHead>Rationale</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {[
                          { name: "Gold", sector: "Precious Metal", rationale: "Safe-haven asset and inflation hedge" },
                          { name: "Copper", sector: "Industrial Metal", rationale: "Essential for renewable energy infrastructure" },
                          { name: "Lithium", sector: "Industrial Metal", rationale: "Critical for batteries in EVs and energy storage" },
                          { name: "Wheat", sector: "Agriculture", rationale: "Staple crop with steady demand due to global population growth" },
                          { name: "Silver", sector: "Industrial/Precious", rationale: "Demand from investors and industrial applications" },
                          { name: "Crude Oil", sector: "Energy", rationale: "Current energy demand, though facing shifts with transition" }
                        ].map((commodity, index) => (
                          <TableRow key={index}>
                            <TableCell>{commodity.name}</TableCell>
                            <TableCell>{commodity.sector}</TableCell>
                            <TableCell>{commodity.rationale}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}