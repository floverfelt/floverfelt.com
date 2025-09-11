import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


const explorerSortFunc = (a: any, b: any) => {
  // Sort the top level explorer folders. There should be a better way to do this... 
  const explorerSortOrder = [ "thoughts", "technical", "reviews", "dailyish", "etc"]
  if ((a.isFolder && b.isFolder) && (a.slugSegments.length == 1 && b.slugSegments.length == 1)) {
    return explorerSortOrder.indexOf(a.slugSegments[0]) - explorerSortOrder.indexOf(b.slugSegments[0])
  }
  // Fallback to default order
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  }
  if (!a.isFolder && b.isFolder) {
    return 1
  } else {
    return -1
  }
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/floverfelt"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
    Component.ConditionalRender({
      component: Component.RecentNotes({ title: "🕰️ Latest", showTags: true, limit: 5 }),
      condition: (page) => {
        return page.fileData.slug === "index"
      },
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
            useSavedState: false,
            sortFn: explorerSortFunc
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
          useSavedState: false,
          sortFn: explorerSortFunc
    }),
  ],
  right: [],
}
