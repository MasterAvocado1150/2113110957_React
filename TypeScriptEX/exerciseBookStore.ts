interface Book {
    title: string;
    genre: 'fiction' | 'non fiction' | 'educational';
    price: number;
}

const book: Book[] = [
    {title: 'The Great Gatsby', genre: 'fiction' , price: 320},
    {title: 'War and Peace', genre: 'fiction' , price: 250},
    {title: 'Economics 101', genre: 'educational' , price: 480},
    {title: 'In cold Blood', genre: 'non fiction' , price: 300},
    {title: 'The Catcher in the Rye', genre: 'fiction' , price: 400}
];

function FillGenreByName(books:Book[], pmin:number) : Book[] {
    return books.filter(book=>book.genre === 'fiction' && book.price>pmin);
}


function discountBook(book:Book[]) : Book[]{
    return book.map(book=>({...book,price:book.price*0.9}));
}

let filterBook = FillGenreByName(book,300);
let discountbook = discountBook(filterBook);

console.log(discountbook);