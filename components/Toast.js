function Toast({ message, type = 'success', onClose }) {
    try {
        React.useEffect(() => {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        }, [onClose]);

        return (
            <div data-name="toast" className={`toast toast-${type}`}>
                {message}
            </div>
        );
    } catch (error) {
        console.error('Toast component error:', error);
        reportError(error);
        return null;
    }
}
