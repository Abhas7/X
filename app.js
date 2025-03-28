function App() {
    try {
        const [isAuthenticated, setIsAuthenticated] = React.useState(!!getToken());

        const handleLoginSuccess = () => {
            setIsAuthenticated(true);
        };

        const handleLogout = () => {
            removeToken();
            setIsAuthenticated(false);
        };

        return (
            <div data-name="app">
                {isAuthenticated ? (
                    <UserList onLogout={handleLogout} />
                ) : (
                    <Login onLoginSuccess={handleLoginSuccess} />
                )}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div data-name="app-container">
        <App />
    </div>
);
