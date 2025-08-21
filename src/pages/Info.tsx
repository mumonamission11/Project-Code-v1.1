import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

export default function Info() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#4B7FE8' }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="flex items-center gap-3" onClick={() => setLocation('/')}>
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
      <div className="bg-white rounded-xl p-4 mb-6" style={{ borderRadius: '12px' }}>


        {/* Descriptor Text */}
        <div className="mb-6">
          <p 
            className="text-center"
            style={{ 
              fontFamily: 'Nunito, sans-serif',
              fontSize: '12px',
              color: '#676767'
            }}
          >
            This app is free for personal use. Do not redistribute. I designed + developed this app by myself using free tools and take no responsibility for broken links, so please let me know if you find one!
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 mb-6">
          <Button
            asChild
            className="w-full text-center font-semibold"
            style={{
              height: '68px',
              backgroundColor: '#F980CB',
              color: '#000000',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '20px',
              borderRadius: '12px'
            }}
          >
            <a href="https://www.nomii.com.au/reach-out" target="_blank" rel="noopener noreferrer">
              send feedback
            </a>
          </Button>
          
          <Button
            asChild
            className="w-full text-center font-semibold"
            style={{
              height: '68px',
              backgroundColor: '#CCA4FF',
              color: '#000000',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '20px',
              borderRadius: '12px'
            }}
          >
            <a href="https://buymeacoffee.com/lydiafox" target="_blank" rel="noopener noreferrer">
              buy me a coffee
            </a>
          </Button>
          
          <Button
            asChild
            className="w-full text-center font-semibold"
            style={{
              height: '68px',
              backgroundColor: '#39E5B8',
              color: '#000000',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '20px',
              borderRadius: '12px'
            }}
          >
            <a href="https://www.nomii.com.au/free-stuff" target="_blank" rel="noopener noreferrer">
              more freebies
            </a>
          </Button>
        </div>

        {/* Decorative Family Photo */}
        <div className="flex justify-center">
          <img 
            src="/assets/images/decorative/info-family-photo.png" 
            alt="Family Photo"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p 
          style={{ 
            fontFamily: 'CocogoosePro, var(--font-sans)',
            fontSize: '11px',
            color: '#39E5B8'
          }}
        >
          v 1.0.0 made with love by lydia fox, founder of nomii app
        </p>
      </div>
    </div>
  );
}
