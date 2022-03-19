import fetch from 'node-fetch'

export async function post({ request }) {
  const data = await request.formData()
  const email = data.get('email')

  console.log(email)

  const ifttt = import.meta.env.VITE_IFTTT

  console.log(ifttt)

  const response = await fetch(ifttt, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
    }),
  })

  console.log(response)

  const { status } = response

  console.log(status)

  return {
    status: 200,
    body: {
      status,
    },
  }
}
