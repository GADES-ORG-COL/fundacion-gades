// Middleware para Cloudflare Pages
// Bloquea acceso al dominio .pages.dev

export async function onRequest(context: { request: Request; next: () => Promise<Response> }) {
  const url = new URL(context.request.url);
  
  // Bloquear acceso al .pages.dev
  if (url.hostname.includes('.pages.dev')) {
    return new Response('404 Not Found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  
  // Permitir dominio personalizado
  return context.next();
}
