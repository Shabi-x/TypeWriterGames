import Caret from "../component/Caret";

interface UserTypingProps {
    userInput: string;
    className?: string;
    words: string
}


const UserTyping = ({ userInput, className, words }: UserTypingProps) => {
    const typeCharacters = userInput.split('')

    return <>
        <div className={`${className}`}>
            {typeCharacters.map((char, index) => {
                return <Characters key={index} char={char} expected={words[index]} />
            })}
            <Caret />
        </div>
    </>
};

function cn(classes: { [key: string]: boolean }) {
    return Object.entries(classes)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(' ')
}

const Characters = ({ char, expected }: {
    char: string,
    expected: string
}) => {
    const isCorrect = char === expected
    const isWhitespace = expected === ' '
    return <span className={cn(
        {
            'text-red-500': !isCorrect && !isWhitespace,
            'text-green-500': isCorrect && !isWhitespace,
            'bg-red-500/50': isWhitespace && !isCorrect,

            'dark:text-red-500': !isCorrect && !isWhitespace,
            'dark:text-primary-500': isCorrect && !isWhitespace,
            'dark:bg-red-500/50': isWhitespace && !isCorrect,
        }
    )}>{expected}</span>
}

export default UserTyping;