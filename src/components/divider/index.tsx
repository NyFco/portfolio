import { FC } from 'react';

/**
 * size should be between 0 and 100
 * @returns Vertical/Horizontal divider
 */
const Divider: FC<{ direction?: 'vertical' | 'horizontal'; size?: number }> = ({
  direction = 'horizontal',
  size = 70,
}) => {
  const validatedSize = size > 100 || size < 0 ? 70 : size;
  return (
    <div
      style={{
        padding:
          direction === 'horizontal'
            ? `0 ${(100 - validatedSize) / 2}%`
            : `${(100 - validatedSize) / 2}% 0`,
      }}
    >
      <div
        style={{
          height: direction === 'horizontal' ? '2px' : '100%',
          width: direction === 'horizontal' ? '100%' : '2px',
          backgroundColor: '#ffffff',
        }}
      />
    </div>
  );
};

export default Divider;
