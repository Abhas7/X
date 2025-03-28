function Button({ children, onClick, disabled, variant = 'primary', className = '', type = 'button' }) {
    try {
        const baseClasses = 'px-4 py-2 rounded font-semibold transition-colors duration-200';
        const variants = {
            primary: 'bg-blue-500 text-white hover:bg-blue-600',
            danger: 'bg-red-500 text-white hover:bg-red-600',
            secondary: 'bg-gray-500 text-white hover:bg-gray-600'
        };

        return (
            <button
                data-name="button"
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {children}
            </button>
        );
    } catch (error) {
        console.error('Button component error:', error);
        reportError(error);
        return null;
    }
}
