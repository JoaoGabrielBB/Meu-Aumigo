/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import CardCachoro from "../CardCachorros";
import { useEffect, useState, useRef } from "react";

const CardapioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh; /* garante scroll inicial em telas grandes */
`;

const OpcaoCardapio = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Cardapio() {
  const [pets, setPets] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  const fetchPets = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:8000/animais?pagina=${pagina}&limite=${limite}`
      );
      const data = await res.json();

      if (Array.isArray(data)) {
        setPets((prev) => (pagina === 1 ? data : [...prev, ...data]));
        if (data.length < limite) setHasMore(false);
      } else if (data.resultado) {
        setPets((prev) =>
          pagina === 1 ? data.resultado : [...prev, ...data.resultado]
        );
        const totalPaginas = Math.ceil(data.total / limite);
        if (pagina >= totalPaginas) setHasMore(false);
      }
    } catch (erro) {
      console.error(`Erro ao buscar pet: ${erro}`);
    } finally {
      setLoading(false);
    }
  };

  // Fetch inicial e quando a página muda
  useEffect(() => {
    fetchPets();
  }, [pagina]);

  // Intersection Observer para scroll infinito
  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPagina((prev) => prev + 1);
        }
      },
      {
        threshold: 0,
        rootMargin: "200px", // dispara antes de chegar no final
      }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasMore, loading]);

  return (
    <CardapioContainer>
      <OpcaoCardapio>
        {pets.map((pet, index) => (
          <CardCachoro
            key={index}
            id={pet._id}
            nome={pet.nome}
            foto={pet.foto ? `http://localhost:8000${pet.foto}` : undefined}
            alt={pet.nome}
          />
        ))}
      </OpcaoCardapio>

      {/* Div sentinela sempre no final da lista */}
      {hasMore && <div ref={observerRef} style={{ height: "1px" }} />}

      {loading && <p>Carregando...</p>}
    </CardapioContainer>
  );
}

export default Cardapio;
