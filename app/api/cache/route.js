const cache = new Map();

export async function GET(req) {
  const url = req.url;

  if (cache.has(url)) {
    return new Response(JSON.stringify({ fromCache: true, data: cache.get(url) }), { status: 200 });
  }

  const data = { message: 'This is fresh data.' };
  cache.set(url, data);

  return new Response(JSON.stringify({ fromCache: false, data }), { status: 200 });
}