import React, { useState, useEffect, useCallback } from 'react';
import "./MemoryGame.css"

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);  
  const [gameStarted, setGameStarted] = useState(false);

  const generateCards = useCallback(() => {
    const symbols = ['🐶', '🐱', '🐭', '🐻'];
    const duplicatedSymbols = symbols.concat(symbols);
    const shuffledSymbols = shuffleArray(duplicatedSymbols);
    const cards = shuffledSymbols.map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
      isMatched: false,
    }));
    return cards;
  }, []);

  useEffect(() => {
    if (gameStarted) {
        const initialCards = generateCards()
        setCards(initialCards)
    }    
  }, [gameStarted, generateCards]);

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  function handleStartGame(){
    setGameStarted(true)
  }

  function handleCardClick (id) {
    if (flippedCards.length < 2) {
      setCards((prevCards) => 
        prevCards.map((card) =>
            card.id === id ? { ...card, isFlipped: true } : card
        ))
        setFlippedCards((prevFlippedCards) =>
            [...prevFlippedCards, id]
        )
    }}

    useEffect(() => {
        if (flippedCards.length === 2) {
          const [firstCardId, secondCardId] = flippedCards;
          const firstCard = cards.find((card) => card.id === firstCardId);
          const secondCard = cards.find((card) => card.id === secondCardId);
          if (firstCard.symbol === secondCard.symbol) {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstCardId || card.id === secondCardId
                  ? { ...card, isMatched: true }
                  : card
              )
            );
          } else {
            setTimeout(() => {
              setCards((prevCards) =>
                prevCards.map((card) =>
                  card.id === firstCardId || card.id === secondCardId
                    ? { ...card, isFlipped: false }
                    : card
                )
              );
            }, 1000);
          }
          setFlippedCards([]);
        }
    }, [flippedCards, cards])


  return (
    <div className="memory-game">
      {gameStarted ? (
      <div className="cards">        
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.isFlipped ? 'flipped' : ''} ${
              card.isMatched ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className='card-inner'>
                <div className='card-face card-face-front'></div>
                <div className='card-face card-face-back'>
                {card.isFlipped ? card.symbol : ''}
                </div>
            </div>
          </div>
        ))}
        </div>
        ) : (            
            <>
            <p className='bemvindo'>Bem vindo ao Jogo da Memória</p>             
            <button className='start-button'
            onClick={handleStartGame}>Start</button>
            </>
        )}
      
    </div>
  );
}