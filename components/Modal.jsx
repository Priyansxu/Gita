const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-1/2 lg:w-1/3">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;