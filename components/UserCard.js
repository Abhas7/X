function UserCard({ user, onEdit, onDelete }) {
    try {
        return (
            <div data-name="user-card" className="user-card bg-white p-4 rounded-lg shadow mb-4">
                <div data-name="user-info" className="flex items-center">
                    <img
                        data-name="user-avatar"
                        src={user.avatar}
                        alt={`${user.first_name} ${user.last_name}`}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div data-name="user-details" className="flex-grow">
                        <h3 data-name="user-name" className="text-lg font-semibold">
                            {user.first_name} {user.last_name}
                        </h3>
                        <p data-name="user-email" className="text-gray-600">{user.email}</p>
                    </div>
                    <div data-name="user-actions" className="flex space-x-2">
                        <button
                            data-name="edit-button"
                            onClick={() => onEdit(user)}
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <i className="fas fa-edit"></i>
                        </button>
                        <button
                            data-name="delete-button"
                            onClick={() => onDelete(user.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('UserCard component error:', error);
        reportError(error);
        return null;
    }
}
