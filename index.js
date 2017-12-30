const pos = '✅';
const neg = '❌';

function success(title, tracker) {
	tracker.pass++;
	console.log(`${pos}  did ${title}`);
	return true;
}

function fail(title, tracker) {
	tracker.fail++;
	console.log(`${neg}  did not ${title}`);
	return false;	
}

const easyTestJs = class easyTestJs {
	constructor() {
		this.tracker = {pass: 0, fail: 0};
		global.equal = (a, b, t) => {
			if (a === b) return success(t, this.tracker);
			return fail(t, this.tracker);
		}

		global.notEqual = (a, b, t) => {
			if (a !== b) return success(t, this.tracker);
			return fail(t, this.tracker);
		}

		global.lt = (a, b, t) => {
			if (a < b) return success(t, this.tracker);
			return fail(t, this.tracker);
		}

		global.gt = (a, b, t) => {
			if (a > b) return success(t, this.tracker);
			return fail(t, this.tracker);
		}

		global.lte = (a, b, t) => {
			if (a <= b) return success(t, this.tracker);
			return fail(t, this.tracker);
		}

		global.gte = (a, b, t) => {
			if (a >= b) return success(t, this.tracker);
			return fail(t, this.tracker);
		}

		global.done = (v = true) => {
			const pass = this.tracker.pass;
			const fail = this.tracker.fail;
			const total = pass + fail;
			const perc = pass / total * 100;
			if (!v) {
				return this.tracker.fail === 0 ? 0 : 1;
			} else {
				console.log(`\n${fail === 0 ? pos : neg}  ${pass} of ${total} tests passed. (${Math.round(perc)}%)`);
			}
		}

		console.log('\n🎉  Starting up easy test runner...\n');
	}
}

module.exports = easyTestJs;