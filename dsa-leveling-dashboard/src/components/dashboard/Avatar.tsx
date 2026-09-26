import avatar1 from '../../assets/avatar1.png';

export function Avatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'h-28 w-28' : size === 'sm' ? 'h-9 w-9' : 'h-14 w-14';
  return (
    <span className={`${sizeClass} relative block shrink-0 overflow-hidden rounded-xl`} aria-label="Hemanth avatar">
      <img src={avatar1} alt="Hemanth avatar" className="h-full w-full object-cover" />
    </span>
  );
}
