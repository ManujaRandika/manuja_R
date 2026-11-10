// node src/lib/validate.test.js
import assert from 'node:assert/strict'
import { validate } from './validate.js'

const ok = { name: 'Ada', email: 'ada@mail.com', message: 'I need a landing page.' }

assert.deepEqual(validate(ok), {})
assert.ok(validate({ ...ok, name: '   ' }).name)
assert.ok(validate({ ...ok, email: 'ada@mail' }).email)
assert.ok(validate({ ...ok, email: 'a b@m.com' }).email)
assert.ok(validate({ ...ok, message: 'too short' }).message)
assert.equal(Object.keys(validate({ name: '', email: 'x', message: '' })).length, 3)

console.log('validate: ok')
