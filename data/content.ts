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
        content: `forg.to is a community for indie hackers and builders who build in public. It's where you share what you're working on - product updates, milestones, revenue numbers, failures, and wins - and connect with other people who actually understand what it means to build something from scratch.

![Forg.to Banner](/forg-og-banner.png)

What you can do on forg:
- Add your product and track its journey from idea to launch and beyond
- Post updates about what you shipped, what broke, and what you learned
- Write long-form articles about your journey (Pro)
- Cross-post your updates to X, LinkedIn, and Bluesky in one click
- Schedule posts ahead of time (Pro)
- Follow other builders and products you care about
- Discover trending products and builders in your niche
- Build daily streaks and earn rewards like Claude Pro and discounts

![Builder Profile](/profile-page.png)

forg is not a social network for everyone. It's for builders.`
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

Step 1: Sign up for Forg
You can sign up for Forg with your Google or Github or X (formerly Twitter). This ensures a quick and secure onboarding process.

![Sign up for Forg](/sign-in-page.png)

Step 2: Choose your identity
Once signed up, you'll need to set your core identity:
- **Username:** Choose a unique handle (3-30 characters) that is available. This forms your permanent profile URL: \`forg.to/@username\`.
- **Display Name:** Your professional name or the name you're known by (up to 50 characters).

![Choose your username and professional name](/onboarding-username.png)

Step 3: Add your project
If you're already working on a project, you can drop the link here and it will be added to your profile immediately. If you're not ready yet, you can simply skip this step. 

For more details on how products work, check out our guide on [Adding Your Product](/products/adding-your-product).

![Add your first project during onboarding](/onboarding-project.png)

Step 4: Introduce yourself
Start with your first post on forg by introducing yourself to everyone. Share what you're learning, or building, or exploring. This is your first interaction with the community, so make sure to be professional and follow the rules and guidelines.

![Introduce yourself to the forg community](/onboarding-introduce.png)

Step 5: Profile Completion
To make sure your profile is visible and you can fully participate in the community, your profile should be at least 40% complete. Profiles with less than 40% completion are hidden from search and cannot perform key interactions like upvoting, commenting, or sending Direct Messages.

To reach the 40% threshold quickly, you can:
- **Write a Bio:** A punchy, one-sentence description of who you are (+15%).
- **Add Work Experience:** Build your resume by adding your professional history (+10%).
- **Connect a Platform:** Link your GitHub, X, or LinkedIn to verify your identity (+20%).
- **Add First Project:** Showcase what you're currently building (+30%).

![Complete at least 40% of your profile to interact](/profile-completion-modal.png)

Step 6: Extra things to make your profile stand out
Beyond the basics, you can further professionalize your profile to attract collaborators and opportunities:
- **Skills & Expertise:** Tag the technologies and tools you work with (e.g., Next.js, Rust, Figma). These tags make your profile searchable by expertise.
- **Opportunities (Open To):** Signal if you are open to Jobs, Freelance work, Collaborations, or Mentorship.

![Example of a completed professional profile](/profile-page.png)

Do's and Don'ts
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

GitHub
Connecting your GitHub account allows you to display your coding activity directly on your forg profile. 
- **Contribution Graph:** Show your daily commit history and consistency.
- **Top Repositories:** Feature your most important open-source work or personal projects.
- **Languages:** Automatically display the tech stack you use most frequently.

![GitHub Widget](/work-github.png)

YouTube
If you create content or tutorials, the YouTube integration pulls your latest activity.
- **Latest Videos:** Your most recent uploads appear as a gallery.
- **Channel Stats:** Show your reach and influence in the developer community.

![YouTube Widget](/work-youtube.png)

Writing (Medium, dev.to, Hashnode, Substack)
For those who build in public through writing, you can aggregate your posts from multiple platforms into one feed.
- **Unified Blog Feed:** Pulls the latest articles from your connected blogs.
- **Evergreen Content:** Showcases your deep dives and tutorials alongside your product updates.

![Writing Widget](/work-devto.png)

Competitive Programming (LeetCode, Codeforces, CodeChef)
Showcase your problem-solving skills and technical proficiency.
- **Live Rankings:** Display your current rating and global rank.
- **Problem Stats:** Show the number of problems solved across different difficulty levels.

![Competitive Programming](/work-cp.png)

Customizing Your Layout
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

Each project entry acts as a dynamic proof-of-work. Unlike a static bullet point on a resume, a forg project shows the entire timeline of how it was built - from the first "Idea" post to the final "Launched" milestone.

![Product Detail Page](/product-slug-page.png)`
      },
      {
        title: "Resume",
        slug: "forg-resume",
        lastUpdated: "March 18, 2026",
        content: `forg includes a dedicated Resume section that turns your profile into a professional portfolio ready for opportunities.

Work Experience
Add your professional history including:
- **Role and Company:** Your title and the organization.
- **Work Type:** Full-time, Part-time, Contract, Freelance, or Internship.
- **Description:** A brief summary of your impact (up to 500 characters).
- **Skills:** Tag up to 10 specific skills used during that tenure.

![Work Experience](/profile-resume-experience.png)

Education & Certifications
- List your degrees, institutions, and fields of study.
- Showcase your professional certifications with direct links for verification.

![Education and Certifications](/profile-resume-education.png)

AI Resume Parser
Don't want to type everything manually? Upload your existing resume as a PDF and our **Gemini-powered AI** will automatically extract your work history, education, and certifications - populating your forg profile in seconds.

![AI Resume Parser](/import-resume.png)

To use the parser: Go to **Settings -> Profile -> Resume -> Upload PDF**`
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
        content: `Every builder on forg should have at least one product. A product is anything you're building - a SaaS, mobile app, browser extension, open source project, API, or anything else.

To add a product, look for the **plus icon (+)** in the left sidebar next to the "Products" section. Clicking this will take you to \`forg.to/product/new\`.

![Add Product](/add-product.png)

What you fill in:

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
| Status | Where in the lifecycle your product is |

![New Product Form](/new-product-form.png)

Slugs are auto-generated from your product name - e.g., "My Cool App" becomes \`forg.to/products/my-cool-app\`. While you don't need to provide one manually, you can change your product slug later in settings, but please note that it can only be changed **once every 30 days**.`
      },
      {
        title: "Product Lifecycle",
        slug: "product-lifecycle",
        lastUpdated: "March 19, 2026",
        content: `Every product on forg has a status that reflects where it is in its journey. You can update this status at any time from the product page - click the status badge next to your product name to open the status selector.

![Edit Product Status](/edit-product-status.png)

Pre-launch stages:

| Status | Meaning |
|--------|---------|
| Idea | Just a concept, not yet started |
| Validating | Testing whether the idea has demand |
| Building | Actively in development |
| Alpha | Internal testing phase |
| Beta | Limited public testing |

Live stages:

| Status | Meaning |
|--------|---------|
| Launched | Publicly launched - triggers Launch Boost |
| Growing | Post-launch, actively acquiring users |
| Profitable | Generating meaningful revenue |
| Funded | Received external investment |

Terminal stages:

| Status | Meaning |
|--------|---------|
| Paused | Temporarily on hold |
| Dead | Project discontinued |
| Acquired | Bought by another company |


Transition rules:
- You cannot jump from **Idea** directly to **Launched**.
- Once post-launch, you cannot move a product back to pre-launch.
- **Dead** and **Acquired** are final states - no further transitions.
- During your 7-day Launch Boost, the Launched status is locked - only the system moves it to Growing.
- Paused products resume back to the exact status they were in before being paused.

Every status change is recorded in your product's public timeline.

## Paused Status

When a product is **Paused**, here is what changes:

- **Profile:** Still visible on your public profile and product page.
- **Timeline:** Full update history remains visible to all visitors.
- **Explore feed:** Not shown in the Recent or Trending tabs of the explore feed.
- **Products page (/products):** Never listed.
- **Landing page:** Not shown in the hero section.
- **Upvoting:** Disabled. The upvote button is grayed out for all visitors.
- **Posting updates:** You cannot post an update while paused. Clicking "Post Update" opens a modal prompting you to resume the project first — it shows the exact status the product will return to.

**Resuming a paused product:** Click "Resume" and the product reverts to whatever status it was in *before* it was paused (tracked automatically). After resuming, all visibility and upvoting rules return to normal.

**SEO while paused:** Paused products remain in the sitemap at a very low priority (crawled monthly) so they are not completely de-indexed. Products with a dofollow badge, staff pick badge, or a premium owner stay eligible for indexing even while paused.

## Dormancy & Auto-Pause

Forg keeps the community active and the discover feed relevant. Products that stay inactive for too long are automatically moved to **Paused** by the system.

**Idea status:**
- **60 days** with no updates posted -> you receive an email warning and a banner appears on your product page. You have 30 more days to ship an update or manually mark it as paused.
- **90 days** with no updates posted -> the product is automatically moved to Paused by the system.

**Building status:**
- **30 days** with no updates posted -> you receive an email warning and a banner appears on your product page. You have 15 more days to ship an update or manually mark it as paused.
- **45 days** with no updates posted -> the product is automatically moved to Paused by the system.

The banner on your product page gives you two quick actions: **Mark as Paused** (freezes the project cleanly) or **Post Update** (opens the update composer and resets the clock).

**Note on Idea status and SEO:** Products in the Idea stage are never indexed by search engines. This protects your domain reputation while the idea is still unproven. Once you move past Idea, standard indexing rules apply (dofollow badge, premium plan, or staff pick badge).`
      },
      {
        title: "Launching Your Product",
        slug: "launching-your-product-on-forg",
        lastUpdated: "March 18, 2026",
        content: `Launching on forg gives your product a 7-day Launch Boost - elevated visibility across the platform during the most important week of your product's life.

How to launch:
1. Your product must be in **Validating**, **Building**, **Alpha**, or **Beta** status first.
2. Go to your product page -> click **"Launch"**.

![Launch Button](/product-launch-btn.png)

3. Pick an available launch week from the batch scheduler.

![Launch Scheduler](/schedule-launch-picker.png)

Batch slots:
- Each week (**Sunday to Sunday IST**) allows a maximum of 20 product launches.
- When a week is full, it's marked as **"Full"** and unavailable.
- You can see and book into upcoming weeks ahead of time.

What happens during Launch Boost:
- Your product appears prominently on the Discover and Products pages.
- The Launched status is locked for 7 days.
- After 7 days, your product automatically transitions to **Growing**.

Premium Launch ($19 one-time):
- **Homepage Hero Slot:** Featured on forg.to's public landing page.
- **Instant Indexing:** Submitted to Bing & Yandex via IndexNow immediately.
- **SEO Boost:** Highest sitemap priority (1.0) and Product structured data.
- **Forg Team Announcement:** Post from the official @forg_to account on X.
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
        content: `Updates are the core content on forg. Think of them as build-in-public posts - short-to-medium posts about what you're shipping, learning, and experiencing.

Character limits:
- **Free accounts:** 500 characters
- **Pro accounts:** 3,000 characters

Update types
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

Attaching media
Attach images or videos to make your updates stand out. Posts with media get a visibility boost in the feed.`
      },
      {
        title: "Writing Articles",
        slug: "writing-articles",
        lastUpdated: "March 18, 2026",
        content: `Articles are long-form content - think deep dives, essays, tutorials, and build logs. Writing and publishing articles is a **Pro-only** feature.

![Articles Page](/articles-page.png)

Why write articles:
- Articles have the **highest SEO and indexing priority** on forg.
- They decay slower in the feed - articles stay visible 50% longer than regular updates.
- They're indexed by search engines, driving long-term traffic to your profile.
- Adding a cover image significantly improves click-through rates.

Tips for great articles:
- Be specific. "How I got my first 100 users" outperforms "My journey."
- Publish regularly - even short articles compound over time.
- Link to your product so readers can discover what you're building.`
      },
      /* #FIX
      {
        title: "How Cross-Posting Works",
        slug: "how-cross-posting-works",
        lastUpdated: "March 18, 2026",
        content: `When you write an update on forg, you can publish it to multiple platforms simultaneously - X (Twitter), LinkedIn, and Bluesky - in one click.

### Step 1: Connecting your channels
Before you can cross-post, you need to link your social accounts to Forg. There are two ways to do this:

1. **Via the Post Composer:** When you open the writing update modal, you'll see "Connect" buttons for X, LinkedIn, and Bluesky. Clicking these will guide you through the authorization process.
   
![Connect via Composer](/connect-via-composer.png)

2. **Via Studio Integrations:** Go to your **Studio** (via the sidebar) and open the **Integrations** tab. Here you can see all available platforms and connect or disconnect them in one place.

![Connect via Studio](/connect-via-studio.png)

### Step 2: Cross-posting your content
Once your channels are connected, you have two ways to reach your audience across the web:

1. **Using the Writing Update Modal:** From your home feed or profile, click on the "Write an update..." box. Compose your message, then toggle the icons for the platforms you want to cross-post to.

![Post via Composer](/post-via-composer.png)

2. **Using the Studio Compose Button:** In the **Studio**, click the **Compose** button at the top. This opens a dedicated cross-posting modal where you can draft your content and select multiple channels for simultaneous publication.

![Post via Studio Compose](/post-via-studio.png)

Things to know:
- **Bluesky** is capped at **300 characters** - your post will be trimmed if it's longer.
- **Media cross-posting is Pro only.** Free users can cross-post text. Images and videos require Pro.
- Up to 4 images can be shared to X and LinkedIn.`
      }
      */
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
        content: `Build your streak by contributing to forg every day. Any of the following count as a contribution:

- Posting an update
- Writing and publishing an article
- Commenting on a post
- Creating a new product

Each calendar day (UTC) you contribute, your streak grows by 1. Only the first contribution of the day counts - multiple actions on the same day don't stack.

![Profile Streak](/profile-streak.png)

Milestones & Rewards
Most rewards repeat - you earn them again each time you hit the next multiple:

| Milestone | Reward |
|-----------|--------|
| Every 7 days (7, 14, 21 ...) | **Streak Restore x1** - automatically saved to your account |
| 14 days (permanent unlock) | **Super Upvote** - your upvotes count 2x in the feed, forever |
| Every 60 days (60, 120, 180 ...) | **50% off forg Pro** - a discount code sent to you |
| Every 100 days (100, 200, 300 ...) | **Claude Pro (1 month free)** - the biggest reward on forg |

Milestones stack: at day 300 you hit both the 60-day and 100-day milestones simultaneously and receive both rewards.

![Streak Milestones](/streak-milestones.png)

Streak Restores
Restores work **automatically** - you don't need to do anything manually. When you come back after missing days, forg checks whether a Restore can save your streak and uses one automatically before recording your new contribution.

Rules for automatic restore:
- You must have at least 1 Restore saved
- You can have missed at most **2 consecutive days** (your last contribution was 2 or 3 days ago)
- If you missed **3 or more days in a row**, the streak resets even if you have Restores saved - they cannot bridge a gap that large
- When a Restore fires, the missed days appear in your activity heatmap with a distinct color showing they were auto-filled

You earn 1 Restore automatically every 7 days of streak. The more you maintain your streak, the more restores you accumulate as a safety net.

Your streak counter resets at **midnight UTC**, so make sure you contribute before midnight UTC each day to keep it alive.`
      },
      {
        title: "Claude Pro - The 100-Day Streak Reward",
        slug: "earning-claude-pro",
        lastUpdated: "March 18, 2026",
        content: `100 days of building in public. One month of Claude Pro, on us.

A 100-day streak means you showed up every single day for over three months. No excuses, no gaps, no quitting. That's not a habit - that's a commitment to your craft.

We reward that with a free month of Claude Pro. Not because it's a good marketing move (it is), but because someone who's maintained a 100-day build streak will actually use it to ship something real.

![Claude Pro Banner](/claude-pro-banner.png)

Claude Pro gives you access to Anthropic's most powerful models, higher usage limits, and extended context for working with large files and codebases. [Learn more at claude.ai ->](https://claude.ai)

How to earn it
1. Build and maintain a streak for **100 consecutive days**
2. The reward is added to your Streak Rewards panel on day 100
3. forg will contact you via your registered email with instructions to claim your free month

FAQ

**Do I need a perfect 100 days?**
No. Streak Restores count toward your total. Use them - that's what they're for. As long as your streak counter reads 100 or higher, the reward triggers.

**What if my streak breaks?**
Your streak resets to 1 and you start working toward 100 again. Any Claude Pro rewards you've already claimed are yours to keep.

The reward repeats. Day 200, day 300, every 100 days - another month free. The streak never stops paying.`
      }
    ]
  },
  /* #FIX
  {
    title: "Scheduling",
    slug: "scheduling",
    icon: "Calendar",
    articles: [
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
    title: "Feed & Discovery",
    slug: "feed-and-discovery",
    icon: "Compass",
    articles: [
      {
        title: "How the Feed Works",
        slug: "how-the-feed-works",
        lastUpdated: "March 18, 2026",
        content: `The forg feed shows you the most relevant and engaging content from the builder community. It's not chronological - it's ranked by a combination of engagement, quality, and recency.

**Image: Main Explore feed with trending updates and product cards**

Engagement ranking
Posts are scored based on the engagement they receive. Each action has a different weight:

| Signal | Weight |
|--------|--------|
| Comment | 4.0x |
| Upvote | 2.0x |
| Like | 1.0x |
| View | 0.1x |

**Image: Post showing engagement counts - likes, comments, upvotes, and view count**

Quality bonuses
Beyond raw engagement, quality signals give posts an additional boost:
- **Media attached:** +0.3 boost
- **Post length > 100 chars:** +0.2 boost
- **Pro account:** +0.5 boost

**Image: A post labeled "Trending" with a high engagement score in the feed**

Time decay
All posts lose score over time. After 72 hours, decay rate doubles. This keeps the feed fresh. Articles decay slower, so good long-form content stays visible longer.

New builders also get an organic boost to help them get their first visibility on the platform.`
      }
    ]
  },
  {
    title: "Premium",
    slug: "premium",
    icon: "Star",
    articles: [
      {
        title: "forg Pro",
        slug: "forg-premium",
        lastUpdated: "March 18, 2026",
        content: `forg Pro gives you the tools to post consistently, grow your audience, and build in public faster.

**Image: Pro pricing page showing Monthly ($10) and Annual ($6/mo) plan options**

Pricing:
- **Monthly:** $10/month
- **Annual:** $72/year ($6/month - save 40%)

Content & Publishing
- **3,000 character posts** - vs 500 on free. Tell the full story.
- **Long-form Articles** - write deep dives with highest SEO priority on forg.
- **Cross-post with images & video** - push media updates to X, LinkedIn, and Bluesky in one click.
- **Schedule posts in advance** - queue up a week of content and let forg publish for you.
- **Pin up to 3 posts** on your profile - surface your best work for every visitor.

**Image: Pro feature list in the upgrade modal showing all Content & Publishing perks**

Growth & Analytics
- **Advanced audience analytics** - view trends, traffic sources, top posts, and follower growth.
- **Priority placement in Explore feed** - your posts and products surface higher to more builders.
- **Dofollow profile & product backlinks** - your links pass real SEO equity to your sites.

**Image: Analytics dashboard showing follower growth chart and top-performing posts**

AI & Automation
- **Unlimited GitHub AI drafts** - free plan is limited to 3 per week. Pro removes the cap.
- **GitHub Autopilot** - auto-publishes a post every time you merge a PR, with zero manual effort.

**Image: Studio showing GitHub Autopilot enabled with recent auto-drafted posts**

Community & Identity
- **Premium badge** next to your name in every feed, comment, and profile.
- **Unlimited DMs** - free accounts can start 1 new conversation per day.
- **No ads** - clean, distraction-free experience.
- **Profile banner image** - customize your profile cover.
- **Email updates to followers** - notify all your followers by email when you ship.

**Image: Profile showing premium badge, cover banner, and follower email notification toggle**

How to upgrade: Go to **Settings -> Pro -> Upgrade**.`
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
        lastUpdated: "March 18, 2026",
        content: `Incognito mode makes your profile private and hides you from search results and the explore feed.

**Image: Account settings page showing the Incognito Mode toggle set to off**

When Incognito is enabled:
- Your profile doesn't appear in search results.
- Your updates are hidden from the public feed.
- People with a direct link to your profile can still view it.

To enable: Go to **Settings -> Account -> Enable Incognito Mode**.

**Image: Search results page showing that incognito users do not appear**`
      },
      {
        title: "Account Settings",
        slug: "account-settings",
        lastUpdated: "March 18, 2026",
        content: `Manage your account identity, notifications, and data from Settings.

**Image: Account settings page with sections for username, notifications, and account management**

Key settings:
- **Username Change:** Go to **Settings -> Account** to update your @handle.
- **Notifications:** Control which emails you receive - engagement alerts, community digests, and product updates.
- **Deleting Your Account:** Permanently delete your account and all associated data via **Settings -> Account -> Delete Account**. This action is irreversible.

**Image: Notification preferences page with toggles for each email type**

**Image: Account deletion confirmation modal with a warning about permanent data removal**`
      }
    ]
  }
  */
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Is forg only for developers?",
    answer: "No. forg is for anyone who builds things - designers, indie hackers, founders, makers, and developers all use it."
  },
  {
    question: "Is forg free?",
    answer: "Yes. The core platform is free. Pro ($10/month or $6/month billed annually at $72/year) adds scheduling, longer posts, analytics, and other power-user features."
  },
  {
    question: "How is forg different from X/Twitter?",
    answer: "forg is purpose-built for builders. Your content lives on your product page as a public changelog, and connects you with a community of people who are actually building - not just talking about it."
  },
  {
    question: "Does forg have an API?",
    answer: "Yes. The public API is available at api.forg.to. Documentation is at api.forg.to/docs. You'll need an API key from Settings -> Account."
  }
];
