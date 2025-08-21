import { useLocation } from 'wouter';
import { ItemSlot } from '@/components/ItemSlot';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [, setLocation] = useLocation();
  const { items } = useLocalStorage();

  // Create array of 9 slots
  const slots = Array.from({ length: 9 }, (_, index) => items[index] || null);

  const handleSlotClick = (index: number) => {
    setLocation('/camera');
  };

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#4B7FE8' }}>
      {/* Header Images */}
      <div className="w-full">
        <div 
          className="w-full bg-contain bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/home-header-banner-illustration.png)',
            height: '150px',
            width: '100%',
            backgroundSize: 'contain'
          }}
        />
        <div 
          className="w-full bg-contain bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/images/home-character-illustration.png)',
            height: '200px',
            width: '100%',
            backgroundSize: 'contain'
          }}
        />
      </div>

      {/* Items Grid Container */}
      <div className="mt-6">
        <div className="bg-white rounded-xl p-6 mb-6" style={{ borderRadius: '12px' }}>
          <h2 className="text-xl text-darkgray mb-4" style={{ fontFamily: 'CocogoosePro, var(--font-sans)' }}>My Shop Items</h2>
          <div className="grid grid-cols-3 gap-4">
            {slots.map((item, index) => (
              <ItemSlot
                key={index}
                item={item}
                onClick={() => handleSlotClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-end">
          <Button
            className="rounded-xl flex items-center justify-center transform hover:scale-105 transition-transform"
            style={{ 
              width: '68px', 
              height: '68px', 
              backgroundColor: '#52ADFF',
              borderRadius: '12px'
            }}
            onClick={() => setLocation('/info')}
          >
            <img 
              src="/assets/icons/info-icon.png" 
              alt="Info" 
              style={{ width: '48px', height: '48px' }}
            />
          </Button>
          <Button
            className="flex-1 text-white font-semibold flex items-center justify-center transform hover:scale-105 transition-transform uppercase"
            style={{ 
              width: '240px',
              height: '68px',
              backgroundColor: '#39E5B8',
              borderRadius: '12px',
              letterSpacing: '0.2px',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '30px'
            }}
            onClick={() => setLocation('/pos')}
          >
            PLAY
          </Button>
        </div>
      </div>
    </div>
  );
}
