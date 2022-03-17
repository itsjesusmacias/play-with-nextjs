const ItemLink = ({ href, children }) => (
  <a href={href} rel="noreferrer" target="_blank" className="hover:underline">
    {children}
  </a>
);

export { ItemLink };
