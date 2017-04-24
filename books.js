
bookOne = {
	title: "First Book",
	author: "Author of First Book",
	ratings: 4.5,
	noOfPages: 100,
	onSale: false
};


bookTwo =  {
	title: "Second Book",
	author: "Author of Second Book",
	ratings: 4.0,
	noOfPages: 200,
	onSale: true
};


bookThree = {
	title: "Third Book",
	author: "Author of Third Book",
	ratings: 5.0,
	noOfPages: 300,
	onSale: false
};


function print(valueToPrint, useAlert){
	if (useAlert){
		alert(valueToPrint);
	} else {
		console.log(valueToPrint);
	}
}


books = [bookOne, bookTwo, bookThree];

for (var i = 0; i < books.length; i++) {
	print(books[i].title, true);
}

