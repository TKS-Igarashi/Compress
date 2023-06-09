class Compress {
	/**
	 * @type {HTMLAllCollection} inputElement - id:inputBox
	 * @type {HTMLAllCollection} outputElement - id:outputBox
	 * @type {Set} data inputBoxのSetオブジェクト
	 */
	#inputElement
	#outputElement
	#data
	#outputData

	constructor(inputEle, outputEle) {
		this.#inputElement = inputEle;
		this.#outputElement = outputEle;
		this.#inputElement.addEventListener('change', this.#compress.bind(this));
	}

	/**
	 * 文字列を改行で分割しSetオブジェクトを返す
	 * @returns {Set} set - 重複を確かめるためにSetメソッド使用 
	 */
	#dataShaping() {
		const arrInputValue = this.#inputElement.value.split("\n");
		const setInputValue = new Set(arrInputValue);
		return setInputValue;
	}

	// kvm7001.net.kks
	// kvm7002.net.kks
	// kvm7002.net.kka
	// kvm7003.net.kks
	// kvm7010.net.kks

	#compress() {
		this.#data = this.#dataShaping();
		this.#comparison();
		// [...this.#data].forEach(row => {
		// 	const comparisonStrings = this.#comparison(row);
		// 	if(comparisonStrings.moji.length === 0) {
		// 		console.log("圧縮する文字がありません");
		// 	} else {
		// 		console.log(comparisonStrings);
		// 		const hoge = this.#compressedCharactes(row, comparisonStrings.position, comparisonStrings.moji);
		// 		outputData.push(this.#data);
		// 	}
		// });
	}
	
	#comparison() {
		[...this.#data].reduce((prev, current, currIndex, arrData) => {
			const compressInfo = this.#comparisonInfo(current, arrData);
		}, 0);
	}
	
	/**
	 * 
	 * @param {string} comparText - 比較する対象
	 * @param {string[]} arrCompar - 対象となる配列 
	 * @returns 
	 */
	#comparisonInfo(comparText, arrCompar) {
		const map = new Map();
		arrCompar.forEach((row, index) => {
			if(row.length === arrCompar[index]) this.#findCompressionPoints(row, arrCompar[index]);
		})
		console.log(arrCompar);
		return comparText;
	}

	#findCompressionPoints(strToBeCompar, strToCompar) {
		let comparPosition = [];
		comparPosition.push([...strToBeCompar].filter((char, index) => {
			if(char)
		}));
	}
	/**
	 * 
	 * @param {string} str - Setオブジェクト内一つずつ抽出
	 * @returns {string} comparisonStrings - 比較した文字を返す
	 */
	// #comparison(str) {
	// 	let text = "";
	// 	let textPosition = new Set();
	// 	let compressionStringArrPosition = new Set();
	// 	[...this.#data].reduce((previous, current, index) => {
	// 		let moji = [...current].filter((val, i) => {
	// 			console.log(`${val} + ${str[i]}::::${i}`)
	// 			if(val !== str[i]) {
	// 				compressionStringArrPosition.add(index);
	// 				textPosition.add = i;
	// 				return val;
	// 			}
	// 		});
	// 		if(moji.length === 1) {
	// 			text += moji.sort();
	// 		}
	// 		return current;
	// 	}, 0);

	// 	const ObjSplitStrings = {
	// 		position: textPosition,
	// 		moji: text,
	// 		compressRow: compressionStringArrPosition
	// 	};

	// 	return ObjSplitStrings;
	// }
}
