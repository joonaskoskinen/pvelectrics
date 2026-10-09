import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Nimi, sähköposti ja viesti ovat pakollisia.' }, { status: 400 })
  }

  // TODO: Send the validated message to info@pvelectrics.fi through an email service.
  return NextResponse.json({ ok: true })
}
