import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === 'admin' && password === 'password') {
    const token = sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    cookies().set('auth-token', token, { httpOnly: true, secure: true });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
}