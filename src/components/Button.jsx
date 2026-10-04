import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  icon = true, 
  className = '',
  type = 'button',
  ...props 
}) {
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={16} className="btn-icon" />}
    </>
  );

  const combinedClass = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={combinedClass}
      {...props}
    >
      {content}
    </motion.button>
  );
}
