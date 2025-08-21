import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useCamera } from '@/hooks/use-camera';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { AddDetailsModal } from '@/components/AddDetailsModal';
import { Button } from '@/components/ui/button';

export default function Camera() {
  const [, setLocation] = useLocation();
  const [showModal, setShowModal] = useState(false);
  const { saveItem } = useLocalStorage();
  
  const {
    videoRef,
    isActive,
    capturedImage,
    error,
    startCamera,
    stopCamera,
    capturePhoto,
    retakePhoto
  } = useCamera();

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, [startCamera, stopCamera]);

  const handleCapture = () => {
    capturePhoto();
  };

  const handleConfirm = () => {
    if (capturedImage) {
      setShowModal(true);
    }
  };

  const handleSaveItem = (name: string, price: number) => {
    if (capturedImage) {
      saveItem({
        name,
        price,
        image: capturedImage
      });
      setShowModal(false);
      setLocation('/');
    }
  };

  const handleRetake = () => {
    retakePhoto();
  };

  const handleClose = () => {
    stopCamera();
    setLocation('/');
  };

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#4B7FE8' }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="flex items-center gap-3" onClick={handleClose}>
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

      {/* Character and Camera Container */}
      <div className="bg-white rounded-xl mb-6" style={{ borderRadius: '12px', padding: '16px' }}>
        {/* Character Image */}
        <div className="flex justify-center mb-4">
          <img 
            src="/assets/characters/camera-character-illustration.png" 
            alt="Camera Character"
            className="w-full max-w-xs h-auto"
          />
        </div>

        {/* Camera Viewport */}
        <div className="relative bg-black aspect-square flex items-center justify-center rounded-xl overflow-hidden">
          {error ? (
            <div className="text-center text-white">
              <img src="/assets/icons/camera-icon.png" alt="Camera Error" className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-red-400 mb-2">Camera Error</p>
              <p className="text-gray-400 text-sm">{error}</p>
            </div>
          ) : capturedImage ? (
            <img 
              src={capturedImage} 
              alt="Captured" 
              className="w-full h-full object-cover"
            />
          ) : isActive ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center text-white">
              <img src="/assets/icons/camera-icon.png" alt="Camera" className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">Starting camera...</p>
            </div>
          )}
        </div>
      </div>

      {/* Camera Controls */}
      <div className="flex justify-center items-center gap-8">
        {/* Retry Button */}
        <button
          className="w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform disabled:opacity-50"
          onClick={handleRetake}
          disabled={!capturedImage}
        >
          <img src="/assets/icons/retry-icon.png" alt="Retry" className="w-16 h-16" />
        </button>
        
        {/* Capture Button */}
        <button
          className="flex items-center justify-center transform hover:scale-110 transition-transform disabled:opacity-50"
          onClick={handleCapture}
          disabled={!isActive || !!capturedImage}
          style={{ width: '88px', height: '88px' }}
        >
          <img src="/assets/icons/take-photo-icon.png" alt="Take Photo" className="w-full h-full" />
        </button>
        
        {/* Save Button */}
        <button
          className="w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform disabled:opacity-50"
          onClick={handleConfirm}
          disabled={!capturedImage}
        >
          <img src="/assets/icons/save-photo-icon.png" alt="Save" className="w-16 h-16" />
        </button>
      </div>

      {/* Add Details Modal */}
      <AddDetailsModal
        isOpen={showModal}
        capturedImage={capturedImage || ''}
        onSave={handleSaveItem}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
}
