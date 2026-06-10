import { useEffect, useRef, useState } from "react";

// Hook responsável por conectar ao servidor Python via WebSocket
// Analogia: é o "receptor de rádio" — fica ouvindo o Python em segundo plano
// O componente Tradutor só precisa usar os valores que este hook expõe

export function useWebSocket(url, ativo) {
  const [fraseReconhecida, setFraseReconhecida] = useState("");
  const [historico, setHistorico] = useState([]);
  const [conectado, setConectado] = useState(false);
  const wsRef = useRef(null);

  useEffect(() => {
    // Só conecta quando o modo câmera estiver ativo
    if (!ativo) {
      // Se o modo foi desativado, fecha a conexão aberta
      if (wsRef.current) {
        wsRef.current.close();
        wsRef.current = null;
        setConectado(false);
      }
      return;
    }

    // Cria a conexão WebSocket
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      setConectado(true);
    };

    ws.onmessage = (evento) => {
      try {
        const dados = JSON.parse(evento.data);

        // Só processa mensagens do tipo "frase_reconhecida"
        // (outros tipos: voz_atendente, status_gravacao — ignorados aqui)
        if (dados.tipo === "frase_reconhecida") {
          const texto = dados.dado;
          setFraseReconhecida(texto);

          // Adiciona ao histórico com timestamp
          setHistorico((prev) => [
            { texto, hora: new Date().toLocaleTimeString("pt-BR") },
            ...prev.slice(0, 4), // mantém só os últimos 5
          ]);
        }
      } catch (e) {
        console.error("Erro ao processar mensagem WebSocket:", e);
      }
    };

    ws.onerror = () => {
      setConectado(false);
    };

    ws.onclose = () => {
      setConectado(false);
    };

    // Cleanup: fecha a conexão quando o componente desmontar ou o modo mudar
    return () => {
      ws.close();
    };
  }, [ativo, url]);

  return { fraseReconhecida, historico, conectado };
}