export function Sidebar({ children, isOpen, onClickClose }) {
    return (
    <div>
    <div className={`dark:bg-night overflow-y-auto p-5 fixed right-0 top-0 z-50 h-full w-full md:w-[50%] lg:w-[35%] shadow bg-white transition duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={onClickClose} className="absolute right-4 top-4 p-2 text-black font-bold">
            X
        </button>
        {children}
    </div>
         {isOpen && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"/>}
    </div>
    );
}