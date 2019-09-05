import React from 'react';

interface PropsI {
  haha: string;
  onClick: () => void;
}

export default function Button(props: PropsI) {
  const { haha, onClick } = props;

  return <button onClick={onClick}>{props.haha}</button>;
}
