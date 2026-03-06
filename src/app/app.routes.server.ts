import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'pricing',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'get-in-touch',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'thank-you',
    renderMode: RenderMode.Prerender
  }
];
