
import { MainLayout } from '@/components/MainLayout';
import { ProfileClient } from '@/components/ProfileClient';

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="space-y-6">
         <div>
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-muted-foreground font-body">Your journey and account management.</p>
        </div>
        <ProfileClient />
      </div>
    </MainLayout>
  );
}
