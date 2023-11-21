import test from 'node:test';
import assert from 'assert/strict';

import isHappyTicket from '../index.js';

test('is happy ticket', () => {
    assert.strictEqual(isHappyTicket('060006'), true);
    assert.strictEqual(isHappyTicket('123321'), true);
    assert.strictEqual(isHappyTicket('341800'), true);
    assert.strictEqual(isHappyTicket('812146'), true);
});

test('is not happy ticket', () => {
    assert.strictEqual(isHappyTicket('000001'), false);
    assert.strictEqual(isHappyTicket('123567'), false);
    assert.strictEqual(isHappyTicket('213612'), false);
});
