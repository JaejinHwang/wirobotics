import useFadeIn from '../hooks/useFadeIn';
import '../hooks/useFadeIn.css';

function FadeInWrapper({ children, delay = 0, className = '' }) {
  const fade = useFadeIn({ delay });

  return (
    <div
      ref={fade.ref}
      className={`fade-in-element ${fade.isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default FadeInWrapper;
