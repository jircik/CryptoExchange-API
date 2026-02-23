# 🚀 CryptoExchange V1

API backend desenvolvida com **NestJS** para agregação de preços de criptomoedas em tempo real utilizando a API da CoinGecko.

O projeto foi construído com foco em arquitetura limpa, boas práticas de backend e preparação para evolução futura (V2 e V3). Atualmente a aplicação está **100% funcional e em operação**, mas continua em desenvolvimento com melhorias planejadas.

---

## 📌 Objetivo do Projeto

Criar uma API profissional capaz de:

- Consultar preços atualizados de criptomoedas
- Validar entradas de forma segura
- Tratar erros corretamente
- Documentar endpoints automaticamente
- Implementar cache para otimização de performance
- Servir como base para futuras integrações com múltiplas exchanges

---

## ⚙️ Tecnologias Utilizadas

- Node.js  
- NestJS  
- TypeScript  
- Axios (@nestjs/axios)  
- Swagger (documentação automática)  
- Class Validator  
- ConfigModule (.env)  

---

## 🌎 Integração Externa

- API da CoinGecko  
- Requisição em tempo real  
- Uso de API Key via `.env`  

---

## 🔥 Funcionalidades Implementadas (V1)

✅ Consulta de preço em USD e BRL  
✅ Validação de entrada com Regex  
✅ Normalização automática de input (lowercase + trim)  
✅ Tratamento de erro 404 para moeda inexistente  
✅ Tratamento de erro 502 para falha externa  
✅ Documentação automática com Swagger  
✅ DTO de entrada e saída estruturados  
✅ Cache em memória com TTL de 30 segundos  
✅ Arquitetura preparada para múltiplas exchanges  

---

## 📡 Endpoint Principal

### GET `/pricing/best?coin=bitcoin`

### Exemplo de resposta:

```json
{
  "coin": "bitcoin",
  "price": {
    "usd": 67415,
    "brl": 394083
  },
  "source": "CoinGecko",
  "timestamp": "2026-02-22T21:15:36.554Z"
}
```
--- 

## 🚀 Roadmap Futuro

🔹 V2 — Múltiplas Exchanges

Integração com Binance

Integração com Coinbase

Integração com Kraken

Comparação de preços entre exchanges

Melhor preço consolidado

🔹 V3 — Nível Profissional

Integração com Order Book (bid/ask real)

Cálculo de spread

Consideração de taxas

Sistema de arbitragem

Cache com Redis

WebSocket para atualização em tempo real

--- 

## 👨‍💻 Autor

Arthur Jircik Cronemberger

Estudante de Engenharia de Software
