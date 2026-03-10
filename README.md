# AG Grid Inline Editing Demo

This project is a small prototype demonstrating how to use AG Grid with React and TypeScript to enable inline editing based on user roles.

## Features

- Inline editing directly inside table cells
- Role-based editing (Admin can edit, User is read-only)
- Sorting and filtering
- Pagination
- Modern AG Grid theme

## Technologies Used

- React
- TypeScript
- AG Grid
- Vite

## How it Works

The table displays user data using AG Grid.  
Editing permissions are controlled based on the current user role.

If the role is **Admin**, the table cells become editable.  
If the role is **User**, the table becomes read-only.

You can switch between roles using the buttons above the table.

## How to Run the Project

Install dependencies:
