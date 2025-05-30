export default function Input({ type, placeholder, name, value, onChange, className, error }) {
  return (
    <div className="relative">
      <input
        className={className || "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {/* {<div className={`text-rose-700 ${error ? `visible` : `invisible`}`}>{error || "1"}</div>} */}
      {<div className="text-rose-700 absolute">{error}</div>}
    </div>
  );
}
