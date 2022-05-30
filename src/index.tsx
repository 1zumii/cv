import { FC, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import EducationExperience from '@src/section/education-experience';
import PersonalProfile from '@src/section/personal-profile';
import ProfessionalSkills from '@src/section/professional-skills';
import ProjectExperience from '@src/section/project-experience';
import WorkExperience from '@src/section/work-experience';
import './style/index.less';

const App: FC = () => {
  // eslint-disable-next-line no-console
  console.log('\n🙏 祝我2022夏天能找到个好工作 🙏\n');

  return (
    <div>
      <PersonalProfile />
      <EducationExperience />
      <ProfessionalSkills />
      <WorkExperience />
      <ProjectExperience />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <Suspense fallback={undefined}>
      <App />
    </Suspense>
  </StrictMode>,
);
