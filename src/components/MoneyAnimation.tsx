import { useEffect, useState } from 'react';

export function MoneyAnimation() {
  const [moneyElements, setMoneyElements] = useState<Array<{ id: number; left: string; delay: string }>>([]);
  const [confettiElements, setConfettiElements] = useState<Array<{ id: number; left: string; delay: string; color: string }>>([]);

  useEffect(() => {
    // Generate money bills
    const money = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${10 + i * 15}%`,
      delay: `${i * 0.5}s`
    }));

    // Generate confetti
    const confetti = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${15 + i * 10}%`,
      delay: `${i * 0.3}s`,
      color: ['#FF6B6B', '#4ECDC4', '#FECA57', '#FF9FF3'][i % 4]
    }));

    setMoneyElements(money);
    setConfettiElements(confetti);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Money Bills */}
      {moneyElements.map((element) => (
        <img
          key={`money-${element.id}`}
          src="/assets/images/decorative/money-bills.png"
          alt="Money"
          className="absolute animate-money-fall w-8 h-8"
          style={{
            left: element.left,
            animationDelay: element.delay,
            animationDuration: '4s'
          }}
        />
      ))}
      
      {/* Confetti Dollar */}
      {confettiElements.map((element) => (
        <img
          key={`confetti-${element.id}`}
          src="/assets/images/decorative/confetti-dollar.png"
          alt="Confetti"
          className="absolute animate-money-fall w-6 h-6"
          style={{
            left: element.left,
            animationDelay: element.delay,
            animationDuration: '3.5s'
          }}
        />
      ))}
    </div>
  );
}
