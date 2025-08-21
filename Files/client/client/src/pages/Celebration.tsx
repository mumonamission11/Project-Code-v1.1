import { useLocation } from 'wouter';
import { MoneyAnimation } from '@/components/MoneyAnimation';
import { Button } from '@/components/ui/button';

export default function Celebration() {
  const [, setLocation] = useLocation();

  // Get total from URL params or default to 0
  const urlParams = new URLSearchParams(window.location.search);
  const totalEarned = parseFloat(urlParams.get('total') || '0');

  return (
    <div className="min-h-screen p-4 relative overflow-hidden" style={{ backgroundColor: '#4B7FE8' }}>
      {/* Falling Money Animation */}
      <MoneyAnimation />

      {/* Header */}
      <div className="flex items-center mb-6 relative z-10">
        <button className="flex items-center gap-3" onClick={() => setLocation('/pos')}>
          <img src="/assets/icons/back-icon.png" alt="Back" className="w-12 h-12" />
          <span 
            className="uppercase text-2xl"
            style={{ 
              fontFamily: 'CocogoosePro, var(--font-sans)',
              color: '#FFEEA4',
              fontSize: '24px'
            }}
          >
            BACK
          </span>
        </button>
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-xl p-4 relative z-10 min-h-96" style={{ borderRadius: '12px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-4 bg-contain bg-center bg-no-repeat rounded-xl"
          style={{ 
            backgroundImage: 'url(/assets/images/celebration-bg-illustration.png)',
            backgroundSize: 'contain'
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-96 text-center">
          <h1 className="font-fredoka text-4xl text-darkgray mb-2">Hooray! 🎉</h1>
          <p className="text-darkgray text-lg mb-6">You made a sale!</p>
          
          <div className="bg-white/80 rounded-2xl p-6 mb-6 backdrop-blur-sm">
            <p className="font-fredoka text-2xl text-darkgray mb-2">Total Earned</p>
            <p className="font-fredoka text-5xl text-golden">${totalEarned.toFixed(2)}</p>
          </div>
          
          <p className="text-darkgray text-lg">Great job running your shop!</p>
        </div>
      </div>

      {/* Home Button */}
      <div className="mt-6 relative z-10">
        <Button
          className="w-full flex items-center justify-center gap-3 uppercase"
          onClick={() => setLocation('/')}
          style={{
            backgroundColor: '#39E5B8',
            height: '68px',
            borderRadius: '12px',
            fontFamily: 'CocogoosePro, var(--font-sans)',
            fontSize: '30px',
            color: '#000000'
          }}
        >
          HOME
          <img src="/assets/icons/home-button-icon.png" alt="Home" className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
