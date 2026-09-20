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
        subtitle: "forg.to is a social network for tech, startups, and everything that orbits them. Here's what it is and what you can do here.",
        lastUpdated: "September 20, 2026",
        content: `[forg.to](https://forg.to) is a social network for tech, startups, and everything that orbits them. Whether you're building something, working on the edges of it, or just here to follow what's happening, this is where you share your work, join the conversation, and connect with people who actually get it.

![Forg.to Banner](/forg-og-banner.png)

## What you can do on forg

- Add your projects so people can see what you're building
- Post whatever's on your mind, same as any other social feed
- [Write long-form articles](/content/writing-articles) about your journey (Pro)
- Cross-post to X, LinkedIn, Threads, and Bluesky in one click
- Schedule posts ahead of time (Pro)
- Follow the people and projects you're into
- [Discover what's trending](https://forg.to/explore) right now
- [Build a daily streak](/streaks/how-streaks-work) and unlock rewards like restores and discounts

![Builder Profile](/profile-page.png)`
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
        subtitle: "Set up your forg profile in a few steps, from signing up to making it yours.",
        lastUpdated: "September 20, 2026",
        content: `Your profile is your home on forg. It's where people see who you are and what you're into. A filled-out profile helps you connect with people and get the most out of the platform.

### Step 1: Sign up

[Sign up](https://forg.to/login) with your Google, GitHub, or X account. Quick and secure, no password to remember.

![Sign up for Forg](/sign-in-page.png)

### Step 2: Choose your identity

- **Username:** Your unique handle (4-30 characters). This becomes your permanent profile URL: \`forg.to/@username\`.
- **Display Name:** Your name or whatever you go by (up to 50 characters).

![Choose your username and name](/onboarding-username.png)

### Step 3: Add your project

Already working on something? Drop the link and it gets added to your profile right away. Not yet? Skip this, you can add one anytime.

See [Adding Your Project](/projects/adding-your-project) for more.

![Add your first project during onboarding](/onboarding-project.png)

### Step 4: Say hi

Kick things off with a first post introducing yourself. Share what you're building, learning, or just what brought you here.

![Introduce yourself to the forg community](/onboarding-introduce.png)

### Step 5: Hit 60% complete

Your profile needs to be at least 60% complete to upvote, comment, and send DMs. The two fastest ways there:

- **Add a profile photo** (+30%)
- **Write a bio** (+30%)

![Complete your profile to interact](/profile-completion-modal.png)

### Step 6: Make it yours

Once the basics are done, you can go further:

- **Banner:** Customize your profile header. Upload your own cover image, or pick from gradient presets like Sunset, Ocean, Galaxy, and more.
- **Skills:** Tag what you work with (Next.js, Rust, Figma, whatever). Makes your profile discoverable by what you do.
- **Spotify:** Pin a Spotify track to your profile so people see what you're listening to.
- **Open To:** Let people know if you're open to things like jobs, freelance, collabs, or mentorship.

![A completed forg profile](/profile-page.png)

## A few tips

- **Profile photo:** A clear photo of you works best. Anything obscene gets your profile suspended.
- **Name:** Use your real name. Companies and projects get their own pages, so keep this one about you. Skip the extras like taglines, roles, emojis, or links in your name field.
- **Bio:** Keep it short and real. What you do, what you're into.
- **Username:** This is permanent, so pick one you'll be happy with. See our [username guidelines](/getting-started/creating-your-account).`
      },
      {
        title: "Work (Platform Integration)",
        slug: "showcase-work-on-profile",
        subtitle: "Connect your accounts so your work across the web shows up right on your forg profile.",
        lastUpdated: "September 20, 2026",
        content: `forg pulls in what you're already doing across the web. Connect your accounts and your work shows up right on your profile, all in one place.

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

Write across a few platforms? Pull all your posts into one feed on your profile.
- **Unified Blog Feed:** Pulls the latest articles from your connected blogs.
- **Evergreen Content:** Showcases your deep dives and tutorials alongside your posts.

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
        title: "Projects",
        slug: "profile-projects",
        subtitle: "How your projects show up on your profile, both the ones you own and the ones you contribute to.",
        lastUpdated: "September 20, 2026",
        content: `There are two ways projects appear on your profile:

1. **Owned:** Projects where you're the primary builder or founder. These appear under your "Projects" tab.
2. **Contributions:** Projects where you've been added as a team member. These show up under the "Contributed to" section.

![Projects and Contributions](/profile-projects.png)

Each project on your profile links to its own page where people can see what it is, what it does, and upvote it. It's a living page, not a static line on a resume.

For more on how project pages work, see [Adding Your Project](/projects/adding-your-project).

![Project Detail Page](/product-slug-page.png)`
      },
      {
        title: "Resume",
        slug: "forg-resume",
        subtitle: "Add your work history, education, and certifications, or let AI fill it in from your existing resume.",
        lastUpdated: "September 20, 2026",
        content: `forg has a dedicated Resume section so people can see your background right on your profile.

### Work Experience

Add your history including:
- **Role and Company:** Your title and the organization.
- **Work Type:** Full-time, Part-time, Contract, Freelance, or Internship.
- **Description:** A brief summary of your impact (up to 500 characters).
- **Skills:** Tag up to 10 specific skills used during that tenure.

![Work Experience](/profile-resume-experience.png)

### Education & Certifications

- List your degrees, institutions, and fields of study.
- Add your certifications with direct links so people can verify them.

![Education and Certifications](/profile-resume-education.png)

### AI Resume Parser

Don't want to type it all out? Upload your existing resume as a PDF and our AI pulls out your work history, education, and certifications, filling in your profile in seconds.

![AI Resume Parser](/import-resume.png)

To use the parser: Go to [Settings → Profile → Resume → Upload PDF](https://forg.to/settings/profile/resume/experience).`
      }
    ]
  },
  {
    title: "Projects",
    slug: "projects",
    icon: "Package",
    articles: [
      {
        title: "Adding Your Project",
        slug: "adding-your-project",
        subtitle: "How to add a project on forg and what each field does.",
        lastUpdated: "September 20, 2026",
        content: `A project is anything you're building — a SaaS, mobile app, browser extension, open source project, API, or anything else. Adding one lets people see what you're working on right from your profile.

To add a project, hit the **plus icon (+)** in the left sidebar next to the "Projects" section. That takes you to [forg.to/project/new](https://forg.to/project/new).

![Add Project](/add-product.png)

## What you fill in

| Field | Details |
|-------|---------|
| Name | Your project's name |
| Tagline | One-sentence description |
| Description | Longer description (shown on the project page) |
| Logo | Square image, shown everywhere |
| Website URL | Your project's homepage |
| GitHub URL | If open source |
| Category | Choose from 44 categories |
| Type | SaaS, Browser Extension, Mobile App, etc. |
| Platforms | Web, iOS, Android, Mac, Windows, etc. |
| Pricing | Free, Freemium, One-time, Subscription |

![New Project Form](/new-product-form.png)

The slug is auto-generated from your project name — e.g. "My Cool App" becomes \`forg.to/projects/my-cool-app\`. You don't need to set one manually, but you can change it later in settings. Note that it can only be changed **once every 30 days**.`
      },
      {
        title: "Launching Your Project",
        slug: "launching-your-project-on-forg",
        subtitle: "Launch your project on forg for a 7-day visibility boost, plus what Premium Launch adds.",
        lastUpdated: "September 20, 2026",
        content: `Launching on forg gives your project a 7-day Launch Boost: elevated visibility across the platform during the most important week of your project's life.

## How to launch

1. Go to your project page → click **"Launch"**.

![Launch Button](/product-launch-btn.png)

2. Pick an available launch week from the batch scheduler.

![Launch Scheduler](/schedule-launch-picker.png)

## Batch slots

- Each week (**Sunday to Sunday IST**) allows a maximum of 20 launches.
- When a week is full, it's marked as **"Full"** and unavailable.
- You can see and book into upcoming weeks ahead of time.

## What happens during Launch Boost

- Your project appears prominently on the [Explore](https://forg.to/explore) and [Projects](https://forg.to/projects) pages for 7 days.

## Premium Launch ($19 one-time)

- **Homepage Hero Slot:** Featured on [forg.to](https://forg.to)'s public landing page.
- **Instant Indexing:** Submitted to Bing & Yandex via IndexNow immediately.
- **SEO Boost:** Highest sitemap priority (1.0) and structured data.
- **Forg Team Announcement:** Post from the official [@JoinForg](https://x.com/JoinForg) account on X.
- **Staff Pick Badge:** Permanent badge on your project card.`
      }
    ]
  },
  {
    title: "Content",
    slug: "content",
    icon: "FileText",
    articles: [
      {
        title: "Posting on forg",
        slug: "posting-on-forg",
        subtitle: "How posts work on forg, including character limits and adding media.",
        lastUpdated: "September 20, 2026",
        content: `Posts are the main way you share what's on your mind on forg. Write about what you're working on, something you learned, a hot take, whatever. It works like any other social feed.

## Character limits

| Plan | Limit |
|------|-------|
| Free | 500 characters |
| [Pro](https://forg.to/pro) | 3,000 characters |

## Adding media

Attach images or videos to your posts. Posts with media tend to get more reach in the feed.`
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
- Link to your project so readers can discover what you're building on [forg.to](https://forg.to).`
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
- Creating a new project

Each calendar day (UTC) you contribute, your streak grows by 1. Only the first contribution of the day counts — multiple actions on the same day don't stack.

![Profile Streak](/profile-streak.png)

## Milestones & Rewards

Most rewards repeat — you earn them again each time you hit the next multiple:

| Milestone | Reward |
|-----------|--------|
| Every 14 days (14, 28, 42 ...) | **Streak Restore ×1** — automatically saved to your account |
| 14 days (permanent unlock) | **Super Upvote** — your upvotes count 2× in the feed, forever |
| 60 days (one-time) | **50% off forg [Pro](https://forg.to/pro)** — a discount code sent to you |

![Streak Milestones](/streak-milestones.png)

## Streak Restores

Restores work **automatically** — you don't need to do anything manually. When you come back after missing days, forg checks whether a Restore can save your streak and uses one automatically before recording your new contribution.

Rules for automatic restore:
- You must have at least 1 Restore saved.
- You can have missed at most **2 consecutive days** (your last contribution was 2 or 3 days ago).
- If you missed **3 or more days in a row**, the streak resets even if you have Restores saved — they cannot bridge a gap that large.
- When a Restore fires, the missed days appear in your activity heatmap with a distinct color showing they were auto-filled.

You earn 1 Restore automatically every 14 days of streak. The more you maintain your streak, the more restores you accumulate as a safety net.

Your streak counter resets at **midnight UTC**, so make sure you contribute before midnight UTC each day to keep it alive.`
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
- **Deleting Your Account:** Go to **Settings → Account → Danger Zone** and click **Delete Account**. You'll be asked to type `DELETE` to confirm. Admins can also delete accounts from the sudo-admin panel. Deletion is permanent and cannot be undone.

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
- **Bluesky:** Handle, display name, profile image, account identifier, app password for posting
- **Threads:** Username, display name, profile image, account identifier, OAuth tokens for posting

### 1.2 Content You Submit

We collect content you voluntarily submit to the Services, including:
- Project information (name, description, images, links)
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
- **To enable cross-posting:** Post content on your behalf to connected social platforms (Twitter/X, LinkedIn, Bluesky, Threads) when you authorize it.
- **To power AI features:** Pass resume content to Ollama Cloud for AI-assisted resume parsing when you explicitly trigger the feature.
- **To send notifications:** Email you about project launches, engagement updates, and important platform communications.
- **To display community features:** Show leaderboards, trending projects, and community activity.
- **To improve the Services:** Analyze aggregate, anonymized usage patterns to improve the platform.

## 3. How We Share Your Information

### 3.1 Public Information

The following information is publicly visible to all Forg users:
- Your username, display name, and profile image
- Your projects and their associated content
- Updates and posts you publish
- Your engagement activity (likes, comments, follows)

### 3.2 Third-Party Service Providers

We use the following third-party services to operate the platform:
- **MongoDB Atlas:** Database hosting for storing user accounts and content
- **Vercel:** Website and API hosting
- **Cloudinary:** Image storage and optimization for project logos and uploads
- **Resend:** Email delivery for notifications and communications
- **Inngest:** Background job scheduling for automated tasks
- **Twitter/X API:** OAuth authentication and cross-posting
- **LinkedIn API:** OAuth authentication and cross-posting
- **Bluesky API:** Authentication and cross-posting
- **Threads API:** OAuth authentication and cross-posting
- **Google API:** OAuth authentication
- **Ollama Cloud:** Resume text parsing (only when you explicitly use the AI Resume Parser feature)

### 3.3 No Sale of Personal Information

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.

## 4. Data Retention

We retain your information for as long as your account is active or as needed to provide you the Services. Specifically:
- **Account data:** Retained until you delete your account (in-app, via Settings → Account → Danger Zone) or request deletion
- **Projects and content:** Retained until you delete them or delete your account
- **OAuth tokens / app passwords:** Retained while your social accounts are connected; deleted when you disconnect
- **Resume data for AI parsing:** Not stored by forg after processing; sent to Ollama Cloud only at the moment of parsing and not retained by us

## 5. Data Security

We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (HTTPS), secure database access controls, password hashing, and OAuth token security. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.

## 6. Your Rights and Choices

### 6.1 Access and Portability

You may access your account information, projects, and activity through your profile at any time.

### 6.2 Disconnect Social Accounts

You may disconnect your Twitter/X, LinkedIn, Bluesky, or Threads accounts at any time through Settings. This will revoke our ability to post on your behalf and delete the associated OAuth tokens or app passwords.

### 6.3 Account Deletion

You can delete your account at any time from **Settings → Account → Danger Zone** by clicking **Delete Account** and confirming with the word `DELETE`. Account deletion is permanent and cannot be undone.

**What happens when you delete your account:**
- Your profile, articles, projects you own, likes/claps, social connections, notifications, scheduled posts, billing/subscription records, reports, team invites, certifications, education, work history, gamification data, and API keys are permanently removed.
- Your **posts and comments** remain on the platform but are disassociated and shown as "Deleted User" (Reddit-style), preserving community context. A deleted account's content no longer receives any reputation/ranking boost in the feed (its profile score becomes 0).
- **Direct messages** you sent are kept so the other participant can still read them. If the other person's account was deleted, the surviving participant sees a "Delete chat" option to remove the conversation.
- Orphaned data tied to your account (API keys, project team memberships, affiliate/referral records) is cleaned up as part of deletion.

**Re-registering with the same email:** Deleting your account does **not** free up your email address — you may create a new account using the same email later (similar to how Reddit handles email reuse). Your **username**, however, is unique and cannot be reused after deletion. Because Twitter sign-in matches accounts by email when no Twitter ID is found, signing in with the same Twitter account after re-registering will re-link to your new account rather than creating a duplicate.

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
Twitter/X: [@JoinForg](https://x.com/JoinForg)`
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

After registration, you may optionally link additional social accounts (Twitter/X, LinkedIn, Bluesky, Threads) to enable cross-posting features. By linking these accounts, you authorize Forg to post content on your behalf to these platforms.

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
- Create and manage project pages
- Share updates about your projects
- Participate in the weekly Launch Boost program
- Cross-post content to connected social platforms (Twitter/X, LinkedIn, Bluesky, Threads)
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

When you connect your Twitter/X, LinkedIn, Bluesky, or Threads accounts, you authorize Forg to post content on your behalf to these platforms. You remain responsible for all content posted through these connections.

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
Twitter/X: [@JoinForg](https://x.com/JoinForg)`
      },
      {
        title: "Content Policy",
        slug: "content-policy",
        lastUpdated: "April 27, 2026",
        content: `This document describes the content policies that forg and its members must adhere to. These rules apply to all content posted on [forg.to](https://forg.to) — updates, articles, project pages, comments, profile information, and any other user-generated content.

## Illegal content

We do not allow content that:

- is illegal, promotes illegal activity, or infringes on the legal rights of others.

## Intellectual property abuse

We do not allow content that:

- **Infringes copyright.** It is our policy to respond to notices of alleged infringement. If you believe your copyright has been violated, email us at [team@forg.to](mailto:team@forg.to).

- **Sells or promotes counterfeit products.** Counterfeit goods contain a trademark or logo identical to or substantially indistinguishable from another brand's trademark, mimicking brand features to pass off as genuine products.

## Dangerous or derogatory content

We do not allow content that:

- **Incites hatred or promotes discrimination** against any individual or group on the basis of race or ethnic origin, religion, disability, age, nationality, veteran status, sexual orientation, gender, gender identity, or any characteristic associated with systemic discrimination or marginalization.

  *Examples: Promoting hate groups or hate group paraphernalia; encouraging others to believe a person or group is inhuman, inferior, or worthy of being hated.*

- **Harasses, intimidates, or bullies** an individual or group of individuals.

  *Examples: Singling out someone for abuse; suggesting a tragic event did not happen or that victims are actors.*

- **Threatens or advocates for physical or mental harm** to oneself or others.

  *Examples: Content advocating suicide or self-harm; threatening someone with real-life harm; promoting, glorifying, or condoning violence; content made by or in support of terrorist groups.*

- **Exploits others through extortion.**

  *Examples: Revenge porn, blackmail.*

## Animal cruelty

We do not allow content that:

- Promotes cruelty or gratuitous violence toward animals.
- Promotes the sale of products obtained from endangered or threatened species.

## Misrepresentative content

### Misleading representation

We do not allow content that:

- Misrepresents, misstates, or conceals information about the publisher, the content creator, the purpose of the content, or the content itself.
- Falsely implies affiliation with or endorsement by another individual, organization, product, or service.

  *Examples: Impersonating other products; misusing company logos.*

### Unreliable and harmful claims

We do not allow content that:

- Makes claims that are demonstrably false and could undermine participation or trust in electoral or democratic processes.
- Promotes harmful health claims or contradicts authoritative scientific consensus on public health matters.
- Contradicts authoritative scientific consensus on climate change.

### Deceptive practices

We do not allow:

- Enticing users to engage with content under false or unclear pretenses.
- Attempting to steal or trick users into sharing personal information (e.g., phishing).
- Promoting products or services using false, dishonest, or deceptive claims (e.g., "Get Rich Quick" schemes).
- Coordinating with other accounts to conceal or misrepresent your identity on matters of political or social concern.

### Manipulated media

We do not allow content that:

- Deceives users through manipulated media related to politics, social issues, or matters of public concern.

## Enabling dishonest behavior

We do not allow content that:

- **Helps users mislead others.** *Examples: Creating fake documents such as passports or diplomas; selling paper-writing or exam-taking services.*

- **Promotes hacking or cracking**, or provides instructions, equipment, or software that tampers with or provides unauthorized access to devices, software, servers, or websites.

- **Enables unauthorized surveillance of another person.** *Examples: Spyware; GPS trackers marketed to spy on someone without their consent. This does not include products or services designed for parents to monitor their underage children.*

## Sexually explicit content

We do not allow content that:

- Includes graphic sexual text, image, audio, video, or games.
- Contains non-consensual sexual themes, whether simulated or real.
- Promotes the creation or distribution of AI-generated deepfake pornography.

## Compensated sexual acts

We do not allow content that may be interpreted as promoting a sexual act in exchange for compensation.

## Child sexual abuse and exploitation

We do not allow content that sexually exploits or abuses children, or that promotes the sexual exploitation or abuse of children. This includes:

- Child grooming
- Sextortion targeting minors
- Sexualization of minors
- Trafficking of children

We will take appropriate action, including reporting to relevant authorities and disabling accounts. If you believe a child is in danger, contact the police immediately. To report such behavior on forg, email [team@forg.to](mailto:team@forg.to).

## Enforcement

Violations of this Content Policy may result in content removal, account suspension, or permanent termination. Serious violations may be reported to law enforcement. To report a violation, email [team@forg.to](mailto:team@forg.to).`
      },
      {
        title: "Code of Conduct",
        slug: "code-of-conduct",
        lastUpdated: "April 27, 2026",
        content: `forg is a community for people in tech, startups, and everything around them. To keep it a good place to be, we ask everyone to follow these standards.

## The short version

forg is dedicated to providing a harassment-free experience for everyone, regardless of gender and gender identity, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). We do not tolerate harassment of community members in any form. Sexual language and imagery are never appropriate. Accounts found to be violating these rules may be suspended permanently.

We also strongly discourage inaccurate information on your forg profile. It represents you, so keep it honest.

## The detailed version

### Behavior that builds a great community

- Using welcoming and inclusive language
- Referring to people by their preferred pronouns and using gender-neutral pronouns when uncertain
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community as a whole
- Showing empathy toward other members

### Behavior that is not acceptable

- The use of sexualized language or imagery, and unwelcome sexual attention or advances
- Trolling, insulting or derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing someone else's private information — such as a physical or electronic address — without their explicit permission
- Other conduct that could reasonably be considered inappropriate in a shared community
- Dismissing or attacking inclusion-oriented requests

### Profile integrity

Your profile represents you. Do not put inaccurate information on it. Specifically:

- **Profile Picture:** A clear photo of you works best. Anything obscene will lead to profile suspension.
- **Display Name:** Use your real name or the name you're genuinely known by. Do not use your company name, role title, emojis, or promotional text in your name field.
- **Bio:** Keep it honest and concise.
- **Projects:** Only list projects you have actually built or meaningfully contributed to.

### Project and posting integrity

- Only add projects you own or are actively contributing to.
- Do not fabricate metrics (users, revenue, etc.) in your posts.
- Do not use forg for spam or self-promotional blasts.

## Enforcement

Violations of this Code of Conduct may be reported by emailing [team@forg.to](mailto:team@forg.to). All reports will be reviewed and investigated and will result in a response deemed necessary and appropriate to the circumstances.

forg has the right and responsibility to remove profiles or other contributions that are not aligned to this Code of Conduct, or to suspend temporarily or permanently any member for behavior deemed inaccurate, false, inappropriate, threatening, offensive, or harmful.

## Attribution

This code of conduct is adapted from:
1. [DEV Community](https://dev.to/code-of-conduct)
2. [Contributor Covenant](https://www.contributor-covenant.org/)

## Contact

If you have questions about this Code of Conduct or need to report an issue, contact us at [team@forg.to](mailto:team@forg.to).`
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
    answer: "No. [forg.to](https://forg.to) is for anyone into tech and startups, whether you're building something yourself or just here to follow what's happening."
  },
  {
    question: "Is forg free?",
    answer: "Yes. The core platform is free. [Pro](https://forg.to/pro) ($10/month or $6/month billed annually at $72/year) adds scheduling, longer posts, analytics, and other power-user features."
  },
  {
    question: "How is forg different from X/Twitter?",
    answer: "forg is built around tech and startups, so your feed is full of people actually making things and the conversations that come with it, not everything all at once. You can also show your projects, work, and background right on your profile."
  },
  {
    question: "Does forg have an API?",
    answer: "Yes. The public API is available at [api.forg.to](https://api.forg.to). Documentation is at [api.forg.to/docs](https://api.forg.to/docs). You'll need an API key from [Settings → Account](https://forg.to/settings/account)."
  }
];
