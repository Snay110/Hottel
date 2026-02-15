interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, onClick, variant = 'primary', className = '', size = 'md' }: ButtonProps) {
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    white: 'bg-white text-blue-600 hover:bg-gray-100'
  };

  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-8 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`font-semibold rounded-lg transition ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
