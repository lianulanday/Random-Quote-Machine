import './App.css'
import { useState } from 'react';
function Display (){
    const quoteTextList = [
        { text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
        { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "Get busy living or get busy dying.", author: "Stephen King" },
        { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
        { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
        { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" }
    ];
    const [quote, setQuote] = useState(quoteTextList[0]);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quoteTextList.length);
        setQuote(quoteTextList[randomIndex]);
    };

    


    return(
        <div id="quote-box">
        <div id="text">{quote.text}</div>
        <div id="author">- {quote.author}</div>
        <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
        <button>
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text + " - " + quote.author)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tweet mo na
            </a>
        </button>
    </div>
);
}

export default Display