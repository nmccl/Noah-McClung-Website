/**
 * Writing archive.
 *
 * How to add a new article:
 *
 * 1. Add an object to the `writing` array below (newest first).
 * 2. Fill in the fields:
 *      number - two-digit string, next in sequence ('01', '02', ...)
 *      slug   - URL segment, becomes /writing/<slug>
 *      title  - the headline
 *      dek    - one-sentence subhead, shown under the title and in the archive list
 *      date   - 'YYYY-MM-DD'
 *      body   - the article text (see markdown syntax below)
 * 3. Save. The article is live at /writing/<slug> and listed on /writing
 *    and the homepage automatically. Reading time is calculated from the
 *    word count, so there's nothing to fill in for that.
 *
 * `body` markdown syntax (deliberately small — see src/lib/markdown.tsx):
 *
 *   Paragraphs   - separate with a blank line.
 *   **bold**     - double asterisks.
 *   *italic*     - single asterisks.
 *   ## Heading   - a line starting with "## " becomes a subheading.
 *   > Quote      - a line starting with "> " becomes a pull quote,
 *                  breaking across both columns on wide screens.
 *
 *   The very first letter of the first paragraph gets a drop cap
 *   automatically — no markup needed for that.
 *
 * Template (copy the block below, paste it as a new array entry, fill it in):
 *
 * {
 *   number: '01',
 *   slug: 'your-article-slug',
 *   title: 'Your Title',
 *   dek: 'One sentence describing what this is about.',
 *   date: '2026-01-01',
 *   body: `First paragraph. This is where the drop cap goes automatically.
 *
 * Second paragraph, with **bold** and *italic* if you want them.
 *
 * > A pulled-out line that reads as a quote.
 *
 * ## An optional subheading
 *
 * More paragraphs after the subheading.`,
 * },
 */

export type Article = {
  number: string
  slug: string
  title: string
  dek: string
  date: string
  body: string
}

export const writing: Article[] = [
  {
    number: '01',
    slug: 'top-apps',
    title: '5 Apps that are worth using on MacOS',
    dek: 'Read about my personal top 5 favorite apps and maybe get some ideas for yourself.',
    date: '2024-09-01',
    body: `Have you ever felt stagnant with your current app lineup and yearned to explore new tools? In this article, I will highlight five exceptional applications available for MacOS that can enhance your productivity and elevate your overall computing experience.

## 1. Notion

Notion is an exceptionally versatile platform that seamlessly integrates note-taking, task management, and collaboration capabilities. Its highly customizable interface enables users to create workspaces tailored to their specific requirements, making it an ideal solution for organizing projects, tracking goals, and managing personal tasks. Whether you're a student, working professional, or someone seeking better organization, Notion can streamline your workflow and significantly boost productivity. Notably, this article was written using Notion itself.

## 2. Arc

Arc is a streamlined yet powerful browser that offers a refreshing alternative to traditional options. Available free of charge, it provides numerous features that users find appealing. The browser features a clean, organized user interface with a focus on delivering a fluid, customizable, and distraction-free browsing experience. Its sidebar-based interface, organizational "Spaces," and unique features like "Boosts" and "Tidy Tabs" set it apart from its competitors. Arc also prioritizes user privacy while delivering a more enjoyable browsing experience compared to browsers like Chrome. After using this browser for a while, I made the immediate switch, finding it superior to both Chrome and Safari.

## 3. Raycast

> This represents my strongest recommendation from this entire list.

Raycast is an application that significantly enhances productivity by providing a fast, customizable launcher for applications, commands, and various system functions, serving as a powerful alternative to macOS Spotlight. My favorite feature within this application is its comprehensive window management tools, which include options like "Center," "Almost Maximize," "Right Half," and numerous other configurations. This is an excellent tool to consider if you're seeking an all-in-one solution for managing your Mac.

## 4. Cursor

This application is primarily tailored towards my developer audience. Cursor is an AI-assisted code editor engineered to enhance developer productivity by integrating advanced artificial intelligence features directly into the coding environment. Built as a fork of Visual Studio Code, it incorporates additional AI capabilities such as code generation, intelligent rewrites, and comprehensive codebase queries.

While premium versions are available, the free tier offers substantial functionality. The free tier includes essential features such as inline chat, refactoring tools, and agent capabilities, though it lacks advanced features like autocomplete and access to premium AI models. Paid plans provide faster response times, extended usage limits, and access to premium models, among other enhanced features. Even for casual coding, having AI assistance integrated directly into your IDE proves invaluable.

## 5. Warp

This is my preferred terminal application overall. Warp is a completely reimagined terminal designed to enhance productivity through AI integration and collaboration features. It offers a modern text editing experience, AI-powered command suggestions, and comprehensive tools for organizing and sharing commands. If you're currently using the default macOS Terminal, upgrading to Warp will provide a tremendous improvement in functionality.

My favorite aspect of this terminal is its ability to execute tasks through natural language processing. Unlike traditional terminals where every command must be manually typed, Warp can interpret simple prompts such as "Make a file on my desktop called warp," and the AI will create an empty .txt file on your desktop with that name within seconds.

## Conclusion

These five applications represent just a fraction of the innovative tools available for macOS that can transform your daily computing experience. From Notion's organizational prowess to Warp's AI-powered terminal capabilities, each application addresses specific productivity needs while maintaining user-friendly interfaces. Whether you're a developer, student, creative professional, or general user, incorporating these tools into your workflow can lead to significant improvements in efficiency and overall satisfaction with your Mac. I encourage you to explore these applications and discover how they can enhance your productivity and streamline your digital workflow.`,
  },
]
