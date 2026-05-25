# Entropy AI

A real-time password strength analyzer that uses entropy-based scoring to help you create stronger and more secure passwords.

## Features

- **Entropy-Based Scoring** — Calculates password strength using Shannon entropy (0–100)
- **Real-Time Analysis** — Updates instantly as you type
- **Crack Time Estimation** — Displays estimated time to crack (ms → centuries)
- **Pattern Detection** — Identifies sequential patterns, keyboard walks, and repeated characters
- **Common Password Detection** — Checks against a built-in list of 500+ common passwords
- **Actionable Feedback** — Clear suggestions to improve password strength
- **Strong Password Generator** — Generates cryptographically random passwords
- **Copy to Clipboard** — One-click copy with toast notification
- **Responsive Design** — Works perfectly on desktop and mobile
- **Dark Theme** — Modern, professional dark UI with smooth animations

## How It Works

1. **Entropy Calculation** — Shannon entropy determines the theoretical strength based on character variety and length
2. **Pattern Detection** — Regex and string matching identify weaknesses like `12345` or `qwerty`
3. **Common Password Check** — Password is checked against a curated list of 500+ commonly used passwords
4. **Score Adjustment** — Base entropy score is adjusted downward for detected weaknesses
5. **Crack Time** — Estimated using `2^(entropy - 1) / 10^9` guesses per second

## License

MIT
