# 🚀 CryptoPrice-API

API backend desenvolvida com **NestJS** para agregação de preços de criptomoedas em tempo real utilizando a API da CoinGecko.

O projeto foi construído com foco em arquitetura limpa, boas práticas de backend.

---

## 📌 Objetivo do Projeto

Criar uma API profissional capaz de:

- Consultar preços atualizados de criptomoedas
- Validar entradas de forma segura
- Tratar erros corretamente
- Documentar endpoints automaticamente
- Implementar cache para otimização de performance
  
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
  
---

## 🔥 Funcionalidades Implementadas

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

## 👨‍💻 Autor

Arthur Jircik Cronemberger

Estudante de Engenharia de Software
