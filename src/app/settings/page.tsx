
import { MainLayout } from '@/components/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  return (
    <MainLayout>
        <div className="space-y-6">
             <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground font-body">Customize your Tradecraft Academy experience.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>Manage how you receive notifications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Switch id="email-notifications" />
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                        <Switch id="push-notifications" defaultChecked />
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Tailor the look and feel of the app.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="theme">Theme</Label>
                        <Select>
                            <SelectTrigger id="theme">
                                <SelectValue placeholder="System" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button>Save Preferences</Button>
            </div>
        </div>
    </MainLayout>
  );
}
