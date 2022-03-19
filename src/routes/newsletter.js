import fetch from 'node-fetch'

export async function post({ request }) {
  const data = await request.formData()
  const email = data.get('email')

  const ifttt = import.meta.env.VITE_IFTTT

  const response = await fetch(ifttt, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
    }),
  })

  const { status } = response

  return {
    status: 200,
    body: {
      status,
    },
  }
}
