# GrowVPD Pro Community Forum - Setup Instructions

This forum uses **GitHub Discussions** (via Giscus) for threaded discussions and **Discord** for real-time chat. Follow these steps to activate everything.

---

## 1. GitHub Discussions Setup

### Create or choose a repository

You need a **public** GitHub repository to host the discussions. You can either:

- Use your existing `GrowmasterVPDchart` repo (if it is public)
- Create a new public repo, e.g., `growvpd-community`

### Enable GitHub Discussions

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Features**
4. Check **Discussions**
5. Click **Set up discussions** if prompted

### Create discussion categories

Go to the **Discussions** tab and click the pencil icon next to "Categories" to manage them. Create these categories:

| Category | Description | Format |
|----------|-------------|--------|
| **General** | General community discussion | Open-ended |
| **Guides** | Discussion under guide articles | Open-ended |
| **Smart Automation** | Tuya, Mars Hydro, AC Infinity, etc. | Open-ended |
| **Bug Reports** | Report bugs and issues | Open-ended |
| **Feature Requests** | Suggest new features | Open-ended |

### Install Giscus app

1. Go to https://github.com/apps/giscus
2. Click **Install**
3. Select your repository
4. Grant access

### Get your IDs from Giscus

1. Go to https://giscus.app
2. Enter your repository (e.g., `your-username/growvpd-community`)
3. Choose **Discussion category**: select "General"
4. The page will show you the correct values for:
   - `data-repo` (e.g., `your-username/growvpd-community`)
   - `data-repo-id` (e.g., `R_kgDO...`)
   - `data-category-id` (e.g., `DIC_kwDO...`)
5. Note down these values for each category you want to use

### Replace placeholder values

Search and replace these placeholders in ALL HTML files:

| Placeholder | Replace with | Where to find it |
|-------------|-------------|------------------|
| `OWNER/REPO` | Your GitHub username/repo | giscus.app config |
| `REPO_ID` | Your repository ID | giscus.app config |
| `CATEGORY_ID` | Category ID for each embed | giscus.app config (changes per category) |

**Files to update:**

- `forum/index.html` — uses category "General"
- `forum/getting-started.html` — uses category "Guides"
- `forum/vpd-complete-guide.html` — uses category "Guides"
- `forum/connect-tuya.html` — uses category "Guides"
- `forum/connect-mars-hydro.html` — uses category "Guides"
- `forum/automation-rules.html` — uses category "Guides"
- `forum/grow-diary-guide.html` — uses category "Guides"
- `forum/ppfd-dli-guide.html` — uses category "Guides"
- `forum/equipment-setup.html` — uses category "Guides"

> **Note:** The `index.html` Giscus embed uses `data-mapping="specific"` with `data-term="General Discussion"`. All article pages use `data-mapping="pathname"` so each article gets its own discussion thread automatically.

---

## 2. Discord Widget Setup

### Get your Discord server widget ID

1. Open **Discord** and go to your server
2. Click **Server Settings** (gear icon)
3. Go to **Widget** in the left sidebar
4. Enable **Server Widget**
5. Copy the **Server ID** shown on that page

### Replace placeholder value

In `forum/index.html`, find this line:

```html
<iframe src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
```

Replace `YOUR_SERVER_ID` with your actual Discord server ID.

### Discord invite link

Make sure your Discord invite link `https://discord.gg/BGDpE6nP` is valid and set to never expire. To create a permanent invite:

1. Go to a channel in your Discord server
2. Click the "Create Invite" button
3. Set "Expire After" to **Never**
4. Set "Max Uses" to **No Limit**
5. Copy the invite link

---

## 3. Quick Verification Checklist

After replacing all placeholders, verify:

- [ ] Visit `forum/index.html` - Giscus widget loads and shows a comment box
- [ ] Visit any article page - Giscus discussion section appears before Related Guides
- [ ] Discord widget iframe shows your server's online members
- [ ] "Join Discord" buttons link to a valid invite
- [ ] GitHub Discussions page shows the categories you created
- [ ] Posting a comment via Giscus creates a discussion on GitHub

---

## 4. Optional: Custom Giscus Theme

If you want the Giscus widget to match GrowVPD's green theme:

1. Create a CSS file at `css/giscus-theme.css` with custom styles
2. Host it publicly (e.g., on your GitHub Pages site)
3. Change `data-theme="light"` to `data-theme="https://growvpd.pro/css/giscus-theme.css"` in all Giscus script tags

See https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-theme for details.

---

## Summary of all placeholders

| Placeholder | Count | Description |
|-------------|-------|-------------|
| `OWNER/REPO` | 9 files | GitHub username/repository |
| `REPO_ID` | 9 files | Repository ID from giscus.app |
| `CATEGORY_ID` | 9 files | Discussion category ID from giscus.app |
| `YOUR_SERVER_ID` | 1 file | Discord server ID for widget |
