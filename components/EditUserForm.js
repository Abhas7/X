function EditUserForm({ user, onSubmit, onCancel }) {
    try {
        const [formData, setFormData] = React.useState({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit({ ...formData, id: user.id });
        };

        return (
            <form data-name="edit-user-form" onSubmit={handleSubmit}>
                <Input
                    label="First Name"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    required
                />
                <Input
                    label="Last Name"
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    required
                />
                <Input
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <div data-name="form-actions" className="flex justify-end space-x-2 mt-4">
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button type="submit">
                        Save Changes
                    </Button>
                </div>
            </form>
        );
    } catch (error) {
        console.error('EditUserForm component error:', error);
        reportError(error);
        return null;
    }
}
