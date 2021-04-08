const { expect, test } = require('@jest/globals')
const fb = require('./fizzbuzz')

const fizzyNum = 6
const buzzyNum = 10
const fizzyBuzzyNum = 15

test('sanity check', () => {
  expect(2+2).toBe(4)
} )

test('FIZZ', () => {
  expect(fb.FIZZ).toBe('fizz')
} )

test('BUZZ', () => {
  expect(fb.BUZZ).toBe('buzz')
} )

test('FIZZBUZZ', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
} )

test('isFizzy', () => {
  expect(fb.isFizzy(1)).toBe(false)
  expect(fb.isFizzy(10)).toBe(false)
  expect(fb.isFizzy(buzzyNum)).toBe(false)
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(9)).toBe(true)
  expect(fb.isFizzy(fizzyNum)).toBe(true)
  expect(fb.isFizzy(15)).toBe((15 % 3) === 0)
  expect(fb.isFizzy(fizzyBuzzyNum)).toBe(true)
} )

test('isBuzzy', () => {
  expect(fb.isBuzzy(1)).toBe(false)
  expect(fb.isBuzzy(11)).toBe(false)
  expect(fb.isBuzzy(fizzyNum)).toBe(false)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(10)).toBe(true)
  expect(fb.isBuzzy(buzzyNum)).toBe(true)
  expect(fb.isBuzzy(15)).toBe((15 % 5) === 0)
  expect(fb.isBuzzy(fizzyBuzzyNum)).toBe(true)
} )

test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(fizzyNum)).toBe(fb.FIZZ)
  expect(fb.fizzyBuzzy(buzzyNum)).toBe(fb.BUZZ)
  expect(fb.fizzyBuzzy(45)).toBe(fb.FIZZBUZZ)
} )

test('fizzBuzz', () => {
  const total = 100
  const result = fb.fizzBuzz(total)
  expect(result.count).toBe(total)
  expect(result.fizz).toBe(Math.floor(total / 3 - result.fizzBuzz))
  expect(result.buzz).toBe(Math.floor(total / 5 - result.fizzBuzz))
  expect(result.fizzBuzz).toBe(result.fizzBuzz)
} )
