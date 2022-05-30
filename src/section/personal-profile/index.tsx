import { FC } from 'react';
import { info } from '@src/info';
import './style.less';

const PersonalProfile: FC = () => (
  <div className="personal-profile">
    <h2 className="name">{info.name}</h2>
    <div className="contacts">
      <span>{info.phoneNumber}</span>
      <span style={{ color: 'var(--assist-color-txt-2)' }}>&nbsp;|&nbsp;</span>
      <span>{info.email}</span>
    </div>
    <div className="github"><a target="_blank" href={info.github?.[1] ?? ''} rel="noreferrer">{info.github?.[0]}</a></div>
  </div>
);

export default PersonalProfile;
