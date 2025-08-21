import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AddDetailsModalProps {
  isOpen: boolean;
  capturedImage: string;
  onSave: (name: string, price: number) => void;
  onCancel: () => void;
}

export function AddDetailsModal({ isOpen, capturedImage, onSave, onCancel }: AddDetailsModalProps) {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSave = () => {
    if (!itemName.trim() || !itemPrice.trim()) return;
    
    const price = parseFloat(itemPrice);
    if (isNaN(price) || price < 0) return;

    onSave(itemName.trim(), price);
    setItemName('');
    setItemPrice('');
  };

  const handleCancel = () => {
    setItemName('');
    setItemPrice('');
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div 
        className="bg-white animate-slide-up"
        style={{ 
          height: '420px',
          width: '90%',
          padding: '16px',
          borderRadius: '12px'
        }}
      >
        {/* Item Name */}
        <div style={{ marginBottom: '8px' }}>
          <label 
            className="block text-left lowercase"
            style={{ 
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '20px',
              color: '#4A7EE6'
            }}
          >
            item name
          </label>
        </div>
        <Input
          type="text"
          placeholder=""
          value={itemName}
          maxLength={20}
          onChange={(e) => setItemName(e.target.value)}
          style={{
            backgroundColor: '#D6CCCB',
            borderRadius: '12px',
            padding: '8px',
            fontFamily: 'CocogoosePro, var(--font-sans)',
            fontSize: '20px',
            color: '#000000',
            marginBottom: '24px',
            border: 'none',
            width: '100%'
          }}
        />

        {/* Item Price */}
        <div style={{ marginBottom: '8px' }}>
          <label 
            className="block text-left lowercase"
            style={{ 
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '20px',
              color: '#4A7EE6'
            }}
          >
            item price
          </label>
        </div>
        <div className="relative" style={{ marginBottom: '20px' }}>
          <span 
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            style={{ 
              color: '#000000',
              fontSize: '20px',
              fontFamily: 'CocogoosePro, var(--font-sans)'
            }}
          >
            $
          </span>
          <Input
            type="number"
            placeholder=""
            step="0.01"
            min="0"
            maxLength={20}
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            style={{
              backgroundColor: '#D6CCCB',
              borderRadius: '12px',
              padding: '8px',
              paddingLeft: '24px',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '20px',
              color: '#000000',
              border: 'none',
              width: '100%'
            }}
          />
        </div>

        {/* Bottom Section - Character and Save Button */}
        <div className="flex items-center gap-4">
          <img 
            src="/assets/characters/modal-character-illustration.png" 
            alt="Character"
            style={{ width: '68px', height: '68px' }}
          />
          <Button
            className="flex items-center justify-center gap-3 uppercase"
            onClick={handleSave}
            disabled={!itemName.trim() || !itemPrice.trim()}
            style={{
              width: '158px',
              height: '68px',
              backgroundColor: '#39E5B8',
              borderRadius: '12px',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '30px',
              color: '#000000',
              letterSpacing: '0.2px',
              border: 'none'
            }}
          >
            SAVE
            <img src="/assets/icons/done-button-icon.png" alt="Done" className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
