import { useState, useEffect } from 'react'

const MESSAGES = [
  "Awoo babyyy",
  "Sayangg😭😭",
  "Aku mohonn sayangg",
  "Aku mohon aku minta maafff",
  "Gamau aku gamau kaya kemarin lagi reaksinya berlebihann",
  "Pliss sayangg",
  "I'm really regreting my reaction yesterday, i shouldn't react like that",
  "Aku mohon kamu tetep cerita semua yang kamu sukaa",
  "Akan aku dengerinn semua ke-excited-an kamuu",
  "Akan aku ladenin semua yang kamu sukaa, terutama hobi kamuu",
  "Gamau aku kita kaya gini gasukaaa",
  "Pliss sayangg aku minta maaff sayangg akuuu🥺",
  "Aku sayang kamu, aku cinta kamuu, dan aku tau kamu pun begitu, so please sayangg aku minta maaff sama kamuuu",
  "❤️"
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(MESSAGES[0]);

  const handleClick = () => {
    if (isTransitioning) return;

    const nextIndex = (currentIndex + 1) % MESSAGES.length;
    setIsTransitioning(true);

    // Fade out
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setVisibleMessage(MESSAGES[nextIndex]);
      // Fade in
      setIsTransitioning(false);
    }, 500); // Match CSS transition duration
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className={`message ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        {visibleMessage}
      </div>
      <div className="hint">
        (Tap to continue)
      </div>
    </div>
  )
}

export default App
