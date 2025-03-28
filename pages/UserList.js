function UserList({ onLogout }) {
    try {
        const [users, setUsers] = React.useState([]);
        const [currentPage, setCurrentPage] = React.useState(1);
        const [totalPages, setTotalPages] = React.useState(1);
        const [loading, setLoading] = React.useState(true);
        const [selectedUser, setSelectedUser] = React.useState(null);
        const [toast, setToast] = React.useState(null);

        const fetchUsers = async (page) => {
            try {
                const data = await getUsers(page);
                setUsers(data.data);
                setTotalPages(data.total_pages);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                showToast('Failed to fetch users', 'error');
            }
        };

        React.useEffect(() => {
            fetchUsers(currentPage);
        }, [currentPage]);

        const handleEdit = (user) => {
            setSelectedUser(user);
        };

        const handleDelete = async (userId) => {
            try {
                await deleteUser(userId);
                setUsers(users.filter(user => user.id !== userId));
                showToast('User deleted successfully', 'success');
            } catch (error) {
                console.error('Error deleting user:', error);
                showToast('Failed to delete user', 'error');
            }
        };

        const handleUpdateUser = async (updatedUser) => {
            try {
                await updateUser(updatedUser.id, updatedUser);
                setUsers(users.map(user => 
                    user.id === updatedUser.id ? { ...user, ...updatedUser } : user
                ));
                setSelectedUser(null);
                showToast('User updated successfully', 'success');
            } catch (error) {
                console.error('Error updating user:', error);
                showToast('Failed to update user', 'error');
            }
        };

        const showToast = (message, type) => {
            setToast({ message, type });
        };

        if (loading) {
            return (
                <div data-name="loading" className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            );
        }

        return (
            <div data-name="user-list-container" className="container mx-auto px-4 py-8">
                <div data-name="header" className="flex justify-between items-center mb-6">
                    <h1 data-name="page-title" className="text-2xl font-bold">Users</h1>
                    <Button onClick={onLogout} variant="secondary">Logout</Button>
                </div>

                <div data-name="users-grid" className="grid gap-4">
                    {users.map(user => (
                        <UserCard
                            key={user.id}
                            user={user}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>

                <div data-name="pagination" className="mt-6 flex justify-center space-x-2">
                    <Button
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                        variant="secondary"
                        className="pagination-button"
                    >
                        Previous
                    </Button>
                    <span data-name="page-info" className="px-4 py-2">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage === totalPages}
                        variant="secondary"
                        className="pagination-button"
                    >
                        Next
                    </Button>
                </div>

                {selectedUser && (
                    <Modal
                        isOpen={true}
                        onClose={() => setSelectedUser(null)}
                        title="Edit User"
                    >
                        <EditUserForm
                            user={selectedUser}
                            onSubmit={handleUpdateUser}
                            onCancel={() => setSelectedUser(null)}
                        />
                    </Modal>
                )}

                {toast && (
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast(null)}
                    />
                )}
            </div>
        );
    } catch (error) {
        console.error('UserList page error:', error);
        reportError(error);
        return null;
    }
}
