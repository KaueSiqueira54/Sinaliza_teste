import express from "express";
import cors from "cors";
import "dotenv/config";
import { Ollama } from "ollama";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // só aceita o React
  }),
);
app.use(express.json());

const ollama = new Ollama({
  host: "https://ollama.com",
  headers: {
    Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
  },
});

const SYSTEM_PROMPT = `Você é o Otto, mascote e assistente virtual do SinalizaAI.
O SinalizaAI é um sistema de comunicação acessível para recepções e secretarias 
que permite que pessoas surdas e ouvintes se comuniquem sem barreiras.
O sistema oferece:
- Reconhecimento de Libras via câmera com IA (MediaPipe + PyTorch com ~90% de acurácia)
- Avatar em Libras (Rybéná como definitivo, VLibras durante desenvolvimento)
- Reconhecimento de voz do atendente (Google Speech-to-Text)
- Comunicação por texto
- Interface instalável no computador local (Electron + React)
- Funciona sem internet constante

O público-alvo são instituições como hospitais, prefeituras e secretarias.
O sistema é vendido como licença para essas instituições.

Responda sempre em português brasileiro, de forma simpática, curta e objetiva.
Se não souber algo específico, diga honestamente.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, historico } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Mensagem inválida." });
    }

    const response = await ollama.chat({
      model: "gpt-oss:120b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...(historico || []),
        { role: "user", content: message },
      ],
      stream: false,
    });

    return res.json({ answer: response.message.content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
});

app.listen(port, () => {
  console.log(`Otto rodando em http://localhost:${port}`);
});
