function Input({ label, type = 'text', value, onChange, error, ...props }) {
    try {
        return (
            <div data-name="input-container" className="mb-4">
                {label && (
                    <label data-name="input-label" className="block text-gray-700 text-sm font-bold mb-2">
                        {label}
                    </label>
                )}
                <input
                    data-name="input-field"
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        error ? 'border-red-500' : ''
                    }`}
                    {...props}
                />
                {error && (
                    <p data-name="input-error" className="text-red-500 text-xs italic mt-1">
                        {error}
                    </p>
                )}
            </div>
        );
    } catch (error) {
        console.error('Input component error:', error);
        reportError(error);
        return null;
    }
}
