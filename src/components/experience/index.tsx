import { FC, useMemo } from 'react';
import { Experience as Props } from '@src/types';
import './style.less';

const Experience: FC<{info: Props}> = ({ info }) => {
  const { content } = info;

  const experienceContent = useMemo((): JSX.Element | string => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    return (
      <ul className="experience-content-list">
        {content.map((i) => (typeof i === 'string' ? <li key={i}>{i}</li> : (
          <li key={i[0]}>
            {i[0]}
            <ol className="experience-content-list">
              {i.slice(1).map((ii) => <li key={ii}>{ii}</li>)}
            </ol>
          </li>
        )))}
      </ul>
    );
  }, [content]);

  return (
    <div className="experience" key={info.key}>
      <div className="experience-name">{info.title}</div>
      <div className="experience-duration">{info.duration}</div>
      <div className="experience-description">{info.description}</div>
      {experienceContent}
    </div>
  );
};

export default Experience;
