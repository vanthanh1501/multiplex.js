(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('../../multiplex')) :
	typeof define === 'function' && define.amd ? define(['../../multiplex'], factory) :
	(factory(global.mx));
}(this, (function (mx) { 'use strict';

mx = mx && mx.hasOwnProperty('default') ? mx['default'] : mx;

var qunit$1 = typeof QUnit === 'undefined' ? require('qunitjs') : QUnit;
var qmodule = qunit$1.module;
var qtest = qunit$1.test;

qmodule('queue');

var Queue = mx.Queue;

qtest('create queue', function (assert) {
    assert.ok(new Queue() !== null, 'empty queue');
    assert.ok(new Queue([1, 2, 3]) !== null, 'simple numeric queue');
});


qtest('queue toString', function (assert) {
    assert.equal(new Queue().toString(), '[Queue]', 'Queue toString');
});

})));

