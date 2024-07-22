const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-2xl">&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;