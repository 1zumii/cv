import { FC } from 'react';

const SectionTitle: FC<{title: string}> = ({ title }) => (
  <h4
    className="section-title"
    style={{
      fontSize: '1.1rem',
      marginBottom: 12,
      paddingBottom: 6,
      borderBottom: '1px solid var(--assist-color-txt-2)',
    }}
  >
    {title}
  </h4>
);

export default SectionTitle;
