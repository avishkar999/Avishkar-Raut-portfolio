import test from 'node:test';
import assert from 'node:assert/strict';
import { CASE_STUDIES, SITE_META } from '../data/portfolio';
import { getVisibleCaseStudies } from './caseStudies';
import { buildMailtoUrl, validateContactForm } from './contact';

test('getVisibleCaseStudies excludes hidden cards and keeps active case studies', () => {
  const visible = getVisibleCaseStudies(CASE_STUDIES);
  assert.equal(visible.length, 2);
  assert.deepEqual(
    visible.map((item) => item.id),
    ['walletwisely', 'linkedin-content']
  );
});

test('validateContactForm flags missing fields and invalid email', () => {
  const emptyErrors = validateContactForm({ name: '   ', email: '', message: '' });
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.message);

  const badEmailErrors = validateContactForm({
    name: 'Rohan',
    email: 'rohan-at-example',
    message: 'Interested in fintech content help.',
  });
  assert.equal(badEmailErrors.name, undefined);
  assert.ok(badEmailErrors.email);
  assert.equal(badEmailErrors.message, undefined);

  const validErrors = validateContactForm({
    name: 'Rohan',
    email: 'rohan@fintech.in',
    message: 'Looking for LinkedIn content support.',
  });
  assert.deepEqual(validErrors, {});
});

test('buildMailtoUrl creates properly encoded mailto URI for Avishkar', () => {
  const url = buildMailtoUrl(SITE_META.email, {
    name: 'Ananya Verma',
    email: 'ananya@startup.io',
    message: 'Let us discuss a part-time content role.',
  });

  assert.ok(url.startsWith('mailto:avishkarraut72@gmail.com?'));
  assert.ok(url.includes('subject=Portfolio%20inquiry%20from%20Ananya%20Verma'));
  assert.ok(url.includes('Ananya%20Verma'));
  assert.ok(url.includes('ananya%40startup.io'));
  assert.ok(url.includes('part-time%20content%20role'));
});
