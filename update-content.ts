import { readFileSync, writeFileSync } from 'fs';
const path = './data/content.ts';
let content = readFileSync(path, 'utf8');

const regex = /### Step 1: Connecting your channels[\s\S]*?(?=### Step 2: Cross-posting your content)/g;
content = content.replace(regex, `### Step 1: Connecting your channels\nBefore you can cross-post, you need to link your social accounts to forg.\n\nWhen you open the writing update modal, you'll see "Connect" buttons for X, LinkedIn, Threads, and Bluesky. Clicking these will guide you through the authorization process.\n\n**Image: Connect via Composer Placeholder**\n\n`);

const regex2 = /### Step 2: Cross-posting your content[\s\S]*?(?=### Things to know:)/g;
content = content.replace(regex2, `### Step 2: Cross-posting your content\nFrom your home feed or profile, click on the "Write an update..." box. Compose your message, then toggle the icons for the platforms you want to cross-post to.\n\n**Image: Post via Composer Placeholder**\n\n`);

writeFileSync(path, content);
