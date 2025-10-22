function NotificationBar({ message = "Your Message", positionX = "120%" }) {
  return (
    <div
      className="fixed top-5 right-5 bg-amber-50 text-gray-900 p-4 rounded-2xl shadow-lg z-50 translate-y-16 transition-smooth"
      style={{ transform: `translateX(${positionX})` }}
    >
      {message}
    </div>
  );
}

export default NotificationBar;
