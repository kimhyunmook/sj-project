import { NavigationBar } from '@/components/NavigationBar';
import { ProjectInfo } from '@/components/ProjectInfo/ProjectInfo';
import { RoleSection } from '@/components/RoleSection/RoleSection';
import { PhoneColorSection } from '@/components/PhoneColorSection/PhoneColorSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <NavigationBar />
      <ProjectInfo />
      <RoleSection />
      <PhoneColorSection />
    </div>
  );
}
