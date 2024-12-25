https://github.com/mjahdkaran/todoapp

# برنامه مدیریت وظایف (Todo List)

این پروژه یک برنامه ساده برای مدیریت وظایف روزانه است که به شما امکان می‌دهد وظایف خود را به راحتی ثبت، ویرایش و پیگیری کنید. هدف اصلی از توسعه این برنامه، تمرین و یادگیری ابزارهایی مانند **TailwindCSS**، **Redux Toolkit** و **i18next** برای چندزبانه کردن برنامه‌ها بوده است.

---

## امکانات اصلی

- **افزودن وظایف**: می‌توانید وظایف خود را با عنوان و تاریخ برنامه‌ریزی (در صورت تمایل) ثبت کنید. اگر تاریخی وارد نکنید، به طور پیش‌فرض تاریخ امروز در نظر گرفته می‌شود.
- **ویرایش وظایف**: می‌توانید اطلاعات وظایف خود شامل عنوان، تاریخ برنامه‌ریزی یا تاریخ تکمیل را تغییر دهید.
- **علامت‌گذاری به عنوان تکمیل‌شده**: با زدن تیک تکمیل، تاریخ امروز به عنوان تاریخ انجام وظیفه ثبت می‌شود.
- **مدیریت کاربران**: کاربران می‌توانند ثبت‌نام کرده و نام آن‌ها در نوار بالای برنامه نمایش داده شود.
- **فیلتر وظایف**: امکان نمایش وظایف بر اساس موارد زیر وجود دارد:
  - همه وظایف
  - وظایف انجام‌نشده
  - وظایف انجام‌شده
- **چندزبانه بودن**: با استفاده از **i18next**، برنامه از دو زبان انگلیسی و فارسی  پشتیبانی می‌کند.

### قابلیت‌های آینده

- **نمودارها و تحلیل‌ها**:
  - نمایش مقایسه وظایف انجام‌شده به موقع و با تأخیر.
  - تحلیل روند تکمیل وظایف.
- **جستجو**:
  - امکان جستجوی وظایف بر اساس تاریخ انجام آن‌ها.

---

## ابزارها و تکنولوژی‌ها

- **ظاهر برنامه**: [TailwindCSS](https://tailwindcss.com/)
- **مدیریت وضعیت**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **چندزبانه‌سازی**: [i18next](https://www.i18next.com/)

## نحوه استفاده از برنامه

- **افزودن وظیفه**: عنوان و (در صورت نیاز) تاریخ برنامه‌ریزی را وارد کرده و دکمه "افزودن" را بزنید.
- **ویرایش وظیفه**: روی دکمه ویرایش کنار وظیفه کلیک کرده و اطلاعات را به‌روزرسانی کنید.
- **علامت‌گذاری به عنوان انجام‌شده**: با زدن تیک وظیفه، آن را به عنوان انجام‌شده ثبت کنید.
- **فیلتر کردن وظایف**: از گزینه‌های فیلتر برای نمایش وظایف دلخواه استفاده کنید.
- **تغییر زبان**: با استفاده از تنظیمات زبان، بین زبان‌های موجود تغییر دهید.

---

## مشارکت در پروژه

این برنامه برای تمرین شخصی طراحی شده است، اما اگر پیشنهادی دارید یا می‌خواهید مشارکت کنید، می‌توانید پروژه را فورک کرده و درخواست pull ارسال کنید.

---
## برنامه‌های آینده

- افزودن نمودارها برای تحلیل بهتر وظایف.
- اضافه کردن قابلیت جستجوی پیشرفته.
- بهبود رابط کاربری برای تجربه بهتر کاربران.






# Todo List Application

This project is a **Todo List** application built to help manage daily tasks efficiently. It allows users to create, edit, and track tasks along with scheduled and completion dates. This app was designed as a practice project to enhance my skills with **TailwindCSS**, **Redux Toolkit**, and **i18next** for internationalization.

---

## Features

### Core Features:
- **Add Tasks**: Users can add tasks with a title and an optional scheduled date. If no date is provided, today's date is set by default.
- **Edit Tasks**: Tasks can be edited to update:
  - Title
  - Scheduled Date
  - Completion Date
- **Mark as Completed**: When a task is marked as completed, today's date is automatically recorded as the completion date.

### User Management:
- **User Registration**: Users can sign up and their names will be displayed in the navbar.

### Filtering:
- Filter tasks by:
  - All Tasks
  - Incomplete Tasks
  - Completed Tasks

### Localization:
- Supports multiple languages using **i18next**. persian and english

### Upcoming Features:
- **Charts and Analytics**:
  - Compare tasks completed on time vs. delayed tasks.
  - Visualize task completion trends.
- **Search**:
  - Search tasks by their completion dates.

---

## Technologies Used
- **Frontend**:
  - [TailwindCSS](https://tailwindcss.com/) for styling.
- **State Management**:
  - [Redux Toolkit](https://redux-toolkit.js.org/) for managing application state.
- **Internationalization**:
  - [i18next](https://www.i18next.com/) for multi-language support.

---

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
   npm install
   4. Start the development server:
   npm run dev
5. Open the app in your browser:
   http://localhost:3000

---

## Usage
- **Add a Task**: Enter a task title and (optionally) a scheduled date, then click "Add".
- **Edit a Task**: Click the edit button next to a task to modify its details.
- **Mark as Completed**: Check the "Completed" box to mark a task as done.
- **Filter Tasks**: Use the filter buttons to view tasks based on their status.
- **Change Language**: Use the language switcher in the app to toggle between supported languages.

---

## Contributing
This project was created as a personal practice exercise and is not actively seeking contributions. However, feel free to fork the repository and suggest improvements via pull requests.

---

## Future Plans
- Add interactive charts for task analysis.
- Implement search functionality for filtering tasks by completion dates.
- Enhance UI/UX for better user experience.

