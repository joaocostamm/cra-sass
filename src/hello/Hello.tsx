import React from 'react';
import './Hello.scss';

interface HelloProps {
  text: string;
}

const SimpleComponent: React.FC<HelloProps> = ({ text }) => {
  return <div className="hello-world">{text}</div>;
};

export default SimpleComponent;