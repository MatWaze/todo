# Django Todo App

A fully functional Todo application built with Django, featuring a modern, responsive UI with HTML, CSS, and JavaScript.

## Features

- ✅ **Create** new todos with title and description
- ✏️ **Edit** existing todos
- 🗑️ **Delete** todos with confirmation
- ☑️ **Toggle** completion status with AJAX (no page reload)
- 📱 **Responsive design** that works on mobile, tablet, and desktop
- 🎨 **Beautiful UI** with gradient backgrounds and smooth animations
- ⚡ **Interactive features** with JavaScript

## Screenshots

### Todo List
![Todo List](https://github.com/user-attachments/assets/98f2937c-855b-4085-ad89-97ef095a6b4d)

### Create Todo Form
![Create Form](https://github.com/user-attachments/assets/a0e1080c-5048-43af-9f26-b0d09bb0642d)

### Completed Todo
![Completed Todo](https://github.com/user-attachments/assets/aaa365ef-e3aa-4606-b584-d3e9321404f2)

### Edit Todo
![Edit Form](https://github.com/user-attachments/assets/db04c49e-417f-4413-8429-83705d9f7d4e)

### Delete Confirmation
![Delete Confirmation](https://github.com/user-attachments/assets/32917d99-2e1f-40ea-a374-ba1f83af870d)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MatWaze/todo.git
   cd todo
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run database migrations**
   ```bash
   python manage.py migrate
   ```

4. **Start the development server**
   ```bash
   python manage.py runserver
   ```

5. **Open your browser**
   Navigate to `http://127.0.0.1:8000/`

## Project Structure

```
todo/
├── todoproject/          # Django project settings
│   ├── settings.py       # Project configuration
│   ├── urls.py           # Main URL routing
│   └── ...
├── todos/                # Todo app
│   ├── models.py         # Todo model definition
│   ├── views.py          # View functions for CRUD operations
│   ├── urls.py           # App URL routing
│   ├── admin.py          # Admin panel configuration
│   ├── templates/        # HTML templates
│   │   └── todos/
│   │       ├── base.html              # Base template
│   │       ├── todo_list.html         # Todo list page
│   │       ├── todo_form.html         # Create/Edit form
│   │       └── todo_confirm_delete.html  # Delete confirmation
│   └── static/           # Static files
│       └── todos/
│           ├── css/
│           │   └── style.css          # Styling
│           └── js/
│               └── script.js          # JavaScript functionality
├── manage.py             # Django management script
└── requirements.txt      # Python dependencies
```

## Technology Stack

- **Backend**: Django 4.2+
- **Database**: SQLite (default)
- **Frontend**: HTML5, CSS3, JavaScript
- **Features**: AJAX for async updates, responsive design

## Database Model

The `Todo` model includes:
- `title` (CharField): The todo title
- `description` (TextField): Optional description
- `completed` (BooleanField): Completion status
- `created_at` (DateTimeField): Creation timestamp
- `updated_at` (DateTimeField): Last update timestamp

## Admin Panel

Access the Django admin panel at `http://127.0.0.1:8000/admin/`

To create a superuser:
```bash
python manage.py createsuperuser
```

## Security Notes

**This is a development project.** Before deploying to production:

1. Change the `SECRET_KEY` in `settings.py` to a unique, secret value (use environment variables)
2. Set `DEBUG = False` in `settings.py`
3. Configure `ALLOWED_HOSTS` with your domain names
4. Use a production-ready database (PostgreSQL, MySQL, etc.)
5. Serve static files properly with a web server (Nginx, Apache, etc.)

## License

This project is open source and available under the MIT License.