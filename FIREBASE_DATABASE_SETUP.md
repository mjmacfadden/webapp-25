# Firebase Realtime Database Setup for Cloud Sync

## Quick Setup Checklist

- [ ] 1. Create Realtime Database in Firebase Console
- [ ] 2. Set Database Rules for security
- [ ] 3. Enable offline persistence (optional but recommended)
- [ ] 4. Test cloud sync functionality

## Step 1: Create Realtime Database

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **swoll-8d2d8**
3. In the left sidebar, click **Realtime Database**
4. Click **Create Database**
5. Choose your location (close to your users, e.g., `us-central1`)
6. Start with **Start in locked mode** (we'll set custom rules)
7. Click **Enable**

## Step 2: Set Database Security Rules (CRITICAL ⚠️)

**DO THIS IMMEDIATELY** to protect user data!

1. In Realtime Database, click the **Rules** tab
2. Replace all content with these rules:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        "data": {
          ".validate": "newData.hasChildren(['workoutLog', 'preferences', 'exercises']) || newData.hasChildren(['workoutLog']) || newData.hasChildren(['preferences']) || newData.hasChildren(['exercises'])"
        }
      }
    }
  }
}
```

3. Click **Publish**
4. You'll see a warning - click **Publish** again to confirm

### What These Rules Do:
- ✅ Users can only read their own data (`$uid === auth.uid`)
- ✅ Users can only write to their own data
- ✅ Premium cloud sync works automatically
- ✅ Free users' local storage is unaffected
- ❌ Prevents unauthorized access
- ❌ Prevents users accessing other users' data

## Step 3: Verify Setup

### In Firebase Console:
1. Go to **Realtime Database** → **Data** tab
2. You should see an empty database structure
3. Rules should show your custom rules (not "Locked")

### In Your App:
1. Sign in with Google (as a premium user)
2. Log a workout
3. Check Firebase Console → **Data** tab
4. You should see:
```
users/
  {YOUR_USER_ID}/
    data/
      workoutLog/
        [workout entries...]
      preferences/
        timerDuration: 30
```

## Step 4: Offline Persistence (Optional but Recommended)

This allows the app to work offline and sync when back online.

The code already supports this - Firebase SDK handles it automatically. If you want to customize:

Add this to `firebase-config.js` if needed:
```javascript
// Enable offline persistence (already handled by compat SDK)
firebase.database.enableLogging(true); // Optional: for debugging
```

## How Cloud Sync Works

### For Premium Users (isPremium = 'true'):
1. User logs in with Google
2. `CloudSync.init()` automatically starts
3. Firebase listeners set up real-time sync
4. Any data changes sync to Firebase instantly
5. Changes appear on other devices in real-time

### For Free Users:
1. No cloud sync (stays local only)
2. Can still use all features offline
3. When they upgrade to premium, data will sync

## Data Structure Reference

Your Firebase database will look like:

```
users/
  {googleUserId}/
    data/
      workoutLog: [
        {
          id: 1702316400000,
          name: "Full Body Workout",
          date: "Dec 11, 2024",
          rating: 9,
          exercises: [...]
        }
      ],
      preferences: {
        timerDuration: 30,
        lastUpdated: "2024-12-11T..."
      },
      exercises: {
        "exercise-0-occurrence-0": [12, 185],
        "exercise-0-occurrence-1": [10, 190]
      }
    }
```

## Troubleshooting

### "Permission denied" errors in console
**Problem**: Your database rules are too restrictive
**Solution**: Verify rules are correctly set in Firebase Console

### Data not syncing
**Problem**: User not authenticated or not premium
**Solutions**:
- Verify user is signed in with Google
- Check `localStorage.getItem('isPremium')` is `'true'`
- Check browser console for errors
- Verify Firebase rules are published

### Can't write to database
**Problem**: Security rules blocking writes
**Solutions**:
- Ensure user is authenticated
- Check `auth.uid` matches database path
- Verify rules allow the operation

### Seeing other users' data
**Problem**: Security rules too permissive
**Solution**: Use the rules provided above - never use public rules

## Security Best Practices

1. ✅ Always start with locked mode
2. ✅ Set specific user-based rules immediately
3. ✅ Never use wildcard rules (`.read: true`, `.write: true`)
4. ✅ Test rules with real user data
5. ✅ Keep credentials out of version control
6. ✅ Monitor database usage for suspicious activity
7. ✅ Use Firebase security rules, not app-level only

## Production Deployment

Before going live:

1. **Security Rules**: Finalize and test thoroughly
2. **Backup**: Enable automatic backups in Firebase Console
3. **Monitoring**: Set up Firebase alerts for unusual activity
4. **Performance**: Monitor database reads/writes in console
5. **Scaling**: Realtime Database auto-scales, but monitor costs

## Cost Optimization

Firebase Realtime Database charges for:
- Reads: $1 per 100k reads
- Writes: $1 per 100k writes
- Storage: $5 per GB (1 GB free)

**Typical usage estimate**: <$1/month for small user base

## Next Steps

1. ✅ Create Realtime Database
2. ✅ Set security rules (use provided rules above)
3. ✅ Test with real user
4. 📅 Monitor performance in Firebase Console
5. 📅 Set up automated backups
6. 📅 Plan payment integration (Stripe/Paddle)

## Testing Cloud Sync

### Device/Browser Testing:
1. **Device A**: Sign in, log workout
2. **Device B**: Sign in same account
3. **Verify**: Workout appears on Device B instantly

### Cross-Browser Testing:
1. Chrome on Device A: Sign in, log workout
2. Safari on Device B: Sign in same account  
3. Verify: Data syncs in real-time

### Offline Testing:
1. Work offline, log workouts
2. Go online
3. Verify: Data syncs automatically

## Support

- [Firebase Realtime Database Docs](https://firebase.google.com/docs/database)
- [Security Rules Guide](https://firebase.google.com/docs/rules)
- [Firebase Console](https://console.firebase.google.com/)
- [Cloud Sync Implementation](./CLOUD_SYNC_GUIDE.md)
