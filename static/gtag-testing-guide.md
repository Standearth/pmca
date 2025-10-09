# Google Analytics (gtag) Testing Guide
## Prime Members for Cleaner Amazon

## 🐛 The Problem (Fixed)

The original gtag implementation used inline `<script>` tags within SvelteKit's `svelte:head` block. This doesn't work properly with:
- Static site generation (GitHub Pages)
- Server-side rendering (SSR)
- SvelteKit's build process

**Why it failed:**
- Inline scripts in `svelte:head` are executed during build time, not runtime
- Static sites can't execute server-side JavaScript
- GitHub Pages serves static HTML files without JavaScript preprocessing

## ✅ The Solution

**New Implementation:**
1. **Client-side loading**: gtag loads only in the browser using `onMount()`
2. **Dynamic script injection**: Script is added to DOM after page loads
3. **Proper error handling**: Graceful fallbacks if GA fails to load
4. **Utility functions**: Clean API for tracking events

## 🧪 Testing Instructions

### 1. **Deploy and Wait**
After deploying to GitHub Pages:
- Wait 5-10 minutes for changes to propagate
- Clear your browser cache or use incognito mode

### 2. **Browser Developer Tools Test**
Open Chrome DevTools (F12) and check:

#### Console Tab:
- Look for: `"Google Analytics initialized successfully"`
- No errors related to gtag or dataLayer

#### Network Tab:
- Filter by "googletagmanager.com"
- Should see successful request to: `https://www.googletagmanager.com/gtag/js?id=G-8SZBSE6Y23`

#### Console Commands:
Test in console:
```javascript
// Check if gtag is loaded
typeof window.gtag
// Should return: "function"

// Check dataLayer
window.dataLayer
// Should return an array with gtag events

// Manual test event
gtag('event', 'test_event', {test: true})
```

### 3. **Google Analytics Real-Time Test**
1. Go to [Google Analytics](https://analytics.google.com)
2. Navigate to your property
3. Go to **Reports > Realtime**
4. Visit your website in another tab
5. Check if visitor appears in real-time report

### 4. **Page View Tracking Test**
Navigate between pages on your site:
- Homepage → Join page → Learn More
- Each page change should trigger a new page view
- Check Real-time reports in GA

### 5. **Mobile Testing**
Test on mobile devices:
- iOS Safari
- Android Chrome
- Mobile browsers sometimes block trackers differently

## 🛠 Debugging Common Issues

### **Issue: "gtag is not a function"**
**Solution:** gtag is still loading, this is normal for first few seconds

### **Issue: No data in Google Analytics**
**Checklist:**
- [ ] Correct GA property ID (G-8SZBSE6Y23)
- [ ] GA property configured for website
- [ ] Waiting 24-48 hours for data processing
- [ ] Testing with real users (not just you)

### **Issue: Script blocked by ad blockers**
**Expected:** Many users block GA, this is normal
**Impact:** ~20-40% of users may not be tracked

### **Issue: CORS or CSP errors**
**Check:** Browser console for security errors
**Solution:** Headers are configured in .htaccess

## 📊 Event Tracking Examples

The new implementation includes utility functions:

```javascript
import { 
  trackButtonClick, 
  trackFormSubmit, 
  trackCampaignAction,
  trackSocialShare 
} from '$utils/analytics.js';

// Track button clicks
trackButtonClick('join_campaign');

// Track form submissions  
trackFormSubmit('signup_form', true);

// Track campaign actions
trackCampaignAction('petition_signed', {
  source: 'homepage'
});

// Track social shares
trackSocialShare('facebook');
```

## 🔍 Verification Checklist

After deploying:
- [ ] Wait 10 minutes for deployment
- [ ] Clear browser cache
- [ ] Open site in incognito window
- [ ] Check browser console for success message
- [ ] Verify network request to googletagmanager.com
- [ ] Check Google Analytics real-time reports
- [ ] Test on mobile device
- [ ] Navigate between pages to test tracking

## 🚨 Emergency Fallback

If gtag still doesn't work, you can add this to `src/app.html`:

```html
<!-- Emergency GA fallback -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8SZBSE6Y23"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-8SZBSE6Y23');
</script>
```

But this should not be necessary with the new implementation.

## 📈 Expected Results

**Working correctly when you see:**
1. ✅ Console message: "Google Analytics initialized successfully"
2. ✅ Network request to googletagmanager.com (200 status)
3. ✅ Real-time visitor in Google Analytics
4. ✅ `typeof window.gtag` returns "function"
5. ✅ Page views tracked on navigation

---

*Last updated: October 2025*
*GA Property ID: G-8SZBSE6Y23*
