export interface Article {
  title: string;
  slug: string;
  subtitle?: string;
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
        lastUpdated: "March 18, 2026",
        content: `[forg.to](https://forg.to) is a community for indie hackers and builders who build in public. It's where you share what you're working on - product updates, milestones, revenue numbers, failures, and wins - and connect with other people who actually understand what it means to build something from scratch.

![Forg.to Banner](/forg-og-banner.png)

## What you can do on forg

- Add your product and track its journey from idea to launch and beyond
- Post updates about what you shipped, what broke, and what you learned
- [Write long-form articles](/content/writing-articles) about your journey (Pro)
- Cross-post your updates to X, LinkedIn, and Bluesky in one click
- Schedule posts ahead of time (Pro)
- Follow other builders and products you care about
- [Discover trending products and builders](https://forg.to/explore) in your niche
- [Build daily streaks and earn rewards](/streaks/how-streaks-work) like Claude Pro and discounts

![Builder Profile](/profile-page.png)

[forg.to](https://forg.to) is not a social network for everyone. It's for builders.`
      }
    ]
  },
  {
    title: "Profile",
    slug: "profile",
    icon: "User",
    articles: [
      {
        title: "Create profile",
        slug: "how-to-create-forg-profile",
        lastUpdated: "March 18, 2026",
        content: `Your forg profile is more than just a page. It's your public proof-of-work and your builder identity. A complete profile helps you connect with other builders and showcase your journey.

### Step 1: Sign up for Forg

[Sign up for Forg](https://forg.to/login) with your Google, GitHub, or X (formerly Twitter) account. This ensures a quick and secure onboarding process.

![Sign up for Forg](/sign-in-page.png)

### Step 2: Choose your identity

Once signed up, you'll need to set your core identity:
- **Username:** Choose a unique handle (3-30 characters) that is available. This forms your permanent profile URL: \`forg.to/@username\`.
- **Display Name:** Your professional name or the name you're known by (up to 50 characters).

![Choose your username and professional name](/onboarding-username.png)

### Step 3: Add your project

If you're already working on a project, you can drop the link here and it will be added to your profile immediately. If you're not ready yet, you can simply skip this step.

For more details on how products work, check out our guide on [Adding Your Product](/products/adding-your-product).

![Add your first project during onboarding](/onboarding-project.png)

### Step 4: Introduce yourself

Start with your first post on forg by introducing yourself to everyone. Share what you're learning, or building, or exploring. This is your first interaction with the community, so make sure to be professional and follow the rules and guidelines.

![Introduce yourself to the forg community](/onboarding-introduce.png)

### Step 5: Profile Completion

To make sure your profile is visible and you can fully participate in the community, your profile should be at least 40% complete. Profiles with less than 40% completion are hidden from search and cannot perform key interactions like upvoting, commenting, or sending Direct Messages.

To reach the 40% threshold quickly:
- **Write a Bio:** A punchy, one-sentence description of who you are (+15%).
- **Add Work Experience:** Build your resume by adding your professional history (+10%).
- **Connect a Platform:** Link your GitHub, X, or LinkedIn to verify your identity (+20%).
- **Add First Project:** Showcase what you're currently building (+30%).

![Complete at least 40% of your profile to interact](/profile-completion-modal.png)

### Step 6: Make your profile stand out

Beyond the basics, you can further professionalize your profile to attract collaborators and opportunities:
- **Skills & Expertise:** Tag the technologies and tools you work with (e.g., Next.js, Rust, Figma). These tags make your profile searchable by expertise.
- **Opportunities (Open To):** Signal if you are open to Jobs, Freelance work, Collaborations, or Mentorship.

![Example of a completed professional profile](/profile-page.png)

## Do's and Don'ts

- **Profile Picture:** A professional headshot or portrait photo is recommended. Anything obscene will lead to profile suspension.
- **First and Last Name:** Your legal name should be used. Do not use anything else like company name or combination of your legal name like website, role, emojis, etc. For ex:
    - ❌ Johnrao Doekar Visit -> johndoe.com
    - ❌ John The Product Designer
    - ❌ Johnrao Doekar Follow For Content Marketing Tips
- **Bio:** Share briefly about yourself. What you do, where you work, etc. Keep it professional and concise.
- **Username:** Your username is your permanent handle. Check our [guidelines for username here](/getting-started/creating-your-account).`
      },
      {
        title: "Work (Platform Integration)",
        slug: "showcase-work-on-profile",
        lastUpdated: "March 18, 2026",
        content: `forg is designed to prioritize what you've actually built. By connecting your existing professional platforms, you can showcase a 360-degree view of your work history and activity across the web.

You can manage all integrations from [Settings → Integrations](https://forg.to/settings/integrations).

### GitHub

Connecting your GitHub account allows you to display your coding activity directly on your forg profile.
- **Contribution Graph:** Show your daily commit history and consistency.
- **Top Repositories:** Feature your most important open-source work or personal projects.
- **Languages:** Automatically display the tech stack you use most frequently.

![GitHub Widget](/work-github.png)

### YouTube

If you create content or tutorials, the YouTube integration pulls your latest activity.
- **Latest Videos:** Your most recent uploads appear as a gallery.
- **Channel Stats:** Show your reach and influence in the developer community.

![YouTube Widget](/work-youtube.png)

### Writing (Medium, dev.to, Hashnode, Substack)

For those who build in public through writing, you can aggregate your posts from multiple platforms into one feed.
- **Unified Blog Feed:** Pulls the latest articles from your connected blogs.
- **Evergreen Content:** Showcases your deep dives and tutorials alongside your product updates.

![Writing Widget](/work-devto.png)

### Competitive Programming (LeetCode, Codeforces, CodeChef)

Showcase your problem-solving skills and technical proficiency.
- **Live Rankings:** Display your current rating and global rank.
- **Problem Stats:** Show the number of problems solved across different difficulty levels.

![Competitive Programming](/work-cp.png)

### Customizing Your Layout

You have full control over how these integrations appear on your profile. You can drag and drop widgets to change their position or resize them (Small, Medium, Large) to highlight your strongest areas.`
      },
      {
        title: "Project",
        slug: "profile-projects",
        lastUpdated: "March 18, 2026",
        content: `There are two ways products appear on your profile:

1. **Owned Products:** Products where you are the primary builder or founder. These appear under your "Products" tab.
2. **Contributions:** Products where you've been added as a team member. These appear under the "Contributed to" section, highlighting your collaborative work.

![Projects and Contributions](/profile-projects.png)

Each project entry acts as a dynamic proof-of-work. Unlike a static bullet point on a resume, a forg project shows the entire timeline of how it was built — from the first "Idea" post to the final "Launched" milestone.

For more on how product pages work, see [Adding Your Product](/products/adding-your-product) and the [Product Lifecycle](/products/product-lifecycle) guide.

![Product Detail Page](/product-slug-page.png)`
      },
      {
        title: "Resume",
        slug: "forg-resume",
        lastUpdated: "March 18, 2026",
        content: `forg includes a dedicated Resume section that turns your profile into a professional portfolio ready for opportunities.

### Work Experience

Add your professional history including:
- **Role and Company:** Your title and the organization.
- **Work Type:** Full-time, Part-time, Contract, Freelance, or Internship.
- **Description:** A brief summary of your impact (up to 500 characters).
- **Skills:** Tag up to 10 specific skills used during that tenure.

![Work Experience](/profile-resume-experience.png)

### Education & Certifications

- List your degrees, institutions, and fields of study.
- Showcase your professional certifications with direct links for verification.

![Education and Certifications](/profile-resume-education.png)

### AI Resume Parser

Don't want to type everything manually? Upload your existing resume as a PDF and our **Gemini-powered AI** will automatically extract your work history, education, and certifications — populating your forg profile in seconds.

![AI Resume Parser](/import-resume.png)

To use the parser: Go to [Settings → Profile → Resume → Upload PDF](https://forg.to/settings/profile/resume/experience).`
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
        lastUpdated: "March 18, 2026",
        content: `Every builder on forg should have at least one product. A product is anything you're building — a SaaS, mobile app, browser extension, open source project, API, or anything else.

To add a product, look for the **plus icon (+)** in the left sidebar next to the "Products" section. Clicking this will take you to [forg.to/product/new](https://forg.to/product/new).

![Add Product](/add-product.png)

## What you fill in

| Field | Details |
|-------|---------|
| Name | Your product's name |
| Tagline | One-sentence description |
| Description | Longer description (shown on product page) |
| Logo | Square image, shown everywhere |
| Website URL | Your product's homepage |
| GitHub URL | If open source |
| Category | Choose from 44 categories |
| Product type | SaaS, Browser Extension, Mobile App, etc. |
| Platforms | Web, iOS, Android, Mac, Windows, etc. |
| Pricing | Free, Freemium, One-time, Subscription |
| Status | Where in the [lifecycle](/products/product-lifecycle) your product is |

![New Product Form](/new-product-form.png)

Slugs are auto-generated from your product name — e.g., "My Cool App" becomes \`forg.to/products/my-cool-app\`. While you don't need to provide one manually, you can change your product slug later in settings, but please note that it can only be changed **once every 30 days**.`
      },
      {
        title: "Product Lifecycle",
        slug: "product-lifecycle",
        lastUpdated: "March 19, 2026",
        content: `Every product on forg has a status that reflects where it is in its journey. You can update this status at any time from your product page — click the status badge next to your product name to open the status selector.

![Edit Product Status](/edit-product-status.png)

### Pre-launch stages

| Status | Meaning |
|--------|---------|
| Idea | Just a concept, not yet started |
| Validating | Testing whether the idea has demand |
| Building | Actively in development |
| Alpha | Internal testing phase |
| Beta | Limited public testing |

### Live stages

| Status | Meaning |
|--------|---------|
| Launched | Publicly launched — triggers [Launch Boost](/products/launching-your-product-on-forg) |
| Growing | Post-launch, actively acquiring users |
| Profitable | Generating meaningful revenue |
| Funded | Received external investment |

### Terminal stages

| Status | Meaning |
|--------|---------|
| Paused | Temporarily on hold |
| Dead | Project discontinued |
| Acquired | Bought by another company |

## Transition rules

- You cannot jump from **Idea** directly to **Launched**.
- Once post-launch, you cannot move a product back to pre-launch.
- **Dead** and **Acquired** are final states — no further transitions.
- During your 7-day [Launch Boost](/products/launching-your-product-on-forg), the Launched status is locked — only the system moves it to Growing.
- Paused products resume back to the exact status they were in before being paused.

Every status change is recorded in your product's public timeline.

## Paused Status

When a product is **Paused**, here is what changes:

- **Profile:** Still visible on your public profile and product page.
- **Timeline:** Full update history remains visible to all visitors.
- **Explore feed:** Not shown in the Recent or Trending tabs of [forg.to/explore](https://forg.to/explore).
- **Products page:** Never listed on [forg.to/products](https://forg.to/products).
- **Landing page:** Not shown in the hero section of [forg.to](https://forg.to).
- **Upvoting:** Disabled. The upvote button is grayed out for all visitors.
- **Posting updates:** You cannot post an update while paused. Clicking "Post Update" opens a modal prompting you to resume the project first — it shows the exact status the product will return to.

**Resuming a paused product:** Click "Resume" and the product reverts to whatever status it was in *before* it was paused (tracked automatically). After resuming, all visibility and upvoting rules return to normal.

**SEO while paused:** Paused products remain in the sitemap at a very low priority (crawled monthly) so they are not completely de-indexed. Products with a dofollow badge, staff pick badge, or a premium owner stay eligible for indexing even while paused.

## Dormancy & Auto-Pause

Forg keeps the community active and the discover feed relevant. Products that stay inactive for too long are automatically moved to **Paused** by the system.

**Idea status:**
- **60 days** with no updates posted — you receive an email warning and a banner appears on your product page. You have 30 more days to ship an update or manually mark it as paused.
- **90 days** with no updates posted — the product is automatically moved to Paused by the system.

**Building status:**
- **30 days** with no updates posted — you receive an email warning and a banner appears on your product page. You have 15 more days to ship an update or manually mark it as paused.
- **45 days** with no updates posted — the product is automatically moved to Paused by the system.

The banner on your product page gives you two quick actions: **Mark as Paused** (freezes the project cleanly) or **Post Update** (opens the update composer and resets the clock).

**Note on Idea status and SEO:** Products in the Idea stage are never indexed by search engines. This protects your domain reputation while the idea is still unproven. Once you move past Idea, standard indexing rules apply (dofollow badge, premium plan, or staff pick badge).`
      },
      {
        title: "Launching Your Product",
        slug: "launching-your-product-on-forg",
        lastUpdated: "March 18, 2026",
        content: `Launching on forg gives your product a 7-day Launch Boost — elevated visibility across the platform during the most important week of your product's life.

## How to launch

1. Your product must be in **Validating**, **Building**, **Alpha**, or **Beta** status first.
2. Go to your product page → click **"Launch"**.

![Launch Button](/product-launch-btn.png)

3. Pick an available launch week from the batch scheduler.

![Launch Scheduler](/schedule-launch-picker.png)

## Batch slots

- Each week (**Sunday to Sunday IST**) allows a maximum of 20 product launches.
- When a week is full, it's marked as **"Full"** and unavailable.
- You can see and book into upcoming weeks ahead of time.

## What happens during Launch Boost

- Your product appears prominently on the [Explore](https://forg.to/explore) and [Products](https://forg.to/products) pages.
- The Launched status is locked for 7 days.
- After 7 days, your product automatically transitions to **Growing**.

## Premium Launch ($19 one-time)

- **Homepage Hero Slot:** Featured on [forg.to](https://forg.to)'s public landing page.
- **Instant Indexing:** Submitted to Bing & Yandex via IndexNow immediately.
- **SEO Boost:** Highest sitemap priority (1.0) and Product structured data.
- **Forg Team Announcement:** Post from the official [@forg_to](https://x.com/forg_to) account on X.
- **Staff Pick Badge:** Permanent badge on your product card.`
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
        lastUpdated: "March 18, 2026",
        content: `Updates are the core content on forg. Think of them as build-in-public posts — short-to-medium posts about what you're shipping, learning, and experiencing.

## Character limits

| Plan | Limit |
|------|-------|
| Free | 500 characters |
| [Pro](https://forg.to/pro) | 3,000 characters |

## Update types

When you write an update, tag it with a type to give it more context in the feed:

| Type | Use it when... |
|------|----------------|
| Update | General progress or check-in |
| Launch | Announcing a new launch |
| Feature | You shipped a new feature |
| Milestone | You hit a significant goal |
| Revenue | Sharing MRR, ARR, or revenue news |
| Bug Fix | You squashed a bug |
| Design | Sharing a decision update or redesign |
| Idea | Thinking out loud about something new |
| Fail | Sharing what didn't work and why |
| Win | Celebrating a positive outcome |
| Announcement | Important news about your product or company |
| Integration | You added a new integration or partnership |

## Attaching media

Attach images or videos to make your updates stand out. Posts with media get a visibility boost in the feed.`
      },
      {
        title: "Writing Articles",
        slug: "writing-articles",
        lastUpdated: "March 18, 2026",
        content: `Articles are long-form content — think deep dives, essays, tutorials, and build logs. Writing and publishing articles is a **[Pro](https://forg.to/pro)-only** feature.

![Articles Page](/articles-page.png)

## Why write articles

- Articles have the **highest SEO and indexing priority** on forg.
- They decay slower in the feed — articles stay visible 50% longer than regular updates.
- They're indexed by search engines, driving long-term traffic to your profile.
- Adding a cover image significantly improves click-through rates.

## Tips for great articles

- Be specific. "How I got my first 100 users" outperforms "My journey."
- Publish regularly — even short articles compound over time.
- Link to your product so readers can discover what you're building on [forg.to](https://forg.to).`
      },
      {
        title: "How Cross-Posting Works",
        slug: "how-cross-posting-works",
        lastUpdated: "April 26, 2026",
        content: `When you write an update on forg, you can publish it to multiple platforms simultaneously - X (Twitter), LinkedIn, Threads, and Bluesky - in one click.

![Post Composer Unopened](/post-composer-unopened.png)

### Step 1: Connecting your channels
Before you can cross-post, you need to securely link your social accounts to forg.

When you open the writing update modal, you'll see "Connect" buttons for X, LinkedIn, Threads, and Bluesky. Clicking these will guide you through the authorization process.

![Post Composer Opened](/post-composer-opened.png)

![Connect Channels Modal](/connect-channels-modal.png)

### Step 2: Cross-posting your content
From your home feed or profile, click on the "Write an update..." box. Compose your main message, then toggle the icons for the platforms you want to cross-post to. 

You can also edit and customize the content specifically for a particular channel! Once selected, you'll have the option to tailor your message so it perfectly fits each platform's audience.

![Cross Posting Modal](/cross-posting-modal.png)

### Things to know:
- **Media cross-posting requires [Forg Pro](https://forg.to/pro).** Free users can cross-post text. Images and videos require a [Forg Pro](https://forg.to/pro) subscription.
- Up to 4 images can be shared to X, Threads, and LinkedIn.`
      },
      {
        title: "Scheduling Posts",
        slug: "scheduling-posts",
        lastUpdated: "March 18, 2026",
        content: `Scheduling is a **Pro feature** that lets you write posts now and publish them automatically at a future time.

**Image: Post composer showing the "Schedule" option with date and time picker**

How to schedule a post:
1. Write your update in the composer.
2. Click the **Schedule** button instead of "Post".
3. Pick a specific date and time, or drop it into your Queue.

The Queue
The Queue is your personal content calendar. Add posts to it and forg will publish them automatically at your preset time slots. You can manage your queue from the **Studio** tab.

**Image: Queue management page in Studio showing upcoming posts in daily time slots**

Default queue slots (IST):
- **Monday – Friday:** 9:00 AM and 5:00 PM
- **Saturday – Sunday:** 10:00 AM

You can customize these time slots to match your preferred posting schedule.

**Image: Queue settings page showing editable time slots per day of the week**

Scheduled posts look and behave like regular posts once published - including cross-posting if you've enabled it.

**Image: Studio "Drafts & Scheduled" tab listing upcoming scheduled posts with publish times**`
      }
    ]
  },
  {
    title: "Streaks & Rewards",
    slug: "streaks",
    icon: "Flame",
    articles: [
      {
        title: "How Streaks Work",
        slug: "how-streaks-work",
        lastUpdated: "March 19, 2026",
        content: `Build your streak by contributing to [forg.to](https://forg.to) every day. Any of the following count as a contribution:

- Posting an update
- Writing and publishing an article
- Commenting on a post
- Creating a new product

Each calendar day (UTC) you contribute, your streak grows by 1. Only the first contribution of the day counts — multiple actions on the same day don't stack.

![Profile Streak](/profile-streak.png)

## Milestones & Rewards

Most rewards repeat — you earn them again each time you hit the next multiple:

| Milestone | Reward |
|-----------|--------|
| Every 7 days (7, 14, 21 ...) | **Streak Restore ×1** — automatically saved to your account |
| 14 days (permanent unlock) | **Super Upvote** — your upvotes count 2× in the feed, forever |
| Every 60 days (60, 120, 180 ...) | **50% off forg [Pro](https://forg.to/pro)** — a discount code sent to you |
| Every 100 days (100, 200, 300 ...) | **[Claude Pro (1 month free)](/streaks/earning-claude-pro)** — the biggest reward on forg |

Milestones stack: at day 300 you hit both the 60-day and 100-day milestones simultaneously and receive both rewards.

![Streak Milestones](/streak-milestones.png)

## Streak Restores

Restores work **automatically** — you don't need to do anything manually. When you come back after missing days, forg checks whether a Restore can save your streak and uses one automatically before recording your new contribution.

Rules for automatic restore:
- You must have at least 1 Restore saved.
- You can have missed at most **2 consecutive days** (your last contribution was 2 or 3 days ago).
- If you missed **3 or more days in a row**, the streak resets even if you have Restores saved — they cannot bridge a gap that large.
- When a Restore fires, the missed days appear in your activity heatmap with a distinct color showing they were auto-filled.

You earn 1 Restore automatically every 7 days of streak. The more you maintain your streak, the more restores you accumulate as a safety net.

Your streak counter resets at **midnight UTC**, so make sure you contribute before midnight UTC each day to keep it alive.`
      },
      {
        title: "Claude Pro - The 100-Day Streak Reward",
        slug: "earning-claude-pro",
        lastUpdated: "March 18, 2026",
        content: `100 days of building in public. One month of Claude Pro, on us.

A 100-day streak means you showed up every single day for over three months. No excuses, no gaps, no quitting. That's not a habit — that's a commitment to your craft.

We reward that with a free month of Claude Pro. Not because it's a good marketing move (it is), but because someone who's maintained a 100-day build streak will actually use it to ship something real.

![Claude Pro Banner](/claude-pro-banner.png)

Claude Pro gives you access to Anthropic's most powerful models, higher usage limits, and extended context for working with large files and codebases. [Learn more at claude.ai →](https://claude.ai)

## How to earn it

1. Build and maintain a streak for **100 consecutive days** on [forg.to](https://forg.to).
2. The reward is added to your Streak Rewards panel on day 100.
3. forg will contact you via your registered email with instructions to claim your free month.

## FAQ

**Do I need a perfect 100 days?**
No. [Streak Restores](/streaks/how-streaks-work) count toward your total. Use them — that's what they're for. As long as your streak counter reads 100 or higher, the reward triggers.

**What if my streak breaks?**
Your streak resets to 1 and you start working toward 100 again. Any Claude Pro rewards you've already claimed are yours to keep.

The reward repeats. Day 200, day 300, every 100 days — another month free. The streak never stops paying.`
      }
    ]
  },
  {
    title: "Account",
    slug: "account",
    icon: "User",
    articles: [
      {
        title: "Account Settings",
        slug: "account-settings",
        lastUpdated: "March 18, 2026",
        content: `Manage your account identity, notifications, and data from Settings.

**Image: Account settings page with sections for username, notifications, and account management**

Key settings:
- **Username Change:** Go to **Settings → Account** to update your @handle.
- **Notifications:** Control which emails you receive - engagement alerts, community digests, and product updates.
- **Deleting Your Account:** If you wish to delete your account, please email us at [team@forg.to](mailto:team@forg.to) with your reason for deletion. Our team will process your request manually.

**Image: Notification preferences page with toggles for each email type**`
      }
    ]
  },
  {
    title: "Legal",
    slug: "legal",
    icon: "Shield",
    articles: [
      {
        title: "Privacy Policy",
        slug: "privacy",
        lastUpdated: "February 6, 2026",
        content: `This Privacy Policy describes how Forg ("we," "us," or "our") collects, uses, and shares information about you when you use our website located at forg.to and any related services (collectively, the "Services").

By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy, you must not access or use the Services.

## 1. Information We Collect

### 1.1 Information You Provide Directly

When you create an account, we collect the following information depending on your authentication method:

**Google OAuth:**
- Your Google account identifier
- Your email address
- Your display name
- Your profile image URL

**Email & Password:**
- Your email address
- Your password (stored securely as a hash)

**Linked Social Accounts (Optional):**
- **Twitter/X:** Username, display name, profile image, account identifier, OAuth tokens for posting
- **LinkedIn:** Email, name, profile image, account identifier, OAuth tokens for posting

### 1.2 Content You Submit

We collect content you voluntarily submit to the Services, including:
- Product information (name, description, images, links)
- Updates and posts you create
- Comments and interactions
- Scheduled posts for cross-posting

### 1.3 Information We Do Not Collect

We expressly do not collect the following information:
- Your direct messages or private communications on social platforms
- Your complete followers or following lists
- Your browsing history outside of forg.
- Your location data or IP address for tracking purposes
- Any financial or payment information

## 2. How We Use Your Information

We use the information we collect for the following purposes:
- **To provide the Services:** Authenticate your account, display your profile, and enable core functionality.
- **To enable cross-posting:** Post content on your behalf to connected social platforms (Twitter/X, LinkedIn) when you authorize it.
- **To send notifications:** Email you about product launches, engagement updates, and important platform communications.
- **To display community features:** Show leaderboards, trending products, and community activity.
- **To improve the Services:** Analyze aggregate, anonymized usage patterns to improve the platform.

## 3. How We Share Your Information

### 3.1 Public Information

The following information is publicly visible to all Forg users:
- Your username, display name, and profile image
- Your products and their associated content
- Updates and posts you publish
- Your engagement activity (likes, comments, follows)

### 3.2 Third-Party Service Providers

We use the following third-party services to operate the platform:
- **MongoDB Atlas:** Database hosting for storing user accounts and content
- **Vercel:** Website and API hosting
- **Cloudinary:** Image storage and optimization for product logos and uploads
- **Resend:** Email delivery for notifications and communications
- **Inngest:** Background job scheduling for automated tasks
- **Twitter/X API:** OAuth authentication and cross-posting
- **LinkedIn API:** OAuth authentication and cross-posting
- **Google API:** OAuth authentication

### 3.3 No Sale of Personal Information

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.

## 4. Data Retention

We retain your information for as long as your account is active or as needed to provide you the Services. Specifically:
- **Account data:** Retained until you request account deletion
- **Products and content:** Retained until you delete them or request account deletion
- **OAuth tokens:** Retained while your social accounts are connected; deleted when you disconnect

## 5. Data Security

We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (HTTPS), secure database access controls, password hashing, and OAuth token security. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.

## 6. Your Rights and Choices

### 6.1 Access and Portability

You may access your account information, products, and activity through your profile at any time.

### 6.2 Disconnect Social Accounts

You may disconnect your Twitter/X or LinkedIn accounts at any time through Settings. This will revoke our ability to post on your behalf and delete the associated OAuth tokens.

### 6.3 Account Deletion

You may request deletion of your account by contacting us. Upon deletion, we will remove your profile information and content.

## 7. Children's Privacy

The Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.

## 8. International Data Transfers

Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. By using the Services, you consent to the transfer of your information to these countries.

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the Services after any such changes constitutes your acceptance of the new Privacy Policy.

## 10. Contact Information

If you have any questions about this Privacy Policy or our data practices, please contact us at:

**forg.**
Email: team@forg.to
Twitter/X: [@forg_to](https://x.com/forg_to)`
      },
      {
        title: "Terms of Service",
        slug: "terms",
        lastUpdated: "February 6, 2026",
        content: `These Terms of Service ("Terms") govern your access to and use of forg., including our website located at forg.to and any related services (collectively, the "Services"). Please read these Terms carefully before using the Services.

By accessing or using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Services.

## 1. Eligibility

You must be at least 13 years of age to use the Services. By using the Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.

## 2. Account Registration

### 2.1 Authentication Methods

To use the Services, you must create an account using one of the following methods:
- **Google OAuth:** Authenticate using your Google account
- **Email & Password:** Register with your email address and a password

You are responsible for maintaining the security of your account credentials. You agree to notify us immediately of any unauthorized access to or use of your account.

### 2.2 Account Linking

After registration, you may optionally link additional social accounts (Twitter/X, LinkedIn) to enable cross-posting features. By linking these accounts, you authorize Forg to post content on your behalf to these platforms.

### 2.3 Account Accuracy

You agree that all information provided is accurate and current. You may not impersonate any person or entity or misrepresent your affiliation with any person or entity.

### 2.4 One Account Per User

Each individual may maintain only one Forg account. Creating multiple accounts to circumvent restrictions is prohibited and may result in termination of all associated accounts.

## 3. Community Guidelines

### 3.1 Authentic Engagement

Forg is designed to foster genuine connections between builders. Users are expected to engage authentically with the community through likes, comments, and follows.

### 3.2 Content Standards

Users must maintain respectful and constructive interactions. Content that is spam, abusive, or violates any applicable laws is prohibited.

## 4. Acceptable Use

### 4.1 Permitted Use

You may use the Services to:
- Create and manage product pages to showcase your projects
- Share updates about your products and building journey
- Participate in the weekly Launch Boost program
- Cross-post content to connected social platforms (Twitter/X, LinkedIn)
- Schedule posts for future publication
- Engage with and discover other builders in the community

### 4.2 Prohibited Conduct

You agree not to:
- Create multiple accounts to manipulate platform features
- Use bots, scripts, or automated tools to generate fake engagements
- Submit content that you do not own or have rights to
- Attempt to reverse-engineer, decompile, or hack the Services
- Interfere with or disrupt the integrity or performance of the Services
- Harass, abuse, or harm other users
- Violate any applicable laws or the terms of connected platforms
- Circumvent any security measures or access restrictions
- Use the Services for any commercial purpose without our prior written consent

## 5. Content and Submissions

### 5.1 Your Content

When you submit content to forg., you represent and warrant that:
- You are the owner of the content or have the rights to post it
- The content does not violate any third-party rights
- The content complies with applicable platform terms of service

### 5.2 License

By submitting content to forg., you grant us a non-exclusive, worldwide, royalty-free license to display the content within the Services for the purpose of operating the platform. This license terminates when your content is removed from the platform.

### 5.3 Content Removal

We reserve the right to remove any content that violates these Terms or that we determine, in our sole discretion, is harmful to the community or the Services.

## 6. Cross-Posting and Social Connections

### 6.1 Authorization

When you connect your Twitter/X or LinkedIn accounts, you authorize Forg to post content on your behalf to these platforms. You remain responsible for all content posted through these connections.

### 6.2 Platform Compliance

You agree to comply with the terms of service of all connected platforms. Forg is not responsible for any actions taken by these platforms regarding your account or content.

## 7. Termination

### 7.1 Termination by You

You may stop using the Services at any time. You may request account deletion by contacting us.

### 7.2 Termination by Us

We may suspend or terminate your access to the Services at any time, with or without cause, with or without notice. Reasons for termination may include, but are not limited to:
- Violation of these Terms
- Fraudulent or illegal activity
- Behavior that is harmful to other users or the community
- Extended periods of inactivity

### 7.3 Effect of Termination

Upon termination, your right to use the Services will immediately cease. Provisions of these Terms that by their nature should survive termination will survive, including but not limited to disclaimers, limitations of liability, and dispute resolution provisions.

## 8. Disclaimers

THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.

## 9. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FORG, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (C) ANY CONTENT OBTAINED FROM THE SERVICES; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.

## 10. Indemnification

You agree to indemnify, defend, and hold harmless Forg and its officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of and access to the Services; (b) your violation of any term of these Terms; (c) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (d) any claim that your content caused damage to a third party.

## 11. Changes to Terms

We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Services.

## 12. General Provisions

### 12.1 Entire Agreement

These Terms, together with the Privacy Policy, constitute the entire agreement between you and Forg regarding the Services and supersede all prior agreements and understandings.

### 12.2 Severability

If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.

### 12.3 Waiver

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.

### 12.4 Assignment

You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.

## 13. Contact Information

If you have any questions about these Terms, please contact us at:

**forg.**
Email: team@forg.to
Twitter/X: [@forg_to](https://x.com/forg_to)`
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
    answer: "No. [forg.to](https://forg.to) is for anyone who builds things — designers, indie hackers, founders, makers, and developers all use it."
  },
  {
    question: "Is forg free?",
    answer: "Yes. The core platform is free. [Pro](https://forg.to/pro) ($10/month or $6/month billed annually at $72/year) adds scheduling, longer posts, analytics, and other power-user features."
  },
  {
    question: "How is forg different from X/Twitter?",
    answer: "forg is purpose-built for builders. Your content lives on your product page as a public changelog, and connects you with a community of people who are actually building — not just talking about it."
  },
  {
    question: "Does forg have an API?",
    answer: "Yes. The public API is available at [api.forg.to](https://api.forg.to). Documentation is at [api.forg.to/docs](https://api.forg.to/docs). You'll need an API key from [Settings → Account](https://forg.to/settings/account)."
  }
];
