function Modal({ isOpen, onClose, title, children }) {
    try {
        if (!isOpen) return null;

        return ReactDOM.createPortal(
            <div data-name="modal-overlay" className="modal-overlay" onClick={onClose}>
                <div data-name="modal-content" className="modal-content" onClick={e => e.stopPropagation()}>
                    <div data-name="modal-header" className="flex justify-between items-center mb-4">
                        <h2 data-name="modal-title" className="text-xl font-bold">{title}</h2>
                        <button
                            data-name="modal-close"
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    {children}
                </div>
            </div>,
            document.getElementById('modal-root')
        );
    } catch (error) {
        console.error('Modal component error:', error);
        reportError(error);
        return null;
    }
}
