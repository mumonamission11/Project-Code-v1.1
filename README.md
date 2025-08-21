# Assets Directory Structure

## How to Add Your Images and Icons

### 1. Directory Structure
Place your files in these folders:

```
client/public/assets/
├── icons/
│   ├── camera-icon.png          (Camera button icon)
│   ├── add-icon.png             (Add item + button)
│   ├── info-icon.png            (Info button icon)
│   ├── play-icon.png            (Play shop button icon)
│   ├── clear-icon.png           (Clear cart icon)
│   ├── money-icon.png           (Get $$$ button icon)
│   ├── retry-icon.png           (Camera retry icon)
│   ├── done-icon.png            (Camera done checkmark)
│   └── close-icon.png           (Close/back icons)
├── images/
│   ├── backgrounds/
│   │   ├── home-bg.png          (Home screen background)
│   │   ├── celebration-bg.png   (Celebration background)
│   │   └── camera-overlay.png   (Camera frame overlay)
│   └── decorative/
│       ├── confetti.png         (Confetti elements)
│       └── money-bills.png      (Money bill graphics)
└── characters/
    ├── happy-kid-1.png          (Celebration character 1)
    ├── happy-kid-2.png          (Celebration character 2)
    └── shop-keeper.png          (Shop keeper character)
```

### 2. How to Reference Your Images in Code

Once you place files in the assets folder, reference them like this:

```javascript
// For icons
<img src="/assets/icons/camera-icon.png" alt="Camera" />

// For background images
<div style={{ backgroundImage: 'url(/assets/images/backgrounds/home-bg.png)' }}>

// For characters
<img src="/assets/characters/happy-kid-1.png" alt="Happy kid" />
```

### 3. File Format Recommendations

- **Icons**: PNG with transparent background (24x24, 32x32, or 48x48 pixels)
- **Backgrounds**: PNG or JPG (optimize for mobile - keep under 500KB)
- **Characters**: PNG with transparent background
- **Decorative**: PNG with transparency for overlays

### 4. Quick Start Steps

1. Create the folder structure above in `client/public/assets/`
2. Drop your PNG files into the appropriate folders
3. Update the import statements in the component files
4. Test in the browser to see your custom graphics

### 5. Components That Use Images

- **Home.tsx**: Add item icon, background
- **Camera.tsx**: Camera icon, retry icon, done icon, close icon
- **POS.tsx**: Clear icon, money icon
- **Celebration.tsx**: Characters, confetti, money graphics
- **Info.tsx**: App icon
- **ItemSlot.tsx**: Add item placeholder icon
- **POSItem.tsx**: Uses captured item photos