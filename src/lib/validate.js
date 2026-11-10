const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!EMAIL.test(email)) errors.email = 'Enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Tell me a little more (10+ characters).'
  return errors
}
