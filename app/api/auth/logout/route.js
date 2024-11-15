import { cookies } from 'next/headers';

export async function POST() {
  cookies().delete('auth-token');
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}