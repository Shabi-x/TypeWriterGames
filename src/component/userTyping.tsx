import Caret from "./Caret";

interface UserTypingProps {
    userInput: string;
    className?: string;
}


const UserTyping = ({ userInput, className }: UserTypingProps) => {
    const typeCharacters = userInput.split('')

    return <>
        <div className={`${className}`}>
            {typeCharacters.map((char, index) => {
                return <Characters key={index} char={char} />
            })}
            <Caret />
        </div>
    </>
};

const Characters = ({ char }: {
    char: string,
}) => {
    return <span className="text-primary-500">{char}</span>
}

export default UserTyping;