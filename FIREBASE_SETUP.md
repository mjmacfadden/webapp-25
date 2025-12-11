# Firebase Setup Guide for SWOLL Premium Authentication

## Overview
Firebase authentication has been integrated into your SWOLL app with **Google Sign-In only**. Users can sign in with their Google account to access premium features. Payment integration can be added later.

## Setup Steps

### 1. Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Name it "SWOLL" (or your preferred name)
4. Follow the setup wizard and create the project

### 2. Enable Google Authentication
1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click **Get Started**
3. Enable **Google** provider:
   - Click **Google**
   - Toggle "Enable" 
   - Select a support email for the project
   - Click "Save"

### 3. Create Realtime Database (Optional - for future user data storage)
1. Go to **Realtime Database** (left sidebar)
2. Click **Create Database**
3. Start in **Test Mode** (for development)
4. Choose a location close to your users

### 4. Get Your Firebase Config
1. In Firebase Console, click the gear icon ⚙️ → **Project Settings**
2. Under "Your apps", click the web icon `</>`
3. Copy your configuration object

### 5. Update `firebase-config.js`
Replace the placeholder values in `/firebase-config.js` with your actual Firebase credentials:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 6. Configure Google OAuth Consent Screen (Important!)
1. In Firebase Console, go to **Authentication** → **Settings**
2. Scroll to "Authorized domains" and add your domain(s):
   - For local testing: `localhost`
   - For production: `yourdomain.com`

## Features Added

### Authentication UI
- **Sign In / Sign Up Modal**: Located in the sidebar under "Auth"
- **Google Sign-In**: One-click sign-in with Google account
- **Persistent Sessions**: Users stay logged in across page refreshes
- **Sign Out**: Button appears when user is authenticated

### Premium Features
- When a user logs in with Google, they automatically get **premium mode** enabled
- Premium mode hides ads
- Users can manually toggle dev tools premium mode for testing
- Premium state persists in localStorage

### How It Works

1. **User clicks "Sign In / Sign Up"** in the sidebar
2. **Modal opens** with Google sign-in button
3. **User clicks "Sign in with Google"**
4. **Google popup appears** (user signs in with their Google account)
5. **On success**:
   - Modal closes
   - User email appears in sidebar
   - Premium mode enables automatically
   - Ads disappear

## Current Limitations & Future Enhancements

### Current (No Payments)
- ✅ Google authentication
- ✅ Persistent login sessions
- ✅ Premium features unlock on login
- ❌ No payment verification

### To Add Later
- Payment processing (Stripe recommended)
- Subscription management
- Payment history
- User dashboard
- Premium feature analytics

## Testing

### Test Google Sign-In
You need a Google account to test:
1. Click "Sign In / Sign Up" button
2. Click "Sign in with Google"
3. Sign in with your Google account
4. Verify you're logged in and premium is enabled

### Test Persistence
1. Sign in with Google
2. Refresh the page → Stay logged in ✓
3. Close and reopen browser → Still logged in ✓
4. Sign out → Back to login screen ✓

## Security Notes

⚠️ **Important for Production**:
1. Never commit Firebase credentials to version control
2. Use environment variables instead of hardcoded credentials
3. Set up Firebase Security Rules to protect user data
4. Enable HTTPS (required for authentication)
5. Configure authorized domains properly
6. Consider additional security measures:
   - Email verification
   - Two-factor authentication
   - Rate limiting

## File Structure

```
webapp-25/
├── index.html              (Updated with Google Sign-In UI and Firebase scripts)
├── firebase-config.js      (Firebase initialization - UPDATE THIS)
├── scripts.js              (Main app logic)
├── style.css               (Styling)
└── fireworks.js
```

## Integration Points

### In `index.html`:
- Firebase SDK scripts loaded
- Google Sign-In button modal UI
- Auth buttons in sidebar
- Event listeners for auth actions

### In `firebase-config.js`:
- Firebase initialization
- Auth state listener
- Helper functions for sign out

### In `scripts.js`:
- `updateAdVisibility()` called when auth state changes
- Premium mode automatically enabled on login

## Next Steps

1. ✅ Set up Firebase project
2. ✅ Enable Google authentication
3. ✅ Configure authorized domains
4. ✅ Get Firebase credentials
5. ✅ Update `firebase-config.js`
6. ✅ Test Google sign-in
7. 📅 Add payment processing (when ready)
8. 📅 Add subscription management
9. 📅 Add user dashboard

## Troubleshooting

### "Firebase not defined" error
- Check that Firebase SDK scripts are loaded in HTML
- Verify internet connection (CDN might be blocked)

### Google sign-in not working
- Verify Google provider is enabled in Firebase Console
- Check authorized domains include your domain
- Clear browser cache and try again

### Sign-in popup blocked
- Browser may be blocking popups
- User needs to allow popups for your site
- Try opening in incognito mode

### User data not persisting
- Check browser localStorage is not disabled
- Clear cache if having issues
- Verify onAuthStateChanged is firing

## Support

For Firebase documentation, visit:
- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Google Sign-In Setup](https://firebase.google.com/docs/auth/web/google-signin)
- [Firebase Console](https://console.firebase.google.com/)
