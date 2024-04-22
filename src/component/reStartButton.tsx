import { useRef } from "react";
import { MdRefresh } from "react-icons/md";
interface ReStartBtnProps {
    onReStart: () => void;
    className?: string;
}

const ReStartButton = ({ onReStart: handleRestart, className }: ReStartBtnProps) => {

    const btnRef = useRef<HTMLButtonElement>(null);
    const handleClick = () => {
        btnRef.current?.blur();
        handleRestart();
    };
    return (
        <button
            onClick={handleClick}
            ref={btnRef}
            className={`block rounded px-8 py-2 hover:bg-slate-700/50  ${className}`} >
            <MdRefresh />
        </button >

    );
};

export default ReStartButton;