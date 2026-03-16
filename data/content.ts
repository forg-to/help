export interface Article {
  title: string;
  slug: string;
  content: string;
  lastUpdated?: string;
}

export interface Category {
  title: string;
  slug: string;
  icon: string;
  articles: Article[];
}

export const HELP_CONTENT: Category[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    icon: "Rocket",
    articles: [
      {
        title: "What is forg.to?",
        slug: "what-is-forg",
        content: `forg.to is a community for indie hackers and builders who build in public. It's where you share what you're working on — product updates, milestones, revenue numbers, failures, and wins — and connect with other people who actually understand what it means to build something from scratch.

What you can do on forg:
- Add your product and track its journey from idea to launch and beyond
- Post updates about your build — what shipped, what broke, what you learned
- Write long-form articles about your journey
- Cross-post your updates to X, LinkedIn, and Bluesky in one click
- Schedule posts ahead of time
- Follow other builders and products you care about
- Discover trending products and builders in your niche

forg is not a social network for everyone. It's for builders.`
      },
      {
        title: "Creating Your Account",
        slug: "creating-your-account",
        content: `Sign up options:
- Google — one-click sign in with your Google account
- X (Twitter) — sign in with your X/Twitter account
- LinkedIn — sign in with your LinkedIn account
- GitHub — sign in with your GitHub account
- Email + Password — create an account with any email address

After signing up you'll go through a short onboarding flow to choose your username, fill in your bio, and add your first product. You can skip most of it and come back later.

Username rules:
- Must be unique across forg.to
- Case-insensitive (so Kislay and kislay are the same)
- Your profile URL is forg.to/[username]`
      },
      {
        title: "Setting Up Your Profile",
        slug: "setting-up-your-profile",
        content: `Your profile is your builder identity on forg. Here's what you can fill in:

Basic info:
- Display name and username
- Profile photo and cover image
- Bio (up to 100 characters — keep it sharp)
- Location (up to 30 characters)
- Website URL

Skills: Tag the languages, frameworks, tools, and platforms you work with (e.g. React, TypeScript, AWS). These show up on your profile and help others find builders with specific expertise.

Social links: Add links to your X/Twitter, GitHub, LinkedIn, YouTube, or any other platform. These display on your profile.

Open to: Signal what kinds of opportunities you're open to:
- Jobs
- Freelance
- Collaborations
- Mentorship

This is public — builders and companies can filter by these on forg.

Platform integrations: Connect your accounts on Medium, dev.to, Hashnode, Substack, YouTube, GitHub, Codeforces, LeetCode, and CodeChef. These show up as widgets on your profile page, so visitors can see your activity across the internet in one place.`
      }
    ]
  },
  {
    title: "Products",
    slug: "products",
    icon: "Package",
    articles: [
      {
        title: "Adding Your Product",
        slug: "adding-your-product",
        content: `Every builder on forg should have at least one product. A product is anything you're building — a SaaS, mobile app, browser extension, open source project, API, or anything else.

To add a product: Go to your profile → click "Add Product" or go to forg.to/product/new.

What you fill in:

| Field | Details |
|-------|---------|
| Name | Your product's name |
| Slug | URL-friendly identifier (e.g. my-product → forg.to/p/my-product) |
| Tagline | One-sentence description |
| Description | Longer description (shown on product page) |
| Logo | Square image, shown everywhere |
| Website URL | Your product's homepage |
| GitHub URL | If open source |
| Category | Choose from 44 categories (AI & ML, Developer Tools, SaaS, etc.) |
| Product type | SaaS, Browser Extension, Mobile App, Desktop App, API, Open Source, Others |
| Platforms | Web, iOS, Android, Mac, Windows, Linux, Chrome Extension, Firefox Extension |
| Pricing | Free, Freemium, One-time Purchase, Subscription |
| Status | Where in the lifecycle your product is |`
      },
      {
        title: "Product Lifecycle",
        slug: "product-lifecycle",
        content: `Every product on forg has a status that reflects where it is in its journey. You can update this status at any time as your product evolves.

Pre-launch stages:

| Status | Meaning |
|--------|---------|
| Idea | Just a concept — you haven't started building yet |
| Validating | Testing whether the idea has demand |
| Building | Actively developing the product |
| Alpha | Internal testing phase |
| Beta | Limited public testing with early users |

Live stages:

| Status | Meaning |
|--------|---------|
| Launched | Publicly launched — triggers Launch Boost (see below) |
| Growing | Post-launch, acquiring users and iterating |
| Profitable | Generating meaningful revenue |
| Funded | Received external investment |
| Scaling | Aggressively growing the user base |

Other statuses:

| Status | Meaning |
|--------|---------|
| Paused | Temporarily not working on it |
| Dead | Shut down — this is terminal, no going back |
| Acquired | Product was acquired — this is terminal |

Transition rules:
- You cannot jump from idea directly to launched. You must progress through at least one intermediate stage first (validating, building, alpha, or beta).
- Once your product is in a post-launch stage (growing, profitable, funded, scaling), you cannot move it back to pre-launch stages.
- Dead and acquired are final. You cannot change the status after reaching these.
- During Launch Boost week (the 7 days after launching), the launched status is locked. The system automatically transitions your product to growing after 7 days.`
      },
      {
        title: "Launching Your Product",
        slug: "launching-your-product",
        content: `Launching on forg gives your product a 7-day Launch Boost — elevated visibility across the platform during the most important week of your product's life.

How to launch:
1. Your product must be in validating, building, alpha, or beta status first
2. Go to your product page → click "Launch"
3. Pick a launch week from the available weekly batch slots

Batch slots:
- Each week (Sunday to Sunday IST) has a maximum of 20 product launches
- When a week is full, you'll see it marked as "Full" in the scheduler and must choose a different week
- Up to 8 upcoming weeks are available to schedule into
- Each product can only launch once

What happens during Launch Boost:
- Your product appears prominently on the Discover and Products pages
- The launched status is locked for 7 days (no manual status changes)
- After 7 days, your product automatically transitions to growing

Premium launch perks:
- Your product gets featured placement for the first 72 hours (3 days) of the Launch Boost window
- This means it shows at the top of the launch section for the first 3 days

Tips for a successful launch:
- Have a real product page with a logo, clear tagline, and description before you launch
- Post an update on launch day explaining what your product does and who it's for
- Engage with comments and questions — the algorithm rewards engagement
- Cross-post your launch update to X and LinkedIn on launch day`
      }
    ]
  },
  {
    title: "Content",
    slug: "content",
    icon: "FileText",
    articles: [
      {
        title: "Writing Updates",
        slug: "writing-updates",
        content: `Updates are the core content on forg. Think of them as build-in-public posts — short-to-medium posts about what you're working on.

Character limits:
- Free accounts: 500 characters
- Premium accounts: 3,000 characters

Update types: When you write an update, you can tag it with a type to help others understand the context:

| Type | Use it when... |
|------|----------------|
| Update | General progress update |
| Launch | Announcing a new product or major feature launch |
| Feature | You shipped a new feature |
| Milestone | Hit a significant goal (1,000 users, first paying customer, etc.) |
| Revenue | Sharing revenue numbers or MRR updates |
| Bug fix | Resolved a notable bug |
| Design | UI/UX changes or redesigns |
| Idea | Sharing an idea or hypothesis you're exploring |
| Fail | Something didn't work — the community respects honesty |
| Win | Celebrating a success |
| Announcement | News or upcoming changes |
| Integration | You integrated with another tool or platform |

Attaching media: You can attach images and videos to your updates. Posts with images get better visibility in the feed.

Linking to a product: When writing an update, you can attach it to one of your products. This shows the update on your product page and in product feeds.

Pinning updates (Premium): Premium users can pin up to 3 updates to the top of their profile.`
      },
      {
        title: "Writing Articles",
        slug: "writing-articles",
        content: `Articles are long-form content — think deep dives, essays, tutorials, and build logs. They decay slower in the feed than updates, so a great article keeps driving engagement for days.

Articles have their own dedicated feed at forg.to/articles.

Writing tips:
- Articles rank better in the feed when they're substantial (not just a paragraph)
- They're indexed by search engines, so a well-written article can bring in organic traffic to your profile
- Add a cover image — it significantly improves click-through rates`
      },
      {
        title: "Content Types",
        slug: "content-types",
        content: `| | Updates | Articles |
|---|---|---|
| Best for | Quick progress posts, milestones, daily/weekly wins | Deep dives, essays, tutorials, case studies |
| Length | 500 chars (free) / 3,000 chars (premium) | Unlimited |
| Feed decay | Fast (ephemeral) | Slow (evergreen) |
| Comments | Yes | Yes |
| Media | Images, videos | Cover image + inline images |
| Cross-posting | Yes | No |`
      }
    ]
  },
  {
    title: "Cross-Posting",
    slug: "cross-posting",
    icon: "Share2",
    articles: [
      {
        title: "How Cross-Posting Works",
        slug: "how-cross-posting-works",
        content: `When you write an update on forg, you can publish it to multiple platforms simultaneously with one click — X (Twitter), LinkedIn, and Bluesky, plus forg itself.

This saves time and ensures your audience on every platform sees your build-in-public updates without you having to copy-paste.

Platforms you can cross-post to:
- X (Twitter)
- LinkedIn
- Bluesky
- forg (always on by default)

How to use it:
1. Write your update in the post composer
2. At the bottom of the composer, toggle the platforms you want to post to
3. Click "Post" — it publishes to all selected platforms simultaneously

Things to know:
- Each platform has its own character limits — Bluesky is capped at 300 characters. If your post exceeds the limit for a platform, that platform will be skipped.
- Images attached to your forg post will also be uploaded to the connected platforms.
- Cross-posting happens in parallel — all platforms receive the post at the same time.
- If one platform fails (e.g. expired token), your post still publishes to the others.`
      },
      {
        title: "Connecting X (Twitter)",
        slug: "connecting-x-twitter",
        content: `How to connect:
1. Go to Settings → Integrations → X (Twitter)
2. Click "Connect X Account"
3. You'll be redirected to X to authorize forg
4. After approving, you'll be redirected back and your account will be connected

How it works behind the scenes:
forg uses OAuth 2.0 to connect to X. Your access token is stored securely and refreshed automatically when it expires — you shouldn't need to reconnect unless you revoke access from X directly.

Troubleshooting:
- "Please reconnect your X account" — Your token was revoked or expired in a way that couldn't be refreshed. Go to Settings → Integrations and reconnect.
- "Failed to post to Twitter" — X's API rate limits may be in effect. Try again in a few minutes.
- Images not posting to X: X supports up to 4 images per tweet. If you attach more, only the first 4 are uploaded.

To disconnect: Go to Settings → Integrations → X → Disconnect. This removes your tokens from forg. You can also revoke access directly from your X account's connected apps settings.`
      },
      {
        title: "Connecting LinkedIn",
        slug: "connecting-linkedin",
        content: `How to connect:
1. Go to Settings → Integrations → LinkedIn
2. Click "Connect LinkedIn"
3. Authorize forg on LinkedIn's OAuth page
4. You'll be redirected back and your account will be connected

Things to know:
- LinkedIn access tokens expire approximately every 60 days. forg automatically refreshes them in the background — you typically won't notice.
- If a refresh fails (e.g. you revoked access from LinkedIn), you'll need to reconnect manually.
- Cross-posted updates are published as public LinkedIn posts to your main feed.
- LinkedIn supports up to 4 images per post. If you attach more, only the first 4 are uploaded.

Troubleshooting:
- "LinkedIn token expired. Please reconnect" — Go to Settings → Integrations → LinkedIn and reconnect.
- "Failed to get LinkedIn profile" — LinkedIn may be experiencing API issues. Try again in a few minutes.`
      },
      {
        title: "Connecting Bluesky",
        slug: "connecting-bluesky",
        content: `Bluesky uses a different approach than X and LinkedIn — it uses an App Password, not your main Bluesky password.

How to connect:
1. Go to your Bluesky account settings at bsky.app
2. Navigate to Settings → Privacy and Security → App Passwords
3. Create a new App Password (name it something like "forg")
4. Copy the App Password (you'll only see it once)
5. Go to forg → Settings → Integrations → Bluesky
6. Enter your Bluesky handle (e.g. yourname.bsky.social) and the App Password
7. Click "Connect"

Important: Bluesky has a 300-character limit. If your update exceeds 300 characters, it won't be posted to Bluesky — the other platforms you selected will still receive it. Keep this in mind when writing updates you want to cross-post to Bluesky.

To revoke access: Delete the App Password from your Bluesky settings. Since forg uses an App Password (not your main password), deleting it immediately disconnects forg without affecting your main account.`
      }
    ]
  },
  {
    title: "Integrations",
    slug: "integrations",
    icon: "Plug",
    articles: [
      {
        title: "Platform Integrations",
        slug: "platform-integrations",
        content: `Beyond cross-posting, forg lets you connect external platform accounts to display your activity as widgets on your profile. This gives visitors a complete picture of what you're building and where you're active.

Supported platforms:

| Platform | What it shows |
|----------|---------------|
| GitHub | Contribution activity, repositories |
| YouTube | Latest videos |
| Medium | Latest articles |
| dev.to | Latest posts |
| Hashnode | Latest posts |
| Substack | Newsletter |
| Codeforces | Competitive programming stats |
| LeetCode | Problem-solving stats |
| CodeChef | Competitive programming stats |

How to add integrations:
1. Go to Settings → Integrations
2. Enter your username or handle for each platform
3. Save — the widget will appear on your profile

Widget layout: You can drag and drop your widgets to customize the order and size (small, medium, large) they appear on your profile. Each widget can also be hidden individually if you don't want it showing.

GitHub integration specifically: Connecting GitHub also lets you link pull requests and commits to your product updates, and enables GitHub activity to appear in your contribution streak.`
      }
    ]
  },
  {
    title: "Scheduling",
    slug: "scheduling",
    icon: "Calendar",
    articles: [
      {
        title: "Scheduling Posts",
        slug: "scheduling-posts",
        content: `Scheduling is a premium feature that lets you write posts now and have them publish automatically at a future time.

Two ways to schedule:

1. Pick a specific time — Choose any exact date and time for your post to go live.
2. Add to Queue — Drop the post into your posting queue and it publishes at the next available slot based on your queue schedule.

The Queue:

The queue is a preset schedule of time slots across the week. When you "Add to Queue," your post is dropped into the next empty slot automatically — you don't have to think about timing.

Default queue slots (in IST — Indian Standard Time):
- Monday–Friday: 9:00 AM and 5:00 PM
- Saturday–Sunday: 10:00 AM

You can fully customize these slots in Settings → Queue. Add or remove any slot on any day.

Changing a scheduled post: You can edit or delete scheduled posts before they publish from your Studio → Drafts & Scheduled section.

Cross-posting with scheduling: Scheduled posts can also be cross-posted. Select your target platforms when writing the post — it will cross-post to all of them at the scheduled time.

Note: All scheduling uses IST (India Standard Time) internally. The UI shows times in your local time zone.`
      }
    ]
  },
  {
    title: "Feed & Discovery",
    slug: "feed-and-discovery",
    icon: "Compass",
    articles: [
      {
        title: "How the Feed Works",
        slug: "how-the-feed-works",
        content: `The forg feed shows you the most relevant, recent, and engaging content from the builder community. Here's what you need to know about how it works — without the internal math.

What appears in the feed:
- Updates and articles from builders you follow
- Trending updates and articles from across the community
- New product launches

How content is ranked:

The feed uses an engagement-based ranking system. The key signals, from most to least impactful:

1. Comments — The strongest signal. A thoughtful comment on a post is worth more than a like. The more substantive the comment, the more it counts (very short comments count for less).
2. Votes (on polls) — High-value engagement signal.
3. Likes — Standard engagement signal.
4. Views — Passive signal, counts but doesn't dominate.

How freshness works:

Posts lose ranking over time automatically. A post must keep getting new engagement to stay near the top — without it, it gradually sinks. This is intentional: the feed should show what's happening now, not last week's viral post.

- Updates (short posts) decay fastest
- Articles decay slowest — a great article can stay relevant for days
- Product posts are in between

New builder advantage:

If you're new to forg (account less than 14 days old, fewer than 10 posts), your posts get a natural boost in the feed. This ensures new builders get visibility even before they've built an audience. This bias fades as you become more established.

Posts with media rank higher:
Images and videos give your post a small ranking boost. If you're sharing a milestone or feature, attach a screenshot.

Longer posts rank slightly higher:
Posts over 100 characters rank slightly better than very short ones. This encourages substance.

Viral surge:
Posts that receive a burst of engagement quickly (within their first 2 hours) get an additional multiplier applied. If your post is taking off, the algorithm accelerates its visibility further.

Diversity:
The feed avoids showing two consecutive posts from the same person. Even if you post frequently, the feed will interleave other builders' content between your posts. This keeps the feed varied.

What this means in practice:
- Engage genuinely with other builders. Leaving meaningful comments helps the community and naturally increases your own visibility.
- Post consistently. Regular posting means your content is always fresh.
- Attach images when they add context.
- Write posts with substance — not just "shipped!" but what you shipped and why it matters.
- Engage with comments on your posts — replies from you count toward engagement too.`
      }
    ]
  },
  {
    title: "Premium",
    slug: "premium",
    icon: "Star",
    articles: [
      {
        title: "forg Premium",
        slug: "forg-premium",
        content: `forg Premium gives you the tools to do more with your build-in-public content.

Pricing:
- $10/month — monthly billing
- $6/month — billed annually ($72/year, saves 40%)

What you get with Premium:

| Feature | Free | Premium |
|---------|------|---------|
| Post length | 500 characters | 3,000 characters |
| Scheduling & queue | — | ✓ |
| Post analytics | Basic | Advanced |
| Pin posts on profile | — | Up to 3 pinned posts |
| Email updates to product followers | — | ✓ |
| Featured launch placement | — | 72 hours (3 days) |
| SEO dofollow links | nofollow | dofollow on profile & top product |

Post length: The 500-character limit on free accounts is enough for most updates. Premium's 3,000-character limit is for builders who want to write detailed progress updates, mini-essays, or longer milestone posts without switching to the Article format.

Advanced analytics: See who's engaging with your content, which updates perform best, and how your products are being discovered.

Pinned posts: Keep up to 3 updates permanently at the top of your profile — useful for pinning your product launch announcement, a milestone post, or an intro post.

Email updates to followers: When someone follows your product, they can opt in to receive email updates when you post new product updates. As a premium user, these email notifications are sent automatically.

Featured launch: When you launch a product on forg, premium users get 72 hours of featured placement at the top of the launches section — giving your launch maximum visibility during the most critical window.

SEO dofollow links: On forg, links from user profiles and products are nofollow by default for free users. Premium users get dofollow links on their profile and their top product's website link — which means search engines pass link equity, helping your site's SEO.

How to upgrade: Go to Settings → Premium → Upgrade. Payments are processed securely via Polar.sh.

Cancellation: You can cancel anytime. Your premium access continues until the end of your current billing period.`
      }
    ]
  },
  {
    title: "Account",
    slug: "account",
    icon: "User",
    articles: [
      {
        title: "Incognito Mode",
        slug: "incognito-mode",
        content: `Incognito mode makes your profile private. When enabled:

- Your profile does not appear in search results on forg
- Your profile returns a 404 to anyone who tries to visit it directly
- You are hidden from the public API
- You can still use forg normally — browse the feed, post, comment, follow others

To enable: Go to Settings → Privacy → Enable Incognito Mode.

This is useful if you want to lurk, plan your launch in private, or take a break without deleting your account.`
      },
      {
        title: "Account Settings",
        slug: "account-settings",
        content: `Changing your username: Your username can be changed from Settings → Profile. Note that your old URL will no longer work after changing — if you've shared your profile link publicly, update it.

Notification preferences: Go to Settings → Notifications to control which emails you receive:
- Engagement notifications (likes, comments on your posts)
- Post nudge (if you haven't posted in a while)
- Product dormancy reminders
- Weekly digest
- Community spotlight features

Deleting your account: Contact support at the email listed in the footer. Account deletion is permanent.

Connected accounts: See all your OAuth connections (Google, X, LinkedIn, GitHub) and integrations from Settings → Integrations. You can disconnect any of them individually.`
      }
    ]
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Is forg only for developers?",
    answer: "No. forg is for anyone who builds things — designers, indie hackers, founders, makers, and developers all use it. If you're building a product and want to share the journey, forg is for you."
  },
  {
    question: "Is forg free?",
    answer: "Yes. The core platform is free. Premium ($10/month or $72/year) adds scheduling, longer posts, advanced analytics, and other power-user features."
  },
  {
    question: "Can I use forg without adding a product?",
    answer: "Yes. You can post updates, write articles, and engage with the community without having a product listed. But forg is most useful when your product is there — it becomes a changelog, a launch platform, and a community hub for your product."
  },
  {
    question: "How is forg different from X/Twitter?",
    answer: "forg is purpose-built for builders. Your content lives on your product page as a changelog, you can track your product's lifecycle, and the community consists of other builders — not a general audience. Cross-posting lets you share to X from forg, so you don't have to choose."
  },
  {
    question: "My cross-post to X/LinkedIn failed. What do I do?",
    answer: "Go to Settings → Integrations and reconnect the affected platform. If the issue persists, check that forg still has the necessary permissions in that platform's connected apps settings."
  },
  {
    question: "Can I schedule posts on mobile?",
    answer: "Yes. forg is fully responsive and works on mobile browsers. All features including scheduling are available on mobile."
  },
  {
    question: "What happens to my posts if I cancel Premium?",
    answer: "Your posts stay. If you have pinned posts, they'll become unpinned. Scheduled future posts will not be sent after your premium period ends. Your post history and analytics are preserved."
  },
  {
    question: "Does forg have an API?",
    answer: "Yes. The public API is available at api.forg.to. Documentation is at api.forg.to/docs. You'll need an API key from Settings → Developer."
  }
];
