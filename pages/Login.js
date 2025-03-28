function Login({ onLoginSuccess }) {
    try {
        const [formData, setFormData] = React.useState({
            email: '',
            password: ''
        });
        const [error, setError] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError('');
            setIsLoading(true);

            try {
                const response = await login(formData.email, formData.password);
                setToken(response.token);
                onLoginSuccess();
            } catch (error) {
                setError('Invalid email or password');
                console.error('Login error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="login-container" className="login-container flex items-center justify-center px-4">
                <div data-name="login-card" className="login-card w-full max-w-md p-8 rounded-lg">
                    <h1 data-name="login-title" className="login-title text-2xl font-bold text-center">
                        User Management System
                    </h1>
                    <form data-name="login-form" onSubmit={handleSubmit}>
                        <Input
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <Input
                            label="Password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        {error && (
                            <p data-name="error-message" className="text-red-500 text-sm mb-4">
                                {error}
                            </p>
                        )}
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </Button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Login page error:', error);
        reportError(error);
        return null;
    }
}
