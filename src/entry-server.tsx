import { renderToString } from "react-dom/server";
import {
  createRouter,
  createMemoryHistory,
  RouterProvider,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";

type MetaTag = Record<string, string>;
type LinkTag = Record<string, string>;
type ScriptTag = { type?: string; children?: string };

export interface HeadData {
  meta: MetaTag[];
  links: LinkTag[];
  scripts: ScriptTag[];
}

export interface RenderResult {
  appHtml: string;
  headData: HeadData;
}

export async function render(url: string): Promise<RenderResult> {
  const history = createMemoryHistory({ initialEntries: [url] });
  const router = createRouter({
    routeTree,
    history,
    basepath: "/",
    scrollRestoration: false,
    defaultPreloadStaleTime: 0,
  });
  const queryClient = new QueryClient();

  await router.load();

  // Collect head data from all matched routes
  const headData: HeadData = { meta: [], links: [], scripts: [] };
  for (const match of router.state.matches) {
    const route = (router.routesById as Record<string, { options?: { head?: () => Partial<HeadData> } }>)[match.routeId];
    const headFn = route?.options?.head;
    if (headFn) {
      const data = headFn();
      if (data.meta) headData.meta.push(...data.meta);
      if (data.links) headData.links.push(...data.links);
      if (data.scripts) headData.scripts.push(...data.scripts);
    }
  }

  const appHtml = renderToString(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );

  return { appHtml, headData };
}
