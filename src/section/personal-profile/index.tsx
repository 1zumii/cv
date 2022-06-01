import { FC } from 'react';
import { info } from '@src/info';
import './style.less';

const PersonalProfile: FC = () => (
  <div className="personal-profile">
    <h2 className="name" style={{ fontSize: '1.4rem', marginBottom: 12 }}>{info.name}</h2>
    <div className="else-info">
      <span className="position">{info.position}</span>
      <span style={{ color: 'var(--assist-color-txt-2)' }}>&nbsp;|&nbsp;</span>
      <span className="age">{info.age}</span>
    </div>
    {/* {info.github && Array.isArray(info.github) && (
      <div className="github">
        <a target="_blank" href={info.github[1]} rel="noreferrer">{info.github[0]}</a>
      </div>
    )} */}
    <div className="contacts">
      <span>{info.phoneNumber}</span>
      <span style={{ color: 'var(--assist-color-txt-2)' }}>&nbsp;|&nbsp;</span>
      <span>{info.email}</span>
    </div>
  </div>
);

export default PersonalProfile;
