import { FC } from 'react';
import Experience from '@src/components/experience';
import SectionTitle from '@src/components/section-title';
import { skills } from '@src/info';

const ProfessionalSkills: FC = () => (
  <div className="professional-skills">
    <SectionTitle title="专业技能" />
    <Experience info={{
      key: '',
      title: '',
      content: skills,
    }}
    />
  </div>
);

export default ProfessionalSkills;
