const Container = ({ children, className = "" }) => (
  <div className={`container mx-auto max-w-4xl ${className}`}>{children}</div>
);

export { Container };
