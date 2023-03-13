
let authors =[

    {
        name: "Пушкин",
        books: ["Евгений Онегин", "Руслан и Людмила"]
    },

    {
        name: "Есенин",
        books: ["Чёрный человек", "Береза"]
    },

    {
        name: "Донцова",
        books: ["Приключения Ивана Подушкина"]
    }

];

function showAllBooksByAuthors(array){

    array.forEach(element => {

        console.log("Автор: " + element.name + " Книги: ");

        element.books.forEach(bookName => {
            console.log("  -" + bookName);
        });

        console.log("\n");
    });

}

showAllBooksByAuthors(authors);