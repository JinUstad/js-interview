const books = [
    { title: 'The Hobbit', genre: 'Fantasy' },
    { title: '1984', genre: 'Dystopian' },
    { title: 'Harry Potter', genre: 'Fantasy' },
    { title: 'Brave New World', genre: 'Dystopian' },
    { title: 'The Great Gatsby', genre: 'Classic' }
];

// Using Object.groupBy to group books by genre
const groupedBooks = Object.groupBy(books, book => book.genre);
console.log(groupedBooks)