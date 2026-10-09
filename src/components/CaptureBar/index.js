import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const DISMISS_KEY = 'sudodocs-capture-bar-dismissed';
const CWS_URL = 'https://chromewebstore.google.com/detail/sudodocs-capture/kcjmfohocapknbkdnecfenjfibfidadk';

// Shown on the home page only (not over every doc page), until dismissed.
export default function CaptureBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === 'true');
    } catch (e) {
      setDismissed(false);
    }
  }, []);

  if (dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, 'true');
    } catch (e) {
      // ignore - worst case the bar reappears next visit
    }
  };

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <img src="/img/logo.png" alt="" className={styles.logo} />
        <div className={styles.text}>
          <strong>SudoDocs Capture</strong>
          <span className={styles.tagline}>Turn what you do in any product into a shareable link - now on the Chrome Web Store.</span>
        </div>
        <a
          className={styles.cta}
          href={CWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Add to Chrome - it's free
        </a>
        <button
          className={styles.close}
          onClick={dismiss}
          aria-label="Dismiss"
          type="button"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
