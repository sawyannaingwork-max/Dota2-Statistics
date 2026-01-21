export default function Loader() {
    return (
      <div className="flex items-center justify-center min-h-[100px] bg-gray-50 dark:bg-background">
        <div className="relative w-16 h-16">
          {/* Outer gradient ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin" />
  
          {/* Inner cutout */}
          <div className="absolute inset-1 rounded-full bg-gray-50 dark:bg-gray-900" />
  
          {/* Glow */}
          <div className="absolute inset-0 rounded-full blur-md bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-40" />
        </div>
      </div>
    )
  }
  