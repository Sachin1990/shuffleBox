let inputArray = [1,2,3,4,5,6,7,8,9];
let shuffleArray = (arr1) => {
	let ctr = arr1.length;
	let temp;
	let index;
	while (ctr > 0) {
		index = Math.floor(Math.random() * ctr);
		ctr--;
		temp = arr1[ctr];
		arr1[ctr] = arr1[index];
		arr1[index] = temp;
	}
	return arr1;
}
let shuffleFunc = () => {
	let shuffledArray = shuffleArray(inputArray);
	shuffledArray.forEach((data,i) => {
		document.getElementsByClassName('flex-item-'+ (i+1))[0].style.order = data
	})
}

let sortFunc = () => {
	let sortedArray = inputArray.sort();
	sortedArray.forEach((data,i) => {
		document.getElementsByClassName('flex-item-'+ (i+1))[0].style.order = data
	})
}